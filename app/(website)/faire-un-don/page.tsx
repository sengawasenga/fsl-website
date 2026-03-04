import { Metadata } from "next";
import DonationHero from "@/components/site/donation/DonationHero";
import DonationImpact from "@/components/site/donation/DonationImpact";
import DonationForm from "@/components/site/donation/DonationForm";

export const metadata: Metadata = {
  title: "Faire un don | Fondation Sylvain Lumbala",
  description:
    "Soutenez nos actions. Votre générosité permet de transformer des vies sur le terrain.",
};

export default function DonationPage() {
  return (
    <main>
      <DonationHero />
      <DonationImpact />
      <DonationForm />
    </main>
  );
}
