import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  User2,
  Heart,
  Zap,
  Layers,
  BookOpen,
  ChevronRight,
  Cpu,
  Sparkles,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { GlassCard } from "@/components/ui/GlassCard";

/* --- Animation Variants --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 50, damping: 20 },
  },
};

/* --- Icons for Infinite Slider --- */

export const AboutPage = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-[#030303] selection:bg-gold/30 pt-6 pb-20 overflow-x-hidden relative">
        {/* Digital Scan Lines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,30px_100%]" />

        <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20" />

        <motion.div
          className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- SECTION 1: Intro (8/4 Grid) --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[300px] md:min-h-[400px]">
            {/* Left: Typography Focus - Spans 8 cols */}
            <GlassCard className="md:col-span-8 lg:col-span-8 p-6 md:p-12 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full">
              <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <Cpu size={180} className="md:size-[240px]" />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-10 md:w-12 bg-gold" />
                <span className="text-gold font-bold tracking-widest uppercase text-xs">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-white tracking-tight leading-[1.05] mb-6 mt-4"
              >
                Crafting{" "}
                <span className="text-gold-gradient inline-block relative">
                  digital
                </span>
                <br /> excellence.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/70 text-base md:text-lg leading-relaxed max-w-xl mt-4 relative z-10 font-medium"
              >
                I’m a Frontend Engineer focused on designing and building
                scalable, accessible, and high-performance web applications that
                solve real-world problems with clean and maintainable code.
              </motion.p>
            </GlassCard>

            {/* Right: Profile Composition - Spans 4 cols */}
            <div className="md:block hidden md:col-span-4 lg:col-span-4 h-full flex items-center justify-center">
              <motion.div
                variants={itemVariants}
                className="relative w-full h-full min-h-[300px] md:min-h-[400px] group"
              >
                <GlassCard className="w-full h-full !p-0 overflow-hidden relative border-gold/20 group-hover:border-gold/50 transition-colors bg-black/40">
                  <img
                    src="https://res.cloudinary.com/dc6hniypp/image/upload/v1774425330/profilepic_cq3ypr.jpg"
                    alt="Abdul Raoof"
                    className="w-full h-full object-cover object-top grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </GlassCard>
              </motion.div>
            </div>
          </div>

          {/* --- SECTION 2: Journey Grid (4/8 Grid) --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Stats Box - Spans 5 cols on tablets */}
            <GlassCard className="md:col-span-5 lg:col-span-4 flex flex-col justify-between p-6 md:p-8 hover:border-gold/30 transition-colors h-full">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen size={20} className="text-gold" />
                  <span className="text-white text-[11px] font-black uppercase tracking-[0.2em]">
                    My Journey
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight tracking-tight">
                  From curiosity to{" "}
                  <span className="text-gold">clean code.</span>
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto">
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tighter">
                    2+
                  </div>
                  <div className="text-xs text-gold-pale/50 uppercase tracking-widest font-bold">
                    Exp.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tighter">
                    20+
                  </div>
                  <div className="text-xs text-gold-pale/50 uppercase tracking-widest font-bold">
                    Projects
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tighter">
                    15+
                  </div>
                  <div className="text-xs text-gold-pale/50 uppercase tracking-widest font-bold">
                    Clients
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tighter">
                    50k+
                  </div>
                  <div className="text-xs text-gold-pale/50 uppercase tracking-widest font-bold">
                    Impact
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Narrative Box - Spans 7 cols on tablets */}
            <GlassCard className="md:col-span-7 lg:col-span-8 p-6 md:p-12 hover:border-gold/30 transition-colors flex flex-col justify-center h-full">
              <div className="space-y-6 text-gold-pale/70 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  My journey into coding started with curiosity and gradually
                  evolved into a disciplined engineering mindset. I don’t just
                  write code — I design robust, scalable, and maintainable
                  systems built to last.
                </p>
                <p>
                  With a strong focus on the modern React ecosystem, I approach
                  every project as an opportunity to improve performance,
                  usability, and efficiency. From optimizing data flows to
                  refining UI interactions, I care deeply about quality and
                  detail.
                </p>
                <p className="pt-2 text-white font-bold italic border-l-2 border-gold pl-6">
                  "I believe great software is built through clear thinking,
                  thoughtful design, and precise execution."
                </p>
              </div>
            </GlassCard>
          </div>

          {/* --- SECTION 4: Skills & Tech - Categorized --- */}
          <GlassCard className="p-6 md:p-10 border-gold/20 relative overflow-hidden">
            {/* Subtle radial glow background */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold/10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gold/10 rounded-xl border border-gold/20 text-gold shadow-[0_0_15px_rgba(212,165,66,0.15)]">
                  <Zap size={22} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
                    Technical Toolkit
                  </h3>
                  <p className="text-xs text-gold-pale/50 font-medium mt-0.5">
                    Technologies, frameworks & tools I build with
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
              {[
                {
                  category: "Languages",
                  skills: [
                    "JavaScript",
                    "TypeScript",
                    "Python (Learning)",
                    "HTML5",
                    "CSS3",
                    "SQL",
                  ],
                },
                {
                  category: "Frontend",
                  skills: [
                    "React.js",
                    "Next.js",
                    "TanStack Start",
                    "Tailwind CSS",
                    "ShadCN UI",
                    "Chakra UI",
                    "Framer Motion",
                    "Redux Toolkit",
                    "Zustand",
                    "Recoil",
                    "TanStack Query",
                    "React Router",
                  ],
                },
                {
                  category: "Backend & Database",
                  skills: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Mongoose",
                    "PostgreSQL",
                    "Prisma ORM",
                    "Socket.io",
                    "JWT Auth",
                    "bcrypt",
                    "REST APIs",
                    "Cloudinary",
                    "Sanity CMS",
                  ],
                },
                {
                  category: "Tools & Platforms",
                  skills: [
                    "Git",
                    "GitHub",
                    "Docker",
                    "Vite",
                    "Postman",
                    "Figma",
                    "Vercel",
                    "Render",
                    "npm",
                    "VS Code",
                  ],
                },
              ].map((group) => (
                <div
                  key={group.category}
                  className="flex flex-col p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-300 group/cat"
                >
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gold/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold group-hover/cat:scale-125 transition-transform" />
                    <h4 className="text-gold text-xs font-black uppercase tracking-[0.18em]">
                      {group.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 content-start">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-200 cursor-default select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Bottom CTA to Services */}
          <motion.div
            variants={itemVariants}
            className="pt-8 pb-4 flex justify-center"
          >
            <GlassCard className="max-w-2xl w-full p-8 md:p-10 text-center flex flex-col items-center group relative overflow-hidden border-gold/10 hover:border-gold/30 transition-colors">
              <h3 className="text-2xl font-black text-white mb-3">
                Looking for a technical partner?
              </h3>
              <p className="text-gold-pale/70 mb-8 max-w-lg text-sm font-medium">
                See how I can help you automate operations, increase revenue,
                and build a premium digital presence.
              </p>
              <Link
                to="/services"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-gold hover:border-gold hover:text-black transition-all flex items-center gap-3"
              >
                View My Services <ChevronRight size={16} />
              </Link>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
