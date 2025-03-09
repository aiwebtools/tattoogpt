
import React from "react";
import Card from "./Card";
import Animate from "./Animate";
import { 
  Paintbrush, 
  Building, 
  Syringe, 
  Heart, 
  Palette, 
  Layers, 
  History, 
  Sparkles, 
  BarChart, 
  Presentation, 
  ShieldCheck, 
  BadgeCheck, 
  ShieldAlert, 
  Database, 
  Users, 
  ClipboardList
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Tattoo Design & Art Generation",
      description: "Create unique tattoo designs with expert-level detail and precision.",
      icon: <Paintbrush className="h-10 w-10 text-tattoo-neon" />,
      color: "neon",
      subFeatures: [
        { title: "Custom Designs", icon: <Palette className="h-5 w-5" /> },
        { title: "Realistic Mockups", icon: <Layers className="h-5 w-5" /> },
        { title: "Historical Symbolism", icon: <History className="h-5 w-5" /> },
        { title: "Artist Collaboration", icon: <Sparkles className="h-5 w-5" /> },
      ],
    },
    {
      title: "Tattoo Shop Business Planning",
      description: "Comprehensive business plans for starting or expanding your tattoo studio.",
      icon: <Building className="h-10 w-10 text-tattoo-cyan" />,
      color: "cyan",
      subFeatures: [
        { title: "Financial Planning", icon: <BarChart className="h-5 w-5" /> },
        { title: "Shop Layout Design", icon: <Presentation className="h-5 w-5" /> },
        { title: "Legal Compliance", icon: <ShieldCheck className="h-5 w-5" /> },
        { title: "Marketing Strategy", icon: <BadgeCheck className="h-5 w-5" /> },
      ],
    },
    {
      title: "Piercing Studio Guidelines",
      description: "Expert advice on piercing procedures, hygiene, and studio setup.",
      icon: <Syringe className="h-10 w-10 text-tattoo-purple" />,
      color: "purple",
      subFeatures: [
        { title: "Sterilization Protocols", icon: <ShieldAlert className="h-5 w-5" /> },
        { title: "Equipment Recommendations", icon: <Database className="h-5 w-5" /> },
        { title: "Client Consultation", icon: <Users className="h-5 w-5" /> },
        { title: "Safety Standards", icon: <ClipboardList className="h-5 w-5" /> },
      ],
    },
    {
      title: "Personalized Aftercare",
      description: "Tailored healing guidance based on tattoo size, placement, and skin type.",
      icon: <Heart className="h-10 w-10 text-tattoo-accent" />,
      color: "primary",
      subFeatures: [
        { title: "Day-by-Day Guidance", icon: <ClipboardList className="h-5 w-5" /> },
        { title: "Product Recommendations", icon: <ShieldCheck className="h-5 w-5" /> },
        { title: "Troubleshooting", icon: <ShieldAlert className="h-5 w-5" /> },
        { title: "Long-Term Care", icon: <Heart className="h-5 w-5" /> },
      ],
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-tattoo-darker to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-tattoo-darker to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <Animate type="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gradient mb-6">
              Complete Tattoo & Piercing AI Assistant
            </h2>
            <p className="text-gray-300 text-lg">
              TattooGPT combines cutting-edge AI with tattoo expertise to deliver comprehensive support 
              across all aspects of tattoo and piercing art, business, and aftercare.
            </p>
          </div>
        </Animate>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Animate key={index} type="fade-in" delay={index * 100}>
              <Card 
                glassEffect 
                neonBorder={feature.color as "neon" | "cyan" | "purple" | "none"}
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex items-start">
                    <div className={`p-3 rounded-lg bg-tattoo-dark mr-4`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    {feature.subFeatures.map((subFeature, subIndex) => (
                      <div 
                        key={subIndex} 
                        className="flex items-center p-3 rounded-lg bg-tattoo-darker/50 border border-white/5"
                      >
                        <div className="mr-3 text-gray-300">
                          {subFeature.icon}
                        </div>
                        <span className="text-sm font-medium">{subFeature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
