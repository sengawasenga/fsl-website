"use client";

import FuzzyText from "@/components/ui/FuzzyText";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 px-4">
      <FuzzyText
        fontSize="8rem"
        fontWeight="900"
        fontFamily="inherit"
        color="#2e4da5"
        baseIntensity={0.1}
        hoverIntensity={0.3}
        enableHover={true}
        className="font-ashigea"
      >
        404
      </FuzzyText>
      <p>La page que vous cherchez n'existe pas, ou a été déplacée.</p>
      <Link href="/">
        <Button className="bg-primary">Revenir à la page d'accueil</Button>
      </Link>
    </div>
  );
}
