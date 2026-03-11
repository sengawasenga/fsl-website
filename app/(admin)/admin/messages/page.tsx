"use client";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { MessageTable } from "@/components/admin/MessageTable";
import { StatCard } from "@/components/admin/StatCard";
import { Icon } from "@iconify/react";

const MessagesPage = () => {
  return (
    <div className="flex flex-col">
      <AdminHeader title="Messages de Contact" />

      <div className="p-8 space-y-10 max-w-[1600px] mx-auto w-full">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Messages Reçus"
            value="148"
            icon="solar:letter-bold-duotone"
            trend="+12 aujourd'hui"
            trendUp={true}
          />
          <StatCard
            title="Sujet Principal"
            value="Partenariat"
            icon="solar:users-group-rounded-bold-duotone"
          />
          <StatCard
            title="Taux de Réponse"
            value="85%"
            icon="solar:check-read-bold-duotone"
            trend="+5%"
            trendUp={true}
          />
        </div>

        <div className="flex items-center justify-between px-2 text-foreground">
          <div>
            <h2 className="text-2xl font-ashigea">Vos Communications</h2>
            <p className="text-sm text-foreground/50 mt-1">
              Gérez les demandes reçues via le formulaire de contact du site.
            </p>
          </div>
          <div className="flex gap-3">
             <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground/5 text-foreground/70 hover:bg-foreground/10 transition-all font-medium text-sm border border-foreground/5 shadow-sm shadow-black/5 hover:scale-[1.02] active:scale-[0.98]">
              <Icon icon="solar:history-bold-duotone" className="text-xl" />
              Historique complet
            </button>
          </div>
        </div>

        <MessageTable />
      </div>
    </div>
  );
};

export default MessagesPage;
