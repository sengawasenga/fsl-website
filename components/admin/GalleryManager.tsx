"use client";

import { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

// Mock data for initial photos
const initialPhotos = [
  { id: 1, url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop", category: "Santé" },
  { id: 2, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", category: "Éducation" },
  { id: 3, url: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop", category: "Agriculture" },
  { id: 4, url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop", category: "Social" },
  { id: 5, url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop", category: "Environnement" },
  { id: 6, url: "https://images.unsplash.com/photo-1524062794003-513a24734c6d?q=80&w=800&auto=format&fit=crop", category: "Santé" },
];

export const GalleryManager = () => {
  const [photos, setPhotos] = useState(initialPhotos);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleSelect = (id: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === photos.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(photos.map(p => p.id));
    }
  };

  const deletePhoto = (id: number) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
    setSelectedIds(prev => prev.filter(i => i !== id));
  };

  const deleteSelected = () => {
    setPhotos(prev => prev.filter(p => !selectedIds.includes(p.id)));
    setSelectedIds([]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newPhotos = Array.from(e.target.files).map((file, index) => ({
        id: Date.now() + index,
        url: URL.createObjectURL(file),
        category: "Nouveau"
      }));
      setPhotos(prev => [...newPhotos, ...prev]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSelectAll}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 text-foreground/70 hover:bg-foreground/10 transition-all font-medium text-sm"
          >
            <Icon icon={selectedIds.length === photos.length && photos.length > 0 ? "solar:check-square-bold" : "solar:square-line-duotone"} className="text-xl text-primary" />
            {selectedIds.length === photos.length && photos.length > 0 ? "Tout désélectionner" : "Tout sélectionner"}
          </button>

          {selectedIds.length > 0 && (
            <button 
              onClick={deleteSelected}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all font-bold text-sm border border-red-500/20"
            >
              <Icon icon="solar:trash-bin-trash-bold-duotone" className="text-xl" />
              Supprimer ({selectedIds.length})
            </button>
          )}
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleFileChange}
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="w-full md:w-auto bg-primary text-background px-6 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <Icon icon="solar:camera-add-bold-duotone" className="text-2xl" />
            Ajouter des photos
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {photos.map((photo) => {
          const isSelected = selectedIds.includes(photo.id);
          return (
            <div 
              key={photo.id}
              className={`group relative aspect-square rounded-[2rem] overflow-hidden border-2 transition-all duration-300 shadow-sm ${
                isSelected ? 'border-primary scale-[0.98]' : 'border-transparent hover:border-primary/20'
              }`}
            >
              {/* Photo */}
              <img 
                src={photo.url} 
                alt="Gallery" 
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isSelected ? 'scale-110 opacity-70' : 'group-hover:scale-110'
                }`}
              />

              {/* Selection Checkbox (always visible if selected, visible on hover if not) */}
              <div 
                className={`absolute top-4 left-4 z-20 cursor-pointer transition-opacity duration-300 ${
                  isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
                onClick={() => toggleSelect(photo.id)}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg transition-all ${
                  isSelected ? 'bg-primary text-background' : 'bg-background/50 text-foreground border border-white/20 hover:bg-white'
                }`}>
                  <Icon icon={isSelected ? "solar:check-read-bold" : "solar:add-circle-line-duotone"} className="text-xl" />
                </div>
              </div>

              {/* Delete Button (visible on hover) */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  deletePhoto(photo.id);
                }}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-xl bg-red-500/80 hover:bg-red-500 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
              >
                <Icon icon="solar:trash-bin-minimalistic-bold" className="text-lg" />
              </button>

              {/* Overlay Decor */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 pointer-events-none">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/70 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                  {photo.category}
                </span>
              </div>
            </div>
          );
        })}

        {/* Empty State / Add Placeholder */}
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="aspect-square rounded-[2rem] border-2 border-dashed border-foreground/10 flex flex-col items-center justify-center gap-4 text-foreground/30 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all group"
        >
          <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all">
            <Icon icon="solar:upload-minimalistic-bold-duotone" className="text-4xl" />
          </div>
          <span className="font-semibold text-sm">Téléverser</span>
        </button>
      </div>

      {photos.length === 0 && (
        <div className="py-20 text-center space-y-4 bg-background rounded-[2.5rem] border border-foreground/5">
          <div className="w-20 h-20 bg-foreground/5 rounded-full flex items-center justify-center mx-auto">
            <Icon icon="solar:gallery-bold-duotone" className="text-4xl text-foreground/20" />
          </div>
          <h3 className="text-xl font-ashigea text-foreground/50">La galerie est vide</h3>
          <p className="text-foreground/30 max-w-xs mx-auto text-sm">
            Commencez par ajouter quelques photos pour les afficher sur le site.
          </p>
        </div>
      )}
    </div>
  );
};
