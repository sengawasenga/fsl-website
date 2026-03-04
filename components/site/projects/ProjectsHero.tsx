"use client";

import SplitText from "@/components/ui/SplitText";

const ProjectsHero = () => {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
      <SplitText
        text="Notre action sur le terrain"
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
        Découvrez les initiatives concrètes menées par nos équipes. Chaque
        projet est une étape vers la restauration de la dignité et le
        développement durable de nos communautés.
      </p>
    </section>
  );
};

export default ProjectsHero;
