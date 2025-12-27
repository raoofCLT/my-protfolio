import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  LayoutGrid,
  X,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { GlassCard } from "@/components/ui/GlassCard";

// --- Animation Variants ---

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 40, damping: 15 },
  },
};

const projects = [
  {
    title: "Evoka",
    description:
      "AI-powered event management platform with smart scheduling and real-time collaboration features.",
    image: "/Projects/Evoka.png",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    title: "Libraria",
    description:
      "Modern library management system with real-time tracking and automated cataloging.",
    image: "/Projects/Libraria.png",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    live: "#",
    code: "#",
  },
  {
    title: "StartupHub",
    description:
      "Platform connecting startups with investors, mentors, and resources for growth.",
    image: "/Projects/StartupHub.png",
    tech: ["React", "Express", "MongoDB"],
    live: "#",
    code: "#",
  },
  {
    title: "Yara E-commerce",
    description:
      "Full-featured e-commerce platform with payment integration and inventory management.",
    image: "/Projects/Yara E-commerce.png",
    tech: ["React", "Node.js", "Stripe"],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    title: "Albedo Educator",
    description:
      "Educational platform with interactive learning modules and progress tracking.",
    image: "/Projects/Albedo Educator.png",
    tech: ["React", "Firebase", "Tailwind"],
    live: "#",
    code: "#",
  },
  {
    title: "Smart Calculator",
    description:
      "Advanced calculator with scientific functions, history, and theme customization.",
    image: "/Projects/Calc.png",
    tech: ["React", "TypeScript"],
    live: "#",
    code: "#",
  },
];

export const ProjectsPage = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-[#030303] selection:bg-gold-DEFAULT/30 pt-4 pb-20 overflow-x-hidden">
        <FloatingShapes />
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- HEADER SECTION (8/4 Grid) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Title Card */}
            <GlassCard className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors min-h-[300px]">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6">
                <LayoutGrid size={240} className="text-white" />
              </div>

              <motion.div variants={itemVariants} className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                    Portfolio 2024
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[0.9] mb-4">
                  Selected <br />
                  <span className="text-gold-gradient">Masterpieces.</span>
                </h1>

                <p className="text-gold-pale/80 text-lg max-w-xl leading-relaxed">
                  A curated collection of scalable systems, responsive
                  interfaces, and digital products engineered with precision.
                </p>
              </motion.div>
            </GlassCard>

            {/* Right: GitHub / Status Card */}
            <GlassCard className="lg:col-span-4 p-8 flex flex-col justify-between hover:border-gold/30 transition-colors bg-gradient-to-br from-white/5 to-transparent">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-black/50 rounded-xl border border-white/10 text-white">
                    <Github size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Open Source
                    </div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest">
                      Contributions
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Check out my code labs, experiments, and contributions to the
                  open-source community.
                </p>
              </div>

              <a
                href="https://github.com/abdulraoof"
                target="_blank"
                className="group flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gold/10 border border-gold/20 hover:bg-gold/20 transition-all"
                rel="noreferrer"
              >
                <span className="text-xs font-bold text-gold uppercase tracking-widest">
                  View GitHub
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </GlassCard>
          </div>

          {/* --- PROJECTS COMPACT LIST GRID --- */}
          <GlassCard className="p-6 md:p-10 border-gold/10 bg-black/40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[800px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative flex flex-col gap-6 p-6 rounded-3xl border border-gold/20 bg-gold/[0.02] shadow-[0_0_30px_-5px_rgba(212,165,66,0.1)] overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full h-48 shrink-0 overflow-hidden rounded-2xl border border-gold/10 shadow-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold/90 text-black text-[10px] font-bold uppercase tracking-wider shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gold tracking-tight mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="h-px w-8 bg-gold/30" />
                          <span className="text-[10px] font-mono text-gold/60 uppercase tracking-widest">
                            Project 0{idx + 1}
                          </span>
                        </div>
                      </div>

                      {/* Always Visible Links */}
                      <div className="flex gap-2">
                        <a
                          href={project.live}
                          target="_blank"
                          className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/20 hover:bg-gold hover:text-black transition-all"
                          title="View Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                        <a
                          href={project.code}
                          target="_blank"
                          className="p-2.5 rounded-xl bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
                          title="View Codebase"
                        >
                          <Github size={18} />
                        </a>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 rounded-lg bg-black/40 border border-gold/10 text-[11px] font-mono text-gold/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageLayout>
  );
};
