import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  badgeText,
  tags,
  ctaText,
  whatsappMessage,
  serviceKey,
  onSelectService,
}) {
  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      <div>
        {/* Top Header with Icon & Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-100 to-teal-50 text-emerald-700 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            <Icon className="w-7 h-7" />
          </div>
          {badgeText && (
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 uppercase tracking-wide">
              {badgeText}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Optional Tag Pills (e.g. for Local Rides examples) */}
        {tags && tags.length > 0 && (
          <div className="mb-6 pt-2 border-t border-slate-100">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Popular Destinations:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  📍 {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
        <button
          onClick={() => onSelectService(serviceKey)}
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-all border border-slate-200/60"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 text-emerald-600" />
        </button>

        <a
          href={getWhatsAppUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-3 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition-all"
          title="Quick WhatsApp message"
        >
          <MessageSquare className="w-4.5 h-4.5" />
        </a>
      </div>
    </div>
  );
}
