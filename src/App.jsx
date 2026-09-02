import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DynoSection from './components/DynoSection';
import CalculatorWizard from './components/CalculatorWizard';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col selection:bg-rose-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <DynoSection />
        <CalculatorWizard />
        <GallerySection />
        <Testimonials />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
