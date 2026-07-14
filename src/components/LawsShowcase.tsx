import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LAWS_DATA } from "../data";
import { Sparkles, ArrowRight, RefreshCw, Layers, CheckCircle2 } from "lucide-react";

export default function LawsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'The Self' | 'The Story' | 'The Team' | 'The Business'>('all');
  const [activeLawIndex, setActiveLawIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const filteredLaws = selectedCategory === 'all'
    ? LAWS_DATA
    : LAWS_DATA.filter(law => law.category === selectedCategory);

  const activeLaw = filteredLaws[activeLawIndex % filteredLaws.length] || LAWS_DATA[0];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setActiveLawIndex((prev) => (prev + 1) % filteredLaws.length);
    }, 200);
  };

  const drawRandomLaw = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * filteredLaws.length);
      setActiveLawIndex(randomIndex);
    }, 200);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "The Self": return "text-amber-700 border-amber-500/20 bg-amber-500/10";
      case "The Story": return "text-blue-700 border-blue-500/20 bg-blue-500/10";
      case "The Team": return "text-purple-700 border-purple-500/20 bg-purple-500/10";
      case "The Business": return "text-green-700 border-green-500/20 bg-green-500/10";
      default: return "text-zinc-900 border-zinc-200 bg-zinc-100";
    }
  };

  const categories = ['all', 'The Self', 'The Story', 'The Team', 'The Business'];

  return (
    <section id="books" className="py-24 bg-white border-t border-zinc-200 relative px-6 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-[#FFBF00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-[#FFBF00]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Book Branding & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-amber-750" />
              <span className="font-mono text-[10px] tracking-widest text-amber-750 uppercase font-bold">
                SUNDAY TIMES BESTSELLER
              </span>
            </div>

            <h2 className="font-sans text-4xl md:text-5xl font-black text-zinc-900 tracking-tight uppercase leading-none">
              The 33 Laws of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBF00] to-zinc-900">
                Business & Life
              </span>
            </h2>

            <p className="font-sans text-zinc-600 text-sm md:text-base font-light leading-relaxed">
              Based on interviews with world-class performers and direct learnings building business empires. These aren't temporary strategies—they are permanent truths that govern our psychology, biology, story, team, and commercial success.
            </p>

            <div className="border-t border-zinc-200 pt-6 mt-4">
              <span className="font-sans text-xs text-zinc-500 uppercase tracking-widest block mb-4 font-bold">
                Explore Laws by Category:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    id={`law-cat-btn-${cat.replace(" ", "-")}`}
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat as any);
                      setActiveLawIndex(0);
                      setIsFlipped(false);
                    }}
                    className={`font-sans text-2xs uppercase tracking-wider px-3.5 py-2 rounded-full border transition-all ${
                      selectedCategory === cat
                        ? "bg-[#FFBF00] text-black border-[#FFBF00] font-bold shadow-sm"
                        : "bg-zinc-100 text-zinc-600 border-zinc-200 hover:bg-zinc-200 hover:text-zinc-950"
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Beautiful Interactive Card Deck */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full max-w-lg relative min-h-[460px] flex flex-col justify-between">
              
              {/* Active Card Body */}
              <AnimatePresence mode="wait">
                <motion.div
                  id={`law-card-${activeLaw.number}`}
                  key={activeLaw.number + "-" + isFlipped}
                  initial={{ opacity: 0, rotateY: isFlipped ? 90 : -90, scale: 0.95 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: isFlipped ? -90 : 90, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setIsFlipped(!isFlipped)}
                  className={`w-full bg-[#F9FAFB] border border-zinc-200 rounded-3xl p-8 md:p-10 cursor-pointer shadow-lg relative select-none flex flex-col justify-between min-h-[380px] hover:border-[#FFBF00]/40 transition-colors ${
                    isFlipped ? "border-[#FFBF00]/30" : ""
                  }`}
                >
                  {/* Top header on card */}
                  <div className="flex items-center justify-between w-full pb-6 border-b border-zinc-200/60">
                    <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
                      Law {activeLaw.number} of 33
                    </span>
                    <span className={`font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border ${getCategoryColor(activeLaw.category)} font-bold`}>
                      {activeLaw.category}
                    </span>
                  </div>

                  {/* Body Contents depending on flipped state */}
                  {!isFlipped ? (
                    /* FRONT STATE: Description and Main Insight */
                    <div className="py-6 space-y-4 flex-grow flex flex-col justify-center">
                      <h3 className="font-sans text-2xl md:text-3xl font-black text-zinc-900 leading-tight">
                        "{activeLaw.title}"
                      </h3>
                      <p className="font-sans text-zinc-600 text-sm md:text-sm font-normal leading-relaxed">
                        {activeLaw.description}
                      </p>
                      <div className="font-sans text-xs text-[#FFBF00] flex items-center space-x-1 pt-2 font-bold">
                        <span>Click card to reveal Action Plan</span>
                        <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                      </div>
                    </div>
                  ) : (
                    /* BACK STATE: Practical Action Plan and Quote */
                    <div className="py-6 space-y-4 flex-grow flex flex-col justify-center">
                      <div className="border-l-2 border-[#FFBF00] pl-4 py-1 italic text-zinc-700 text-xs md:text-sm font-medium">
                        "{activeLaw.quote}"
                      </div>
                      <div className="space-y-2.5 pt-2">
                        <span className="font-sans text-2xs uppercase tracking-widest text-zinc-500 font-bold block">
                          Micro Action Plan:
                        </span>
                        {activeLaw.actionPlan.map((plan, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-zinc-600 text-xs md:text-sm font-normal">
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#FFBF00] shrink-0 mt-0.5" />
                            <span>{plan}</span>
                          </div>
                        ))}
                      </div>
                      <div className="font-sans text-xs text-zinc-500 flex items-center space-x-1 pt-2 font-semibold">
                        <span>Click card to see core philosophy</span>
                      </div>
                    </div>
                  )}

                  {/* Footer metadata */}
                  <div className="pt-6 border-t border-zinc-200/60 flex items-center justify-between text-2xs text-zinc-500 font-mono">
                    <span>ABIODUN BRAINARD</span>
                    <span>TAP TO FLIP</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls Grid */}
              <div className="flex items-center justify-between mt-6 gap-4 w-full">
                <button
                  id="draw-random-law-btn"
                  onClick={drawRandomLaw}
                  className="flex items-center space-x-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-sans font-medium text-xs tracking-wider uppercase py-3.5 px-6 rounded-full border border-zinc-200 transition-colors shadow-2xs"
                >
                  <RefreshCw className="w-4 h-4 text-[#FFBF00]" />
                  <span>Draw Random Law</span>
                </button>

                <button
                  id="next-law-btn"
                  onClick={handleNext}
                  className="flex items-center space-x-2 bg-[#FFBF00] hover:bg-[#FFBF00]/85 text-black font-sans font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-full shadow-lg shadow-[#FFBF00]/10 transition-all"
                >
                  <span>Next Law</span>
                  <Layers className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
