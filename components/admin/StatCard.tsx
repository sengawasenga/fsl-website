"use client";

import { Icon } from "@iconify/react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: string;
  trendUp?: boolean;
}

export const StatCard = ({ title, value, icon, trend, trendUp }: StatCardProps) => {
  return (
    <div className="bg-background rounded-3xl p-6 border border-foreground/5 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3.5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
          <Icon icon={icon} className="text-2xl" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${trendUp ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
            <Icon icon={trendUp ? "solar:trend-up-bold" : "solar:trend-down-bold"} />
            {trend}
          </div>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground/50 mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-foreground tracking-tight">{value}</h3>
      </div>
    </div>
  );
};
