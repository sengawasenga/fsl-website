"use client";

import SplitText from "@/components/ui/SplitText";

const Identity = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <SplitText
            text="Notre essence"
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
          <div className="text-foreground/80 space-y-6 text-lg font-light leading-relaxed">
            <p>
              La Fondation Sylvain Lumbala incarne un développement profondément
              humain, plaçant la dignité de chaque individu au cœur de son
              action. Nous croyons qu'un véritable impact durable naît de
              l'écoute, de la proximité et de l'adaptation aux réalités locales.
            </p>
            <p>
              Notre approche est caractérisée par une stricte indépendance et
              une neutralité absolue. Cette posture apolitique nous permet de
              mener des actions pérennes, construites avec et pour les
              communautés, afin qu'elles deviennent elles-mêmes actrices de leur
              résilience.
            </p>
          </div>
        </div>
        <div className="bg-foreground/5 rounded-[2rem] w-full h-[450px] shadow-inner relative overflow-hidden flex items-center justify-center border border-foreground/10">
          <span className="text-foreground/30 font-medium tracking-widest uppercase">
            Espace Image
          </span>
        </div>
      </div>
    </section>
  );
};

export default Identity;
