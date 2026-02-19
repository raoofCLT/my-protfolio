import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
import { FloatingShapes } from "@/components/ui/FloatingShapes";
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
      <div className="min-h-screen bg-background selection:bg-gold/30 pt-6 pb-20 overflow-x-hidden relative">
        <FloatingShapes />
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <motion.div
          className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- SECTION 1: Intro (8/4 Grid) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[400px]">
            {/* Left: Typography Focus - Spans 8 cols */}
            <GlassCard className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <Cpu size={240} />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-medium tracking-wider uppercase text-sm">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.05] mb-6"
              >
                Crafting{" "}
                <span className="text-gold-gradient inline-block relative">
                  digital
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold to-transparent"
                  />
                </span>
                <br /> excellence.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/80 text-lg leading-relaxed max-w-xl mt-6 relative z-10"
              >
                I’m a Frontend Engineer focused on designing and building
                scalable, accessible, and high-performance web applications that
                solve real-world problems with clean and maintainable code.
              </motion.p>
            </GlassCard>

            {/* Right: Unique Profile Composition - Spans 4 cols */}
            <div className="lg:col-span-4 h-full flex items-center justify-center perspective-1000">
              <motion.div
                variants={itemVariants}
                className="relative w-full h-full min-h-[400px] group"
              >
                <GlassCard className="w-full h-full !p-0 overflow-hidden relative border-gold/20 group-hover:border-gold/50 transition-colors bg-black/40">
                  <img
                    src="/profilepic.jpeg"
                    alt="Abdul Raoof"
                    className="w-full h-full object-cover object-top grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for Text Readability if needed */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                  {/* Floating Tech Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-black/60 backdrop-blur-xl rounded-lg border border-gold/20 px-3 py-1.5 flex items-center gap-2">
                      <span className="animate-pulse w-2 h-2 rounded-full bg-gold"></span>
                      {/* <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                        PTR-01
                      </span> */}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>

          {/* --- SECTION 2: Journey Grid (4/8 Grid) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Stats Box - Spans 4 cols */}
            <GlassCard className="lg:col-span-4 flex flex-col justify-between p-8 hover:border-gold/30 transition-colors h-full">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen size={20} className="text-white" />
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">
                    My Journey
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                  From curiosity to clean code.
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    2+
                  </div>
                  <div className="text-[10px] text-gold-pale/50 uppercase tracking-widest font-bold">
                    Years Exp.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    15+
                  </div>
                  <div className="text-[10px] text-gold-pale/50 uppercase tracking-widest font-bold">
                    Projects
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    10+
                  </div>
                  <div className="text-[10px] text-gold-pale/50 uppercase tracking-widest font-bold">
                    Happy Clients
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-bold text-white group-hover:text-gold transition-colors uppercase">
                    50k+
                  </div>
                  <div className="text-[10px] text-gold-pale/50 uppercase tracking-widest font-bold">
                    User Impact
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Narrative Box - Spans 8 cols */}
            <GlassCard className="lg:col-span-8 p-8 md:p-12 hover:border-gold/30 transition-colors flex flex-col justify-center h-full">
              <div className="space-y-6 text-gold-pale/80 text-lg leading-relaxed font-light">
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
                <p>
                  I believe great software is built through clear thinking,
                  thoughtful design, and precise execution.
                </p>
                <p className="pt-2 text-gold/90 font-medium">
                  I enjoy building products that are simple to use, efficient
                  under the hood, and meaningful in real life.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* --- SECTION 4: Skills & Tech - Categorized --- */}
          <GlassCard className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gold/10 rounded-lg border border-gold/20 text-white">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                Technical Toolkit
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Languages",
                  skills: [
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "Python",
                    "HTML5",
                    "CSS3",
                    "SQL",
                  ],
                },
                {
                  category: "Frontend",
                  skills: [
                    "React",
                    "Next.js",
                    "Redux",
                    "Tailwind CSS",
                    "Framer Motion",
                    "ShadCN UI",
                  ],
                },
                {
                  category: "Backend",
                  skills: [
                    "Node.js",
                    "Express",
                    "Django",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                  ],
                },
                {
                  category: "Tools & DevOps",
                  skills: [
                    "Git",
                    "GitHub",
                    "Vite",
                    "Postman",
                    "Figma",
                    "Vercel",
                  ],
                },
              ].map((group) => (
                <div key={group.category} className="space-y-4">
                  <h4 className="text-gold text-sm font-bold uppercase tracking-wider border-b border-gold/10 pb-2">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:border-gold/30 hover:text-gold transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageLayout>
  );
};
