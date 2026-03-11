"use client";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { GalleryManager } from "@/components/admin/GalleryManager";
import { Icon } from "@iconify/react";

const AdminGalleryPage = () => {
  return (
    <div className="flex flex-col">
      <AdminHeader title="Gestion de la Galerie" />

      <div className="p-8 space-y-10 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center justify-between px-2">
          <div>
            <h2 className="text-2xl font-ashigea text-foreground">
              Photothèque FSL
            </h2>
            <p className="text-sm text-foreground/50 mt-1">
              Gérez les photos et albums affichés dans la galerie publique.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-foreground/5 text-foreground/70 hover:bg-foreground/10 transition-all font-medium text-sm border border-foreground/5 shadow-sm shadow-black/5 hover:scale-[1.02] active:scale-[0.98]">
              <Icon icon="solar:folder-add-bold-duotone" className="text-xl" />
              Créer un Album
            </button>
          </div>
        </div>

        <GalleryManager />
      </div>
    </div>
  );
};

export default AdminGalleryPage;
