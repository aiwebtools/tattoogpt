
import React from "react";
import Button from "./Button";
import Animate from "./Animate";
import { ArrowRight, Paintbrush, Building, Syringe, Heart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 z-0 bg-cyber-grid bg-[length:80px_80px] opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-mystical-gradient opacity-30 animate-aurora"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-radial from-tattoo-neon/20 via-transparent to-transparent opacity-80 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-radial from-tattoo-cyan/15 via-transparent to-transparent opacity-70 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-tattoo-purple/10 via-transparent to-transparent opacity-60 blur-3xl animate-glow"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 xl:gap-32">
          <div className="w-full lg:w-1/2 space-y-12 lg:space-y-16">
            <Animate type="fade-in">
              <div className="flex flex-col space-y-8">
                <div className="relative">
                  <span className="bg-tattoo-dark/80 text-tattoo-neon px-6 py-3 rounded-full w-fit text-sm font-medium uppercase tracking-wider border border-tattoo-neon/40 backdrop-blur-xl shadow-neon animate-pulse-neon">
                    AI-Powered Tattoo Assistant
                  </span>
                </div>
                <h1 className="text-gradient font-extrabold leading-tight tracking-tight">
                  Your Ultimate Tattoo & Piercing AI Assistant
                </h1>
              </div>
            </Animate>
            
            <Animate type="fade-in" delay={200}>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                TattooGPT brings AI-powered precision to tattoo design, business planning, piercing guidance, and aftercare - elevating the entire tattoo experience from concept to healing.
              </p>
            </Animate>
            
            <Animate type="fade-in" delay={400}>
              <div className="flex flex-wrap gap-6 lg:gap-8">
                <a 
                  href="https://chatgpt.com/g/g-67cdd292ce2c8191a1274951c4dd950c-tattoo-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="neon" 
                    size="lg" 
                    glowing 
                    className="group text-lg px-8 py-4 lg:px-12 lg:py-6"
                  >
                    USE TATTOO GPT NOW
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                  </Button>
                </a>
                <a href="#features">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 lg:px-12 lg:py-6">
                    Explore Features
                  </Button>
                </a>
              </div>
            </Animate>
            
            <Animate type="fade-in" delay={600}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 pt-12 lg:pt-16">
                <div className="flex flex-col items-center text-center group hover-scale">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-tattoo-neon/10 flex items-center justify-center mb-4 shadow-neon group-hover:shadow-neon-strong transition-all duration-500">
                    <Paintbrush className="h-8 w-8 lg:h-10 lg:w-10 text-tattoo-neon" />
                  </div>
                  <span className="text-base lg:text-lg text-gray-300 font-medium">Tattoo Design</span>
                </div>
                <div className="flex flex-col items-center text-center group hover-scale">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-tattoo-cyan/10 flex items-center justify-center mb-4 shadow-neon-cyan group-hover:shadow-neon-strong transition-all duration-500">
                    <Building className="h-8 w-8 lg:h-10 lg:w-10 text-tattoo-cyan" />
                  </div>
                  <span className="text-base lg:text-lg text-gray-300 font-medium">Business Planning</span>
                </div>
                <div className="flex flex-col items-center text-center group hover-scale">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-tattoo-purple/10 flex items-center justify-center mb-4 shadow-neon-purple group-hover:shadow-neon-strong transition-all duration-500">
                    <Syringe className="h-8 w-8 lg:h-10 lg:w-10 text-tattoo-purple" />
                  </div>
                  <span className="text-base lg:text-lg text-gray-300 font-medium">Piercing Guide</span>
                </div>
                <div className="flex flex-col items-center text-center group hover-scale">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-tattoo-accent/10 flex items-center justify-center mb-4 shadow-neon group-hover:shadow-neon-strong transition-all duration-500">
                    <Heart className="h-8 w-8 lg:h-10 lg:w-10 text-tattoo-accent" />
                  </div>
                  <span className="text-base lg:text-lg text-gray-300 font-medium">Aftercare</span>
                </div>
              </div>
            </Animate>
          </div>
          
          <div className="w-full lg:w-1/2">
            <Animate type="slide-left">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-tattoo-neon via-tattoo-purple to-tattoo-cyan opacity-75 blur-2xl animate-mystical-glow"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-mystical">
                  <AspectRatio ratio={16 / 9} className="w-full">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/3dtGbNqXdPY?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&vq=hd1080" 
                      title="TattooGPT Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </AspectRatio>
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
