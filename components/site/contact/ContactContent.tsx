"use client";

import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

const ContactContent = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
        {/* Contact Infos */}
        <div className="md:col-span-5 space-y-12">
          <div>
            <h2 className="text-3xl font-ashigea text-foreground mb-6">
              Nos Coordonnées
            </h2>
            <p className="text-foreground/70 font-light leading-relaxed mb-10">
              N'hésitez pas à nous joindre directement par téléphone, email, ou
              en nous rendant visite dans nos bureaux.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-background transition-colors text-primary flex-shrink-0">
                <Icon
                  icon="solar:map-point-bold-duotone"
                  className="text-2xl"
                />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-foreground/50 mb-1">
                  Adresse
                </h3>
                <p className="text-foreground/90 font-medium leading-relaxed">
                  Avenue Sankuru n°30 bis,
                  <br />
                  Commune de Kintambo
                  <br />
                  Ville-Province de Kinshasa, RDC
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-background transition-colors text-primary flex-shrink-0">
                <Icon
                  icon="solar:phone-calling-bold-duotone"
                  className="text-2xl"
                />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-foreground/50 mb-1">
                  Téléphone
                </h3>
                <p className="text-foreground/90 font-medium">
                  +243 000 000 000
                </p>
                <p className="text-foreground/90 font-medium">
                  +243 000 000 001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-background transition-colors text-primary flex-shrink-0">
                <Icon icon="solar:letter-bold-duotone" className="text-2xl" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-foreground/50 mb-1">
                  Email
                </h3>
                <p className="text-foreground/90 font-medium">
                  contact@fondation-sl.org
                </p>
                <p className="text-foreground/90 font-medium">
                  partenariat@fondation-sl.org
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-foreground/50 mb-4">
              Réseaux Sociaux
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="bg-foreground/5 p-4 rounded-full text-foreground/70 hover:bg-primary hover:text-background transition-colors"
              >
                <Icon icon="solar:facebook-bold-duotone" className="text-2xl" />
              </a>
              <a
                href="#"
                className="bg-foreground/5 p-4 rounded-full text-foreground/70 hover:bg-primary hover:text-background transition-colors"
              >
                <Icon icon="solar:twitter-bold-duotone" className="text-2xl" />
              </a>
              <a
                href="#"
                className="bg-foreground/5 p-4 rounded-full text-foreground/70 hover:bg-primary hover:text-background transition-colors"
              >
                <Icon
                  icon="solar:instagram-line-duotone"
                  className="text-2xl"
                />
              </a>
              <a
                href="#"
                className="bg-foreground/5 p-4 rounded-full text-foreground/70 hover:bg-primary hover:text-background transition-colors"
              >
                <Icon icon="solar:linkedin-bold-duotone" className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <div className="bg-foreground/5 rounded-[2rem] p-8 md:p-12 border border-foreground/5">
            <h2 className="text-2xl font-ashigea text-foreground mb-8">
              Envoyez-nous un message
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-foreground/70 px-2"
                  >
                    Prénom <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-background rounded-2xl px-6 py-4 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-foreground/70 px-2"
                  >
                    Nom <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-background rounded-2xl px-6 py-4 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground/70 px-2"
                >
                  Adresse Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-background rounded-2xl px-6 py-4 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground"
                  placeholder="exemple@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground/70 px-2"
                >
                  Sujet <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  className="w-full bg-background rounded-2xl px-6 py-4 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground appearance-none"
                  required
                >
                  <option value="" disabled selected>
                    Sélectionnez un sujet
                  </option>
                  <option value="information">Demande d'information</option>
                  <option value="partnership">
                    Proposition de partenariat
                  </option>
                  <option value="press">Presse & Médias</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/70 px-2"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-background rounded-2xl px-6 py-4 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground resize-none"
                  placeholder="Décrivez votre demande en quelques mots..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="bg-primary text-background w-full h-14 rounded-2xl text-lg mt-4 font-medium shadow-lg shadow-primary/20"
              >
                Envoyer le message
              </Button>
              <p className="text-xs text-center text-foreground/50 font-light mt-4">
                Vos données sont traitées de manière confidentielle.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
