import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Zap,
  Globe,
  LayoutGrid,
  Database,
  Server,
  Smartphone,
  Mail,
  Sparkles,
  Lock,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { PageLayout } from "@/components/layout/PageLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 35, damping: 15 },
  },
};

// --- Utility Components ---
const SocialButton = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/5 border border-gold/10 hover:border-gold/30 hover:scale-110 active:scale-95 transition-all duration-300 text-white hover:text-gold group"
  >
    <Icon size={18} className="group-hover:rotate-12 transition-transform" />
  </a>
);

const TechCard = ({
  icon: Icon,
  title,
  desc,
  className = "",
  children,
}: {
  icon: any;
  title: string;
  desc?: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-all group/item cursor-default ${className}`}
  >
    <div className="mb-3 sm:mb-4 text-white group-hover:text-gold transition-colors p-2 bg-black/40 rounded-lg w-fit">
      <Icon size={18} className="sm:size-[20px]" />
    </div>
    <h4 className="font-bold text-white text-xs sm:text-sm mb-1">{title}</h4>
    {children ? (
      children
    ) : (
      <p className="text-[11px] sm:text-xs lg:text-[13px] text-gold-pale/50 leading-relaxed font-semibold">
        {desc}
      </p>
    )}
  </motion.div>
);

// --- Section Components ---
const ProjectCard = () => {
  const [active, setActive] = useState(0);
  const projects = [
    {
      title: "ALBEDO",
      category: "Education Platform",
      desc: "Platform for a large-scale education platform used by 20,000+ users.",
      stack: ["React", "Redux", "Tailwind"],
      image: "Albedo_Educator_kgofmk",
      icon: Code2,
      liveUrl: "https://operations.albedoedu.com/",
    },
    {
      title: "EVOKA",
      category: "Agency Platform",
      desc: "Creative agency platform for managing clients, projects, and production teams.",
      stack: ["React", "Django", "PostgreSQL"],
      image: "Evoka_Communications_vzleam",
      icon: LayoutGrid,
      liveUrl: "https://crm.evoka.in/",
    },
    {
      title: "CALC",
      category: "Data Analytics",
      desc: "Data analytics platform for education data export and visualization.",
      stack: ["React", "Python", "Redux"],
      image: "Calc_hq9nyw",
      icon: Database,
      liveUrl: "https://calc.albedoedu.com/",
    },
    {
      title: "ZEEQUE",
      category: "Personal Branding",
      desc: "All-in-one platform for high-end personal branding and digital identity management.",
      stack: ["React", "Tailwind", "Socket.io"],
      image: "ZeequePlus_ezemwu",
      icon: Smartphone,
      liveUrl: "https://zeeque.plus/",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % projects.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = projects[active].icon;

  return (
    <div className="h-full flex flex-col relative group/project">
      {/* Background Watermark - Very Subtle */}
      <div className="absolute -right-8 -bottom-8 opacity-[0.02] rotate-12 transition-transform duration-700 group-hover/project:scale-125 group-hover/project:-rotate-6">
        <CurrentIcon size={240} className="text-gold" />
      </div>

      <div className="flex-1 flex flex-col relative z-20">
        {/* Header: Icon + View All */}
        <div className="flex items-start justify-between mb-10">
          <div className="p-4 bg-gold/10 rounded-2xl border border-gold/20 text-gold shadow-glow-sm">
            <CurrentIcon size={22} />
          </div>
          <Link
            to="/projects"
            className="group/link text-sm font-bold uppercase tracking-widest text-gold-pale/40 hover:text-gold transition-colors flex items-center gap-2"
          >
            Visit Gallery
            <ArrowRight
              size={16}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Content: Title + Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-mono text-gold/40 tracking-[0.2em] font-bold">
                0{active + 1}.
              </span>
              <div className="h-px w-10 bg-gold/20" />
              <div className="text-gold text-xs font-bold uppercase tracking-[0.4em]">
                {projects[active].category}
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 leading-[0.85] tracking-tighter">
              {projects[active].title}
            </h3>

            <p className="text-base lg:text-lg text-gold-pale/60 leading-snug mb-5 font-medium italic max-w-[95%]">
              "{projects[active].desc}"
            </p>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {projects[active].stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gold/5 border border-gold/10 text-xs font-bold text-gold-pale/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Action: Visit Link */}
        <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/[0.05]">
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  active === i
                    ? "w-12 bg-gold"
                    : "w-2.5 bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Page ---
export const HomePage = () => {
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleDownloadCV = async () => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: "Abdul Raoof",
          message: `CV Downloaded by user on ${navigator.platform}`,
          platform: navigator.platform,
          userAgent: navigator.userAgent,
        },
        EMAILJS_PUBLIC_KEY,
      );
    } catch (error) {
      console.error("Error tracking download:", error);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-[#030303] selection:bg-gold/30 pt-4 pb-20 overflow-x-hidden relative">
        {/* Digital Scan Lines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,30px_100%]" />

        {/* Subtle Background Noise Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20" />

        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Hero Card */}
            <GlassCard className="md:col-span-8 lg:col-span-9 flex flex-col justify-center min-h-[300px] md:min-h-[380px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <Code2 size={160} className="md:size-[240px]" />
              </div>

              <div className="relative z-10 pr-4 md:pr-12">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-8 backdrop-blur-md shadow-inner"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-pale">
                    Available for work
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-none sm:leading-[0.9] tracking-tight mt-6 relative z-10"
                >
                  Frontend Engineer <br />
                  <span className="text-gold-gradient">React Specialist.</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg text-gold-pale/70 max-w-lg mb-8 leading-relaxed"
                >
                  I'm Abdul Raoof. I build accessible, pixel-perfect, and
                  performant web applications with modern architecture.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/contact"
                    className="group px-7 py-3.5 rounded-xl bg-gold text-black font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,165,66,0.25)] hover:shadow-[0_0_30px_rgba(212,165,66,0.4)]"
                  >
                    Let's Talk{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <a
                    href="/Abdul_Raoof_CV.pdf"
                    download="Abdul_Raoof_CV.pdf"
                    onClick={handleDownloadCV}
                    className="group px-7 py-3.5 rounded-xl bg-transparent border border-gold/30 text-gold-pale font-bold text-sm hover:border-gold/60 transition-all flex items-center gap-2"
                  >
                    <Download
                      size={16}
                      className="text-gold/70 group-hover:text-gold transition-colors"
                    />{" "}
                    Download CV
                  </a>
                </motion.div>
              </div>
            </GlassCard>

            {/* Profile Card - MOVE TO TOP RIGHT */}
            <GlassCard
              className="md:col-span-4 lg:col-span-3 min-h-[300px] md:min-h-[420px] !p-0 group relative overflow-hidden"
              noPadding
            >
              <div className="absolute inset-0">
                <img
                  src="/ME.jpg"
                  alt="Abdul Raoof"
                  className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110 origin-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
                <div className="inline-block px-2 py-1 rounded bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
                  Full Stack
                </div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Abdul Raoof
                </h2>

                <div className="flex gap-3">
                  <SocialButton
                    icon={Github}
                    href="https://github.com/raoofCLT"
                  />
                  <SocialButton
                    icon={Linkedin}
                    href="https://linkedin.com/in/raoof-clt"
                  />
                  <SocialButton
                    icon={Mail}
                    href="mailto:raoofkottayil@gmail.com"
                  />
                </div>
              </div>
            </GlassCard>
          </div>

          {/* --- ROW 2: Balanced Grid (4:4:4) --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Unified Stats & Summary (4 cols) */}
            <GlassCard className="md:col-span-4 lg:col-span-4 flex flex-col h-full min-h-[320px] md:min-h-[360px] group/stat !p-5 md:!p-8">
              <div className="flex-1 flex flex-col">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-6 mb-8 md:mb-12">
                  <div className="p-4 md:p-6 rounded-2xl bg-gold/10 border border-gold/20 hover:border-gold/30 transition-all flex flex-col items-center">
                    <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-1 select-none">
                      2+
                    </div>
                    <div className="text-[10px] md:text-xs text-gold-pale/50 uppercase tracking-[0.4em] font-black underline decoration-gold/20">
                      Exp
                    </div>
                  </div>
                  <div className="p-4 md:p-6 rounded-2xl bg-gold/10 border border-gold/20 hover:border-gold/30 transition-all flex flex-col items-center">
                    <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-1 select-none">
                      15+
                    </div>
                    <div className="text-[10px] md:text-xs text-gold-pale/50 uppercase tracking-[0.4em] font-black underline decoration-gold/20">
                      Clients
                    </div>
                  </div>
                </div>

                {/* Profile Highlight */}
                <div className="mt-auto bg-black/60 rounded-2xl p-4 md:p-6 border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-gold" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Bio
                    </span>
                  </div>
                  <p className="text-xs text-gold-pale/60 leading-relaxed italic line-clamp-2 md:line-clamp-none">
                    "Crafting digital experiences that merge architecture with
                    futuristic aesthetics."
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Tech Stack (8 cols on md, 4 on lg) */}
            <GlassCard className="md:col-span-8 lg:col-span-4 flex flex-col h-full min-h-[320px] md:min-h-[360px] !p-5 md:!p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 md:p-3 bg-gold/10 rounded-xl border border-gold/20 text-gold">
                  <Terminal size={18} className="md:size-6" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                  Tech Stack
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-1">
                <TechCard
                  icon={Code2}
                  title="Frontend"
                  desc="React, Next.js, TS, HTML, CSS"
                />
                <TechCard
                  icon={LayoutGrid}
                  title="UI Kits"
                  desc="Tailwind, ShadCN, MUI"
                />
                <TechCard
                  icon={Database}
                  title="Backend"
                  desc="Node, Express, PostgreSQL"
                />
                <TechCard
                  icon={Terminal}
                  title="Tools"
                  desc="Git, Docker, Vite"
                />
              </div>
            </GlassCard>

            {/* Featured Project (Full width on md, 4 cols on lg) */}
            <GlassCard className="md:col-span-12 lg:col-span-4 h-full min-h-[360px] !p-6 md:!p-8">
              <ProjectCard />
            </GlassCard>
          </div>

          {/* --- ROW 4: Services Ticker --- */}
          <GlassCard className="!p-0 hover:border-gold/50 transition-colors duration-500 relative overflow-hidden h-auto min-h-[120px]">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 h-full w-full">
              {/* Header Section */}
              <div className="flex items-center gap-4 w-full md:w-auto relative z-20 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gold flex-shrink-0 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(212,165,66,0.3)]">
                  <Sparkles
                    size={20}
                    className="fill-current animate-pulse bg-white/0"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    Let's work together
                  </h3>
                  <p className="text-xs text-gold-pale/70 mt-1 truncate">
                    Open for Freelance & Full-time
                  </p>
                </div>
              </div>

              {/* Marquee Section */}
              <div className="relative z-10 w-full overflow-hidden mask-gradient py-2 md:flex-1">
                <div
                  className="flex gap-8 items-center text-xs font-bold uppercase tracking-widest text-gold/40 animate-marquee whitespace-nowrap"
                  style={{ animationDuration: "20s" }}
                >
                  <span>Frontend Architecture</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Backend Engineering</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Desktop Applications</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Interactive Experiences</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Software Development</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Database Design</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Modern UI/UX</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>API Development</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Real-time Systems</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Performance Tuning</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />

                  {/* Duplicate Content for Seamless Loop */}
                  <span>Frontend Architecture</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Backend Engineering</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Desktop Applications</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Interactive Experiences</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Software Development</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Database Design</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Modern UI/UX</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>API Development</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Real-time Systems</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                  <span>Performance Tuning</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/20 flex-shrink-0" />
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageLayout>
  );
};
