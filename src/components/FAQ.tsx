
import React from "react";
import Card from "./Card";
import Animate from "./Animate";
import { Plus, Minus } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is TattooGPT and how does it work?",
      answer:
        "TattooGPT is an AI-powered assistant specifically designed for the tattoo and piercing industry. It helps create custom tattoo designs, develop business plans for tattoo shops, provide piercing studio guidelines, and offer personalized aftercare advice. It works by leveraging advanced AI to generate tailored responses based on industry best practices and user requirements.",
    },
    {
      question: "Can TattooGPT create custom tattoo designs?",
      answer:
        "Yes, TattooGPT can create unique tattoo design concepts based on your preferences for style, size, placement, color, and symbolic meaning. The AI provides detailed design descriptions that professional tattoo artists can use as inspiration or reference.",
    },
    {
      question: "Is the business planning feature suitable for existing tattoo shops?",
      answer:
        "Absolutely! While TattooGPT can help new studio owners create comprehensive business plans, it's equally valuable for established shops looking to optimize operations, expand services, improve marketing strategies, or ensure compliance with updated regulations.",
    },
    {
      question: "How accurate is the piercing advice provided by TattooGPT?",
      answer:
        "TattooGPT provides piercing guidance based on current industry standards and best practices. However, it's important to note that this should complement, not replace, advice from professional piercers with proper training and credentials. Always consult with a professional piercer before proceeding with any procedure.",
    },
    {
      question: "Can I use TattooGPT's aftercare plans for my specific tattoo?",
      answer:
        "TattooGPT can generate personalized aftercare guidance based on your tattoo's size, placement, and your skin type. However, you should always follow the specific instructions provided by your tattoo artist, as they have directly assessed your skin and the work performed.",
    },
    {
      question: "Is TattooGPT a replacement for professional tattoo artists or piercers?",
      answer:
        "No, TattooGPT is designed to be a complementary tool for professionals and clients, not a replacement. It enhances the work of skilled artists and piercers by providing additional resources, inspiration, and guidance, but the expertise and talent of human professionals is irreplaceable.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <Animate type="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-tattoo-dark text-tattoo-cyan px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider border border-tattoo-cyan/30">
              FAQ
            </span>
            <h2 className="text-gradient mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg">
              Everything you need to know about TattooGPT and how it can assist you with tattoo designs, business planning, piercing guidance, and aftercare.
            </p>
          </div>
        </Animate>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Animate key={index} type="fade-in" delay={index * 50}>
              <Card 
                className={`mb-4 transition-all duration-300 ${
                  openIndex === index ? "border-tattoo-cyan" : "border-white/10"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium pr-8">{faq.question}</h3>
                  <button 
                    className={`p-2 rounded-full ${
                      openIndex === index 
                        ? "bg-tattoo-cyan/20 text-tattoo-cyan" 
                        : "bg-tattoo-dark/50 text-gray-400"
                    }`}
                    aria-label={openIndex === index ? "Close answer" : "Show answer"}
                  >
                    {openIndex === index ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-white/10 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </Card>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
