"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import SplitText from "@/components/ui/SplitText";
import Image from "next/image";

interface RelatedProject {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  date: string;
  shortDescription: string;
}

interface RelatedProjectsProps {
  projects: RelatedProject[];
}

const RelatedProjects = ({ projects }: RelatedProjectsProps) => {
  if (projects.length === 0) return null;

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SplitText
            text="Dans la même mission"
            className="text-3xl md:text-5xl font-ashigea text-foreground mb-6 block"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            tag="h2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              href={`/nos-projets/${project.slug}`}
              key={project.id}
              className="group"
            >
              <div className="bg-background rounded-3xl border border-foreground/5 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                <div className="bg-foreground/5 w-full aspect-video flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-ashigea text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 font-light text-sm line-clamp-3 mb-6 flex-1">
                    {project.shortDescription}
                  </p>

                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Voir plus</span>
                    <Icon
                      icon="solar:arrow-right-line-duotone"
                      className="text-xl"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
