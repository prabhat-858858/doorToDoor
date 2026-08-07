import React from 'react';
import { PhoneCall, ShieldCheck, Smile, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: PhoneCall,
      title: 'Tell Us',
      description:
        'Tell us what you need through WhatsApp, phone, or our request form. No complex app registration needed.',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-700',
    },
    {
      number: '02',
      icon: ShieldCheck,
      title: 'We Handle It',
      description:
        'We coordinate the market purchase, item pickup, delivery, or local ride for you swiftly and reliably.',
      color: 'from-teal-500 to-emerald-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      textColor: 'text-teal-700',
    },
    {
      number: '03',
      icon: Smile,
      title: 'You Relax',
      description:
        'Your task gets done without the hassle of going out yourself. Sit back, relax, and pay upon completion.',
      color: 'from-emerald-600 to-green-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold text-emerald-700 tracking-widest uppercase bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How doorsToDoors Works
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Getting things done in your local community has never been easier.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Badge Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.number}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl ${step.bgColor} ${step.textColor} border ${step.borderColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow indicator for desktop between steps 1 & 2, 2 & 3 */}
                {idx < 2 && (
                  <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center shadow-md">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
