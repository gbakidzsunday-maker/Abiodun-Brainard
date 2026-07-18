import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "Journey" },
    { id: "ventures", label: "Learn" },
    { id: "books", label: "Featured" },
    { id: "dragons-den", label: "Media" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-zinc-200/80 shadow-sm ${
        isScrolled ? "py-3" : "py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          id="logo-btn"
          onClick={() => onNavClick("hero")}
          className="flex items-center justify-center focus:outline-none transition-transform duration-300 hover:scale-[1.03] max-h-12 overflow-hidden"
        >
          <img 
            src="https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/PHOTO-2026-07-14-15-59-36-removebg-preview.png" 
            alt="Brain Leads Group Logo" 
            className="h-7 md:h-9 max-w-[130px] md:max-w-[160px] w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`font-sans text-sm tracking-wider uppercase transition-colors relative py-1 ${
                  activeSection === item.id
                    ? "text-zinc-900 font-bold"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B48C35]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            id="book-speaking-btn"
            onClick={() => onNavClick("contact")}
            className="flex items-center space-x-2 bg-[#B48C35] hover:bg-[#B48C35]/90 text-white font-sans font-medium text-xs tracking-wider uppercase py-2.5 px-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>Book Speaking</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-500 hover:text-zinc-900 p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 border-b border-zinc-200 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => {
                    onNavClick(item.id);
                    setIsOpen(false);
                  }}
                  className={`font-sans text-lg tracking-wider uppercase text-left py-2 ${
                    activeSection === item.id
                      ? "text-[#B48C35] font-semibold"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                id="mobile-book-speaking-btn"
                onClick={() => {
                  onNavClick("contact");
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 bg-[#B48C35] text-white font-sans font-medium text-sm tracking-wider uppercase py-3 px-6 rounded-full"
              >
                <span>Book Speaking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
