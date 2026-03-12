"use client";

import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { CATEGORIES } from "@/data/projects";
import { uploadFile } from "@/lib/actions/upload";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: any; // If present, we are in "Edit" mode
  onSave: (data: any) => void;
}

export const ProjectModal = ({ isOpen, onClose, project, onSave }: ProjectModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Éducation",
    location: "",
    date_string: "",
    short_description: "",
    content: "",
    image_url: ""
  });
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        category: project.category || "Éducation",
        location: project.location || "",
        date_string: project.date_string || "",
        short_description: project.short_description || "",
        content: project.content || "",
        image_url: project.image_url || ""
      });
    } else {
      setFormData({
        title: "",
        category: "Éducation",
        location: "",
        date_string: "",
        short_description: "",
        content: "",
        image_url: ""
      });
    }
  }, [project, isOpen]);

  if (!isOpen) return null;

  const isEdit = !!project;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);
      const publicUrl = await uploadFile(uploadFormData);
      setFormData({ ...formData, image_url: publicUrl });
    } catch (error) {
      console.error("Upload error:", error);
      alert("Erreur lors du téléversement de l'image.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl bg-background rounded-[2.5rem] border border-foreground/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between p-8 border-b border-foreground/5">
          <div>
            <h2 className="text-2xl font-ashigea text-foreground">
              {isEdit ? "Modifier le Projet" : "Nouveau Projet"}
            </h2>
            <p className="text-sm text-foreground/50 mt-1">
              Remplissez les informations ci-dessous pour {isEdit ? "mettre à jour" : "créer"} le projet.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 rounded-2xl bg-foreground/5 text-foreground/50 hover:bg-foreground/10 hover:text-foreground transition-all"
          >
            <Icon icon="solar:close-circle-bold-duotone" className="text-2xl" />
          </button>
        </div>

        <form 
          className="p-8 max-h-[70vh] overflow-y-auto space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 px-2">Titre du Projet</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground"
                placeholder="Ex: Construction d'une école..."
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 px-2">Catégorie</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground appearance-none cursor-pointer"
                required
              >
                {CATEGORIES.filter(c => c !== "Tous").map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 px-2">Lieu</label>
              <input 
                type="text" 
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground"
                placeholder="Ex: Kinshasa, RDC"
                required
              />
            </div>

            {/* Date Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 px-2">Période</label>
              <input 
                type="text" 
                value={formData.date_string}
                onChange={(e) => setFormData({ ...formData, date_string: e.target.value })}
                className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground"
                placeholder="Ex: Janvier 2024 - Présent"
                required
              />
            </div>
          </div>

          {/* Short Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70 px-2">Brève Description</label>
            <textarea 
              rows={2}
              value={formData.short_description}
              onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
              className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground resize-none"
              placeholder="Une courte phrase d'accroche..."
              required
            ></textarea>
          </div>

          {/* Full Content */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70 px-2">Contenu Détailé</label>
            <textarea 
              rows={5}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full bg-foreground/5 rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-primary transition-colors text-foreground resize-none"
              placeholder="Décrivez l'impact et les objectifs du projet..."
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70 px-2">Image du Projet</label>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full aspect-16/6 rounded-[2rem] border-2 border-dashed border-foreground/10 flex flex-col items-center justify-center gap-2 hover:bg-foreground/5 cursor-pointer transition-all group overflow-hidden relative"
            >
              {isUploading ? (
                <div className="flex flex-col items-center gap-2">
                  <Icon icon="solar:refresh-bold-duotone" className="text-4xl text-primary animate-spin" />
                  <span className="text-xs font-semibold text-foreground/30">Téléversement en cours...</span>
                </div>
              ) : formData.image_url ? (
                <div className="relative w-full h-full p-4">
                  <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover rounded-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity">
                    <span className="text-white font-bold text-sm">Changer l'image</span>
                  </div>
                </div>
              ) : (
                <>
                  <Icon icon="solar:camera-add-bold-duotone" className="text-4xl text-foreground/20 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-semibold text-foreground/30">Cliquez pour téléverser une image</span>
                </>
              )}
            </div>
          </div>
        </form>

        <div className="p-8 border-t border-foreground/5 flex items-center justify-end gap-4 bg-foreground/2">
          <button 
            type="button"
            onClick={onClose}
            className="px-8 py-4 rounded-2xl font-bold text-foreground/50 hover:text-foreground transition-all"
          >
            Annuler
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isUploading}
            className="bg-primary text-background px-10 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isEdit ? "Enregistrer les modifications" : "Créer le projet"}
          </button>
        </div>
      </div>
    </div>
  );
};
