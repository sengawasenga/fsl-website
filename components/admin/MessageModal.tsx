"use client";

import { Icon } from "@iconify/react";

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: any;
}

export const MessageModal = ({ isOpen, onClose, message }: MessageModalProps) => {
  if (!isOpen || !message) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-background rounded-[2.5rem] border border-foreground/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between p-8 border-b border-foreground/5 bg-foreground/2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl">
              <Icon icon="solar:letter-bold-duotone" />
            </div>
            <div>
              <h2 className="text-xl font-ashigea text-foreground">
                Détails du Message
              </h2>
              <p className="text-xs text-foreground/50 font-bold uppercase tracking-widest mt-0.5">
                Reçu le {message.date}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 rounded-2xl bg-foreground/5 text-foreground/50 hover:bg-foreground/10 hover:text-foreground transition-all"
          >
            <Icon icon="solar:close-circle-bold-duotone" className="text-2xl" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          {/* Sender Info */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">Expéditeur</p>
              <p className="text-lg font-bold text-foreground">{message.sender}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">Sujet</p>
              <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                {message.subject}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">Email</p>
            <a 
              href={`mailto:${message.email}`}
              className="text-primary hover:underline font-medium flex items-center gap-2"
            >
              <Icon icon="solar:letter-opened-bold-duotone" />
              {message.email}
            </a>
          </div>

          <div className="w-full h-px bg-foreground/5" />

          {/* Message Content */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">Message</p>
            <div className="bg-foreground/5 p-6 rounded-3xl text-foreground/80 leading-relaxed font-light italic">
              "{message.content}"
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-foreground/5 bg-foreground/2 flex items-center justify-end">
          <a 
            href={`mailto:${message.email}?subject=RE: ${message.subject}`}
            className="bg-primary text-background px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Icon icon="solar:reply-bold-duotone" className="text-xl" />
            Répondre par email
          </a>
        </div>
      </div>
    </div>
  );
};
