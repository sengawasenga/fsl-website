import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectDetailHero from "@/components/site/projects/ProjectDetailHero";
import ProjectContent from "@/components/site/projects/ProjectContent";
import RelatedProjects from "@/components/site/projects/RelatedProjects";
import CallToAction from "@/components/site/home/CallToAction";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: `${project.title} | Fondation Sylvain Lumbala`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Fondation Sylvain Lumbala`,
      description: project.shortDescription,
      images: [
        {
          url: project.image,
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
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get up to 3 related projects in the same category, excluding the current one
  const relatedProjects = PROJECTS_DATA.filter(
    (p) => p.category === project.category && p.id !== project.id,
  ).slice(0, 3);

  // If not enough in the same category, fill with generic other projects
  if (relatedProjects.length < 3) {
    const additional = PROJECTS_DATA.filter(
      (p) => p.category !== project.category && p.id !== project.id,
    );
    relatedProjects.push(...additional.slice(0, 3 - relatedProjects.length));
  }

  return (
    <main>
      <ProjectDetailHero
        title={project.title}
        category={project.category}
        date={project.date}
        location={project.location}
        image={project.image}
      />

      <ProjectContent
        content={project.content}
        image={project.image}
        title={project.title}
        stats={project.stats}
      />

      <RelatedProjects projects={relatedProjects} />

      <CallToAction />
    </main>
  );
}
