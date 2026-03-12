
import React from "react";
import { Heart, Mail, Phone, ExternalLink } from "lucide-react";
import Animate from "./Animate";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-tattoo-dark pb-10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tattoo-neon/50 to-transparent"></div>
      
      <div className="container pt-16">
        {/* Small Disclaimer */}
        <div className="mb-12">
          <Animate type="fade-in">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-sm text-gray-400 bg-tattoo-darker/50 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
                <strong>Disclaimer:</strong> This website and TattooGPT are for informational, educational, and research purposes only. Not intended as professional medical, legal, or business advice.
              </p>
            </div>
          </Animate>
        </div>

        {/* Image Section */}
        <div className="mb-16">
          <Animate type="fade-in">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-tattoo-neon via-tattoo-purple to-tattoo-cyan opacity-50 blur-lg"></div>
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-tattoo-machine-with-the-tex_8oj_X.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true" 
                  alt="TattooGPT" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </Animate>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient-neon">TattooGPT</h3>
            <p className="text-gray-400">Your AI-powered tattoo and piercing assistant - from custom designs to aftercare, we've got you covered.</p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://chatgpt.com/g/g-67cdd292ce2c8191a1274951c4dd950c-tattoo-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-neon"
                aria-label="Use TattooGPT Now"
              >
                USE NOW
              </a>
              <span className="text-gray-600">•</span>
              <a href="#faq" className="hover-neon">FAQ</a>
              <span className="text-gray-600">•</span>
              <a href="#disclaimer" className="hover-neon">Disclaimer</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover-cyan flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  More AI Tools
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover-cyan flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover-cyan flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-gray-400 hover-cyan flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover-cyan flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">More</h4>
            <div>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-tattoo-cyan to-tattoo-purple rounded-full text-white font-medium hover:from-tattoo-purple hover:to-tattoo-cyan transition-all duration-300"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover-neon">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Made with <Heart className="h-3 w-3 inline text-tattoo-neon" /> by AI Web Tools
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
