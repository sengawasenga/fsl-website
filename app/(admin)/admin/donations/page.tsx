"use client";

import { Icon } from "@iconify/react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { DonationTable } from "@/components/admin/DonationTable";
import { StatCard } from "@/components/admin/StatCard";

const DonationsPage = () => {
  return (
    <div className="flex flex-col">
      <AdminHeader title="Gestion des Donations" />

      <div className="p-8 space-y-10 max-w-[1600px] mx-auto w-full">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Collecte Totale"
            value="12,450.00$"
            icon="solar:wad-of-money-bold-duotone"
            trend="+1250$ ce mois"
            trendUp={true}
          />
          <StatCard
            title="Donateurs Uniques"
            value="84"
            icon="solar:users-group-rounded-bold-duotone"
            trend="+5 nouveaux"
            trendUp={true}
          />
          <StatCard
            title="Taux de Réussite"
            value="92%"
            icon="solar:chart-bold-duotone"
            trend="+2.4%"
            trendUp={true}
          />
        </div>

        {/* Donations List Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <div>
              <h2 className="text-2xl font-ashigea text-foreground">
                Historique des Transactions
              </h2>
              <p className="text-sm text-foreground/50 mt-1">
                Visualisez et gérez l'ensemble des dons reçus via la plateforme.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-foreground/5 text-foreground/70 hover:bg-foreground/10 transition-all font-medium text-sm border border-foreground/5">
                <Icon icon="solar:file-download-line-duotone" className="text-lg" />
                Exporter CSV
              </button>
            </div>
          </div>

          <DonationTable />
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;
