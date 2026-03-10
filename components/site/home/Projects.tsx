"use client";

import SplitText from "@/components/ui/SplitText";
import img1 from "@/public/img/project-1.jpg";
import img2 from "@/public/img/project-2.jpg";
import img3 from "@/public/img/project-3.jpg";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    imgSrc: img1,
    title: "Soutien à l'éducation inclusive",
    description:
      "Mise en place d'infrastructures scolaires adaptées pour garantir l'accès à l'éducation des enfants en milieu rural marginalisé. Un pont vers un avenir meilleur.",
  },
  {
    imgSrc: img2,
    title: "Accompagnement de l'entrepreneuriat",
    description:
      "Programmes de formation et de micro-financement visant à consolider l'autonomie financière des femmes chefs de famille, véritables piliers de la communauté.",
  },
  {
    imgSrc: img3,
    title: "Accès à l'eau potable",
    description:
      "Construction de puits et de systèmes de purification d'eau, prévenant les maladies hydriques et allégeant le quotidien de centaines de familles rurales.",
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center md:text-left">
        <SplitText
          text="L'action sur le terrain"
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
        <p className="text-foreground/70 text-lg max-w-2xl font-light leading-relaxed mb-6">
          Découvrez une sélection de nos initiatives phares qui matérialisent
          notre engagement quotidien aux côtés des communautés vulnérables.
        </p>
        <Link
          href={"/nos-projets"}
          className="bg-primary cursor-pointer rounded-full px-6 py-3 font-medium text-lg text-white transition-all duration-250 hover:opacity-90"
        >
          Voir tous nos projets
        </Link>
      </div>

      <div className="space-y-24">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-full md:w-1/2">
              <div className="bg-foreground/5 rounded-[2rem] w-full h-[400px] shadow-sm border border-foreground/5 flex items-center justify-center overflow-hidden">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6 px-4 md:px-8">
              <h3 className="text-3xl font-ashigea text-foreground">
                {project.title}
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
