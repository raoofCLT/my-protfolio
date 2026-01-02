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
} from "lucide-react";
import emailjs from "@emailjs/browser";
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 40, damping: 15 },
  },
};

// --- Utility Components ---

const SocialButton = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    /* 
       UPDATED SOCIAL ICON:
       - Default: text-white
       - Hover: text-gold
    */
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/5 border border-gold/10 hover:border-gold/30 hover:scale-110 active:scale-95 transition-all duration-300 text-white hover:text-gold group"
  >
    <Icon size={18} className="group-hover:rotate-12 transition-transform" />
  </a>
);

const TechCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-4 rounded-2xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-all group/item cursor-default"
  >
    {/* 
       UPDATED TECH CARD ICON:
       - Default: text-white
       - Hover: text-gold
    */}
    <div className="mb-4 text-white group-hover:text-gold transition-colors p-2 bg-black/40 rounded-lg w-fit">
      <Icon size={20} />
    </div>
    <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
    <p className="text-[10px] text-gold-pale/60 leading-relaxed font-medium">
      {desc}
    </p>
  </motion.div>
);

// --- Section Components ---

const ProjectCard = () => {
  const [active, setActive] = useState(0);
  const projects = [
    {
      title: "ALBEDO Educator",
      category: "Education Platform",
      desc: "Frontend for a large-scale education platform used by 20,000+ users.",
      stack: ["React", "Redux", "Tailwind"],
    },
    {
      title: "Evoka",
      category: "Agency Platform",
      desc: "Creative agency platform for managing clients, projects, and production teams.",
      stack: ["React", "Django", "PostgreSQL"],
    },
    {
      title: "Calc",
      category: "Data Analytics",
      desc: "Data analytics platform for education data export and visualization.",
      stack: ["React", "Python", "Redux"],
    },
    {
      title: "Evoka School",
      category: "Education",
      desc: "Advertising school platform managing students, payments, and projects.",
      stack: ["React", "API", "Tailwind"],
    },
  ];

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % projects.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6">
        <div className="p-2.5 bg-gold/10 rounded-xl border border-gold/20 backdrop-blur-md shadow-sm text-white group-hover:text-gold transition-colors">
          <LayoutGrid size={20} />
        </div>
        <Link
          to="/projects"
          className="group text-[10px] font-bold uppercase tracking-widest text-gold-pale hover:text-gold transition-colors flex items-center gap-1 py-1"
        >
          View All{" "}
          <ArrowRight
            size={10}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      <div className="relative flex-1 min-h-[140px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              <div className="text-gold text-[10px] font-bold uppercase tracking-widest">
                {projects[active].category}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
              {projects[active].title}
            </h3>
            <p className="text-sm text-gold-pale/70 mb-4 line-clamp-2">
              {projects[active].desc}
            </p>
            <div className="flex gap-2">
              {projects[active].stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-md text-gold-pale font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex gap-1.5 mt-6 pt-6 border-t border-gold/10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 ease-out ${
              active === i ? "w-10 bg-gold" : "w-2 bg-gold/20 hover:bg-gold/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main Page ---

export const HomePage = () => {
  // Credentials from .env
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
        EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      console.error("Error tracking download:", error);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-background selection:bg-gold/30 pt-4 pb-20 overflow-x-hidden">
        <FloatingShapes />

        {/* Subtle Background Noise Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- ROW 1: Hero & Status --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Hero Card */}
            <GlassCard className="md:col-span-12 lg:col-span-8 flex flex-col justify-center min-h-[380px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <Code2 size={240} />
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
                  className="text-base md:text-lg text-gold-pale/70 max-w-lg mb-8 leading-relaxed"
                >
                  I'm Abdul Raoof, a Full Stack Engineer. I build accessible,
                  pixel-perfect, and performant web applications with modern
                  architecture.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/contact"
                    className="group px-7 py-3.5 rounded-xl bg-gold text-black font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,165,66,0.2)] hover:shadow-[0_0_30px_rgba(212,165,66,0.4)]"
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

            {/* Status / Quick Stats */}
            <div className="md:col-span-12 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <GlassCard className="flex flex-col justify-between h-full bg-gradient-to-br from-card to-transparent hover:border-gold/30 transition-colors duration-500">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-gold/10 rounded-xl border border-gold/20 text-white shadow-sm transition-colors group-hover:text-gold">
                    <Zap
                      size={20}
                      className="fill-current text-white group-hover:text-gold transition-colors"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-gold-pale/50 px-2 py-1 rounded bg-gold/5">
                    Lvl. 03
                  </span>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                    2+
                  </div>
                  <div className="text-xs text-gold-pale/50 uppercase tracking-widest font-bold">
                    Years Experience
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="flex flex-col justify-between h-full bg-gradient-to-br from-card to-transparent hover:border-gold/30 transition-colors duration-500">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-gold/10 rounded-xl border border-gold/20 text-white shadow-sm transition-colors group-hover:text-gold">
                    <Globe size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-gold-pale/50 px-2 py-1 rounded bg-gold/5">
                    Global
                  </span>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                    10+
                  </div>
                  <div className="text-xs text-gold-pale/50 uppercase tracking-widest font-bold">
                    Happy Clients
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* --- ROW 2: The Dashboard Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* 1. Profile Card (3 cols) */}
            <GlassCard
              className="md:col-span-1 lg:col-span-3 min-h-[420px] !p-0 group relative overflow-hidden"
              noPadding
            >
              <div className="absolute inset-0">
                <img
                  src="/profilepic.jpeg"
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

            {/* 2. Tech Stack (5 cols) */}
            <GlassCard className="md:col-span-1 lg:col-span-5 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gold/10 rounded-lg border border-gold/20 text-white">
                  <Terminal size={20} />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                  Tech Stack
                </h3>
                <div className="flex-1 h-px bg-gold/10" />
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 flex-1">
                <TechCard
                  icon={Code2}
                  title="Frontend"
                  desc="React, Next.js, TypeScript, HTML, CSS, JavaScript, Redux"
                />
                <TechCard
                  icon={LayoutGrid}
                  title="UI Frameworks"
                  desc="Tailwind, ShadCN, Material UI, Chakra UI, Bootstrap"
                />
                <TechCard
                  icon={Database}
                  title="Backend & DB"
                  desc="Node.js, Express.js, Socket.io, PostgreSQL, MongoDB, Redis"
                />
                <TechCard
                  icon={Terminal}
                  title="Tools"
                  desc="Git, Postman, Vite"
                />
              </div>
            </GlassCard>

            {/* 3. Featured Project (4 cols) */}
            <GlassCard className="md:col-span-2 lg:col-span-4">
              <ProjectCard />
            </GlassCard>
          </div>

          {/* --- ROW 3: Services Ticker --- */}
          <GlassCard className="flex flex-col md:flex-row items-center justify-between gap-6 !p-6 md:!p-8 hover:border-gold/50 transition-colors duration-500">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(212,165,66,0.3)]">
                <Sparkles
                  size={20}
                  className="fill-current animate-pulse bg-white/0"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Let's work together
                </h3>
                <p className="text-xs text-gold-pale/70 mt-0.5">
                  Open for Freelance & Full-time opportunities
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-8 overflow-hidden w-full md:w-auto mask-gradient h-full items-center">
              <div className="flex gap-8 items-center text-xs font-bold uppercase tracking-widest text-gold/40 animate-marquee whitespace-nowrap">
                <span>Frontend Architecture</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                <span>Backend Engineering</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                <span>Interactive Experiences</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                <span>Database Design</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                <span>Modern UI/UX</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                <span>API Development</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                <span>Real-time Systems</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                <span>Performance Tuning</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageLayout>
  );
};
