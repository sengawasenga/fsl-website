"use client";

import { Icon } from "@iconify/react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}

export const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, title }: DeleteConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-md bg-background rounded-[2.5rem] border border-red-500/10 shadow-2xl p-8 overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon Section */}
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 animate-bounce duration-1000">
            <Icon icon="solar:trash-bin-trash-bold-duotone" className="text-4xl" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-ashigea text-foreground">
              Confirmer la suppression
            </h2>
            <p className="text-sm text-foreground/50 leading-relaxed italic">
              Êtes-vous sûr de vouloir supprimer "{title}" ? Cette action est irréversible.
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 pt-4">
            <button 
              onClick={onConfirm}
              className="w-full bg-red-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-red-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Oui, supprimer le projet
            </button>
            <button 
              onClick={onClose}
              className="w-full py-4 rounded-2xl font-bold text-foreground/50 hover:bg-foreground/5 transition-all"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
