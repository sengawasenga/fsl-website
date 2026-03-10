"use client";

import { Icon } from "@iconify/react";
import fslLogo from "@/public/img/fsl-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-background/80 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        <div className="md:col-span-2 space-y-3">
          <Image
            src={fslLogo}
            className="h-[120px] w-auto"
            alt="Logo Fondation Sylvain Lumbala"
          />
          <h3 className="text-3xl font-ashigea text-background">
            Fondation Sylvain Lumbala
          </h3>
          <p className="text-background/60 leading-relaxed font-light max-w-sm text-sm">
            Une institution dédiée à la protection de la dignité humaine, à
            l'éducation inclusive et au développement durable des communautés
            vulnérables en RDC.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-background uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-3 font-light">
            <li>
              <a
                href="/"
                className="hover:text-secondary transition-colors inline-block w-fit"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/a-propos"
                className="hover:text-secondary transition-colors inline-block w-fit"
              >
                A propos
              </a>
            </li>
            <li>
              <a
                href="/nos-projets"
                className="hover:text-secondary transition-colors inline-block w-fit"
              >
                Nos projets
              </a>
            </li>
            <li>
              <a
                href="/galerie"
                className="hover:text-secondary transition-colors inline-block w-fit"
              >
                Notre galerie
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-secondary transition-colors inline-block w-fit"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-background uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-4 text-background/60 font-light">
            <li>contact@fondationfsl.org</li>
            <li>+243812801838 ; +243811702559; +243852552920</li>
            <li>
              Avenue Sankuru N°30 bis, Commune de Kintambo, Ville-Province de
              Kinshasa, RD Congo.
            </li>
          </ul>
          <div className="flex items-center gap-5 pt-4">
            <a
              href="https://www.instagram.com/fondationsylvainlumbalafsl?igsh=Y29jODJ0dnZvZjVk&utm_source=qr"
              aria-label="Instagram"
              className="bg-background/5 p-3 rounded-full hover:bg-secondary hover:text-foreground transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:instagram" className="text-xl" />
            </a>
            <a
              href="https://youtube.com/@fondationsylvainlumbala?si=vhRqZv8_AaaprFRv"
              aria-label="Youtube"
              className="bg-background/5 p-3 rounded-full hover:bg-secondary hover:text-foreground transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:youtube" className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-2 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-sm text-background/40 font-light">
        <p>
          &copy; {new Date().getFullYear()} Fondation Sylvain Lumbala. Tous
          droits réservés.
        </p>
        <div className="mt-4 md:mt-0 flex gap-6">
          <a href="#" className="hover:text-background transition-colors">
            Mentions légales
          </a>
          <a href="#" className="hover:text-background transition-colors">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
