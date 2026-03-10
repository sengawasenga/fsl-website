"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

interface ProjectDetailHeroProps {
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
}

const ProjectDetailHero = ({
  title,
  category,
  date,
  location,
  image,
}: ProjectDetailHeroProps) => {
  return (
    <section className="pt-40 pb-16 px-6 max-w-4xl mx-auto">
      <Link
        href="/nos-projets"
        className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors font-medium text-sm mb-10 w-fit"
      >
        <Icon icon="solar:arrow-left-line-duotone" className="text-lg" />
        <span>Retour aux projets</span>
      </Link>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="bg-primary/10 text-primary text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
          {category}
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-ashigea text-foreground mb-10 leading-tight">
        {title}
      </h1>

      <div className="flex flex-wrap items-center gap-8 border-y border-foreground/10 py-6">
        <div className="flex items-center gap-3 text-foreground/70">
          <div className="bg-foreground/5 p-2 rounded-full">
            <Icon
              icon="solar:calendar-bold-duotone"
              className="text-primary text-xl"
            />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider font-medium opacity-70">
              Période
            </span>
            <span className="font-light">{date}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-foreground/70">
          <div className="bg-foreground/5 p-2 rounded-full">
            <Icon
              icon="solar:map-point-bold-duotone"
              className="text-primary text-xl"
            />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider font-medium opacity-70">
              Lieu
            </span>
            <span className="font-light">{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
