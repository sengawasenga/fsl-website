"use client";

import CountUp from "@/components/ui/CountUp";

const Impact = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-background overflow-hidden relative shadow-lg">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl rounded-tl-[100px]" />

        <div className="relative z-10 text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-ashigea text-background">
            L'empreinte de notre engagement
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto font-light">
            Derrière chaque chiffre se trouve une histoire, une action concrète
            et une vie impactée positivement par nos initiatives sur le terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center font-ashigea group-hover:scale-105 transition-transform">
              <span>+</span>
              <CountUp
                from={0}
                to={10000}
                separator=" "
                direction="up"
                duration={1.5}
                className="count-up-text"
              />
            </div>
            <p className="text-background/80 text-lg font-medium tracking-wide">
              Bénéficiaires accompagnés
            </p>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center font-ashigea group-hover:scale-105 transition-transform">
              <CountUp
                from={0}
                to={6}
                direction="up"
                duration={1.5}
                className="count-up-text"
              />
            </div>
            <p className="text-background/80 text-lg font-medium tracking-wide">
              Domaines d'intervention
            </p>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center font-ashigea group-hover:scale-105 transition-transform">
              <span>+</span>
              <CountUp
                from={0}
                to={30}
                direction="up"
                duration={1.5}
                className="count-up-text"
              />
            </div>
            <p className="text-background/80 text-lg font-medium tracking-wide">
              Communautés soutenues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
