"use client";

import { useState, useMemo, useEffect } from "react";
import { Icon } from "@iconify/react";
import { getDonations } from "@/lib/actions/donations";

const statusMap = {
  success: { label: "Réussi", color: "bg-emerald-500" },
  completed: { label: "Réussi", color: "bg-emerald-500" },
  failed: { label: "Échoué", color: "bg-red-500" },
  pending: { label: "En attente", color: "bg-amber-500" },
};

export const DonationTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [donations, setDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDonations().then((data) => {
      setDonations(data || []);
      setLoading(false);
    });
  }, []);

  const filteredDonations = useMemo(() => {
    return donations.filter((donation) => {
      const matchesSearch = 
        (donation.donor_name || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
        (donation.id || "").toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === "all" || donation.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [donations, searchTerm, statusFilter]);

  return (
    <div className="space-y-6">
      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Icon 
            icon="solar:magnifer-line-duotone" 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 text-xl" 
          />
          <input
            type="text"
            placeholder="Rechercher un donateur ou ID..."
            className="w-full bg-background rounded-2xl pl-12 pr-6 py-3.5 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <select
            className="flex-1 md:w-48 bg-background rounded-2xl px-6 py-3.5 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground shadow-sm appearance-none cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Tous les status</option>
            <option value="success">Réussi</option>
            <option value="failed">Échoué</option>
            <option value="pending">En attente</option>
          </select>
        </div>
      </div>

      {/* Table Content */}
      <div className="bg-background rounded-[2.5rem] border border-foreground/5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5">
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">ID</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Donateur</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider text-right">Montant</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Date</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-foreground/30 font-medium">
                    <div className="flex flex-col items-center gap-4">
                      <Icon icon="solar:refresh-bold-duotone" className="text-4xl animate-spin" />
                      Chargement des donations...
                    </div>
                  </td>
                </tr>
              ) : filteredDonations.length > 0 ? (
                filteredDonations.map((donation) => {
                  const safeStatus = donation.status && statusMap[donation.status as keyof typeof statusMap] 
                    ? donation.status as keyof typeof statusMap 
                    : "pending";

                  return (
                    <tr key={donation.id} className="group hover:bg-foreground/5 transition-colors">
                      <td className="px-6 py-5 text-sm font-bold text-foreground/40 max-w-[120px] truncate" title={donation.id}>{donation.id}</td>
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground">{donation.donor_name || "Anonyme"}</span>
                          <span className="text-xs text-foreground/50">{donation.donor_email || "N/A"}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right font-bold text-primary">{donation.amount}$</td>
                      <td className="px-6 py-5 text-sm text-foreground/70">
                        {new Date(donation.created_at).toLocaleDateString("fr-FR")}
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white ${statusMap[safeStatus].color}`}>
                          {statusMap[safeStatus].label}
                        </span>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-foreground/30 font-medium">
                    Aucune donation trouvée pour vos critères de recherche.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination Placeholder */}
      <div className="flex items-center justify-between px-6 pt-2">
        <p className="text-sm text-foreground/50">
          Affichage de <span className="font-bold">{filteredDonations.length}</span> résultats
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl bg-foreground/5 text-foreground/30 text-sm font-bold cursor-not-allowed">Précédent</button>
          <button className="px-4 py-2 rounded-xl bg-foreground/10 text-foreground/70 text-sm font-bold hover:bg-foreground/20 transition-all">Suivant</button>
        </div>
      </div>
    </div>
  );
};
