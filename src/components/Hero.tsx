import { motion } from "motion/react";
import { ArrowDown, MessageSquare, Play } from "lucide-react";
import heroBgImg from "../assets/images/nigerian_hero_1784038962505.jpg";

interface HeroProps {
  onCtaclick: (sectionId: string) => void;
}

export default function Hero({ onCtaclick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 py-24"
    >
      {/* Background Image filling and fitting the first section */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Nigerian business founders background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Deep, highly polished dark glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-zinc-950/90" />
      </div>

      <div className="max-w-4xl w-full mx-auto text-center z-10 space-y-10 mt-16">
        {/* Hero Headline Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight uppercase">
            BUILDING POWERFUL <br />
            <span className="relative inline-block my-2 px-4 py-1">
              <span className="text-black relative z-10 font-black">BRAND</span>
              <span className="absolute -inset-1.5 border-4 border-[#FFBF00] rounded-2xl bg-[#FFBF00] shadow-md -rotate-1" />
            </span> <br />
            SYSTEMS
          </h1>
        </motion.div>

        {/* Hero Paragraph Overlay */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-zinc-300 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Through <span className="text-white font-semibold">Brainleads Group</span>, we scale world-class holding brands like Brainleads Academy, Flyrinzo, and Sierce Air. Guided by Abiodun Brainard's professional philosophy that "Sales is Teaching", we empower entrepreneurs, simplify marketing through AI, and build solutions that make a lasting impact.
        </motion.p>

        {/* Hero CTAs Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
        >
          <button
            id="hero-contact-btn"
            onClick={() => onCtaclick("contact")}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#FFBF00] text-black font-sans font-bold tracking-wider text-xs uppercase py-4 px-8 rounded-full shadow-lg shadow-[#FFBF00]/20 hover:bg-white hover:text-black hover:shadow-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Partner With Us</span>
          </button>

          <button
            id="hero-explore-btn"
            onClick={() => onCtaclick("about")}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 border-2 border-white/20 hover:border-white text-white font-sans font-bold tracking-wider text-xs uppercase py-4 px-8 rounded-full bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Play className="w-4 h-4 text-[#FFBF00] fill-[#FFBF00]" />
            <span>Explore Our Story</span>
          </button>
        </motion.div>


      </div>

      {/* Floating Scroll Indicator */}
      <motion.button
        id="scroll-down-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => onCtaclick("about")}
        className="absolute bottom-6 flex flex-col items-center text-zinc-500 hover:text-[#FFBF00] transition-colors z-10"
      >
        <span className="font-sans text-[9px] tracking-widest uppercase mb-1">Scroll</span>
        <ArrowDown className="w-4 h-4 text-[#FFBF00]" />
      </motion.button>
    </section>
  );
}
