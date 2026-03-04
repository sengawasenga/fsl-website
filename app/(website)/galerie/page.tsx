import { Metadata } from "next";
import GalleryHero from "@/components/site/gallery/GalleryHero";
import GalleryGrid from "@/components/site/gallery/GalleryGrid";
import CallToAction from "@/components/site/home/CallToAction";

export const metadata: Metadata = {
  title: "Galerie | Fondation Sylvain Lumbala",
  description:
    "Découvrez nos projets et actions sur le terrain à travers notre galerie photo.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
      <CallToAction />
    </main>
  );
}
