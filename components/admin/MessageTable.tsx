"use client";

import { useState, useMemo, useEffect } from "react";
import { Icon } from "@iconify/react";
import { MessageModal } from "./MessageModal";
import { getMessages, markAsRead } from "@/lib/actions/messages";

export const MessageTable = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "unread" | "read">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    setLoading(true);
    const data = await getMessages();
    setMessages(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      const matchesSearch = 
        msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) || 
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
        msg.subject.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = 
        statusFilter === "all" || 
        (statusFilter === "unread" && !msg.is_read) || 
        (statusFilter === "read" && msg.is_read);

      return matchesSearch && matchesStatus;
    });
  }, [messages, searchTerm, statusFilter]);

  const handleViewMessage = async (message: any) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
    
    if (!message.is_read) {
      await markAsRead(message.id);
      fetchMessages(); // Refresh to update status
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Icon icon="solar:magnifer-linear" className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 text-xl" />
          <input 
            type="text" 
            placeholder="Rechercher un message..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-foreground/5 rounded-2xl pl-12 pr-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground"
          />
        </div>

        <div className="flex bg-foreground/5 p-1 rounded-2xl w-full md:w-auto">
          {["all", "unread", "read"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status as any)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all capitalize ${
                statusFilter === status 
                  ? "bg-background text-primary shadow-sm" 
                  : "text-foreground/40 hover:text-foreground/60"
              }`}
            >
              {status === "all" ? "Tous" : status === "unread" ? "Non lus" : "Lus"}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-background rounded-[2.5rem] border border-foreground/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/2 border-b border-foreground/5">
                <th className="px-6 py-6 text-sm font-bold text-foreground/40 uppercase tracking-wider">Expéditeur</th>
                <th className="px-6 py-6 text-sm font-bold text-foreground/40 uppercase tracking-wider">Email</th>
                <th className="px-6 py-6 text-sm font-bold text-foreground/40 uppercase tracking-wider">Sujet / Message</th>
                <th className="px-6 py-6 text-sm font-bold text-foreground/40 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((msg) => (
                  <tr 
                    key={msg.id} 
                    className={`hover:bg-foreground/2 transition-colors cursor-pointer group ${!msg.is_read ? 'bg-primary/2' : ''}`}
                    onClick={() => handleViewMessage(msg)}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {!msg.is_read && (
                          <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </div>
                        )}
                        <span className={`font-semibold ${!msg.is_read ? 'text-primary' : 'text-foreground/80'}`}>
                          {msg.sender}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-foreground/60">{msg.email}</td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className={`font-medium ${!msg.is_read ? 'text-foreground' : 'text-foreground/70'}`}>
                          {msg.subject}
                        </span>
                        <span className="text-xs text-foreground/40 line-clamp-1">{msg.content}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-foreground/50">
                      {new Date(msg.created_at).toLocaleDateString("fr-FR")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center text-foreground/30 font-medium">
                    {loading ? (
                      <div className="flex flex-col items-center gap-4">
                        <Icon icon="solar:refresh-bold-duotone" className="text-4xl animate-spin" />
                        Chargement des messages...
                      </div>
                    ) : (
                      "Aucun message trouvé."
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <MessageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        message={selectedMessage} 
      />
    </div>
  );
};
