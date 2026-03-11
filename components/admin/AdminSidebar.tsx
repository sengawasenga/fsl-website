"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import logoFSL from "@/public/img/fsl-logo.png";

const menuItems = [
  {
    name: "Tableau de bord",
    icon: "solar:widget-add-line-duotone",
    activeIcon: "solar:widget-add-bold-duotone",
    href: "/admin/home",
  },
  {
    name: "Donations",
    icon: "solar:heart-angle-line-duotone",
    activeIcon: "solar:heart-angle-bold-duotone",
    href: "/admin/donations",
  },
  {
    name: "Galerie",
    icon: "solar:gallery-line-duotone",
    activeIcon: "solar:gallery-bold-duotone",
    href: "/admin/gallery",
  },
  {
    name: "Projets",
    icon: "solar:case-minimalistic-line-duotone",
    activeIcon: "solar:case-minimalistic-bold-duotone",
    href: "/admin/projects",
  },
  {
    name: "Messages",
    icon: "solar:letter-line-duotone",
    activeIcon: "solar:letter-bold-duotone",
    href: "/admin/messages",
  },
];

export const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-background border-r border-foreground/5 flex flex-col z-50">
      <div className="p-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logoFSL} alt="Logo FSL" className="h-10 w-auto" />
          <span className="font-ashigea text-xl text-foreground">FSL Admin</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group ${
                isActive
                  ? "bg-primary text-background shadow-lg shadow-primary/20"
                  : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-4">
                <Icon
                  icon={isActive ? item.activeIcon : item.icon}
                  className={`text-2xl ${isActive ? "" : "group-hover:scale-110 transition-transform"}`}
                />
                <span className="font-medium">{item.name}</span>
              </div>
              
              {item.name === "Messages" && (
                <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold ${
                  isActive ? "bg-background text-primary" : "bg-primary text-background"
                }`}>
                  2
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-foreground/5 rounded-3xl p-4 mb-4 border border-foreground/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Icon icon="solar:user-bold-duotone" className="text-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Admin FSL</p>
              <p className="text-xs text-foreground/50">Administrateur</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors text-sm font-medium">
            <Icon icon="solar:logout-3-line-duotone" />
            Déconnexion
          </button>
        </div>
      </div>
    </aside>
  );
};
