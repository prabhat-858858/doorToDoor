import React from 'react';
import { ShoppingBag, Package, Car } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { PRESET_MESSAGES } from '../utils/whatsapp';

export default function Services({ onSelectService }) {
  const servicesList = [
    {
      serviceKey: 'Market Assistance',
      icon: ShoppingBag,
      title: 'Market Assistance',
      badgeText: 'Popular',
      description:
        "Need something from the market but don't have time to go? Just tell us what you need. We'll arrange it and bring it to your doorstep.",
      ctaText: 'Request Market Help',
      whatsappMessage: PRESET_MESSAGES.market,
    },
    {
      serviceKey: 'Pickup & Delivery',
      icon: Package,
      title: 'Pickup & Delivery',
      badgeText: 'Fast & Secure',
      description:
        "Need a parcel, document, package, or item picked up and delivered somewhere? Tell us where it needs to go and we'll handle it.",
      ctaText: 'Request Delivery',
      whatsappMessage: PRESET_MESSAGES.delivery,
    },
    {
      serviceKey: 'Local Ride',
      icon: Car,
      title: 'Local Rides',
      badgeText: 'Comfortable',
      description:
        'Need to go somewhere nearby? We can take you to your destination and, when needed, bring you back.',
      tags: ['Market', 'Hospital', 'Railway Station', 'Bank', 'Nearby Town', 'Local Destinations'],
      ctaText: 'Request a Ride',
      whatsappMessage: PRESET_MESSAGES.ride,
    },
  ];

  return (
    <section id="services" className="py-20 bg-stone-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold text-emerald-700 tracking-widest uppercase bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Our Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Can We Help You?
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Simple services for your everyday needs. No complicated processes, just straightforward personal help.
          </p>
        </div>

        {/* Grid of 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
