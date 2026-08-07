import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export default function CTA() {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Always Ready To Serve</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Whatever You Need, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            We're Just a Call Away.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-medium">
          Tell us what you need. We'll do our best to help you quickly and reliably.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-extrabold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-slate-900" />
            <span>Call Us Now ({PHONE_NUMBER})</span>
          </a>

          <a
            href={getWhatsAppUrl(PRESET_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

      </div>
    </section>
  );
}
