
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
    // Update page title for SEO
    document.title = "AI Web Tools - TattooGPT | Best AI Tools for Tattoo Design & Business Planning";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the best AI web tools at AIWebTools.AI. TattooGPT - Your ultimate AI-powered tattoo design, piercing guidance, and business planning assistant. Free AI tools for professionals and enthusiasts.');
    }
    
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
      
      {/* SEO Hidden Content for Better Indexing */}
      <div className="sr-only">
        <h1>AI Web Tools - Best AI Tools Collection</h1>
        <p>AIWebTools.AI offers the most comprehensive collection of AI tools including TattooGPT for tattoo design, piercing guidance, and business planning. Discover free AI tools that revolutionize your creative and business processes.</p>
        <h2>TattooGPT - AI Tattoo Design Tool</h2>
        <p>Professional AI-powered tattoo design generator and piercing guidance system. Create custom tattoo designs, get piercing advice, and plan your tattoo business with artificial intelligence.</p>
      </div>
      
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
