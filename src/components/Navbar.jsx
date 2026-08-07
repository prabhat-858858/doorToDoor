import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-3 border-b border-slate-200/80'
          : 'bg-stone-50/90 backdrop-blur-md py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
              <ShoppingBag className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-900 bg-clip-text text-transparent">
                doors<span className="text-emerald-600">To</span>Doors
              </span>
              <span className="block text-[10px] font-semibold tracking-wider text-emerald-700 uppercase -mt-1">
                Your Local Market
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <a
              href={getWhatsAppUrl(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-slate-800 font-semibold bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
            <a
              href={getWhatsAppUrl(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-white font-bold bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
