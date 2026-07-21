import { ReactNode } from "react";
import { motion } from "motion/react";
import { BookOpen, Lightbulb, Compass, Award, Heart, Shield } from "lucide-react";

// Import generated portraits of Abiodun Brainard
const abiodun1 = "https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/PHOTO-2026-07-20-07-07-25.jpg";
import abiodun2 from "../assets/images/abiodun_portrait_2_1784039327745.jpg";
import abiodun3 from "../assets/images/abiodun_portrait_3_1784039341805.jpg";
import abiodun4 from "../assets/images/abiodun_portrait_4_1784039356586.jpg";

interface StageItem {
  stage: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  icon: ReactNode;
}

export default function Timeline() {
  const STAGES_DATA: StageItem[] = [
    {
      stage: "Stage 1",
      title: "Watching the Tireless Hustle",
      subtitle: "Childhood Roots & Inspiration",
      content: "Growing up, my parents owned a small business. My mother managed the sales, while my father spent his days out in the streets marketing the business and finding customers. As a child, I watched them work tirelessly every day. They weren't running a large company, but they were building something with determination, resilience, and hope.",
      image: abiodun1,
      icon: <BookOpen className="w-5 h-5 text-[#B48C35]" />,
    },
    {
      stage: "Stage 2",
      title: "The Sacrifice and Challenges",
      subtitle: "Seeing the Reality of Growth",
      content: "I saw the early mornings. I saw the long days. I saw the sacrifices. I also saw the challenges that came with trying to grow a business. Although they worked incredibly hard, watching their daily struggle and resilience carved a deep mark on me.",
      image: "https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/stage%202.jpg",
      icon: <Shield className="w-5 h-5 text-[#B48C35]" />,
    },
    {
      stage: "Stage 3",
      title: "Is There a Better Way?",
      subtitle: "The Burning Spark of Passion",
      content: "I often found myself asking a simple question: 'Is there a better way?' What if they had access to more practical business knowledge? What if they understood modern sales strategies, marketing, branding, customer experience, and business growth? Could they have reached more customers? Could they have grown faster? Those questions stayed with me and became the foundation of my passion for business.",
      image: "https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/stage%20%203.jpg",
      icon: <Compass className="w-5 h-5 text-[#B48C35]" />,
    },
    {
      stage: "Stage 4",
      title: "Sales is Teaching",
      subtitle: "A Mindset Shift That Changed Everything",
      content: "I dedicated myself to learning everything I could about sales, marketing, entrepreneurship, leadership, and business growth—not simply to build businesses, but to help others avoid unnecessary struggles by sharing practical knowledge. Along the way, I discovered something that completely changed the way I think about business: Sales isn't about convincing people. Sales is teaching. When people truly understand the value of what you offer, they naturally make better decisions.",
      image: "https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/stage%204.png",
      icon: <Lightbulb className="w-5 h-5 text-[#B48C35]" />,
    },
    {
      stage: "Stage 5",
      title: "The Birth of Brainleads Group",
      subtitle: "Opportunities, Solutions, Impact",
      content: "That philosophy became the foundation of everything we build today. It inspired the creation of Brainleads Group—a company built on the belief that businesses should create opportunities, solve real problems, and improve people's lives. Today, Brainleads Group continues to grow through businesses sharing one common purpose.",
      image: "https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/stage%205.png",
      icon: <Award className="w-5 h-5 text-[#B48C35]" />,
    },
    {
      stage: "Stage 6",
      title: "Sustaining Continuous Growth",
      subtitle: "Our Holding Companies & Dynamic Mission",
      content: "Our goal is simple: to help people become better entrepreneurs, stronger leaders, more confident professionals, and lifelong learners. Through Brainleads Academy (practical business education), Flyrinzo (simplifying marketing via AI), and Sierce Air (ambient scent marketing), we are making a lasting impact. If one book inspires someone to start a business, if one conversation gives someone courage, or if one lesson helps a business grow... then our mission is being fulfilled. This is only the beginning.",
      image: "https://raw.githubusercontent.com/perfectgbakidz/hostingimage/refs/heads/main/stage%206.png",
      icon: <Heart className="w-5 h-5 text-[#B48C35]" />,
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-zinc-200 relative px-6 overflow-hidden">
      {/* Subtle decorative background gradients */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#B48C35]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#B48C35]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20">
          <span className="font-mono text-xs text-amber-600 uppercase tracking-widest font-bold">The Journey</span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-zinc-900 tracking-tight uppercase">
            My Biography & Legacy
          </h2>
          
          {/* Main Introduction as requested */}
          <div className="max-w-2xl mx-auto pt-6 pb-2 px-6">
            <p className="font-sans text-xl md:text-2xl italic font-semibold text-zinc-800 leading-relaxed text-center">
              "Every entrepreneur has a story.<br />
              This is mine."
            </p>
            <div className="w-16 h-1 bg-[#B48C35] mx-auto mt-6 rounded-full" />
          </div>
        </div>

        {/* Center Timeline Container */}
        <div className="relative mt-16">
          
          {/* Centered Timeline Line for desktop, left-aligned on mobile */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-200" />

          {/* Timeline Stages */}
          <div className="space-y-16 md:space-y-24">
            {STAGES_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  
                  {/* Outer spacer to push content left/right on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Centered timeline badge / circle */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-8 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-[#B48C35] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#B48C35]" />
                    </div>
                  </div>

                  {/* Stage Card Content (Right side for even index, Left side for odd index) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden shadow-lg hover:shadow-xl hover:border-[#B48C35]/50 transition-all duration-300 group"
                    >
                      {/* Grid containing Portrait and Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-12">
                        
                        {/* Portrait section */}
                        <div className="sm:col-span-5 relative h-64 sm:h-auto min-h-[220px] overflow-hidden bg-zinc-100 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={`Abiodun Brainard - ${item.title}`}
                            className="w-full h-full object-contain transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                          
                          {/* Floating stage tag on image */}
                          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                            <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#B48C35]">
                              {item.stage}
                            </span>
                          </div>
                        </div>

                        {/* Text and Info Section */}
                        <div className="sm:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-4">
                          <div>
                            <div className="flex items-center space-x-2.5 mb-2">
                              <span className="p-1.5 rounded-md bg-white border border-zinc-200 shadow-2xs">
                                {item.icon}
                              </span>
                              <span className="font-mono text-[10px] text-amber-600 font-bold uppercase tracking-widest">
                                {item.subtitle}
                              </span>
                            </div>
                            
                            <h3 className="font-sans text-xl md:text-2xl font-black text-zinc-900 group-hover:text-amber-600 transition-colors">
                              {item.title}
                            </h3>
                          </div>

                          <p className="font-sans text-zinc-600 text-xs md:text-sm leading-relaxed font-light">
                            {item.content}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Closing Core Belief Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-[#B48C35]/5 border-2 border-dashed border-[#B48C35]/30 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-sans text-xl md:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-4">
            The Shared Purpose of Brainleads Group
          </h3>
          <p className="font-sans text-zinc-700 text-sm md:text-base leading-relaxed font-normal italic">
            "Create opportunities. Empower people. Help businesses grow. Build solutions that make a lasting impact."
          </p>
          <p className="font-sans text-zinc-500 text-xs uppercase tracking-widest font-bold mt-6">
            — Abiodun Brainard
          </p>
        </motion.div>

      </div>
    </section>
  );
}
