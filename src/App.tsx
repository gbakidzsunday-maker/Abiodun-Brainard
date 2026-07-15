import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MeetFounder from "./components/MeetFounder";
import Timeline from "./components/Timeline";
import Ventures from "./components/Ventures";
import LawsShowcase from "./components/LawsShowcase";
import DragonsDen from "./components/DragonsDen";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { ArrowUp, Github, Linkedin, Twitter, Sparkles, AlertTriangle } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor viewport to update active nav tab and scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top button
      setShowScrollTop(window.scrollY > 500);

      const sections = ["hero", "about", "ventures", "books", "dragons-den", "contact"];
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
    <div className="bg-[#FDFCFA] text-zinc-900 min-h-screen relative font-sans selection:bg-[#B48C35] selection:text-white antialiased">
      {/* Main Navigation */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onCtaclick={handleNavClick} />

        {/* Meet the Founder Section */}
        <MeetFounder onReadJourneyClick={() => handleNavClick("about")} />

        {/* Timeline Story Section */}
        <Timeline />

        {/* Ventures Grid Section */}
        <Ventures onNavClick={handleNavClick} />

        {/* 33 Laws Bestselling Book Showcase Section */}
        <LawsShowcase />

        {/* youngest Dragon section */}
        <DragonsDen />

        {/* Press booking form */}
        <ContactForm />
      </main>

      {/* Footer Branding Redesigned */}
      <Footer onNavClick={handleNavClick} />

      {/* Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => handleNavClick("hero")}
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#B48C35] text-white hover:bg-[#967128] rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
