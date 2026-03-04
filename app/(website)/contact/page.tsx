import { Metadata } from "next";
import ContactHero from "@/components/site/contact/ContactHero";
import ContactContent from "@/components/site/contact/ContactContent";
import ContactMap from "@/components/site/contact/ContactMap";

export const metadata: Metadata = {
  title: "Contact | Fondation Sylvain Lumbala",
  description:
    "Contactez-nous pour toute demande d'information, partenariat ou projet commun.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactContent />
      <ContactMap />
    </main>
  );
}
