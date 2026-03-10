"use client";

import { Icon } from "@iconify/react";

const DonationImpact = () => {
  const impacts = [
    {
      icon: "solar:health-bold-duotone",
      title: "Santé et Bien-être",
      description:
        "Votre don permet de financer des soins médicaux vitaux et d'améliorer l'accès aux infrastructures de santé pour les plus vulnérables.",
      amount: "50$",
    },
    {
      icon: "solar:diploma-bold-duotone",
      title: "Éducation Pour Tous",
      description:
        "Contribuez à la scolarisation d'enfants défavorisés en fournissant du matériel scolaire et en soutenant la formation des enseignants.",
      amount: "100$",
    },
    {
      icon: "solar:hand-heart-bold-duotone",
      title: "Action Humanitaire",
      description:
        "Aidez-nous à intervenir rapidement lors de crises en apportant une aide alimentaire d'urgence et des produits de première nécessité.",
      amount: "20$",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-ashigea text-foreground mb-6">
          Pourquoi votre aide est-elle cruciale ?
        </h2>
        <p className="text-foreground/70 text-lg font-light max-w-3xl mx-auto">
          Chaque contribution, quelle que soit sa taille, a un impact direct et
          mesurable sur le terrain. Découvrez ce que nous pouvons accomplir
          grâce à vous.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {impacts.map((impact, index) => (
          <div
            key={index}
            className="bg-foreground/5 rounded-[2rem] p-8 border border-foreground/5 relative overflow-hidden group hover:border-primary/30 transition-colors"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Icon icon={impact.icon} className="text-3xl" />
            </div>
            <h3 className="text-2xl font-ashigea text-foreground mb-4">
              {impact.title}
            </h3>
            <p className="text-foreground/70 font-light leading-relaxed mb-8">
              {impact.description}
            </p>
            <div className="absolute top-8 right-8 bg-background px-4 py-2 rounded-full border border-foreground/10 text-primary font-bold shadow-sm">
              Impact avec {impact.amount}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationImpact;
