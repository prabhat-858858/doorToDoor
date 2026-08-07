import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Package, ChevronUp } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export default function FloatingActions() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showFloating) return null;

  return (
    <>
      {/* Desktop Floating Action Buttons (Right-bottom side) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
        
        {/* Direct Phone Floating Button */}
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-slate-900 text-white font-bold shadow-xl border border-slate-800 hover:bg-slate-800 hover:scale-105 transition-all group"
          title={`Call ${PHONE_NUMBER}`}
        >
          <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-black">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-xs tracking-wide">Call Us</span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={getWhatsAppUrl(PRESET_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 text-white font-extrabold shadow-xl hover:bg-emerald-500 hover:scale-105 transition-all group"
          title="WhatsApp Us"
        >
          <div className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center font-black">
            <MessageSquare className="w-4 h-4 fill-current" />
          </div>
          <span className="text-xs tracking-wide">WhatsApp</span>
        </a>
      </div>

      {/* Mobile Bottom Fixed Action Bar (Sticky at viewport bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 p-2.5 px-4 shadow-2xl animate-in slide-in-from-bottom-2 duration-300">
        <div className="grid grid-cols-3 gap-2">
          
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <Phone className="w-4 h-4 text-slate-800 mb-0.5" />
            <span className="text-[11px] font-bold">Call</span>
          </a>

          <a
            href={getWhatsAppUrl(PRESET_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white shadow-xs hover:bg-emerald-700 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          <a
            href="#request-form"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-400 text-slate-900 font-extrabold shadow-xs hover:bg-amber-300 transition-colors"
          >
            <Package className="w-4 h-4 text-slate-900 mb-0.5" />
            <span className="text-[11px] font-extrabold">Request</span>
          </a>

        </div>
      </div>
    </>
  );
}
