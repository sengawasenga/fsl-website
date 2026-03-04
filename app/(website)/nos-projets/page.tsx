import { Metadata } from "next";
import ProjectsHero from "@/components/site/projects/ProjectsHero";
import ProjectsList from "@/components/site/projects/ProjectsList";
import CallToAction from "@/components/site/home/CallToAction";

export const metadata: Metadata = {
  title: "Nos Projets | Fondation Sylvain Lumbala",
  description:
    "Découvrez l'ensemble des projets portés par la fondation sur le terrain, en faveur de l'éducation, la santé, et l'autonomisation.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsList />
      <CallToAction />
    </main>
  );
}
