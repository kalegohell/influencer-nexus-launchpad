
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DashboardShowcase from '../components/DashboardShowcase';
import ProcessSteps from '../components/ProcessSteps';
import ContentStrategy from '../components/ContentStrategy';
import Analytics from '../components/Analytics';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <DashboardShowcase />
      <ProcessSteps />
      <ContentStrategy />
      <Analytics />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
