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
    { id: "about", label: "Story" },
    { id: "podcast", label: "Podcast" },
    { id: "ventures", label: "Ventures" },
    { id: "books", label: "The 33 Laws" },
    { id: "dragons-den", label: "Dragon's Den" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          id="logo-btn"
          onClick={() => onNavClick("hero")}
          className="flex items-center focus:outline-none transition-transform duration-300 hover:scale-[1.03]"
        >
          <img 
            src="https://brainleadsgroup.com/assets/Logo-DwpbjegX.svg" 
            alt="Brain Leads Group Logo" 
            className="h-14 md:h-18 lg:h-20 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
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
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFBF00]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            id="book-speaking-btn"
            onClick={() => onNavClick("contact")}
            className="flex items-center space-x-2 bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black font-sans font-medium text-xs tracking-wider uppercase py-2.5 px-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm"
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
                      ? "text-[#FFBF00] font-semibold"
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
                className="w-full flex items-center justify-center space-x-2 bg-[#FFBF00] text-black font-sans font-medium text-sm tracking-wider uppercase py-3 px-6 rounded-full"
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
