import { Metadata } from "next";
import AboutHero from "@/components/site/about/Hero";
import Foundation from "@/components/site/about/Foundation";
import Founder from "@/components/site/about/Founder";
import Vision from "@/components/site/about/Vision";
import Mission from "@/components/site/about/Mission";
import Values from "@/components/site/about/Values";
import CallToAction from "@/components/site/home/CallToAction";

export const metadata: Metadata = {
  title: "À propos | Fondation Sylvain Lumbala",
  description:
    "Découvrez notre essence, l'histoire de la fondation, notre vision à long terme et les valeurs qui animent notre engagement.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Foundation />
      <Founder />
      <Vision />
      <Mission />
      <Values />
      <CallToAction />
    </main>
  );
}
