import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import RequestForm from './components/RequestForm';
import CallUsBanner from './components/CallUsBanner';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import UseCases from './components/UseCases';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceType) => {
    setSelectedService(serviceType);
    const formElement = document.getElementById('request-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-white pb-14 md:pb-0">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Visually Impressive Hero Section */}
        <Hero />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Main Request Section ("Tell Us What You Need") */}
        <RequestForm selectedService={selectedService} />

        {/* 5. "Just Call Us" Banner */}
        <CallUsBanner />

        {/* 6. How It Works Timeline */}
        <HowItWorks />

        {/* 7. Why doorsToDoors */}
        <WhyUs />

        {/* 8. Use Cases Section */}
        <UseCases onSelectService={handleSelectService} />

        {/* 9. Bottom Request Call-To-Action */}
        <CTA />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating Desktop & Mobile Quick Action Bar */}
      <FloatingActions />
    </div>
  );
}
