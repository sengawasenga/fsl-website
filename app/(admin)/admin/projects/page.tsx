"use client";

import { useEffect, useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { ProjectTable } from "@/components/admin/ProjectTable";
import { StatCard } from "@/components/admin/StatCard";
import { getProjects } from "@/lib/actions/projects";

const AdminProjectsPage = () => {
  const [activeProjectsCount, setActiveProjectsCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);

  useEffect(() => {
    getProjects().then((data) => {
      setActiveProjectsCount(data.length);
      const uniqueCats = new Set(data.map((p) => p.category));
      setCategoriesCount(uniqueCats.size);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <AdminHeader title="Gestion des Projets" />

      <div className="p-8 space-y-10 max-w-[1600px] mx-auto w-full">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Projets"
            value={activeProjectsCount}
            icon="solar:case-minimalistic-bold-duotone"
          />
          <StatCard
            title="Catégories couvertes"
            value={categoriesCount}
            icon="solar:widget-add-bold-duotone"
          />
          <StatCard
            title="Impact Communautaire"
            value="15k+"
            icon="solar:users-group-rounded-bold-duotone"
            trend="+0.0k"
            trendUp={true}
          />
        </div>

        <div className="flex items-center justify-between px-2 text-foreground">
          <div>
            <h2 className="text-2xl font-ashigea">Nos Projets de Terrain</h2>
            <p className="text-sm text-foreground/50 mt-1">
              Consultez et gérez l'ensemble des initiatives menées par la Fondation.
            </p>
          </div>
        </div>

        <ProjectTable />
      </div>
    </div>
  );
};

export default AdminProjectsPage;
