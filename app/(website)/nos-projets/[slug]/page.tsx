import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailHero from "@/components/site/projects/ProjectDetailHero";
import ProjectContent from "@/components/site/projects/ProjectContent";
import RelatedProjects from "@/components/site/projects/RelatedProjects";
import CallToAction from "@/components/site/home/CallToAction";
import { getProjectBySlug, getRelatedProjects } from "@/lib/actions/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: `${project.title} | Fondation Sylvain Lumbala`,
    description: project.short_description,
    openGraph: {
      title: `${project.title} | Fondation Sylvain Lumbala`,
      description: project.short_description,
      images: [
        {
          url: project.image_url,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjectsData = await getRelatedProjects(project.category, project.id);

  // Map database fields to what components expect
  const mappedProject = {
    ...project,
    image: project.image_url,
    date: project.date_string,
    shortDescription: project.short_description,
    stats: Array.isArray(project.stats) ? project.stats : []
  };

  const mappedRelatedProjects = relatedProjectsData.map(p => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    image: p.image_url,
    category: p.category,
    date: p.date_string,
    shortDescription: p.short_description
  }));

  return (
    <main>
      <ProjectDetailHero
        title={mappedProject.title}
        category={mappedProject.category}
        date={mappedProject.date}
        location={mappedProject.location}
        image={mappedProject.image}
      />

      <ProjectContent
        content={mappedProject.content}
        image={mappedProject.image}
        title={mappedProject.title}
        stats={mappedProject.stats}
      />

      <RelatedProjects projects={mappedRelatedProjects} />

      <CallToAction />
    </main>
  );
}
