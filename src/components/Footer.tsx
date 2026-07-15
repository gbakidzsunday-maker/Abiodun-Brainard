import React, { useState } from "react";
import { Check, Mail, Sparkles, Send } from "lucide-react";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/brainleads-group",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163s-.233-1.64-.946-2.364c-.907-.95-1.92-.955-2.385-1.01-3.334-.242-8.334-.242-8.334-.242s-5.003 0-8.334.242c-.466.055-1.478.06-2.385 1.01-.713.724-.947 2.364-.947 2.364s-.24 1.94-.24 3.882v1.821c0 1.942.24 3.883.24 3.883s.234 1.64.947 2.364c.907.95 1.92.94 2.385.995 3.334.24 8.334.24 8.334.24s5.002 0 8.334-.24c.465-.056 1.478-.046 2.385-.995.713-.724.946-2.364.946-2.364s.24-1.941.24-3.883V10.045c0-1.941-.24-3.881-.24-3.881zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31 0 2.57.34 3.68.96-.13.88-.47 1.7-.99 2.4-.66.88-1.54 1.54-2.55 1.9-.02.44-.04.88-.04 1.32.01 4.71-3.6 8.59-8.29 8.78-4.99.2-9.19-3.79-9.19-8.79C-1.85 2.05 1.9-.38 6.44.05c.02.66-.02 1.32.08 1.98-3.07-.37-5.91 1.4-6.66 4.39-.95 3.75 1.83 7.42 5.58 7.79 3.32.33 6.36-1.78 6.84-5.02.13-.88.11-1.78.11-2.67 1.85-.01 3.7-.01 5.55-.02.04.53.15 1.05.35 1.54a4.42 4.42 0 0 0 3.68 2.65V7.95a1.86 1.86 0 0 1-1.7-1.42 4.4 4.4 0 0 1-.3-1.63c-1.31 0-2.62.01-3.92-.01V.02h-3.93z" />
        </svg>
      )
    },
    {
      name: "X",
      href: "https://x.com",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: "Podcast",
      href: "https://podcasts.apple.com",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full">
      {/* ================= TOP BRANDING BAND ================= */}
      <div className="bg-[#FDFCFA] border-t border-zinc-200 py-12 sm:py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-[#B48C35]/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 items-stretch">
            
            {/* COLUMN 1: STAY CONNECTED */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3.5">
                <h4 className="font-sans text-[9px] sm:text-xs font-black tracking-widest text-[#B48C35] uppercase">
                  STAY CONNECTED
                </h4>
                <p className="font-sans text-zinc-600 text-[10px] sm:text-xs md:text-[13px] leading-relaxed max-w-sm">
                  Get practical business insights, book updates, and exclusive resources.
                </p>
              </div>

              <div className="w-full max-w-sm">
                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center w-full gap-1.5 sm:gap-0">
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-zinc-50 border border-zinc-200 focus:border-[#B48C35]/60 focus:bg-white text-zinc-800 text-[10px] sm:text-xs px-2.5 sm:px-4 py-2 sm:py-3 rounded-md sm:rounded-none sm:rounded-l-lg outline-none transition-all placeholder:text-zinc-400"
                    />
                    <button
                      type="submit"
                      className="bg-[#B48C35] hover:bg-[#967128] text-white font-sans text-[8px] sm:text-2xs font-bold tracking-widest uppercase px-3 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-none sm:rounded-r-lg transition-all shadow-sm flex items-center justify-center shrink-0"
                    >
                      SUBSCRIBE
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 rounded-lg p-2 text-emerald-800 text-[9px] sm:text-xs">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Subscribed successfully!</span>
                  </div>
                )}
              </div>
            </div>

            {/* COLUMN 2: FOLLOW BRAINLEADS ACADEMY */}
            <div className="border-l border-zinc-200/80 pl-3 sm:pl-6 md:pl-10 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3.5">
                <h4 className="font-sans text-[9px] sm:text-xs font-black tracking-widest text-[#B48C35] uppercase">
                  FOLLOW BRAINLEADS
                </h4>
                <p className="font-sans text-zinc-600 text-[10px] sm:text-xs md:text-[13px] leading-relaxed max-w-sm">
                  Follow us for weekly insights and business growth conversations.
                </p>
              </div>

              {/* Social Icons row */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2.5 pt-1 sm:pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-950 hover:bg-[#B48C35] text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm"
                    title={social.name}
                  >
                    <span className="scale-[0.65] sm:scale-100 flex items-center justify-center">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 3: LOGO EMBLEM */}
            <div className="border-l border-zinc-200/80 pl-3 sm:pl-6 md:pl-10 flex flex-col items-center justify-center text-center">
              {/* Logo Image */}
              <div className="relative group mb-2 sm:mb-4">
                <img 
                  src="https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/PHOTO-2026-07-14-15-59-36.jpg" 
                  alt="Brain Leads Group Logo" 
                  className="h-10 sm:h-20 w-auto object-contain rounded-lg sm:rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-0.5 sm:space-y-1">
                <h5 className="font-sans text-[9px] sm:text-base font-black tracking-[0.15em] sm:tracking-[0.25em] text-zinc-900 uppercase">
                  BRAINLEADS
                </h5>
                <p className="font-sans text-[7px] sm:text-xs font-light tracking-[0.2em] sm:tracking-[0.4em] text-zinc-700 uppercase">
                  ACADEMY
                </p>
                <div className="w-6 sm:w-8 h-[1px] bg-[#B48C35]/40 mx-auto my-1 sm:my-2" />
                <p className="font-sans text-[6px] sm:text-[9px] font-bold tracking-wider sm:tracking-widest text-zinc-400 uppercase">
                  A BRAINLEADS GROUP COMPANY
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM METRICS/LINKS BAND ================= */}
      <div className="bg-[#090D16] border-t border-zinc-800/60 py-6 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          
          {/* Quick Links Column */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 sm:gap-x-6 gap-y-2">
            <span className="font-sans text-[10px] sm:text-xs font-black tracking-wider text-white uppercase">
              Quick Links
            </span>
            <div className="w-[1px] h-3 bg-zinc-800 hidden sm:block" />
            
            <button 
              onClick={() => onNavClick("about")} 
              className="font-sans text-[10px] sm:text-[11px] font-bold text-zinc-400 hover:text-[#B48C35] uppercase transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => onNavClick("about")} 
              className="font-sans text-[10px] sm:text-[11px] font-bold text-zinc-400 hover:text-[#B48C35] uppercase transition-colors"
            >
              My Journey
            </button>
            <button 
              onClick={() => onNavClick("books")} 
              className="font-sans text-[10px] sm:text-[11px] font-bold text-zinc-400 hover:text-[#B48C35] uppercase transition-colors"
            >
              Books
            </button>
            <button 
              onClick={() => onNavClick("ventures")} 
              className="font-sans text-[10px] sm:text-[11px] font-bold text-zinc-400 hover:text-[#B48C35] uppercase transition-colors"
            >
              Brainleads TV
            </button>
            <button 
              onClick={() => onNavClick("ventures")} 
              className="font-sans text-[10px] sm:text-[11px] font-bold text-zinc-400 hover:text-[#B48C35] uppercase transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => onNavClick("ventures")} 
              className="font-sans text-[10px] sm:text-[11px] font-bold text-zinc-400 hover:text-[#B48C35] uppercase transition-colors"
            >
              Articles
            </button>
            <button 
              onClick={() => onNavClick("contact")} 
              className="font-sans text-[10px] sm:text-[11px] font-bold text-zinc-400 hover:text-[#B48C35] uppercase transition-colors"
            >
              Work With Abiodun
            </button>
            <button 
              onClick={() => onNavClick("contact")} 
              className="font-sans text-[10px] sm:text-[11px] font-bold text-zinc-400 hover:text-[#B48C35] uppercase transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Inspirational Motto Quote */}
          <div className="text-center sm:text-right shrink-0">
            <span className="font-serif italic text-[10px] sm:text-xs tracking-wide text-[#B48C35]">
              Knowledge creates opportunities. Action creates results.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
