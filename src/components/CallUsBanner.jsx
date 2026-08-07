import React from 'react';
import { Phone, MessageSquare, HeartHandshake } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export default function CallUsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 text-white relative overflow-hidden shadow-xl">
      {/* Subtle background glow graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-emerald-100 text-xs sm:text-sm font-bold uppercase tracking-wider">
          <HeartHandshake className="w-4 h-4 text-amber-300" />
          <span>Direct Human Contact</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Need Something? Just Call Us.
        </h2>

        <p className="text-base sm:text-xl text-emerald-100 max-w-2xl mx-auto font-medium leading-relaxed">
          No complicated process. No long forms. Tell us what you need and we'll help you right away.
        </p>

        {/* Large Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base sm:text-lg font-extrabold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Phone className="w-6 h-6 text-slate-900" />
            <div className="text-left leading-tight">
              <span className="block text-xs uppercase font-bold text-slate-800 tracking-wider">Call Now</span>
              <span>{PHONE_NUMBER}</span>
            </div>
          </a>

          <a
            href={getWhatsAppUrl(PRESET_MESSAGES.directHelp)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base sm:text-lg font-extrabold text-emerald-950 bg-white hover:bg-emerald-50 shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageSquare className="w-6 h-6 text-emerald-600" />
            <div className="text-left leading-tight">
              <span className="block text-xs uppercase font-bold text-emerald-800 tracking-wider">WhatsApp Us</span>
              <span>{PHONE_NUMBER}</span>
            </div>
          </a>

        </div>

        <p className="text-xs text-emerald-200 font-medium">
          Available for village & town service • Instant response
        </p>

      </div>
    </section>
  );
}
