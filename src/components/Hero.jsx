import React from 'react';
import { Package, MessageSquare, Phone, ShieldCheck, MapPin, Store, Home, Bike, Sparkles, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/70 via-stone-50 to-stone-50">
      {/* Decorative background glow shapes */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-200/40 to-teal-100/30 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-amber-100/50 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>Local • Personal • Reliable</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Your Local Market, <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 bg-clip-text text-transparent">
                Just One Call Away.
              </span>
            </h1>

            {/* Subheading & Description */}
            <p className="text-lg sm:text-xl font-bold text-slate-800 max-w-2xl mx-auto lg:mx-0">
              Tell us what you need. We'll take care of the rest.
            </p>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From getting something from the local market to delivering a parcel or taking you where you need to go — <strong className="text-slate-800 font-semibold">doorsToDoors</strong> is here to make everyday tasks easier.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#request-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Package className="w-5 h-5" />
                <span>Request a Service</span>
              </a>

              <a
                href={getWhatsAppUrl(PRESET_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-base font-bold text-emerald-800 bg-emerald-100/90 hover:bg-emerald-200/90 border border-emerald-300/80 shadow-xs hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Direct Phone CTA Bar */}
            <div className="pt-3 flex items-center justify-center lg:justify-start">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm text-slate-800 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Phone Call</span>
                  <span className="font-extrabold text-sm sm:text-base tracking-wide text-slate-900 group-hover:text-emerald-700">
                    Call {PHONE_NUMBER}
                  </span>
                </div>
              </a>
            </div>

            {/* Micro Feature Bullet Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-2 border-t border-slate-200/60 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No complex apps</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Personal helper</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pay on delivery</span>
              </div>
            </div>

          </div>

          {/* Right Visual Flow Diagram / Illustration Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6">
              
              {/* Top Title Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">How We Serve You</span>
                </div>
                <span className="text-xs font-semibold text-slate-400">Village & Town Service</span>
              </div>

              {/* Visual Process Timeline Card */}
              <div className="space-y-4">
                
                {/* Step A: Market */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-xs">
                    <Store className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-bold text-amber-700 uppercase tracking-wide">1. Local Market</span>
                    <p className="text-sm font-bold text-slate-800 truncate">Shops, Groceries & Medicines</p>
                    <p className="text-xs text-slate-500">Pick up anything you need</p>
                  </div>
                </div>

                {/* Connecting Arrow Icon */}
                <div className="flex justify-center -my-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shadow-xs border border-emerald-200">
                    ↓
                  </div>
                </div>

                {/* Step B: doorsToDoors Delivery Runner */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0">
                    <Bike className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-extrabold uppercase tracking-wide text-emerald-100">2. doorsToDoors Helper</span>
                    <p className="text-sm font-extrabold text-white truncate">Personal Assistant & Ride</p>
                    <p className="text-xs text-emerald-100">Fast, safe & trustworthy care</p>
                  </div>
                </div>

                {/* Connecting Arrow Icon */}
                <div className="flex justify-center -my-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shadow-xs border border-emerald-200">
                    ↓
                  </div>
                </div>

                {/* Step C: Customer Home */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs">
                    <Home className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-bold text-emerald-700 uppercase tracking-wide">3. Your Doorstep</span>
                    <p className="text-sm font-bold text-slate-800 truncate">Delivered or Transported</p>
                    <p className="text-xs text-slate-500">Zero hassle, absolute ease</p>
                  </div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-600 bg-amber-50/80 py-2.5 px-4 rounded-xl border border-amber-200/80">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Serving all local villages & nearby market centers</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
