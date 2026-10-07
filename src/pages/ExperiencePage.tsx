import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  History,
  Building2,
  Trophy,
  Calendar,
  MapPin,
  ArrowUpRight,
  Globe,
  Sparkles,
  Layers,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { experiences } from "@/data/portfolioData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

export const ExperiencePage = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-[#030303] selection:bg-gold/30 pt-4 pb-20 overflow-x-hidden relative">
        {/* Digital Scan Lines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,30px_100%]" />

        {/* Ambient Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('/noise.svg')] mix-blend-overlay z-20" />

        <motion.div
          className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- TOP ROW: HEADER SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Title Card (Col-8) */}
            <GlassCard className="md:col-span-8 lg:col-span-8 p-6 md:p-10 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full min-h-[260px] md:min-h-[290px]">
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold pointer-events-none">
                <Briefcase size={200} className="md:size-[240px]" />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-10 md:w-12 bg-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Career Experience
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mt-5 relative z-10"
              >
                Professional <br />
                <span className="text-gold-gradient italic">Journey.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/70 text-sm md:text-base leading-relaxed max-w-xl mt-4 relative z-10 font-medium"
              >
                Engineering impact, enterprise ERP architecture, and high-performance
                web applications across modern product teams.
              </motion.p>
            </GlassCard>

            {/* Stats Summary (Col-4) */}
            <GlassCard className="md:col-span-4 lg:col-span-4 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden h-full group hover:border-gold/30 transition-colors bg-gradient-to-br from-white/5 to-transparent">
              <div className="absolute -bottom-8 -right-8 opacity-[0.03] text-gold group-hover:scale-110 transition-transform duration-[2s] pointer-events-none">
                <Briefcase size={200} />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-black/50 rounded-xl border border-white/10 text-gold">
                    <History size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white uppercase tracking-wider leading-none">
                      Metrics
                    </div>
                    <div className="text-[11px] text-white/30 uppercase tracking-[0.2em] mt-1 font-mono">
                      Career Stats
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3.5">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 group/stat">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0 group-hover/stat:scale-105 transition-transform shadow-lg">
                      <Trophy size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xl font-black text-white leading-none tracking-tighter">
                        2+
                      </div>
                      <div className="text-[10px] text-white/40 uppercase font-black tracking-wider mt-1 truncate">
                        Years Exp.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 group/stat">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 shrink-0 group-hover/stat:scale-105 transition-transform shadow-lg">
                      <Layers size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xl font-black text-white leading-none tracking-tighter">
                        15+
                      </div>
                      <div className="text-[10px] text-white/40 uppercase font-black tracking-wider mt-1 truncate">
                        Projects Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* --- SECTION TITLE --- */}
          <div className="flex items-center justify-between px-1 pt-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(236,200,96,0.6)]" />
              <h2 className="text-xs font-bold text-white uppercase tracking-widest">
                Roles & Experience
              </h2>
            </div>
            <span className="text-[11px] text-white/40 font-mono">
              Career Timeline
            </span>
          </div>

          {/* --- COMPACT EXPERIENCE CARDS --- */}
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <GlassCard
                key={idx}
                className="group relative flex flex-col p-4 sm:p-5 md:p-6 hover:border-gold/30 transition-all duration-300 bg-gradient-to-br from-white/[0.015] via-black/40 to-black/60 border-white/10"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                  {/* Left: Logo & Role */}
                  <div className="flex items-center gap-3.5">
                    {/* Logo Box */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-white/20 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-gold/40 transition-all duration-300 overflow-hidden p-1.5 shrink-0">
                      {exp.logo ? (
                        exp.logo.startsWith("/") || exp.logo.startsWith("http") ? (
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <CloudinaryImage
                            publicId={exp.logo}
                            alt={exp.company}
                            width={160}
                            className="w-full h-full object-contain"
                          />
                        )
                      ) : (
                        <Building2 className="text-gold w-5 h-5" />
                      )}
                    </div>

                    {/* Role Title & Company */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold transition-colors tracking-tight">
                          {exp.role}
                        </h3>

                        {exp.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-white/60 text-xs mt-0.5">
                        <span className="font-semibold text-white/90">
                          {exp.company}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white/50">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Period, Location, and Only Company Website Link */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/80 group-hover:text-gold group-hover:border-gold/20 transition-colors">
                        <Calendar size={11} className="text-gold" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/45">
                        <MapPin size={11} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* ONLY Company Website Link */}
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-gold/10 hover:bg-gold/20 text-gold border border-gold/20 hover:border-gold/40 transition-all hover:scale-[1.02]"
                      >
                        <Globe size={11} />
                        <span>{exp.websiteLabel || "Company Website"}</span>
                        <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>
                </div>

                {/* What I Did - Compact & Direct */}
                <div className="pt-3.5">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <Sparkles size={12} className="text-gold" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 font-mono">
                      What I Did
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs sm:text-[13.5px] text-white/75 group-hover:text-white/90 leading-relaxed flex items-start gap-2.5 transition-colors"
                      >
                        <span className="text-gold mt-1 text-xs shrink-0 select-none font-bold">
                          ▸
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};


