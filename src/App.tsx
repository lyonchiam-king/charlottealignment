import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HighlightsStrip } from './components/HighlightsStrip';
import { StageSelector } from './components/StageSelector';
import { ServicesGrid } from './components/ServicesGrid';
import { AboutSection } from './components/AboutSection';
import { SocialProof } from './components/SocialProof';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [activeStage, setActiveStage] = useState<'Prenatal' | 'Postnatal' | 'General'>('Prenatal');
  const [selectedService, setSelectedService] = useState<string>('Private Reformer');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookStage = (stage: 'Prenatal' | 'Postnatal' | 'General') => {
    setActiveStage(stage);
    if (stage === 'Prenatal') setSelectedService('Prenatal Pilates');
    else if (stage === 'Postnatal') setSelectedService('Postnatal Course');
    else setSelectedService('Private Reformer');
    
    scrollToContact();
  };

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-[#2C2C2C]">
      
      {/* Top Bar Header */}
      <Header onBookClick={scrollToContact} />

      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onBookClick={scrollToContact} />

        {/* Highlights Strip */}
        <HighlightsStrip />

        {/* 2. Stage Selector (Interactive Piece) */}
        <StageSelector
          activeStage={activeStage}
          onSelectStage={setActiveStage}
          onBookStage={handleBookStage}
        />

        {/* 3. Services Card Grid */}
        <ServicesGrid
          activeStage={activeStage}
          onBookService={handleBookService}
        />

        {/* 4. About Charlotte & Signature Motherhood Timeline */}
        <AboutSection onBookClick={scrollToContact} />

        {/* 5. Social Proof & Instagram Feed */}
        <SocialProof />

        {/* 6. Location, Contact & Spreadsheet Booking Form */}
        <ContactSection
          initialStage={activeStage}
          initialService={selectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bar */}
      <FloatingMobileBar />

    </div>
  );
}
