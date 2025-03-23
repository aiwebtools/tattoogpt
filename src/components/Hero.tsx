
import React from "react";
import Button from "./Button";
import Animate from "./Animate";
import { ArrowRight, Paintbrush, Building, Syringe, Heart } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-cyber-grid bg-[length:50px_50px]"></div>
      <div className="absolute top-20 left-0 w-full h-[500px] bg-gradient-radial from-tattoo-neon/10 via-transparent to-transparent opacity-60"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-8">
            <Animate type="fade-in">
              <div className="flex flex-col space-y-4">
                <span className="bg-tattoo-dark text-tattoo-neon px-4 py-1 rounded-full w-fit text-sm font-medium uppercase tracking-wider border border-tattoo-neon/30">
                  AI-Powered Tattoo Assistant
                </span>
                <h1 className="text-gradient font-extrabold leading-tight">
                  Your Ultimate Tattoo & Piercing AI Assistant
                </h1>
              </div>
            </Animate>
            
            <Animate type="fade-in" delay={200}>
              <p className="text-lg text-gray-300">
                TattooGPT brings AI-powered precision to tattoo design, business planning, piercing guidance, and aftercare - elevating the entire tattoo experience from concept to healing.
              </p>
            </Animate>
            
            <Animate type="fade-in" delay={400}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://chatgpt.com/g/g-67cdd292ce2c8191a1274951c4dd950c-tattoo-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="neon" 
                    size="lg" 
                    glowing 
                    className="group"
                  >
                    USE TATTOO GPT NOW
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="#features">
                  <Button variant="outline" size="lg">
                    Explore Features
                  </Button>
                </a>
              </div>
            </Animate>
            
            <Animate type="fade-in" delay={600}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-tattoo-neon/10 flex items-center justify-center mb-2">
                    <Paintbrush className="h-6 w-6 text-tattoo-neon" />
                  </div>
                  <span className="text-sm text-gray-300">Tattoo Design</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-tattoo-cyan/10 flex items-center justify-center mb-2">
                    <Building className="h-6 w-6 text-tattoo-cyan" />
                  </div>
                  <span className="text-sm text-gray-300">Business Planning</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-tattoo-purple/10 flex items-center justify-center mb-2">
                    <Syringe className="h-6 w-6 text-tattoo-purple" />
                  </div>
                  <span className="text-sm text-gray-300">Piercing Guide</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-tattoo-accent/10 flex items-center justify-center mb-2">
                    <Heart className="h-6 w-6 text-tattoo-accent" />
                  </div>
                  <span className="text-sm text-gray-300">Aftercare</span>
                </div>
              </div>
            </Animate>
          </div>
          
          <div className="w-full lg:w-1/2">
            <Animate type="slide-left">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-tattoo-neon via-tattoo-purple to-tattoo-cyan opacity-70 blur-lg"></div>
                <div className="relative overflow-hidden rounded-xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="TattooGPT Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
