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
          alt="Business education and entrepreneurship training at Brainleads Academy"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Deep, highly polished dark glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-zinc-950/95" />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 mt-12 md:mt-20">
        <div className="max-w-4xl">
          
          {/* ================= HERO WRITE-UP ================= */}
          <div className="space-y-6 sm:space-y-8 text-left">
            
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
              <p className="font-sans text-zinc-300 text-xs sm:text-sm md:text-base max-w-2xl font-normal leading-relaxed space-y-4">
                <span className="block">
                  Brainleads Academy exists to solve the real-world challenges entrepreneurs, professionals, and future leaders face every day.
                </span>
                <span className="block">
                  We provide practical education, proven strategies, and real-world insights that empower individuals to turn ideas into successful businesses, grow and scale with confidence, build organizations that thrive beyond their founders, and create lasting impact.
                </span>
                <span className="block">
                  Our vision is to become the trusted destination where people don't just learn business they gain the knowledge, skills, and systems to solve problems, make better decisions, and build businesses that succeed in a changing world.
                </span>
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
                onClick={() => onCtaclick("learning-path")}
                className="group w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-[#B48C35] text-white font-sans font-bold tracking-widest text-2xs sm:text-xs uppercase py-3.5 px-7 rounded shadow-md hover:bg-[#967128] transition-all duration-300"
              >
                <span>START LEARNING</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                id="hero-watch-tv-btn"
                href="https://youtube.com/@brainleadsacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center space-x-2.5 border border-[#B48C35] text-white font-sans font-bold tracking-widest text-2xs sm:text-xs uppercase py-3.5 px-7 rounded bg-[#B48C35]/5 hover:bg-[#B48C35]/15 transition-all duration-300"
              >
                <span>WATCH BRAINLEADS TV</span>
                <div className="w-4 h-4 rounded-full border border-[#B48C35] flex items-center justify-center bg-transparent group-hover:scale-105 transition-transform shrink-0">
                  <Play className="w-1.5 h-1.5 text-[#B48C35] fill-[#B48C35] ml-[1px]" />
                </div>
              </a>
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
