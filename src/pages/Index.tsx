
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Disclaimer from "../components/Disclaimer";
import Footer from "../components/Footer";
import ConsentPopup from "../components/ConsentPopup";

const Index = () => {
  const [showConsentPopup, setShowConsentPopup] = useState(false);
  
  useEffect(() => {
    // Update page title
    document.title = "TattooGPT - AI Tattoo & Piercing Assistant";
    
    // Check if consent has been given
    const hasConsent = localStorage.getItem("tattooGptConsent") === "accepted";
    if (!hasConsent) {
      setShowConsentPopup(true);
    }
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click event listeners to all anchor tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    // Cleanup event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);

  const handleConsentAccept = () => {
    setShowConsentPopup(false);
  };

  return (
    <div className="min-h-screen bg-tattoo-darker text-white">
      {showConsentPopup && <ConsentPopup onAccept={handleConsentAccept} />}
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
