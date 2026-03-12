
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-tattoo-darker/80 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl md:text-2xl">
            <span className="text-gradient-neon">TattooGPT</span>
            <div className="text-xs text-muted-foreground">
              Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover-neon">AiWebTools.Ai</a>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-67cdd292ce2c8191a1274951c4dd950c-tattoo-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="neon" glowing>
              USE TATTOO GPT NOW
            </Button>
          </a>
          <a href="#faq" className="text-white hover-neon">
            FAQ
          </a>
          <a href="#disclaimer" className="text-white hover-neon">
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover-neon"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover-neon"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-tattoo-darker/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-67cdd292ce2c8191a1274951c4dd950c-tattoo-gpt"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white py-2 hover-neon"
              onClick={() => setIsMenuOpen(false)}
            >
              USE TATTOO GPT NOW
            </a>
            <a 
              href="#faq" 
              className="text-white py-2 hover-neon"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white py-2 hover-neon"
              onClick={() => setIsMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="http://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white py-2 hover-neon"
              onClick={() => setIsMenuOpen(false)}
            >
              More AI Tools
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
