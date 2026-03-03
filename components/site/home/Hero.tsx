"use client";

import Image from "next/image";
import heroBg from "@/public/img/hero-bg.jpg";
import { Button } from "@heroui/react";
import CircularText from "@/components/ui/CircularText";
import ShinyText from "@/components/ui/ShinyText";
import SplitText from "@/components/ui/SplitText";
import RotatingText from "@/components/ui/RotatingText";

const HomeHero = () => {
  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="absolute inset-0 z-1">
        {/* <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="object-cover w-full h-full object-center"
        /> */}
        <video
          src="/img/hero-vid.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-center"
        ></video>
      </div>
      <div className="absolute inset-0 z-2 bg-foreground/80"></div>
      <div className="absolute left-[15%] top-1/3 -translate-y-1/2 hidden md:block z-3">
        <CircularText
          text="* Servir * Protéger * Construire "
          onHover="slowDown"
          spinDuration={20}
          className="bg-primary uppercase"
        />
      </div>
      <div className="relative z-10 max-w-4xl px-6 text-background text-center flex flex-col gap-10">
        <div>
          <ShinyText
            text={"Fondation Sylvain Lukala"}
            speed={1.5}
            delay={1.5}
            color="#009FE3"
            className="text-primary text-lg font-medium mb-4"
            shineColor="#DDE7EB"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <h1 className="text-7xl font-ashigea flex flex-wrap items-center justify-center gap-2">
            <span>Nous agissons pour </span>
            <RotatingText
              texts={[
                "la Dignité",
                "la Justice",
                "la Solidarité",
                "l'Education",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-background overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-fit inline-flex"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
        </div>
        <SplitText
          text="Une fondation engagée à transformer durablement les conditions de vie
          des communautés vulnérables en République Démocratique du Congo."
          className="text-lg md:text-xl"
          delay={50}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          tag="p"
        />
        <div className="flex items-center flex-wrap gap-4 justify-center">
          <Button className={"bg-primary h-12"} size="lg">
            Voir nos actions
          </Button>
          <Button className={"bg-secondary text-foreground h-12"} size="lg">
            Faire un don
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
