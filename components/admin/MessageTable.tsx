"use client";

import { useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import { MessageModal } from "./MessageModal";

const messagesData = [
  {
    id: "MSG-001",
    sender: "Marie Dupont",
    email: "marie.d@example.com",
    subject: "Proposition de partenariat",
    content: "Bonjour, nous sommes une entreprise locale et souhaiterions soutenir vos actions éducatives. Pourrions-nous en discuter lors d'un rendez-vous ?",
    date: "12 Mars 2026",
    read: false,
  },
  {
    id: "MSG-002",
    sender: "Jean-Pierre Tshimanga",
    email: "jp.tshi@gmail.com",
    subject: "Demande d'information",
    content: "Pouvez-vous me dire comment je peux devenir bénévole pour la fondation ? Je suis étudiant en santé publique.",
    date: "11 Mars 2026",
    read: true,
  },
  {
    id: "MSG-003",
    sender: "Sophie Martin",
    email: "sophie.m@outlook.com",
    subject: "Presse & Médias",
    content: "Je suis journaliste pour Kinshasa Direct et je voudrais faire un reportage sur votre nouveau projet d'école à Kasa-Vubu.",
    date: "10 Mars 2026",
    read: true,
  },
  {
    id: "MSG-004",
    sender: "Marc Etoga",
    email: "m.etoga@gmail.com",
    subject: "Autre",
    content: "L'accès à l'eau potable dans mon village est critique, comment devrions-nous procéder pour vous soumettre une demande d'aide ?",
    date: "09 Mars 2026",
    read: false,
  },
  {
    id: "MSG-005",
    sender: "Alice Dubois",
    email: "alice@domain.be",
    subject: "Proposition de partenariat",
    content: "Nous avons collecté des fournitures scolaires en Belgique et souhaiterions les expédier à votre siège à Kinshasa.",
    date: "08 Mars 2026",
    read: true,
  },
];

export const MessageTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "unread" | "read">("all");
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMessages = useMemo(() => {
    return messagesData.filter((msg) => {
      const matchesSearch = 
        msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) || 
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = 
        statusFilter === "all" || 
        (statusFilter === "unread" && !msg.read) || 
        (statusFilter === "read" && msg.read);

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const openMessage = (message: any) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Icon 
            icon="solar:magnifer-line-duotone" 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 text-xl" 
          />
          <input
            type="text"
            placeholder="Rechercher par expéditeur, email ou sujet..."
            className="w-full bg-background rounded-2xl pl-12 pr-6 py-3.5 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex bg-foreground/5 p-1 rounded-2xl border border-foreground/5">
          <button 
            onClick={() => setStatusFilter("all")}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              statusFilter === "all" ? "bg-background text-primary shadow-sm" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            Tous
          </button>
          <button 
            onClick={() => setStatusFilter("unread")}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
              statusFilter === "unread" ? "bg-background text-primary shadow-sm" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            Non lus
            <span className="w-2 h-2 rounded-full bg-primary" />
          </button>
          <button 
            onClick={() => setStatusFilter("read")}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              statusFilter === "read" ? "bg-background text-primary shadow-sm" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            Lus
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="bg-background rounded-[2.5rem] border border-foreground/5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5">
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Expéditeur</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Sujet</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Aperçu</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Date</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((msg) => (
                  <tr 
                    key={msg.id} 
                    className={`group hover:bg-foreground/5 transition-colors cursor-pointer ${!msg.read ? 'bg-primary/2' : ''}`}
                    onClick={() => openMessage(msg)}
                  >
                    <td className="px-6 py-5 w-auto">
                      <div className={`w-3 h-3 rounded-full ${msg.read ? 'bg-foreground/10' : 'bg-primary ring-4 ring-primary/20 transform scale-125'}`} />
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className={`font-semibold ${!msg.read ? 'text-foreground' : 'text-foreground/70'}`}>{msg.sender}</span>
                        <span className="text-xs text-foreground/40">{msg.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        !msg.read ? 'bg-primary text-background' : 'bg-foreground/5 text-foreground/50'
                      }`}>
                        {msg.subject}
                      </span>
                    </td>
                    <td className="px-6 py-5 max-w-[300px]">
                      <p className={`text-sm line-clamp-1 font-light ${!msg.read ? 'text-foreground font-medium' : 'text-foreground/50'}`}>
                        {msg.content}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-sm whitespace-nowrap text-foreground/50">
                      {msg.date}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-3 rounded-2xl bg-foreground/5 text-foreground/40 group-hover:bg-primary group-hover:text-background transition-all hover:scale-110">
                        <Icon icon="solar:eye-bold-duotone" className="text-xl" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center text-foreground/30 font-medium">
                    Aucun message trouvé pour vos critères de recherche.
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
