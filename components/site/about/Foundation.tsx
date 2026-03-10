"use client";

import SplitText from "@/components/ui/SplitText";
import Image from "next/image";
import img1 from "@/public/img/members/img-12.jpg";

const Foundation = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1 bg-foreground/5 rounded-[2rem] w-full h-[500px] shadow-sm relative overflow-hidden flex items-center justify-center border border-foreground/10">
          <Image
            src={img1}
            alt="Le fondement de la fondation sylvain lumbala"
            className="object-cover w-full h-full object-center"
          />
        </div>
        <div className="order-1 md:order-2">
          <SplitText
            text="Notre fondement"
            className="text-4xl md:text-5xl font-ashigea text-primary mb-8 block"
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
              Créée en 2021 d'une impulsion visionnaire, la Fondation Sylvain
              Lumbala est née d'un constat profond : la nécessité d'une action
              de proximité véritablement ancrée dans les réalités locales pour
              répondre aux défis multidimensionnels auxquels font face nos
              communautés.
            </p>
            <p>
              Notre approche se distingue par son positionnement strictement
              indépendant et apolitique. Cette neutralité fondamentale nous
              permet de bâtir un réel développement communautaire centré sur
              l'individu, en plaçant systématiquement les besoins réels des
              populations au-dessus de toute autre considération.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
