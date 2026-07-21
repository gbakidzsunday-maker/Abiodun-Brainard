import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, Check, Mail, Sparkles, Download, Volume2, VolumeX, BookOpen, ArrowRight } from "lucide-react";

export default function LawsShowcase() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isEpisodeModalOpen, setIsEpisodeModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  
  // Book Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    interest: "hardcopy"
  });

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
    setTimeout(() => {
      setEmailSubmitted(false);
      setIsBookModalOpen(false);
      setFormData({ name: "", email: "", org: "", interest: "hardcopy" });
    }, 2500);
  };

  return (
    <section id="books" className="py-20 bg-[#FDFCFA] border-t border-zinc-200 relative px-6 overflow-hidden">
      {/* Background radial elements for luxury editorial feel */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#B48C35]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-zinc-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* ================= LEFT PAIR: FEATURED BOOK ================= */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
            {/* Text details column */}
            <div className="xl:col-span-7 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="font-sans text-xs tracking-widest text-[#B48C35] uppercase font-bold block">
                  FEATURED BOOK
                </span>
                
                <h2 className="font-sans text-3xl md:text-4.5xl font-black text-zinc-900 tracking-tight leading-tight uppercase">
                  Sales Is Teaching
                </h2>
                
                <p className="font-sans text-zinc-900 text-sm md:text-base font-semibold leading-relaxed">
                  The Mindset, Principles & Strategies That Turn Conversations Into Results.
                </p>
                
                <p className="font-sans text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">
                  A practical guide to help you build trust, create value and close more business by teaching instead of convincing.
                </p>
              </div>

              <div className="pt-4">
                <button
                  id="get-copy-btn"
                  onClick={() => setIsBookModalOpen(true)}
                  className="bg-[#B48C35] hover:bg-[#967128] text-white font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-8 rounded shadow-md hover:shadow-lg transition-all duration-300"
                >
                  GET YOUR COPY
                </button>
              </div>
            </div>

            {/* Book Cover image column */}
            <div className="xl:col-span-5 flex justify-center xl:justify-end">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsBookModalOpen(true)}
                className="cursor-pointer relative drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] group"
              >
                <img
                  src="/src/assets/images/sales_book_mockup_1784079126778.jpg"
                  alt="Sales Is Teaching Book Cover Mockup"
                  referrerPolicy="no-referrer"
                  className="w-48 md:w-56 rounded-r-lg object-cover border-l-4 border-black/40"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 rounded-r-lg transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-zinc-900 font-sans text-2xs font-bold tracking-wider uppercase px-3 py-1.5 rounded shadow">
                    PREVIEW CHAPTERS
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================= RIGHT PAIR: FEATURED EPISODE ================= */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center border-t lg:border-t-0 lg:border-l border-zinc-200 pt-12 lg:pt-0 lg:pl-16">
            {/* Text details column */}
            <div className="xl:col-span-7 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="font-sans text-xs tracking-widest text-[#B48C35] uppercase font-bold block">
                  FEATURED EPISODE
                </span>
                
                <h2 className="font-sans text-3xl md:text-4.5xl font-black text-zinc-900 tracking-tight leading-tight uppercase">
                  From Idea to Impact
                </h2>
                
                <p className="font-sans text-zinc-900 text-sm md:text-base font-semibold leading-relaxed">
                  Real conversations. Real lessons. Real business growth.
                </p>
                
                <p className="font-sans text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">
                  Watch the latest episode of Brainleads TV with entrepreneurs and leaders who are building and scaling successful businesses.
                </p>
              </div>

              <div className="pt-4">
                <a
                  id="watch-episode-btn"
                  href="https://youtube.com/@brainleadsacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#B48C35] hover:bg-[#967128] text-white font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-8 rounded shadow-md hover:shadow-lg transition-all duration-300"
                >
                  WATCH LATEST EPISODE
                </a>
              </div>
            </div>

            {/* Video Thumbnail column */}
            <div className="xl:col-span-5 flex justify-center xl:justify-end">
              <motion.a
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                href="https://youtube.com/@brainleadsacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer relative aspect-video w-full max-w-[280px] rounded-xl overflow-hidden shadow-xl border border-zinc-900 bg-black group block"
              >
                <img
                  src="/src/assets/images/idea_to_impact_thumb_1784079136243.jpg"
                  alt="From Idea to Impact Video Thumbnail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#B48C35] group-hover:border-[#B48C35] transition-all duration-300 shadow-md">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Subtitle bottom text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-left">
                  <p className="font-sans text-[11px] font-black text-white uppercase tracking-wider leading-tight">
                    FROM IDEA TO IMPACT
                  </p>
                  <p className="font-sans text-[9px] text-zinc-300 font-medium">
                    with Abiodun Brainard
                  </p>
                </div>
              </motion.a>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MODAL: BOOK DETAILS & SAMPLE PDF REQUEST ================= */}
      <AnimatePresence>
        {isBookModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-zinc-200 flex flex-col md:flex-row"
            >
              {/* Left Side: Book Cover Presentation */}
              <div className="bg-zinc-950 text-white p-8 flex flex-col justify-between items-center md:w-5/12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#B48C35]/10 pointer-events-none" />
                <div className="z-10 space-y-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B48C35] font-bold">
                    Now Available
                  </span>
                  <h3 className="font-sans text-xl font-extrabold leading-tight">
                    Sales is Teaching
                  </h3>
                </div>
                
                <img
                  src="/src/assets/images/sales_book_mockup_1784079126778.jpg"
                  alt="Sales Is Teaching Book"
                  referrerPolicy="no-referrer"
                  className="w-32 z-10 my-6 shadow-2xl rounded-r border-l-2 border-black/40"
                />
                
                <div className="z-10 text-[10px] text-zinc-400 font-mono">
                  BY ABIODUN BRAINARD
                </div>
              </div>

              {/* Right Side: Form / Detail */}
              <div className="p-8 md:w-7/12 relative flex flex-col justify-between">
                <button
                  onClick={() => setIsBookModalOpen(false)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-1.5 bg-[#B48C35]/10 border border-[#B48C35]/20 px-2.5 py-1 rounded-full text-[#B48C35]">
                    <Sparkles className="w-3 h-3" />
                    <span className="font-sans text-[10px] uppercase font-bold tracking-wider">Get a Free Chapter Preview</span>
                  </div>

                  <h4 className="font-sans text-xl font-black text-zinc-900 uppercase">
                    Download Preview PDF
                  </h4>
                  
                  <p className="font-sans text-zinc-600 text-xs leading-relaxed">
                    Enter your details below to receive a high-impact sample chapter on your email instantly.
                  </p>

                  <AnimatePresence mode="wait">
                    {!emailSubmitted ? (
                      <motion.form
                        key="book-form"
                        onSubmit={handleBookSubmit}
                        className="space-y-3 pt-2"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-zinc-200 focus:border-[#B48C35] focus:ring-1 focus:ring-[#B48C35] outline-none transition-all bg-zinc-50"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-zinc-200 focus:border-[#B48C35] focus:ring-1 focus:ring-[#B48C35] outline-none transition-all bg-zinc-50"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Organization / Title</label>
                          <input
                            type="text"
                            placeholder="CEO at LeadCorp"
                            value={formData.org}
                            onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-zinc-200 focus:border-[#B48C35] focus:ring-1 focus:ring-[#B48C35] outline-none transition-all bg-zinc-50"
                          />
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full bg-[#B48C35] hover:bg-[#967128] text-white font-sans text-xs font-bold tracking-widest uppercase py-3 rounded-lg shadow transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <Download className="w-4 h-4" />
                            <span>Request Sample Chapter</span>
                          </button>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success-message"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3 py-10"
                      >
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                          <Check className="w-6 h-6 stroke-[3]" />
                        </div>
                        <h5 className="font-sans text-sm font-bold text-emerald-900 uppercase tracking-wide">
                          Check Your Inbox!
                        </h5>
                        <p className="font-sans text-zinc-600 text-xs leading-relaxed max-w-xs mx-auto">
                          Success! We've sent the first chapter of <span className="font-bold">Sales Is Teaching</span> to <span className="font-semibold text-zinc-900">{formData.email}</span>.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL: EPISODE VIDEO PLAYER ================= */}
      <AnimatePresence>
        {isEpisodeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 text-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-zinc-800 flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsEpisodeModalOpen(false)}
                className="absolute top-4 right-4 z-50 text-zinc-400 hover:text-white transition-colors bg-zinc-950/40 p-1.5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Simulated Player Area */}
              <div className="md:w-8/12 bg-black relative flex flex-col justify-center items-center aspect-video md:aspect-auto min-h-[300px] md:min-h-[440px]">
                {/* Simulated Playing Video Graphics */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/src/assets/images/idea_to_impact_thumb_1784079136243.jpg"
                    alt="Simulated video frame"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-all duration-700 ${isVideoPlaying ? "scale-105 blur-xs opacity-40 animate-pulse" : "opacity-90"}`}
                  />
                </div>

                {/* Sound and Video Overlays */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between bg-black/60 backdrop-blur-md py-3 px-4 rounded-xl border border-white/5">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      {isVideoPlaying ? (
                        <div className="flex space-x-0.5 items-center justify-center">
                          <span className="w-1 h-3.5 bg-zinc-900 rounded-full animate-bounce" />
                          <span className="w-1 h-3.5 bg-zinc-900 rounded-full animate-bounce [animation-delay:0.15s]" />
                        </div>
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      )}
                    </button>
                    <div>
                      <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest leading-none">NOW STREAMING</p>
                      <p className="font-sans text-xs font-black text-white leading-relaxed truncate max-w-[150px] md:max-w-[200px]">
                        From Idea to Impact
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-[10px] text-zinc-400">
                      {isVideoPlaying ? "12:45 / 45:10" : "Paused"}
                    </span>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-zinc-300 hover:text-white transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4.5 h-4.5" /> : <Volume2 className="w-4.5 h-4.5 text-[#B48C35]" />}
                    </button>
                  </div>
                </div>

                {/* Big Center State Indicator if paused */}
                {!isVideoPlaying && (
                  <div className="z-10 bg-black/50 p-5 rounded-full border border-white/10 cursor-pointer hover:scale-105 transition-transform" onClick={() => setIsVideoPlaying(true)}>
                    <Play className="w-8 h-8 text-[#B48C35] fill-current ml-1" />
                  </div>
                )}
              </div>

              {/* Sidebar Episode List & Context */}
              <div className="md:w-4/12 p-6 flex flex-col justify-between bg-zinc-950 text-left border-t md:border-t-0 md:border-l border-zinc-800">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B48C35] font-bold block mb-2">
                      EPISODE SHOWNOTES
                    </span>
                    <h4 className="font-sans text-lg font-black tracking-tight uppercase leading-snug">
                      From Idea to Impact
                    </h4>
                    <p className="font-sans text-zinc-400 text-2xs mt-1">
                      Featuring Abiodun Brainard & Industry Leaders
                    </p>
                  </div>

                  <p className="font-sans text-zinc-300 text-xs leading-relaxed">
                    Uncover the hidden metrics of scale. In this episode, we unpack the psychological shifts, structural blueprints, and exact funnels used to take operations from early validation to sustainable enterprise-level operations.
                  </p>

                  <div className="space-y-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 font-bold block">
                      Up Next on Brainleads TV
                    </span>
                    
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 cursor-pointer transition-all flex items-center space-x-3 group">
                      <div className="w-12 aspect-video bg-zinc-800 rounded overflow-hidden shrink-0">
                        <img src="/src/assets/images/abiodun_portrait_2_1784039327745.jpg" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] font-bold uppercase leading-snug truncate text-zinc-200 group-hover:text-white transition-colors">
                          Scaling Past the $10M Mark
                        </p>
                        <p className="font-sans text-[9px] text-zinc-500">Episode 48 • 38 mins</p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 cursor-pointer transition-all flex items-center space-x-3 group">
                      <div className="w-12 aspect-video bg-zinc-800 rounded overflow-hidden shrink-0">
                        <img src="/src/assets/images/abiodun_portrait_3_1784039341805.jpg" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] font-bold uppercase leading-snug truncate text-zinc-200 group-hover:text-white transition-colors">
                          The Architecture of High-Performing Teams
                        </p>
                        <p className="font-sans text-[9px] text-zinc-500">Episode 47 • 52 mins</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-900 mt-6 md:mt-0">
                  <a
                    href="#contact"
                    onClick={() => setIsEpisodeModalOpen(false)}
                    className="w-full block text-center bg-zinc-800 hover:bg-zinc-700 text-white font-sans text-2xs font-extrabold tracking-widest uppercase py-3 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-all"
                  >
                    APPLY AS A GUEST
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
