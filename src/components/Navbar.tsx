
import React, { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 sm:py-3 bg-tattoo-darker/80 backdrop-blur-md shadow-md"
          : "py-3 sm:py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2 min-w-0">
          <div className="font-bold text-lg sm:text-xl md:text-2xl min-w-0">
            <span className="text-gradient-neon">TattooGPT</span>
            <div className="text-[10px] sm:text-xs text-muted-foreground truncate">
              Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover-neon">AiWebTools.Ai</a>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a 
            href="https://chatgpt.com/g/g-67cdd292ce2c8191a1274951c4dd950c-tattoo-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="neon" glowing>
              USE TATTOO GPT NOW
            </Button>
          </a>
          <a href="#faq" className="text-white hover-neon text-sm lg:text-base">
            FAQ
          </a>
          <a href="#disclaimer" className="text-white hover-neon text-sm lg:text-base">
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover-neon text-sm lg:text-base"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="md:hidden text-white p-2 hover-neon z-50 touch-manipulation"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-tattoo-darker/95 backdrop-blur-lg transition-all duration-300 ease-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ zIndex: 40, paddingTop: scrolled ? "60px" : "72px" }}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          <a 
            href="https://chatgpt.com/g/g-67cdd292ce2c8191a1274951c4dd950c-tattoo-gpt"
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full"
            onClick={closeMenu}
          >
            <Button variant="neon" glowing className="w-full text-base py-4">
              USE TATTOO GPT NOW
            </Button>
          </a>
          <a 
            href="#faq" 
            className="text-white text-lg py-3 hover-neon border-b border-white/10"
            onClick={closeMenu}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white text-lg py-3 hover-neon border-b border-white/10"
            onClick={closeMenu}
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-lg py-3 hover-neon border-b border-white/10"
            onClick={closeMenu}
          >
            More AI Tools
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
