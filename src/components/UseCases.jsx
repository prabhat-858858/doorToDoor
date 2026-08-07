import React from 'react';
import { ShoppingCart, PackageCheck, Stethoscope, Train, Repeat, Home, ArrowUpRight } from 'lucide-react';

export default function UseCases({ onSelectService }) {
  const situations = [
    {
      icon: ShoppingCart,
      emoji: '🛒',
      title: "Can't Go to the Market?",
      description: "We'll get what you need.",
      detail: 'Groceries, fresh vegetables, daily essentials, or shop orders brought right to your door.',
      serviceType: 'Market Assistance',
      color: 'border-amber-200 bg-amber-50/50 hover:bg-amber-50',
    },
    {
      icon: PackageCheck,
      emoji: '📦',
      title: 'Need Something Delivered?',
      description: "We'll pick it up and deliver it.",
      detail: 'Parcels, documents, keys, tools, or items safely moved from point A to point B.',
      serviceType: 'Pickup & Delivery',
      color: 'border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50',
    },
    {
      icon: Stethoscope,
      emoji: '🏥',
      title: 'Need to Go to the Hospital?',
      description: 'Request a local ride.',
      detail: 'Safe, compassionate transportation for clinic visits, checkups, or hospital emergencies.',
      serviceType: 'Local Ride',
      color: 'border-rose-200 bg-rose-50/50 hover:bg-rose-50',
    },
    {
      icon: Train,
      emoji: '🚉',
      title: 'Going to the Railway Station?',
      description: "We'll take you there.",
      detail: 'On-time rides to railway stations, bus stands, or neighboring town transport hubs.',
      serviceType: 'Local Ride',
      color: 'border-blue-200 bg-blue-50/50 hover:bg-blue-50',
    },
    {
      icon: Repeat,
      emoji: '🔄',
      title: 'Need a Round Trip?',
      description: "We'll take you and bring you back.",
      detail: 'Complete round trips for bank visits, official work, or market shopping.',
      serviceType: 'Local Ride',
      color: 'border-purple-200 bg-purple-50/50 hover:bg-purple-50',
    },
    {
      icon: Home,
      emoji: '🏠',
      title: 'Need Something at Home?',
      description: 'Tell us what you need.',
      detail: 'From urgent gas cylinder pickups to local errands — just give us a call.',
      serviceType: 'Market Assistance',
      color: 'border-teal-200 bg-teal-50/50 hover:bg-teal-50',
    },
  ];

  return (
    <section className="py-20 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold text-emerald-700 tracking-widest uppercase bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Real Everyday Scenarios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We're Here When You Need Us
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Common situations where doorsToDoors makes your life easier.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((item) => (
            <div
              key={item.title}
              onClick={() => onSelectService(item.serviceType)}
              className={`group cursor-pointer bg-white rounded-3xl p-6 border ${item.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-extrabold text-emerald-700">
                  {item.description}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-emerald-600">
                <span>Request {item.serviceType}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
