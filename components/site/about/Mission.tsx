"use client";

import { Icon } from "@iconify/react";
import SplitText from "@/components/ui/SplitText";

const missionBlocks = [
  {
    icon: "solar:bonfire-bold-duotone",
    title: "Sécurité alimentaire",
    description:
      "Soutenir la production locale et équiper les agriculteurs pour garantir une alimentation saine aux communautés ciblées.",
  },
  {
    icon: "solar:wallet-money-bold-duotone",
    title: "Autonomisation économique",
    description:
      "Favoriser l'entrepreneuriat et financer des micro-projets générateurs de revenus pour assurer l'indépendance.",
  },
  {
    icon: "solar:stethoscope-bold-duotone",
    title: "Santé communautaire",
    description:
      "Multiplier les campagnes de prévention et améliorer l'équipement des centres de santé de proximité.",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Prévention des conflits",
    description:
      "Mettre en place des mécanismes de dialogue et de médiation pour maintenir la stabilité sociale de manière pérenne.",
  },
];

const Mission = () => {
  return (
    <section className="py-24 px-6 bg-primary text-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:w-2/3">
          <SplitText
            text="Notre mission en action"
            className="text-4xl md:text-5xl font-ashigea text-background mb-6 block"
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
          <p className="text-background/80 text-lg font-light leading-relaxed max-w-xl">
            Traduire notre vision en résultats tangibles. Nos missions
            opérationnelles visent à apporter des réponses concrètes et durables
            aux vulnérabilités complexes identifiées sur le terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionBlocks.map((block, idx) => (
            <div
              key={idx}
              className="bg-background/10 backdrop-blur-sm p-8 rounded-[2rem] border border-background/20 flex flex-col sm:flex-row gap-6 hover:bg-background/20 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="bg-background text-primary w-14 h-14 rounded-2xl flex items-center justify-center">
                  <Icon icon={block.icon} className="text-3xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-background">
                  {block.title}
                </h3>
                <p className="text-background/80 font-light leading-relaxed">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
