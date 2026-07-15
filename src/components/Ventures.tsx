import React from "react";
import { motion } from "motion/react";
import { BookOpen, Tv2, Mic, Users, Calendar, FileText } from "lucide-react";

interface LearnItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  icon: React.ComponentType<any>;
}

const LEARN_DATA: LearnItem[] = [
  {
    id: "books",
    title: "BOOKS",
    description: "Practical business books and playbooks that will help you grow, lead and scale your business.",
    buttonText: "GET THE BOOK",
    icon: BookOpen
  },
  {
    id: "tv",
    title: "BRAINLEADS TV",
    description: "Watch powerful conversations with entrepreneurs, leaders and industry experts.",
    buttonText: "WATCH NOW",
    icon: Tv2
  },
  {
    id: "speaking",
    title: "SPEAKING",
    description: "Invite Abiodun Brainard to speak at your event, conference, company, university or organization.",
    buttonText: "BOOK A SPEAKER",
    icon: Mic
  },
  {
    id: "consulting",
    title: "CONSULTING",
    description: "Work directly with Abiodun Brainard to solve challenges and accelerate your business growth.",
    buttonText: "BOOK A CONSULTATION",
    icon: Users
  },
  {
    id: "events",
    title: "EVENTS",
    description: "Join workshops, masterclasses, networking events and business conferences designed to help you grow.",
    buttonText: "VIEW EVENTS",
    icon: Calendar
  },
  {
    id: "articles",
    title: "ARTICLES",
    description: "Practical articles and insights on business, leadership, AI, marketing and more.",
    buttonText: "READ ARTICLES",
    icon: FileText
  }
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 bg-white border-t border-zinc-200 relative px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-[#FFBF00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-zinc-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-[#FFBF00] uppercase tracking-widest font-bold">EDUCATIONAL INITIATIVES</span>
          <h2 className="font-sans text-3xl md:text-4xl font-black text-zinc-950 tracking-tight uppercase">
            LEARN WITH BRAINLEADS
          </h2>
          <div className="w-16 h-1 bg-[#FFBF00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {LEARN_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                id={`learn-card-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-zinc-200/80 hover:border-[#FFBF00]/60 hover:shadow-xl rounded-2xl p-6 flex flex-col justify-between items-center text-center group transition-all duration-300 relative"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Rounded Gold/Beige Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-[#FFBF00]/10 border border-[#FFBF00]/20 flex items-center justify-center mb-6 text-[#A37000] group-hover:bg-[#FFBF00]/20 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 stroke-[1.75]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-sans text-base font-black tracking-wide text-zinc-900 uppercase mb-3 min-h-[24px] flex items-center">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-sans text-zinc-600 text-xs md:text-[13px] leading-relaxed font-normal mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Card Button */}
                <button
                  id={`learn-btn-${item.id}`}
                  className="w-full py-2.5 px-4 font-sans text-xs font-bold tracking-wider uppercase text-white bg-[#B48C35] hover:bg-[#967128] rounded-lg transition-all duration-300 mt-auto shadow-sm hover:shadow"
                >
                  {item.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
