import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Ventures from "./components/Ventures";
import LawsShowcase from "./components/LawsShowcase";
import DragonsDen from "./components/DragonsDen";
import ContactForm from "./components/ContactForm";
import { ArrowUp, Github, Linkedin, Twitter, Sparkles, AlertTriangle } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor viewport to update active nav tab and scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top button
      setShowScrollTop(window.scrollY > 500);

      const sections = ["hero", "about", "podcast", "ventures", "books", "dragons-den", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-[#F9FAFB] text-zinc-900 min-h-screen relative font-sans selection:bg-[#FFBF00] selection:text-black antialiased">
      {/* Main Navigation */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onCtaclick={handleNavClick} />

        {/* Timeline Story Section */}
        <Timeline />

        {/* Ventures Grid Section */}
        <Ventures />

        {/* 33 Laws Bestselling Book Showcase Section */}
        <LawsShowcase />

        {/* youngest Dragon section */}
        <DragonsDen />

        {/* Press booking form */}
        <ContactForm />
      </main>

      {/* Footer Branding */}
      <footer className="bg-white border-t border-zinc-200 py-16 px-6 relative overflow-hidden text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center justify-center sm:justify-start">
              <img 
                src="https://brainleadsgroup.com/assets/Logo-DwpbjegX.svg" 
                alt="Brain Leads Group Logo" 
                className="h-10 md:h-12 lg:h-14 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-sans text-xs text-zinc-500 font-light max-w-sm leading-relaxed">
              Designed to reflect the sleek, visual modern style of Brainleads Group, powered by Abiodun Brainard's visionary leadership.
            </p>
          </div>

          {/* Social connections */}
          <div className="flex flex-col items-center sm:items-end space-y-4">
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/brainleads"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-[#FFBF00] hover:border-[#FFBF00]/50 transition-all"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com/company/brainleads-group"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-[#FFBF00] hover:border-[#FFBF00]/50 transition-all"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
            <span className="font-mono text-2xs text-zinc-400 uppercase tracking-widest block">
              © {new Date().getFullYear()} BRAINLEADS GROUP. ALL RIGHTS RESERVED.
            </span>
          </div>

        </div>
      </footer>

      {/* Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => handleNavClick("hero")}
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#FFBF00] text-black hover:bg-[#FFBF00]/80 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-90"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
