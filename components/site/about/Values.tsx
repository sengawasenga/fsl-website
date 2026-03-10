"use client";

import { Icon } from "@iconify/react";
import SplitText from "@/components/ui/SplitText";

const values = [
  {
    icon: "solar:hand-heart-bold-duotone",
    title: "Solidarité",
    description:
      "Une entraide inconditionnelle, fondant toute démarche de soutien sur une empathie sincère et active.",
  },
  {
    icon: "solar:eye-bold-duotone",
    title: "Transparence",
    description:
      "Une gestion claire et éthique, garantissant la confiance durable de nos bénéficiaires et de nos partenaires.",
  },
  {
    icon: "solar:shield-user-bold-duotone",
    title: "Responsabilité",
    description:
      "Un engagement rigoureux à délivrer des résultats pérennes et à rendre compte de l'impact de nos actions.",
  },
  {
    icon: "solar:users-group-two-rounded-bold-duotone",
    title: "Engagement communautaire",
    description:
      "Une action conduite avec les populations locales, afin de les rendre pleinement actrices de leur devenir.",
  },
];

const Values = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SplitText
          text="Nos valeurs fondamentales"
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((val, idx) => (
          <div
            key={idx}
            className="bg-foreground/5 p-8 rounded-[2rem] border border-foreground/5 text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Icon icon={val.icon} className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground tracking-tight">
              {val.title}
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed font-light">
              {val.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
