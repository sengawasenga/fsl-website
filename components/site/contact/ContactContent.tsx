"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import { sendMessage } from "@/lib/actions/messages";

const ContactContent = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      sender: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      content: formData.get("message") as string,
    };

    try {
      await sendMessage(data);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError("Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setLoading(false);
    }
  };
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
              <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-background transition-colors text-primary shrink-0">
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
              <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-background transition-colors text-primary shrink-0">
                <Icon
                  icon="solar:phone-calling-bold-duotone"
                  className="text-2xl"
                />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-foreground/50 mb-1">
                  Téléphone
                </h3>
                <p className="text-foreground/90 font-medium">+243812801838</p>
                <p className="text-foreground/90 font-medium">+243811702559</p>
                <p className="text-foreground/90 font-medium">+243852552920</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-background transition-colors text-primary shrink-0">
                <Icon icon="solar:letter-bold-duotone" className="text-2xl" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-foreground/50 mb-1">
                  Email
                </h3>
                <p className="text-foreground/90 font-medium">
                  contact@fondationfsl.org
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-foreground/50 mb-4">
              Réseaux Sociaux
            </h3>
            <div className="flex items-center gap-5 pt-4">
              <a
                href="https://www.instagram.com/fondationsylvainlumbalafsl?igsh=Y29jODJ0dnZvZjVk&utm_source=qr"
                aria-label="Instagram"
                className="bg-foreground/5 p-3 rounded-full hover:bg-primary hover:text-background transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:instagram" className="text-xl" />
              </a>
              <a
                href="https://youtube.com/@fondationsylvainlumbala?si=vhRqZv8_AaaprFRv"
                aria-label="Youtube"
                className="bg-foreground/5 p-3 rounded-full hover:bg-primary hover:text-background transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:youtube" className="text-xl" />
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {success && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-2xl text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
                  <Icon
                    icon="solar:check-circle-bold-duotone"
                    className="text-xl shrink-0"
                  />
                  Votre message a été envoyé avec succès ! Nous vous répondrons
                  bientôt.
                </div>
              )}
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
                  <Icon
                    icon="solar:danger-bold-duotone"
                    className="text-xl shrink-0"
                  />
                  {error}
                </div>
              )}
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
                    name="firstName"
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
                    name="lastName"
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
                  name="email"
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
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-background rounded-2xl px-6 py-4 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled selected>
                      Sélectionnez un sujet
                    </option>
                    <option value="Demande d'information">
                      Demande d'information
                    </option>
                    <option value="Proposition de partenariat">
                      Proposition de partenariat
                    </option>
                    <option value="Presse & Médias">Presse & Médias</option>
                    <option value="Autre">Autre</option>
                  </select>
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none"
                  />
                </div>
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
                  name="message"
                  rows={5}
                  className="w-full bg-background rounded-2xl px-6 py-4 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground resize-none"
                  placeholder="Décrivez votre demande en quelques mots..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                isDisabled={loading}
                className="bg-primary text-background w-full h-14 rounded-2xl text-lg mt-4 font-medium shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Icon
                      icon="solar:refresh-bold-duotone"
                      className="text-2xl animate-spin"
                    />
                    Envoi en cours...
                  </div>
                ) : (
                  "Envoyer le message"
                )}
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
