
import React from "react";
import Card from "./Card";
import Animate from "./Animate";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Tattoo Artist, Ink Evolution Studio",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "TattooGPT has revolutionized my design process. I can quickly generate concept art based on client ideas and refine them into unique pieces. It's like having a skilled apprentice available 24/7.",
      stars: 5,
    },
    {
      name: "Sophia Chen",
      role: "Studio Owner, Phoenix Ink",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "The business planning feature saved me months of research. From equipment lists to marketing strategies, TattooGPT helped me launch my studio with confidence and compliance.",
      stars: 5,
    },
    {
      name: "Marcus Rivera",
      role: "Professional Piercer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote:
        "As a piercer, I rely on TattooGPT for up-to-date hygiene protocols and client education. It's become an essential tool for maintaining our studio's impeccable safety standards.",
      stars: 5,
    },
    {
      name: "Jade Williams",
      role: "First-time Tattoo Client",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      quote:
        "TattooGPT helped me design my first tattoo and provided detailed aftercare instructions. I felt informed and confident throughout the entire process thanks to this amazing tool!",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 z-0 bg-cyber-grid bg-[length:50px_50px] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Animate type="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-tattoo-dark text-tattoo-purple px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider border border-tattoo-purple/30">
              Testimonials
            </span>
            <h2 className="text-gradient mt-4 mb-6">
              Trusted by Professionals & Clients
            </h2>
            <p className="text-gray-300 text-lg">
              Hear what tattoo artists, studio owners, piercers, and clients have to say about their experience using TattooGPT.
            </p>
          </div>
        </Animate>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Animate key={index} type="fade-in" delay={index * 100}>
              <Card glassEffect className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-tattoo-neon text-tattoo-neon" />
                    ))}
                  </div>
                  
                  <div className="mb-6 relative">
                    <Quote className="absolute top-0 left-0 h-8 w-8 text-tattoo-neon/20 -translate-x-4 -translate-y-4" />
                    <p className="text-gray-300 italic relative z-10">{testimonial.quote}</p>
                  </div>
                  
                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-white/10"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
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

export default Testimonials;
