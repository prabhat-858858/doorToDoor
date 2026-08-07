import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, getWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold text-emerald-700 tracking-widest uppercase bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Reach Us Anywhere
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            We are always here to assist you. Contact us directly via Phone, WhatsApp, or Email.
          </p>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Phone / WhatsApp */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg text-center space-y-4 hover:border-emerald-300 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
              <Phone className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Phone / WhatsApp
              </span>
              <h3 className="text-xl font-black text-slate-900">
                {PHONE_NUMBER}
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Call or message anytime for immediate assistance
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-slate-800 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 transition-colors border border-slate-200/60"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Now</span>
              </a>
              <a
                href={getWhatsAppUrl(PRESET_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg text-center space-y-4 hover:border-emerald-300 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-xs">
              <Mail className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Email Us
              </span>
              <h3 className="text-lg font-bold text-slate-900 break-all">
                {EMAIL_ADDRESS}
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Send us questions, suggestions, or formal inquiries
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-slate-800 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 transition-colors border border-slate-200/60"
              >
                <Mail className="w-4 h-4 text-teal-600" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: Service Area */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg text-center space-y-4 hover:border-emerald-300 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-xs">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Service Area
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Local Community & Nearby Areas
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Connecting local villages, town markets, hospitals & stations
            </p>
            <div className="pt-2">
              <div className="px-4 py-2.5 rounded-xl text-xs font-extrabold text-amber-800 bg-amber-50 border border-amber-200">
                📍 Village & Small Town Dedicated
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
