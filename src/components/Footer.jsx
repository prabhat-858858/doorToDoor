import React from 'react';
import { ShoppingBag, Phone, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, getWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-600/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                doors<span className="text-emerald-500">To</span>Doors
              </span>
            </a>
            <p className="text-sm font-semibold text-slate-300 max-w-sm leading-relaxed">
              Your Local Market, Just One Call Away.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Connecting village and small-town residents with local markets, personal errand assistance, parcel deliveries, and local transportation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-200">
              Quick Links
            </span>
            <ul className="space-y-2 text-sm font-medium">
              {['Home', 'Services', 'How It Works', 'Why Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-200">
              Contact Information
            </span>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(PRESET_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>WhatsApp: {PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>{EMAIL_ADDRESS}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 doorsToDoors. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Local • Personal • Reliable</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
