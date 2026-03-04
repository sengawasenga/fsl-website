"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { CATEGORIES, PROJECTS_DATA } from "@/data/projects";

const ProjectsList = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeCategory);

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto mb-24">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-primary text-background border-primary shadow-sm"
                : "bg-transparent text-foreground/70 border-foreground/10 hover:border-foreground/30 hover:bg-foreground/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            href={`/nos-projets/${project.slug}`}
            key={project.id}
            className="group"
          >
            <div className="bg-background rounded-3xl border border-foreground/5 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col">
              {/* Image Placeholder */}
              <div className="bg-foreground/5 w-full aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                <span className="text-foreground/30 font-medium tracking-widest uppercase text-xs z-10">
                  Image Projet
                </span>
                <div className="absolute inset-0 bg-foreground/5 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-foreground/50 text-xs uppercase tracking-wider mb-4 font-medium">
                  <Icon
                    icon="solar:calendar-bold-duotone"
                    className="text-primary text-sm"
                  />
                  <span>{project.date}</span>
                </div>
                <h3 className="text-2xl font-ashigea text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-foreground/70 font-light text-sm leading-relaxed mb-8 flex-1">
                  {project.shortDescription}
                </p>

                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Découvrir le projet</span>
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

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-foreground/50 font-light">
          <p>Aucun projet ne correspond à cette catégorie pour le moment.</p>
        </div>
      )}
    </section>
  );
};

export default ProjectsList;
