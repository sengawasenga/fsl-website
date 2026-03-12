"use client";

import { useEffect, useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { MessageTable } from "@/components/admin/MessageTable";
import { StatCard } from "@/components/admin/StatCard";
import { Icon } from "@iconify/react";
import { getMessages } from "@/lib/actions/messages";

const MessagesPage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    getMessages().then((data) => {
      setMessages(data);
      const unread = data.filter((m: any) => !m.is_read).length;
      setUnreadCount(unread);
    });
  }, []);

  const readRate = messages.length > 0 
    ? Math.round(((messages.length - unreadCount) / messages.length) * 100) 
    : 0;

  return (
    <div className="flex flex-col">
      <AdminHeader title="Messages de Contact" />

      <div className="p-8 space-y-10 max-w-[1600px] mx-auto w-full">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Messages Reçus"
            value={messages.length.toString()}
            icon="solar:letter-bold-duotone"
          />
          <StatCard
            title="Messages Non-lus"
            value={unreadCount.toString()}
            icon="solar:bell-bing-bold-duotone"
            trend={unreadCount > 0 ? "À traiter" : "Tout est lu"}
            trendUp={unreadCount === 0}
          />
          <StatCard
            title="Taux de Lecture"
            value={`${readRate}%`}
            icon="solar:check-read-bold-duotone"
            trend={readRate === 100 ? "Parfait" : "En attente"}
            trendUp={readRate === 100}
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
