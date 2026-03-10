"use client";

import SplitText from "@/components/ui/SplitText";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-24 px-6 bg-foreground/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
        <SplitText
          text="L'engagement partagé"
          className="text-4xl md:text-6xl font-ashigea text-foreground block"
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
        <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
          Pour bâtir un avenir où la dignité et la justice prévalent, nous avons
          besoin de forces vives. Rejoignez notre mouvement de solidarité et
          participez activement à cette transformation durable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/faire-un-don"
            className="bg-primary cursor-pointer rounded-full px-6 py-3 font-semibold text-lg text-white transition-all duration-250 hover:opacity-90"
          >
            Faire un don
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
