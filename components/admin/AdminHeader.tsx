"use client";

import { Icon } from "@iconify/react";

export const AdminHeader = ({ title }: { title: string }) => {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-background/80 backdrop-blur-xl border-b border-foreground/5 sticky top-0 z-40">
      <div>
        <h1 className="text-2xl font-ashigea text-foreground">{title}</h1>
        <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider mt-1">
          Espace d'administration • Fondation Sylvain Lumbala
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2.5 rounded-xl bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground transition-all">
          <Icon icon="solar:bell-line-duotone" className="text-xl" />
        </button>
        <div className="h-8 w-px bg-foreground/10 mx-2" />
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-foreground/5 border border-foreground/5">
          <div className="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold text-xs">
            AD
          </div>
          <span className="text-sm font-medium text-foreground">Admin</span>
        </div>
      </div>
    </header>
  );
};
