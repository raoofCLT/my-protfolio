import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  History,
  Building2,
  Trophy,
  Users,
  LayoutGrid,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

const experiences = [
  {
    role: "Frontend Developer",
    company: "CODO AI Innovations",
    type: "Full-time",
    period: "Dec 2024 - Present",
    location: "Malappuram, Kerala, India",
    logo: "CodoLogo_lcvhyp",
    description: [
      "Develop and maintain responsive web interfaces using modern frontend technologies.",
      "Ensure cross-browser and cross-device compatibility for a consistent user experience.",
      "Work closely with UI/UX designers and backend engineers to integrate designs and APIs.",
      "Debug and resolve frontend issues to improve application reliability and performance.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Freelance",
    type: "Freelance",
    period: "Nov 2023 - Present",
    location: "Remote",
    logo: "FreelanceLogo_lfjnjq",
    description: [
      "Worked on multiple freelance projects delivering full-stack web solutions from concept to deployment.",
      "Built scalable frontend interfaces and secure backend APIs.",
      "Communicated directly with clients to gather requirements and implement features efficiently.",
    ],
  },
];

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
        <FuturisticBackground />

        {/* Digital Scan Lines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,30px_100%]" />

        <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20" />

        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 relative z-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- TOP ROW: HEADER SECTION (Matches Home/Projects) --- */}
          {/* --- TOP ROW: HEADER SECTION (Matches Portfolio Style) --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Title Card (Col-8) */}
            <GlassCard className="md:col-span-8 lg:col-span-8 p-6 md:p-12 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full min-h-[350px] md:min-h-[400px]">
              <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <Briefcase size={180} className="md:size-[240px]" />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-10 md:w-12 bg-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Career Path
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mt-6 relative z-10"
              >
                Professional <br />
                <span className="text-gold-gradient italic">Journey.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/70 text-base md:text-lg leading-relaxed max-w-xl mt-6 relative z-10 font-medium"
              >
                A timeline of impactful roles and contributions across the tech
                industry, focused on engineering excellence.
              </motion.p>
            </GlassCard>

            {/* Stats Summary (Col-4) */}
            <GlassCard className="md:col-span-4 lg:col-span-4 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden h-full group hover:border-gold/30 transition-colors bg-gradient-to-br from-white/5 to-transparent">
              <div className="absolute -bottom-8 -right-8 opacity-[0.03] text-gold group-hover:scale-110 transition-transform duration-[2s]">
                <Briefcase size={220} />
              </div>

              <div className="relative z-10 space-y-12">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-black/50 rounded-xl border border-white/10 text-white">
                    <History size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white uppercase tracking-wider leading-none">
                      Metrics
                    </div>
                    <div className="text-xs text-white/30 uppercase tracking-[0.2em] mt-1">
                      Career Stats
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-5 group/stat">
                    <div className="w-14 h-14 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover/stat:bg-gold/10 transition-colors shadow-lg">
                      <Trophy size={26} />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-white leading-none tracking-tighter">
                        2+
                      </div>
                      <div className="text-xs text-white/30 uppercase font-black tracking-widest mt-2">
                        Years Exp.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group/stat">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 group-hover/stat:border-gold/20 transition-colors shadow-lg">
                      <Building2 size={26} />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-white leading-none tracking-tighter">
                        01
                      </div>
                      <div className="text-xs text-white/30 uppercase font-black tracking-widest mt-2">
                        Companies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* --- BOTTOM ROW: EXPERIENCE GRID (Bento Style) --- */}
          {/* Matches the Grid look of Homes Tech Stack or Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <GlassCard
                key={idx}
                className="group relative flex flex-col justify-between min-h-[220px] p-8 hover:border-gold/30 transition-all duration-300 bg-gold/[0.02] hover:bg-gold/[0.04]"
                noPadding
              >
                {/* Top Row: Logo & Period */}
                <div className="flex justify-between items-start mb-6">
                  {exp.logo ? (
                    <div className="w-14 h-14 rounded-2xl bg-white border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden p-2">
                      <CloudinaryImage
                        publicId={exp.logo}
                        alt={exp.company}
                        width={200}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:border-gold/30 transition-all duration-300">
                      {exp.logo}
                    </div>
                  )}

                  <div className="text-right">
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-white/60 group-hover:text-gold group-hover:border-gold/20 transition-colors inline-block mb-2">
                      {exp.period}
                    </div>
                    <div className="text-xs text-white/30 uppercase tracking-[0.2em] font-black group-hover:text-gold transition-colors">
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Role & Company */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
                    <Building2 size={14} />
                    {exp.company}
                    <span className="w-1 h-1 rounded-full bg-white/20 mx-1"></span>
                    <span>{exp.type}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
