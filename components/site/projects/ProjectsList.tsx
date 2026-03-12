"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { CATEGORIES } from "@/data/projects";
import Image from "next/image";
import { getProjects } from "@/lib/actions/projects";

const ProjectsList = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };
    fetch();
  }, []);

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-4/3 bg-foreground/5 rounded-3xl animate-pulse"
              />
            ))
          : filteredProjects.map((project) => (
              <Link
                href={`/nos-projets/${project.slug}`}
                key={project.id}
                className="group"
              >
                <div className="bg-background rounded-3xl border border-foreground/5 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="bg-foreground/5 w-full aspect-4/3 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={
                        project.image_url ||
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                      }
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
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
                      <span>{project.date_string}</span>
                    </div>
                    <h3 className="text-2xl font-ashigea text-foreground mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 font-light text-sm leading-relaxed mb-8 flex-1 line-clamp-2">
                      {project.short_description}
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
