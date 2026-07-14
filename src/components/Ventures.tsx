import { motion } from "motion/react";
import { VENTURES_DATA } from "../data";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 bg-white border-t border-zinc-200 relative px-6 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#FFBF00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-zinc-100 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-[#FFBF00] uppercase tracking-widest font-bold">THE EMPIRE</span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-zinc-950 tracking-tight uppercase">
            Ventures & Holding Brands
          </h2>
          <p className="font-sans text-zinc-600 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
            We build and back businesses that shape the future. From AI-driven marketing and scent-based ambient branding to world-class entrepreneurial academies and a $100M VC fund.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VENTURES_DATA.map((venture, index) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F9FAFB] hover:bg-white border border-zinc-200 hover:border-[#FFBF00]/60 hover:shadow-xl rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top corner gradient hover effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFBF00]/10 rounded-bl-full blur-xl translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl p-3 bg-white rounded-xl border border-zinc-200 group-hover:border-[#FFBF00]/30 group-hover:bg-[#FFBF00]/5 transition-colors duration-300 shadow-xs">
                    {venture.logo}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-950 bg-[#FFBF00]/20 border border-[#FFBF00]/30 px-3 py-1 rounded-full font-bold">
                    {venture.stats}
                  </span>
                </div>

                {/* Content */}
                <span className="font-sans text-xs text-zinc-500 font-bold uppercase tracking-wider block mb-1">
                  {venture.role}
                </span>
                <h3 className="font-sans text-xl font-black text-zinc-950 mb-3 group-hover:text-zinc-900 transition-colors">
                  {venture.name}
                </h3>
                <p className="font-sans text-zinc-600 text-sm font-normal leading-relaxed mb-6">
                  {venture.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {venture.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[10px] bg-white text-zinc-600 px-2.5 py-1 rounded-md border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={venture.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-xs text-zinc-500 group-hover:text-[#FFBF00] font-sans tracking-wider uppercase font-bold transition-colors mt-2"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
