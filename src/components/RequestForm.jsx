import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles, MapPin, Calendar, Clock, User, Phone, FileText, ShoppingBag } from 'lucide-react';
import { formatRequestMessage, getWhatsAppUrl, PHONE_NUMBER } from '../utils/whatsapp';

export default function RequestForm({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Market Assistance',
    pickup: '',
    destination: '',
    details: '',
    date: '',
    time: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selectedService prop if passed from ServiceCard button
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
      const formEl = document.getElementById('request-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePresetSelect = (presetService, presetDetails) => {
    setFormData((prev) => ({
      ...prev,
      service: presetService,
      details: presetDetails,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your Name and Phone Number so we can reach you!');
      return;
    }

    // Format formatted WhatsApp string
    const whatsappMessage = formatRequestMessage(formData);
    const whatsappUrl = getWhatsAppUrl(whatsappMessage);

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Set interactive success state
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      service: 'Market Assistance',
      pickup: '',
      destination: '',
      details: '',
      date: '',
      time: '',
      notes: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="request-form" className="py-20 bg-gradient-to-b from-stone-50 via-emerald-50/50 to-stone-50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-emerald-200/20 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-extrabold tracking-wide border border-emerald-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Fast & Friendly Assistance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tell Us What You Need
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            You don't need to figure everything out. Just fill in what you know, and we'll contact you immediately.
          </p>
        </div>

        {/* Preset Shortcuts */}
        <div className="mb-8">
          <span className="block text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Quick Fill Shortcuts (Tap to auto-select):
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => handlePresetSelect('Market Assistance', 'Need local groceries, fresh vegetables, or medicines from the market.')}
              className="text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 border border-slate-200/80 shadow-2xs transition-all"
            >
              🛒 Grocery / Market Order
            </button>
            <button
              type="button"
              onClick={() => handlePresetSelect('Pickup & Delivery', 'Pick up a package/item from one address and deliver to another.')}
              className="text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 border border-slate-200/80 shadow-2xs transition-all"
            >
              📦 Parcel / Item Delivery
            </button>
            <button
              type="button"
              onClick={() => handlePresetSelect('Local Ride', 'Transport to local Hospital or Clinic.')}
              className="text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 border border-slate-200/80 shadow-2xs transition-all"
            >
              🏥 Hospital Ride
            </button>
            <button
              type="button"
              onClick={() => handlePresetSelect('Local Ride', 'Transport to Railway Station or Bus Stand.')}
              className="text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 border border-slate-200/80 shadow-2xs transition-all"
            >
              🚉 Station / Bus Ride
            </button>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl relative">
          
          {isSubmitted ? (
            /* Friendly Success State */
            <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Request Received!
                </h3>
                <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto">
                  Thank you for contacting <strong className="text-slate-800 font-bold">doorsToDoors</strong>. We'll contact you shortly to confirm the details.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left max-w-lg mx-auto text-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Message Ready</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm">
                  We opened WhatsApp with your request details. If WhatsApp did not open automatically, click below:
                </p>
                <a
                  href={getWhatsAppUrl(formatRequestMessage(formData))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors mt-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  Open WhatsApp Chat
                </a>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
                >
                  Submit Another Request
                </button>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="px-6 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-sm"
                >
                  Call Us Directly ({PHONE_NUMBER})
                </a>
              </div>
            </div>
          ) : (
            /* Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Service Required Selector */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                  Service Required <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Market Assistance', 'Pickup & Delivery', 'Local Ride', 'Other'].map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, service: svc }))}
                      className={`px-3 py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center ${
                        formData.service === svc
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50 hover:border-emerald-300'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickup" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                    Pickup Location / Shop
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <input
                      type="text"
                      id="pickup"
                      name="pickup"
                      placeholder="e.g. Main Market / Shop Name / Home"
                      value={formData.pickup}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="destination" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                    Destination / Delivery Location
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4 text-amber-600" />
                    </div>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      placeholder="e.g. Village Address / Railway Station"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* What do you need? (Details) */}
              <div>
                <label htmlFor="details" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                  What do you need? <span className="text-slate-400 font-normal">(Describe your items, parcel, or ride)</span>
                </label>
                <div className="relative">
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    placeholder="e.g. Need 5kg sugar, 2L mustard oil from Sharma General Store. Or: Need to pick up a document parcel from Post Office."
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-y"
                  />
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="notes" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                  Additional Message / Instructions <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="notes"
                  name="notes"
                  placeholder="e.g. Call before coming, or bring change for 500 Rs note."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Request via WhatsApp</span>
                </button>
                <p className="text-center text-xs font-medium text-slate-400 mt-3">
                  ⚡ Clicking "Send Request" will open WhatsApp with your pre-filled request details.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
