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
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { GlassCard } from "@/components/ui/GlassCard";

const experiences = [
  {
    role: "Frontend Developer",
    company: "CODO AI Innovations",
    type: "Full-time",
    period: "Dec 2024 - Present",
    location: "Malappuram, Kerala, India (Hybrid)",
    logo: "CodoLogo.png",
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
    logo: "FreelanceLogo.png",
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
      <div className="min-h-screen bg-[#030303] selection:bg-gold-DEFAULT/30 pt-4 pb-20 overflow-x-hidden">
        <FloatingShapes />
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 relative z-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- TOP ROW: HEADER SECTION (Matches Home/Projects) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Title Card (Col-8) */}
            <GlassCard className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full min-h-[400px]">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <Briefcase size={240} />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-sm font-bold uppercase tracking-widest">
                  Career Path
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mt-6 relative z-10"
              >
                Professional <br />
                <span className="text-gold-gradient">Journey.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/80 text-lg leading-relaxed max-w-xl mt-6 relative z-10"
              >
                A timeline of impactful roles and contributions across the tech
                industry.
              </motion.p>
            </GlassCard>

            {/* Stats Summary (Col-4) */}
            <GlassCard className="lg:col-span-4 p-8 flex flex-col justify-between hover:border-gold/30 transition-colors bg-gradient-to-br from-white/5 to-transparent">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-black/50 rounded-xl border border-white/10 text-white">
                    <History size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Overview</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest">
                      Career Stats
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                      <Trophy size={18} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white leading-none">
                        2+
                      </div>
                      <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">
                        Years Exp.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/80">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white leading-none">
                        1
                      </div>
                      <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">
                        Companies
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/80">
                      <Users size={18} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white leading-none">
                        Frontend Engineer
                      </div>
                      <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">
                        Current Role
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
                  {exp.logo.includes(".") || exp.logo.includes("http") ? (
                    <div className="w-14 h-14 rounded-2xl bg-white border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
                      <img
                        src={
                          exp.logo.startsWith("http")
                            ? exp.logo
                            : `/${exp.logo}`
                        }
                        alt={exp.company}
                        className="w-full h-full object-cover"
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
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">
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
