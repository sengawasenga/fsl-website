"use client";

import SplitText from "@/components/ui/SplitText";

const Founder = () => {
  return (
    <section className="py-24 px-6 bg-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="bg-background rounded-[2rem] w-full aspect-[4/5] shadow-sm flex items-center justify-center border border-foreground/10 relative z-10">
              <span className="text-foreground/30 font-medium tracking-widest uppercase text-center px-4">
                Portrait
                <br />
                Sylvain Lumbala Mupenda
              </span>
            </div>
            {/* Subtle accent blob */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-10 blur-2xl z-0"></div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Gouvernance
            </span>
            <SplitText
              text="Une vision portée par l'engagement"
              className="text-4xl md:text-5xl font-ashigea text-foreground mb-8 block"
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
            <div className="space-y-6 text-foreground/80 text-lg font-light leading-relaxed">
              <p>
                Initiée par{" "}
                <strong className="font-medium text-foreground">
                  Sylvain Lumbala Mupenda
                </strong>
                , la fondation est le fruit d'un engagement patriotique
                profondément enraciné. Persuadé que seul un développement humain
                et solidaire peut insuffler une dynamique de transformation
                pérenne, il a posé les bases d'une institution dédiée à
                l'intérêt général.
              </p>
              <p>
                Sa détermination s'articule autour de principes fondateurs
                intraitables : la justice sociale, la restauration de la dignité
                humaine, et une implication humanitaire pensée sur le long
                terme. C'est cette même vision qui continue de guider chaque
                initiative entreprise aujourd'hui.
              </p>
            </div>

            <div className="mt-10 p-8 bg-background rounded-2xl border-l-4 border-primary shadow-sm relative">
              <span className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">
                "
              </span>
              <p className="text-lg font-ashigea text-foreground/90 italic leading-relaxed relative z-10 pt-2">
                La véritable mesure du progrès réside dans notre capacité à
                préserver la dignité de chacun et à édifier ensemble un socle de
                résilience durable pour nos communautés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
