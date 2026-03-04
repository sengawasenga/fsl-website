"use client";

import { Icon } from "@iconify/react";

interface ProjectContentProps {
  content: string;
  stats: { label: string; value: string }[];
}

const ProjectContent = ({ content, stats }: ProjectContentProps) => {
  return (
    <section className="pb-24 px-6 max-w-4xl mx-auto">
      {/* Main image placeholder */}
      <div className="bg-foreground/5 rounded-[2rem] w-full aspect-[21/9] shadow-sm flex items-center justify-center border border-foreground/10 mb-16 overflow-hidden">
        <span className="text-foreground/30 font-medium tracking-widest uppercase text-sm">
          Image Principale du Projet
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Text Content */}
        <div className="md:col-span-8 space-y-8">
          <h2 className="text-3xl font-ashigea text-primary mb-6">
            Le contexte et l'impact
          </h2>

          <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg whitespace-pre-line">
            {content}
          </div>

          <div className="mt-12 p-8 bg-foreground/5 rounded-2xl border-l-4 border-secondary flex gap-6 items-start">
            <Icon
              icon="solar:info-circle-bold-duotone"
              className="text-4xl text-secondary flex-shrink-0"
            />
            <p className="text-foreground/80 italic font-light">
              L'intégralité des fonds alloués à ce projet sont gérés directement
              sur place, avec un rapport de transparence trimestriel disponible
              sur demande.
            </p>
          </div>
        </div>

        {/* Stats sidebar */}
        <div className="md:col-span-4">
          <div className="bg-primary text-background rounded-3xl p-8 sticky top-32 shadow-lg">
            <h3 className="text-xl font-medium mb-8 text-background/90 tracking-wide uppercase text-sm">
              Résultats clés
            </h3>
            <ul className="space-y-8">
              {stats.map((stat, idx) => (
                <li
                  key={idx}
                  className="border-b border-background/20 pb-6 last:border-0"
                >
                  <span className="block text-4xl font-ashigea text-secondary mb-2">
                    {stat.value}
                  </span>
                  <span className="block text-background/70 font-light text-sm uppercase tracking-wider">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
