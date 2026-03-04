"use client";

import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-primary text-background/80 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-3xl font-ashigea text-background">
            Fondation Sylvain Lumbala
          </h3>
          <p className="text-background/60 leading-relaxed font-light max-w-sm">
            Une institution dédiée à la protection de la dignité humaine, à
            l'éducation inclusive et au développement durable des communautés
            vulnérables en RDC.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-background uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-4 font-light">
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors inline-block w-fit"
              >
                Notre essence
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors inline-block w-fit"
              >
                Nos piliers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors inline-block w-fit"
              >
                Nos projets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors inline-block w-fit"
              >
                Impact
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-background uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-4 text-background/60 font-light">
            <li>contact@fondation-sl.org</li>
            <li>+243 000 000 000</li>
            <li>Kinshasa, RDC</li>
          </ul>
          <div className="flex items-center gap-5 pt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-background/5 p-3 rounded-full hover:bg-primary hover:text-background transition-all"
            >
              <Icon icon="solar:facebook-bold-duotone" className="text-xl" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-background/5 p-3 rounded-full hover:bg-primary hover:text-background transition-all"
            >
              <Icon icon="solar:twitter-bold-duotone" className="text-xl" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-background/5 p-3 rounded-full hover:bg-primary hover:text-background transition-all"
            >
              <Icon icon="solar:instagram-bold-duotone" className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-sm text-background/40 font-light">
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
