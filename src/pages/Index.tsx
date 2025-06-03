
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
    document.title = "TattooGPT - AI Tattoo Design Tool | Best AI Tattoo Generator & Piercing Guide";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'TattooGPT - The ultimate AI tattoo design generator. Create custom tattoo designs, get piercing guidance, tattoo business planning, and aftercare advice. Free AI tattoo tool for artists and enthusiasts.');
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
      
      {/* SEO Hidden Content for Better Indexing - Tattoo Market Focused */}
      <div className="sr-only">
        <h1>TattooGPT - AI Tattoo Design Generator and Complete Tattoo Assistant</h1>
        <p>TattooGPT is the ultimate AI-powered tattoo design generator that creates custom tattoo designs, provides piercing guidance, tattoo business planning, and comprehensive aftercare instructions. Perfect for tattoo artists, tattoo enthusiasts, piercing professionals, and tattoo shop owners.</p>
        
        <h2>AI Tattoo Design Generator - Create Custom Tattoo Designs</h2>
        <p>Generate unique tattoo designs with our advanced AI tattoo generator. Create custom tattoo art for any style including traditional, realistic, minimalist, tribal, geometric, watercolor, and blackwork tattoos. Perfect for tattoo sleeves, small tattoos, and large pieces.</p>
        
        <h2>Piercing Guide and Safety Information</h2>
        <p>Professional piercing guidance covering ear piercings, nose piercings, lip piercings, body piercings, and facial piercings. Get expert advice on piercing aftercare, jewelry selection, and safety protocols.</p>
        
        <h2>Tattoo Business Planning and Shop Management</h2>
        <p>Comprehensive tattoo business planning tools for opening and managing tattoo shops. Includes financial planning, equipment recommendations, legal compliance, marketing strategies, and customer management systems.</p>
        
        <h2>Tattoo Aftercare and Healing Instructions</h2>
        <p>Personalized tattoo aftercare instructions based on tattoo size, placement, and skin type. Learn proper tattoo healing techniques, recommended aftercare products, and troubleshooting for common tattoo healing issues.</p>
        
        <h3>Popular Tattoo Styles and Designs</h3>
        <p>Explore tattoo ideas for traditional tattoos, realistic tattoos, minimalist tattoos, geometric tattoos, tribal tattoos, watercolor tattoos, blackwork tattoos, fine line tattoos, and custom tattoo designs. Get inspiration for tattoo sleeves, back pieces, chest tattoos, arm tattoos, leg tattoos, and small delicate tattoos.</p>
        
        <h3>Tattoo Industry Keywords</h3>
        <p>Tattoo artist tools, tattoo machine recommendations, tattoo ink selection, tattoo stencils, tattoo flash art, tattoo portfolio development, tattoo apprenticeship guidance, tattoo convention preparation, tattoo licensing requirements, tattoo health and safety standards, sterilization protocols, cross-contamination prevention.</p>
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
