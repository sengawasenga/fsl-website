"use client";

import SplitText from "@/components/ui/SplitText";

const AboutHero = () => {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
      <SplitText
        text="L'humain au cœur de notre engagement"
        className="text-5xl md:text-7xl font-ashigea text-foreground mb-8 block"
        delay={50}
        duration={0.6}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-50px"
        tag="h1"
      />
      <p className="text-foreground/70 text-xl font-light leading-relaxed max-w-3xl mx-auto">
        Nous œuvrons pour un développement centré sur l'humain, où chaque action
        est pensée pour restaurer la dignité et générer un impact durable au
        sein des communautés les plus vulnérables.
      </p>
    </section>
  );
};

export default AboutHero;
