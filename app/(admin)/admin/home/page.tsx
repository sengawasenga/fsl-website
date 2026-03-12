import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatCard } from "@/components/admin/StatCard";
import { Icon } from "@iconify/react";
import { getDashboardStats, getMonthlyStats } from "@/lib/actions/dashboard";
import DashboardChart from "@/components/admin/DashboardChart";

const AdminHomePage = async () => {
  const stats = await getDashboardStats();
  const chartData = await getMonthlyStats();

  return (
    <div className="flex flex-col">
      <AdminHeader title="Tableau de Bord" />

      <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Donations"
            value={`${stats.totalDonations}$`}
            icon="solar:heart-angle-bold-duotone"
            trend="+0%"
            trendUp={true}
          />
          <StatCard
            title="Messages Reçus"
            value={stats.messagesCount.toString()}
            icon="solar:letter-bold-duotone"
            trend="+5%"
            trendUp={true}
          />
          <StatCard
            title="Projets Actifs"
            value={stats.projectsCount.toString()}
            icon="solar:case-minimalistic-bold-duotone"
          />
          <StatCard
            title="Images Galerie"
            value={stats.galleryCount.toString()}
            icon="solar:gallery-bold-duotone"
            trend="+24"
            trendUp={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Chart Area */}
          <div className="lg:col-span-8 bg-background rounded-[2.5rem] p-8 border border-foreground/5 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-ashigea text-foreground">
                  Aperçu des Activités
                </h3>
                <p className="text-sm text-foreground/50 mt-1">
                  Évolution des interactions sur les 6 derniers mois
                </p>
              </div>
            </div>

            <div className="aspect-16/7 relative rounded-2xl border border-foreground/5 bg-background flex items-center justify-center pt-6 pr-6 pb-2 pl-2">
              <DashboardChart data={chartData} />
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
                {stats.recentActivities.length > 0 ? (
                  stats.recentActivities.map((activity) => (
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
                  ))
                ) : (
                  <p className="text-sm text-foreground/50 text-center py-4">
                    Aucune activité récente.
                  </p>
                )}
              </div>

              <div className="mt-10 p-6 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-10%] w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Besoin d'aide ?
                </h4>
                <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                  Consultez le guide d'utilisation ou contactez le support
                  technique.
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
