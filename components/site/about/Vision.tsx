"use client";

import { Icon } from "@iconify/react";
import SplitText from "@/components/ui/SplitText";

const visionPillars = [
  {
    icon: "solar:leaf-bold-duotone",
    title: "Société sans faim",
    description:
      "Éradiquer la précarité alimentaire par le soutien à l'agriculture locale et la sécurité nutritionnelle.",
  },
  {
    icon: "solar:diploma-verified-bold-duotone",
    title: "Éducation inclusive",
    description:
      "Garantir un accès équitable au savoir, socle indispensable de l'émancipation intellectuelle et sociale.",
  },
  {
    icon: "solar:heart-pulse-bold-duotone",
    title: "Santé communautaire",
    description:
      "Améliorer les infrastructures de soins et promouvoir un accès universel à la santé de qualité.",
  },
  {
    icon: "solar:earth-bold-duotone",
    title: "Environnement durable",
    description:
      "Protéger notre écosystème en accompagnant des pratiques respectueuses de l'environnement.",
  },
  {
    icon: "solar:handshake-bold-duotone",
    title: "Paix & cohésion",
    description:
      "Bâtir des ponts de solidarité durable pour prévenir les conflits et consolider le vivre-ensemble.",
  },
];

const Vision = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SplitText
          text="Notre vision à long terme"
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
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Nous aspirons à une société où la vulnérabilité laisse place à la
          résilience, structurée autour d'ambitions fondamentales pour l'avenir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center [&>*:last-child]:md:col-span-2 [&>*:last-child]:lg:col-span-1">
        {visionPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-foreground/5 p-8 rounded-[2rem] border border-foreground/5 hover:bg-background hover:shadow-md transition-all duration-300 group"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Icon
                icon={pillar.icon}
                className="text-3xl text-primary group-hover:text-background transition-colors"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground tracking-tight">
              {pillar.title}
            </h3>
            <p className="text-foreground/70 leading-relaxed font-light">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
