import React from "react";
import { motion } from "motion/react";
import { Lightbulb, Rocket, Users, TrendingUp, Cpu, Globe, ArrowRight } from "lucide-react";

interface PathItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const PATHS_DATA: PathItem[] = [
  {
    id: "business-idea",
    title: "I Have a Business Idea",
    description: "Turn your idea into a successful business. Learn the essential steps to validate your idea, launch with confidence, and build a strong foundation.",
    icon: Lightbulb,
  },
  {
    id: "starting-business",
    title: "I'm Starting My Business",
    description: "Build your business the right way. Discover practical strategies to attract customers, grow your brand, and establish a solid business.",
    icon: Rocket,
  },
  {
    id: "more-customers",
    title: "I Want More Customers",
    description: "Increase your sales and grow your business. Learn proven marketing, sales, and customer growth strategies that deliver results.",
    icon: Users,
  },
  {
    id: "scale-business",
    title: "I Want to Scale My Business",
    description: "Grow beyond the day-to-day. Build systems, develop leaders, and create a business designed for sustainable growth.",
    icon: TrendingUp,
  },
  {
    id: "run-without-me",
    title: "I Want My Business to Run Without Me",
    description: "Build a business that works without depending on you. Create systems, delegate effectively, and build an organization that can thrive independently.",
    icon: Cpu,
  },
  {
    id: "expand-business",
    title: "I Want to Expand My Business",
    description: "Take your business to the next level. Explore expansion strategies, partnerships, funding, technology, franchising, and entering new markets with confidence.",
    icon: Globe,
  },
];

interface LearningPathProps {
  onPathSelect: (pathTitle: string) => void;
}

export default function LearningPath({ onPathSelect }: LearningPathProps) {
  return (
    <section id="learning-path" className="py-24 bg-zinc-50 border-t border-zinc-200 relative px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/3 right-10 w-[250px] h-[250px] bg-[#B48C35]/2 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[250px] h-[250px] bg-zinc-200/50 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-[#B48C35] uppercase tracking-widest font-bold">
            Tailored Growth
          </span>
          <h2 id="learning-path-title" className="font-sans text-3xl md:text-4xl font-black text-zinc-950 tracking-tight uppercase">
            Find Your Learning Path
          </h2>
          <div className="w-16 h-1 bg-[#B48C35] mx-auto mt-4 rounded-full" />
          <p className="font-sans text-zinc-600 text-sm md:text-base font-normal leading-relaxed pt-2">
            No matter where you are in your business journey, Brainleads Academy provides practical
            knowledge, proven strategies, and real-world insights to help you overcome challenges, grow with
            confidence, and build lasting success. Choose the path that best describes where you are today.
          </p>
        </div>

        {/* 3x2 Grid for the paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PATHS_DATA.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <motion.div
                key={path.id}
                id={`path-card-${path.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white border border-zinc-200/80 hover:border-[#B48C35]/60 hover:shadow-xl rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-zinc-50 rounded-xl group-hover:bg-[#B48C35]/5 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#B48C35]" />
                    </div>
                    <h3 className="font-sans text-base md:text-lg font-bold text-zinc-900 group-hover:text-[#B48C35] transition-colors duration-300 leading-tight">
                      {path.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">
                    {path.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-6 mt-4 border-t border-zinc-100 flex items-center justify-between">
                  <button
                    onClick={() => onPathSelect(path.title)}
                    className="group/btn inline-flex items-center space-x-2 text-xs font-sans font-bold tracking-widest text-[#B48C35] hover:text-[#967128] uppercase transition-colors"
                  >
                    <span>Explore This Path</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
