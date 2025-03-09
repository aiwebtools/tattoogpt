
import React from "react";
import Button from "./Button";
import { ExternalLink, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-tattoo-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="/" className="inline-block">
                <h3 className="text-2xl font-bold text-gradient-neon">TattooGPT</h3>
                <p className="text-sm text-gray-400">Presented by AiWebTools.Ai</p>
              </a>
            </div>
            
            <p className="text-gray-300 max-w-md mb-6">
              Your all-in-one AI tattoo & piercing assistant providing custom designs, 
              business planning, piercing guidance, and personalized aftercare advice.
            </p>
            
            <a 
              href="https://chatgpt.com/g/g-67cdd292ce2c8191a1274951c4dd950c-tattoo-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="neon" className="mb-4">
                USE TATTOO GPT NOW
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-gray-300 hover-neon">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover-neon">
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="http://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover-neon"
                >
                  More AI Tools
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover-neon"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover-neon"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:4758008096" className="text-gray-300 hover-neon flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-300 hover-neon flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="http://www.AiWebTools.AI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="rounded-full bg-gradient-to-r from-tattoo-neon to-tattoo-purple p-[1px]">
                  <div className="bg-tattoo-darker rounded-full px-4 py-2 text-white hover:bg-transparent transition-colors duration-300">
                    More AI Tools
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {year} {" "}
            <a href="http://www.AiWebTools.AI" target="_blank" rel="noopener noreferrer" className="hover-neon">
              AI WEB TOOLS LLC
            </a> 
            {" "} All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-gray-400 hover-neon"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-gray-400 hover-neon"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
