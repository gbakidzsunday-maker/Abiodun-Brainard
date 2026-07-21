import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface MeetFounderProps {
  onReadJourneyClick: () => void;
}

export default function MeetFounder({ onReadJourneyClick }: MeetFounderProps) {
  return (
    <section
      id="meet-founder"
      className="py-16 md:py-24 bg-[#FDFCFA] border-t border-zinc-100 relative overflow-hidden px-6"
    >
      {/* Background elegant element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#B48C35]/3 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Portrait Image with sleek, custom border */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-[1.5/1] lg:aspect-[4/3] rounded-lg overflow-hidden shadow-xl border border-zinc-200/50 group"
            >
              <img
                src="https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/PHOTO-2026-07-20-07-07-25.jpg"
                alt="Abiodun Brainard"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle visual gradient edge overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* RIGHT: High-class write-up arranged exactly as shown */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <span className="font-sans text-xs sm:text-sm tracking-[0.25em] text-[#B48C35] uppercase font-black block">
                MEET THE FOUNDER
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-none uppercase">
                Abiodun Brainard
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans bg-[#B48C35] text-white text-xs sm:text-sm md:text-base font-semibold tracking-wide leading-relaxed px-5 py-3 rounded-lg shadow-sm inline-block border border-[#9E7728]"
            >
              Founder, Brainleads Group
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-zinc-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl"
            >
              Abiodun Brainard is passionate about helping entrepreneurs and professionals unlock their full potential through practical business education, real world strategies, and a growth mindset.
            </motion.p>

            {/* Read Journey CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <button
                onClick={onReadJourneyClick}
                className="group inline-flex items-center space-x-2.5 border border-[#B48C35] hover:bg-[#B48C35]/5 text-[#B48C35] font-sans font-bold tracking-widest text-2xs sm:text-xs uppercase py-3 px-6 rounded transition-all duration-300 shadow-sm"
              >
                <span>READ MY JOURNEY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
