"use client";

import Image from "next/image";
import { motion } from "motion/react";

const PARTNERS = [
  { name: "Partner 1", logo: "/img/partner-1.png" },
  { name: "Partner 2", logo: "/img/partner-2.png" },
  { name: "Partner 3", logo: "/img/partner-3.png" },
];

const Partners = () => {
  // Multiply partners to fill the space
  const marqueeItems = [
    ...PARTNERS,
    ...PARTNERS,
    ...PARTNERS,
    ...PARTNERS,
    ...PARTNERS,
    ...PARTNERS,
  ];

  return (
    <section className="py-16 bg-background border-y border-foreground/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h3 className="text-center text-sm font-semibold tracking-[0.2em] text-foreground/30 uppercase">
          En partenariat avec
        </h3>
      </div>

      <div className="group relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex whitespace-nowrap min-w-full"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* First set */}
          {marqueeItems.map((partner, idx) => (
            <div
              key={`set1-${idx}`}
              className="flex items-center justify-center px-12 md:px-20 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500"
            >
              <div className="relative h-14 w-40">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {marqueeItems.map((partner, idx) => (
            <div
              key={`set2-${idx}`}
              className="flex items-center justify-center px-12 md:px-20 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500"
            >
              <div className="relative h-14 w-40">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
