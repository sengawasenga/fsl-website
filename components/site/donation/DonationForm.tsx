"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

const DonationForm = () => {
  const [frequency, setFrequency] = useState<"unique" | "monthly">("unique");
  const [amount, setAmount] = useState<number | string>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<"mobile" | "card" | null>(
    null,
  );
  const [operator, setOperator] = useState<string>("");

  const presetAmounts = [20, 50, 100, 500];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    setAmount("custom");
  };

  const currentAmount = amount === "custom" ? customAmount : amount;

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="bg-background rounded-[2.5rem] p-8 md:p-12 border shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] border-foreground/10">
        {/* Amount Selection */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Choisissez un montant
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => {
                  setAmount(preset);
                  setCustomAmount("");
                }}
                className={`py-4 rounded-2xl font-bold text-lg transition-all border ${
                  amount === preset
                    ? "bg-primary border-primary text-background shadow-md shadow-primary/20 scale-[1.02]"
                    : "bg-background border-foreground/10 text-foreground/70 hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {preset} $
              </button>
            ))}
            <div className="col-span-2 md:col-span-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">
                $
              </span>
              <input
                type="number"
                placeholder="Autre"
                value={customAmount}
                onChange={handleCustomAmountChange}
                onClick={() => setAmount("custom")}
                className={`w-full h-full py-4 pl-8 pr-4 rounded-2xl font-bold text-lg bg-background border transition-all outline-none ${
                  amount === "custom"
                    ? "border-primary text-foreground shadow-[0_0_0_2px_--theme(--color-primary/20)]"
                    : "border-foreground/10 text-foreground/70 focus:border-foreground/30"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-foreground/5 mb-12"></div>

        {/* Personal Details */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Vos coordonnées
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 px-2">
                Prénom <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 px-2">
                Nom <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70 px-2">
              Adresse Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground"
              placeholder="exemple@email.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70 px-2">
              Message de soutien (Optionnel)
            </label>
            <textarea
              rows={3}
              className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground resize-none"
              placeholder="Un petit mot pour notre équipe..."
            ></textarea>
          </div>
        </div>

        <div className="w-full h-px bg-foreground/5 mb-12"></div>

        {/* Payment Method */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Mode de paiement
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setPaymentMethod("mobile")}
              className={`p-6 rounded-2xl border flex flex-col items-center justify-center gap-4 transition-all ${
                paymentMethod === "mobile"
                  ? "bg-primary/5 border-primary text-primary"
                  : "bg-background border-foreground/10 text-foreground/70 hover:border-foreground/30 hover:bg-foreground/5"
              }`}
            >
              <Icon icon="solar:smartphone-bold-duotone" className="text-4xl" />
              <span className="font-semibold">Mobile Money</span>
            </button>
            <button
              onClick={() => setPaymentMethod("card")}
              className={`p-6 rounded-2xl border flex flex-col items-center justify-center gap-4 transition-all ${
                paymentMethod === "card"
                  ? "bg-primary/5 border-primary text-primary"
                  : "bg-background border-foreground/10 text-foreground/70 hover:border-foreground/30 hover:bg-foreground/5"
              }`}
            >
              <Icon icon="solar:card-bold-duotone" className="text-4xl" />
              <span className="font-semibold">Carte Bancaire</span>
            </button>
          </div>

          {/* Conditional Payment Fields */}
          {paymentMethod === "mobile" && (
            <div className="bg-foreground/5 rounded-2xl p-6 mt-6 space-y-6 border border-foreground/10 animate-in fade-in slide-in-from-top-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70 px-2">
                  Opérateur Mobile <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["VODACOM", "AIRTEL", "ORANGE", "AFRICELL"].map((op) => (
                    <button
                      key={op}
                      onClick={(e) => {
                        e.preventDefault();
                        setOperator(op);
                      }}
                      className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all border ${
                        operator === op
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background border-foreground/10 text-foreground/70 hover:border-foreground/30"
                      }`}
                    >
                      {op}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70 px-2">
                  Numéro de téléphone <span className="text-primary">*</span>
                </label>
                <div className="flex">
                  <span className="bg-background border border-foreground/10 border-r-0 rounded-l-2xl px-4 py-4 text-foreground/50 font-medium">
                    +243
                  </span>
                  <input
                    type="tel"
                    className="w-full bg-background rounded-r-2xl px-4 py-4 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground"
                    placeholder="810 000 000"
                  />
                </div>
              </div>
              <Button
                size="lg"
                className="w-full bg-primary text-background h-14 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20"
              >
                Payer {currentAmount ? `${currentAmount} $` : ""} maintenant
              </Button>
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="mt-8 animate-in fade-in">
              <Button
                size="lg"
                className="w-full bg-foreground text-background h-14 rounded-2xl font-bold text-lg shadow-lg"
              >
                Procéder au paiement sécurisé (
                {currentAmount ? `${currentAmount} $` : ""})
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-foreground/40">
                <Icon icon="solar:lock-password-bold-duotone" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Paiement 100% Sécurisé
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
