
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Card from "./Card";
import { X, Shield } from "lucide-react";

interface ConsentPopupProps {
  onAccept: () => void;
}

const ConsentPopup: React.FC<ConsentPopupProps> = ({ onAccept }) => {
  const { toast } = useToast();
  
  const handleAccept = () => {
    // Save the consent to localStorage
    localStorage.setItem("tattooGptConsent", "accepted");
    onAccept();
    toast({
      title: "Consent Accepted",
      description: "Welcome to TattooGPT!",
      duration: 3000,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto" neonBorder="cyan">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <Shield className="h-6 w-6 text-tattoo-cyan mr-2" />
            <h2 className="text-xl font-bold text-white">Disclaimer</h2>
          </div>
        </div>
        
        <div className="space-y-4 text-gray-300 mb-6">
          <p>
            <strong>Not Professional Medical or Legal Advice:</strong> TattooGPT is an AI assistant tool and does not provide professional medical, legal, or financial advice. The information provided is for general informational purposes only.
          </p>
          
          <p>
            <strong>Consult Professionals:</strong> Always consult with qualified tattoo artists, licensed piercers, healthcare providers, and legal professionals before making decisions regarding tattoos, piercings, aftercare, or business practices.
          </p>
          
          <p>
            <strong>Health Considerations:</strong> Tattooing and piercing involve health risks including but not limited to infection, allergic reactions, and scarring. Users should research thoroughly and understand all associated risks before proceeding with any body modification.
          </p>
          
          <p>
            <strong>Age Restrictions:</strong> Users must comply with minimum age requirements for tattoos and piercings in their jurisdiction. TattooGPT is not intended to facilitate services for individuals under legal age.
          </p>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={handleAccept}
            className="bg-gradient-to-r from-tattoo-cyan to-tattoo-purple hover:from-tattoo-purple hover:to-tattoo-cyan text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-neon-cyan"
            aria-label="I agree to the disclaimer"
          >
            I AGREE
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ConsentPopup;
