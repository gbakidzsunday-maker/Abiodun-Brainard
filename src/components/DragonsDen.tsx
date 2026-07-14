import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INVESTMENTS_DATA } from "../data";
import { Play, TrendingUp, Info, HelpCircle, FileText } from "lucide-react";

export default function DragonsDen() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeInvestment = INVESTMENTS_DATA[selectedIdx];

  return (
    <section id="dragons-den" className="py-24 bg-[#F9FAFB] border-t border-zinc-200 relative px-6 overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FFBF00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive list of investments */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#FFBF00]/10 border border-[#FFBF00]/25 px-3.5 py-1.5 rounded-full">
              <span className="font-mono text-[10px] tracking-widest text-zinc-950 uppercase font-bold">
                BBC ONE DRAGON'S DEN
              </span>
            </div>

            <h2 className="font-sans text-4xl md:text-5xl font-black text-zinc-900 tracking-tight uppercase leading-none">
              Youngest Dragon <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 to-[#FFBF00]">
                In History
              </span>
            </h2>

            <p className="font-sans text-zinc-600 text-sm md:text-base font-normal leading-relaxed">
              At just 28 years old, Abiodun took his seat alongside legendary titans in the Den. Bringing a new-generation digital perspective, he shook up traditional investing with modern viral marketing and tech-centric scale strategies.
            </p>

            <div className="space-y-3 pt-4">
              <span className="font-sans text-2xs uppercase tracking-widest text-zinc-500 font-bold block mb-2">
                Pitches Approved & Backed:
              </span>
              {INVESTMENTS_DATA.map((inv, idx) => (
                <button
                  id={`inv-btn-${idx}`}
                  key={inv.company}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all shadow-2xs ${
                    selectedIdx === idx
                      ? "bg-[#FFBF00] text-black border-[#FFBF00] font-bold shadow-md"
                      : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-100"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`p-2 rounded-lg ${selectedIdx === idx ? "bg-black/10" : "bg-zinc-100"}`}>
                      <TrendingUp className="w-4.5 h-4.5" />
                    </span>
                    <div>
                      <h3 className="font-sans text-sm font-bold uppercase tracking-wider">{inv.company}</h3>
                      <p className={`font-sans text-2xs ${selectedIdx === idx ? "text-zinc-800" : "text-zinc-500"}`}>{inv.industry}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold uppercase">{inv.season}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Investment Details Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                id={`investment-panel-${activeInvestment.company.replace(" ", "-")}`}
                key={activeInvestment.company}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl relative"
              >
                {/* Visual signature overlay */}
                <div className="absolute top-8 right-8 font-mono text-xs text-zinc-950 font-bold uppercase tracking-wider bg-[#FFBF00]/20 border border-[#FFBF00]/30 px-3 py-1 rounded-full">
                  {activeInvestment.deal}
                </div>

                <div className="space-y-6">
                  <div className="pb-4 border-b border-zinc-200/60">
                    <span className="font-sans text-xs text-[#FFBF00] uppercase tracking-widest block font-bold">
                      Featured Investment
                    </span>
                    <h3 className="font-sans text-2xl md:text-3xl font-black text-zinc-900 mt-1 uppercase tracking-tight">
                      {activeInvestment.company}
                    </h3>
                  </div>

                  <div className="space-y-4 text-zinc-600 font-normal">
                    <div className="flex items-start space-x-3 text-sm">
                      <FileText className="w-5 h-5 text-[#FFBF00] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-sans font-bold mb-1">Deal Details & Valuation:</strong>
                        <p className="font-sans text-xs md:text-sm leading-relaxed">{activeInvestment.details}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 text-sm pt-2">
                      <TrendingUp className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-sans font-bold mb-1">Commercial Outcome & Growth:</strong>
                        <p className="font-sans text-xs md:text-sm leading-relaxed">{activeInvestment.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quote-like callout of investment thesis */}
                  <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl mt-6">
                    <span className="font-sans text-2xs uppercase tracking-widest text-zinc-500 font-bold block mb-1">
                      Abiodun's Investment Thesis
                    </span>
                    <p className="font-sans italic text-xs text-zinc-700 leading-relaxed font-normal">
                      "I look for founders who solve friction with modern authenticity. We didn't just back the product; we took over their viral digital marketing distribution to build a massive global community."
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
