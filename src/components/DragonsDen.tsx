import React from "react";
import { motion } from "motion/react";

export default function DragonsDen() {
  return (
    <section id="dragons-den" className="bg-[#090D16] border-y border-zinc-800/80 py-10 relative overflow-hidden px-6">
      {/* Subtle gold glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[80px] bg-[#B48C35]/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative flex flex-col items-center">
        {/* "AS SEEN ON" Label */}
        <div className="mb-8">
          <span className="font-sans text-[11px] font-black tracking-[0.2em] text-[#B48C35] uppercase">
            AS SEEN ON
          </span>
        </div>

        {/* Logos Container */}
        <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 lg:justify-between">
          
          {/* CTV */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-1 hover:opacity-100 opacity-80 transition-opacity"
          >
            <span className="text-white text-xl font-black tracking-widest font-sans">CTV</span>
            <svg className="w-4 h-4 text-white fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>

          {/* Global NEWS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2.5 hover:opacity-100 opacity-80 transition-opacity"
          >
            <div className="text-right">
              <div className="text-white text-[10px] font-light tracking-wide leading-none">Global</div>
              <div className="text-white text-sm font-extrabold tracking-wider leading-none mt-0.5">NEWS</div>
            </div>
            <svg className="w-5 h-5 text-white fill-current shrink-0" viewBox="0 0 100 100">
              <path d="M10 50 L50 10 L90 50 L50 90 Z M50 25 L75 50 L50 75 Z" />
            </svg>
          </motion.div>

          {/* CityNews */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center hover:opacity-100 opacity-80 transition-opacity"
          >
            <span className="text-white text-lg font-black tracking-tight font-sans">City</span>
            <span className="text-white text-lg font-normal tracking-tight font-sans">News</span>
          </motion.div>

          {/* CBC Gem Circular Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center w-8 h-8 hover:opacity-100 opacity-80 transition-opacity"
          >
            <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="14" />
              <path d="M50 20 L54 32 L46 32 Z" />
              <path d="M50 80 L54 68 L46 68 Z" />
              <path d="M20 50 L32 54 L32 46 Z" />
              <path d="M80 50 L68 54 L68 46 Z" />
              <path d="M28 28 L39 37 L34 43 Z" />
              <path d="M72 28 L61 37 L66 43 Z" />
              <path d="M28 72 L39 63 L34 57 Z" />
              <path d="M72 72 L61 63 L66 57 Z" />
            </svg>
          </motion.div>

          {/* ROGERS tv */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-baseline space-x-1 hover:opacity-100 opacity-80 transition-opacity"
          >
            <span className="text-white text-base font-extrabold tracking-wider font-sans">ROGERS</span>
            <span className="text-white text-[11px] font-medium font-sans lowercase">tv</span>
          </motion.div>

          {/* WINNIPEG FREE PRESS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-left font-serif hover:opacity-100 opacity-80 transition-opacity"
          >
            <div className="text-white text-[11px] font-black tracking-wider leading-none uppercase">WINNIPEG</div>
            <div className="text-white text-[10px] font-bold tracking-widest leading-none mt-1 uppercase">FREE PRESS</div>
          </motion.div>

          {/* BUSINESS EXAMINER */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-left font-sans hover:opacity-100 opacity-80 transition-opacity"
          >
            <div className="text-white text-[10px] font-extrabold tracking-widest leading-none uppercase">BUSINESS</div>
            <div className="text-white text-[9px] font-semibold tracking-widest leading-none mt-1 uppercase">EXAMINER</div>
          </motion.div>

          {/* & More */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-zinc-400 text-xs font-semibold tracking-wide hover:text-white transition-colors"
          >
            & More
          </motion.div>

        </div>
      </div>
    </section>
  );
}
