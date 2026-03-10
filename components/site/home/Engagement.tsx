"use client";

import { Icon } from "@iconify/react";
import SplitText from "@/components/ui/SplitText";

const pillars = [
  {
    icon: "solar:hand-heart-bold-duotone",
    title: "Dignité & conditions de vie",
    description:
      "Améliorer les conditions d'existence par la protection des droits fondamentaux et l'accès aux services de base.",
  },
  {
    icon: "solar:leaf-bold-duotone",
    title: "Autonomie & résilience",
    description:
      "Accompagner les parcours d'autonomisation pour renforcer les capacités durables des populations vulnérables.",
  },
  {
    icon: "solar:users-group-two-rounded-bold-duotone",
    title: "Paix & cohésion sociale",
    description:
      "Tisser des liens de solidarité et promouvoir le vivre-ensemble au sein des communautés fragilisées.",
  },
];

const Engagement = () => {
  return (
    <section className="py-24 px-6 bg-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SplitText
            text="Nos piliers d'impact"
            className="text-4xl md:text-5xl font-ashigea text-primary mb-6 block"
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
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Nos interventions sont structurées autour d'axes stratégiques
            majeurs, répondant aux défis multidimensionnels de notre société.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-background p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300 border border-foreground/5 group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Icon icon={pillar.icon} className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
