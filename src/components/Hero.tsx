import { motion } from "motion/react";
import { ArrowDown, BookOpen, Target, Users, Play, ArrowRight } from "lucide-react";
import heroBgImg from "../assets/images/nigerian_hero_1784038962505.jpg";

interface HeroProps {
  onCtaclick: (sectionId: string) => void;
}

export default function Hero({ onCtaclick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 py-28 sm:py-32 lg:py-24"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-zinc-950/95" />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 mt-12 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: HERO WRITE-UP ================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-3"
            >
              <span className="font-sans text-xs sm:text-sm tracking-[0.3em] text-white/90 uppercase font-extrabold block">
                WELCOME TO
              </span>
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black text-[#B48C35] tracking-tight uppercase leading-tight">
                BRAINLEADS ACADEMY
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                Learn. Grow. Lead. Build a Business That Lasts.
              </h2>
              <p className="font-sans text-zinc-300 text-xs sm:text-sm md:text-base max-w-2xl font-normal leading-relaxed">
                Brainleads Academy is a business education platform dedicated to equipping entrepreneurs, professionals, and future business leaders with practical knowledge, strategies, and the right mindset to create opportunities, lead with confidence, and achieve lasting success.
              </p>
            </motion.div>

            {/* Badges/Labels Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-wrap items-center gap-x-1 gap-y-3 pt-2 text-zinc-300"
            >
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-[#B48C35] shrink-0" />
                <span className="font-sans text-2xs sm:text-xs font-bold tracking-wider uppercase">
                  Practical Education
                </span>
              </div>
              
              <div className="h-4 w-[1px] bg-zinc-700/60 mx-3 hidden sm:block" />
              
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-[#B48C35] shrink-0" />
                <span className="font-sans text-2xs sm:text-xs font-bold tracking-wider uppercase">
                  Real World Strategies
                </span>
              </div>
              
              <div className="h-4 w-[1px] bg-zinc-700/60 mx-3 hidden sm:block" />
              
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#B48C35] shrink-0" />
                <span className="font-sans text-2xs sm:text-xs font-bold tracking-wider uppercase">
                  Lasting Impact
                </span>
              </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <button
                id="hero-start-learning-btn"
                onClick={() => onCtaclick("about")}
                className="group w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-[#B48C35] text-white font-sans font-bold tracking-widest text-2xs sm:text-xs uppercase py-3.5 px-7 rounded shadow-md hover:bg-[#967128] transition-all duration-300"
              >
                <span>START LEARNING</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-watch-tv-btn"
                onClick={() => onCtaclick("ventures")}
                className="group w-full sm:w-auto flex items-center justify-center space-x-2.5 border border-[#B48C35] text-white font-sans font-bold tracking-widest text-2xs sm:text-xs uppercase py-3.5 px-7 rounded bg-[#B48C35]/5 hover:bg-[#B48C35]/15 transition-all duration-300"
              >
                <span>WATCH BRAINLEADS TV</span>
                <div className="w-4 h-4 rounded-full border border-[#B48C35] flex items-center justify-center bg-transparent group-hover:scale-105 transition-transform shrink-0">
                  <Play className="w-1.5 h-1.5 text-[#B48C35] fill-[#B48C35] ml-[1px]" />
                </div>
              </button>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: GOLD CREST & INSPIRED QUOTE ================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center lg:border-l lg:border-zinc-800/60 lg:pl-10 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative max-w-xs flex items-center justify-center group hover:scale-[1.03] transition-transform duration-300"
            >
              <img 
                src="https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/PHOTO-2026-07-14-15-59-36.jpg" 
                alt="Brain Leads Group Logo" 
                className="h-24 md:h-28 lg:h-32 w-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Inspiration Quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col items-center max-w-sm space-y-2 px-4"
            >
              {/* Gold Quote Mark */}
              <span className="font-serif text-4xl leading-none text-[#B48C35] font-bold select-none h-4">
                “
              </span>
              
              <p className="font-sans text-white text-sm sm:text-base font-normal tracking-wide leading-relaxed">
                Knowledge creates opportunities, Action creates results.
              </p>
              
              {/* Gold Handwriting/Signature Sign */}
              <span className="font-signature text-3xl sm:text-4xl text-[#B48C35] tracking-wide mt-2 block">
                Abiodun Brainard
              </span>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.button
        id="scroll-down-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => onCtaclick("about")}
        className="absolute bottom-6 flex flex-col items-center text-zinc-500 hover:text-[#B48C35] transition-colors z-10"
      >
        <span className="font-sans text-[9px] tracking-widest uppercase mb-1">Scroll</span>
        <ArrowDown className="w-4 h-4 text-[#B48C35]" />
      </motion.button>
    </section>
  );
}
