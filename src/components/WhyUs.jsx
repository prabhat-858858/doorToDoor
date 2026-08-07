import React from 'react';
import { UserCheck, MapPin, Zap, Heart } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: UserCheck,
      title: '🤝 Personal Service',
      description: 'Talk directly with a real person who understands your local needs and village culture.',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      icon: MapPin,
      title: '📍 Local & Nearby',
      description: 'We focus on serving our local community and nearby market hubs with quick turnarounds.',
      color: 'bg-teal-50 text-teal-700 border-teal-200',
    },
    {
      icon: Zap,
      title: '⚡ Simple & Convenient',
      description: 'No complicated apps, shopping carts, or online account signups. Just tell us what you need.',
      color: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      icon: Heart,
      title: '❤️ Community First',
      description: "We're building a reliable service centered around people, trust, respect, and local convenience.",
      color: 'bg-rose-50 text-rose-700 border-rose-200',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-stone-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold text-emerald-700 tracking-widest uppercase bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Built For You
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose doorsToDoors?
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Designed specifically for local village & town residents who value simplicity, trust, and human connection.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} border flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
