"use client";

import SplitText from "@/components/ui/SplitText";

const ContactHero = () => {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
      <SplitText
        text="Contactez-nous"
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
      <p className="text-foreground/70 text-xl font-light leading-relaxed max-w-2xl mx-auto">
        Une question, un partenariat, ou simplement l'envie de vous engager à
        nos côtés ? Nous sommes à votre écoute pour bâtir ensemble des solutions
        durables.
      </p>
    </section>
  );
};

export default ContactHero;
