"use client";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatCard } from "@/components/admin/StatCard";
import { Icon } from "@iconify/react";

const recentActivities = [
  {
    id: 1,
    type: "donation",
    title: "Don reçu",
    description: "Jean Dupont a fait un don de 500$",
    time: "Il y a 2 heures",
    icon: "solar:heart-angle-bold-duotone",
    color: "text-primary bg-primary/10",
  },
  {
    id: 2,
    type: "message",
    title: "Nouveau message",
    description: "Demande de partenariat de Marie Lopez",
    time: "Il y a 5 heures",
    icon: "solar:letter-bold-duotone",
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 3,
    type: "project",
    title: "Projet mis à jour",
    description: "Réhabilitation de l'école de Kintambo",
    time: "Hier",
    icon: "solar:case-minimalistic-bold-duotone",
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    id: 4,
    type: "gallery",
    title: "Nouvelles photos",
    description: "12 photos ajoutées à l'album Santé",
    time: "Il y a 2 jours",
    icon: "solar:gallery-bold-duotone",
    color: "text-emerald-500 bg-emerald-500/10",
  },
];

const AdminHomePage = () => {
  return (
    <div className="flex flex-col">
      <AdminHeader title="Tableau de Bord" />

      <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Donations"
            value="12,450$"
            icon="solar:heart-angle-bold-duotone"
            trend="+12%"
            trendUp={true}
          />
          <StatCard
            title="Messages Reçus"
            value="48"
            icon="solar:letter-bold-duotone"
            trend="+5%"
            trendUp={true}
          />
          <StatCard
            title="Projets Actifs"
            value="12"
            icon="solar:case-minimalistic-bold-duotone"
          />
          <StatCard
            title="Images Galerie"
            value="856"
            icon="solar:gallery-bold-duotone"
            trend="+24"
            trendUp={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Chart Area Placeholder */}
          <div className="lg:col-span-8 bg-background rounded-[2.5rem] p-8 border border-foreground/5 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-ashigea text-foreground">
                  Aperçu des Activités
                </h3>
                <p className="text-sm text-foreground/50 mt-1">
                  Évolution des interactions sur les 30 derniers jours
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-xl bg-foreground/5 text-sm font-medium hover:bg-foreground/10 transition-all">
                  Semaine
                </button>
                <button className="px-4 py-2 rounded-xl bg-primary text-background text-sm font-medium shadow-lg shadow-primary/10">
                  Mois
                </button>
              </div>
            </div>

            <div className="aspect-16/7 relative rounded-2xl overflow-hidden border border-foreground/5 bg-foreground/2 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-around px-8 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-px h-full bg-foreground"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
              <p className="text-foreground/30 font-medium z-10">
                Espace réservé pour les graphiques
              </p>
            </div>
          </div>

          {/* Activity Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-background rounded-[2.5rem] p-8 border border-foreground/5 shadow-sm h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-ashigea text-foreground">
                  Activités Récentes
                </h3>
                <button className="text-primary text-sm font-semibold hover:underline underline-offset-4">
                  Voir tout
                </button>
              </div>

              <div className="space-y-6">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-4 group">
                    <div
                      className={`w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 ${activity.color}`}
                    >
                      <Icon icon={activity.icon} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground leading-tight">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-foreground/60 mt-0.5 line-clamp-1">
                        {activity.description}
                      </p>
                      <p className="text-xs text-foreground/40 mt-1 font-medium">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-10%] w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Besoin d'aide ?
                </h4>
                <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                  Consultez le guide d'utilisation ou contactez le support technique.
                </p>
                <button className="w-full py-2.5 rounded-xl bg-primary text-background text-xs font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                  Guide d'utilisation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
