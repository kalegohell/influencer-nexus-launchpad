
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Analytics from '../components/Analytics';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      <Navbar />
      <Hero />
      <Features />
      <Analytics />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
