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
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { GlassCard } from "@/components/ui/GlassCard";

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
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.06] hover:border-gold/30 hover:bg-gold/10 hover:scale-110 active:scale-95 transition-all duration-300 text-white/50 hover:text-gold"
  >
    <Icon size={18} />
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
    whileHover={{ y: -3 }}
    className={`p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-300 group/item ${className}`}
  >
    <div className="mb-3 text-white/40 group-hover/item:text-gold transition-colors p-2 bg-white/[0.03] rounded-lg w-fit">
      <Icon size={18} />
    </div>
    <h4 className="font-semibold text-white text-sm mb-1">{title}</h4>
    {children ? (
      children
    ) : (
      <p className="text-[10px] text-white/30 leading-relaxed font-medium">
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
      title: "ALBEDO Educator",
      category: "Education Platform",
      desc: "Platform for a large-scale education platform used by 20,000+ users.",
      stack: ["React", "Redux", "Tailwind"],
      icon: Code2,
      liveUrl: "https://operations.albedoedu.com/",
    },
    {
      title: "Evoka",
      category: "Agency Platform",
      desc: "Creative agency platform for managing clients, projects, and production teams.",
      stack: ["React", "Django", "PostgreSQL"],
      icon: LayoutGrid,
      liveUrl: "https://crm.evoka.in/",
    },
    {
      title: "Calc",
      category: "Data Analytics",
      desc: "Data analytics platform for education data export and visualization.",
      stack: ["React", "Python", "Redux"],
      icon: Database,
      liveUrl: "https://calc.albedoedu.com/",
    },
    {
      title: "Evoka School",
      category: "Education",
      desc: "Advertising school platform managing students, payments, and projects.",
      stack: ["React", "API", "Tailwind"],
      icon: Server,
      liveUrl: "https://crm.evokaschool.com/",
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
    <div className="h-full flex flex-col justify-between relative overflow-hidden">
      <div className="absolute -right-12 -bottom-12 opacity-[0.02] scale-150 rotate-12">
        <CurrentIcon size={240} className="text-gold" />
      </div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="p-2.5 bg-gold/10 rounded-xl border border-gold/20 text-gold">
          <CurrentIcon size={22} />
        </div>
        <Link
          to="/projects"
          className="group text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-gold transition-colors flex items-center gap-1"
        >
          View All
          <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="relative flex-1 flex items-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
                {projects[active].category}
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight leading-none">
              {projects[active].title}
            </h3>

            <p className="text-sm text-white/40 mb-6 leading-relaxed max-w-[90%]">
              {projects[active].desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {projects[active].stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full text-white/50 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 border-t border-white/[0.05] pt-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400/80">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Live
              </div>
              {projects[active].liveUrl && (
                <a
                  href={projects[active].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white/50 hover:text-gold transition-colors flex items-center gap-1 group/link"
                >
                  Visit
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2 mt-auto pt-4 relative z-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              active === i ? "w-10 bg-gold" : "w-2 bg-white/10 hover:bg-white/20"
            }`}
          />
        ))}
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
      <div className="min-h-screen bg-background selection:bg-gold/30 overflow-x-hidden relative">
        <FloatingShapes />

        {/* ===== HERO SECTION - Full screen centered like soharon ===== */}
        <section className="min-h-[100vh] flex items-center justify-center relative px-4">
          {/* Floating stat card - top right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute top-32 right-8 lg:right-16 hidden md:block z-20"
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-white/[0.06] rounded-2xl px-6 py-5">
              <div className="text-3xl font-bold text-white">
                10<span className="text-gold">+</span>
              </div>
              <p className="text-xs text-white/40 mt-1 max-w-[140px]">
                Happy Clients Across Various Industries
              </p>
            </div>
          </motion.div>

          {/* Floating stat card - bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-32 left-8 lg:left-16 hidden md:block z-20"
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-white/[0.06] rounded-2xl px-6 py-5">
              <div className="text-3xl font-bold text-white">
                2<span className="text-gold">+</span>
              </div>
              <p className="text-xs text-white/40 mt-1 max-w-[140px]">
                Years of Professional Engineering Experience
              </p>
            </div>
          </motion.div>

          {/* Center content */}
          <motion.div
            className="text-center max-w-4xl mx-auto relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-white/30 text-sm sm:text-base font-medium mb-6 tracking-wide"
            >
              You've found the <span className="text-white/60 font-semibold">right engineer</span> to bring your ideas to life.
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Looking for{" "}
              <span className="text-gold-gradient">Frontend</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/30 mb-4"
            >
              Let's explore{" "}
              <span className="text-gold/80 font-medium">together</span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-4 mt-10"
            >
              <Link
                to="/projects"
                className="group px-8 py-4 rounded-full bg-gold text-black font-bold text-sm hover:bg-gold-light transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(212,165,66,0.2)] hover:shadow-[0_0_40px_rgba(212,165,66,0.35)]"
              >
                See My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group px-8 py-4 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70 font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== BENTO GRID SECTION ===== */}
        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-6 pb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* --- ROW 1: Profile + Stats --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Profile Card */}
            <GlassCard
              className="md:col-span-4 lg:col-span-3 min-h-[420px] !p-0 group relative overflow-hidden"
              noPadding
            >
              <div className="absolute inset-0">
                <img
                  src="/profilepic.jpeg"
                  alt="Abdul Raoof"
                  className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110 origin-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
                <div className="inline-block px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-semibold uppercase tracking-widest mb-3">
                  Full Stack
                </div>
                <h2 className="text-2xl font-bold text-white mb-5">
                  Abdul Raoof
                </h2>
                <div className="flex gap-3">
                  <SocialButton icon={Github} href="https://github.com/raoofCLT" />
                  <SocialButton icon={Linkedin} href="https://linkedin.com/in/raoof-clt" />
                  <SocialButton icon={Mail} href="mailto:raoofkottayil@gmail.com" />
                </div>
              </div>
            </GlassCard>

            {/* Hero Info Card */}
            <GlassCard className="md:col-span-8 lg:col-span-5 flex flex-col justify-center min-h-[380px] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.02] text-gold">
                <Code2 size={200} />
              </div>

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                    Available for work
                  </span>
                </motion.div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[0.95] tracking-tight mb-5">
                  Frontend Engineer <br />
                  <span className="text-gold-gradient">React Specialist.</span>
                </h2>

                <p className="text-base text-white/35 max-w-lg mb-8 leading-relaxed">
                  I build accessible, pixel-perfect, and performant web applications with modern architecture.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group px-6 py-3 rounded-xl bg-gold text-black font-bold text-sm hover:bg-gold-light transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,165,66,0.15)]"
                  >
                    Let's Talk
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="/Abdul_Raoof_CV.pdf"
                    download="Abdul_Raoof_CV.pdf"
                    onClick={handleDownloadCV}
                    className="group px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/60 font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition-all flex items-center gap-2"
                  >
                    <Download size={15} className="text-white/30 group-hover:text-gold transition-colors" />
                    Download CV
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Stats Column */}
            <div className="md:col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
              <GlassCard className="flex flex-col justify-between h-full">
                <div className="p-2 bg-white/[0.03] rounded-xl w-fit mb-4">
                  <Zap size={18} className="text-white/30" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1 tracking-tight">
                    2<span className="text-gold">+</span>
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">
                    Years Experience
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="flex flex-col justify-between h-full">
                <div className="p-2 bg-white/[0.03] rounded-xl w-fit mb-4">
                  <Globe size={18} className="text-white/30" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1 tracking-tight">
                    10<span className="text-gold">+</span>
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">
                    Happy Clients
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* --- ROW 2: Tech Stack + Featured Project --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Tech Stack */}
            <GlassCard className="md:col-span-1 lg:col-span-5 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-white/[0.03] rounded-lg text-white/30">
                  <Terminal size={18} />
                </div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                  Tech Stack
                </h3>
                <div className="flex-1 h-px bg-white/[0.04]" />
              </div>

              <div className="grid grid-cols-2 gap-2 flex-1">
                <TechCard icon={Code2} title="Frontend" desc="React, Next.js, TypeScript, HTML, CSS, JavaScript, Redux" />
                <TechCard icon={LayoutGrid} title="UI Frameworks" desc="Tailwind, ShadCN, Material UI, Chakra UI, Bootstrap" />
                <TechCard icon={Database} title="Backend & DB" desc="Node.js, Express.js, Socket.io, PostgreSQL, MongoDB, Redis" />
                <TechCard icon={Terminal} title="Tools" desc="Git, Postman, Vite" />
                <TechCard icon={Sparkles} title="Currently Learning" className="col-span-2">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Electron JS", "Python"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-gold/5 border border-gold/10 text-[10px] font-semibold text-white/50 hover:text-gold hover:border-gold/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </TechCard>
              </div>
            </GlassCard>

            {/* Featured Project */}
            <GlassCard className="md:col-span-1 lg:col-span-7">
              <ProjectCard />
            </GlassCard>
          </div>

          {/* --- ROW 3: CTA Banner --- */}
          <GlassCard className="!p-0 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 w-full">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black shadow-[0_0_25px_rgba(212,165,66,0.25)]">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Let's work together</h3>
                  <p className="text-xs text-white/30 mt-0.5">Open for Freelance & Full-time</p>
                </div>
              </div>

              <div className="relative w-full overflow-hidden mask-gradient py-2 md:flex-1">
                <div
                  className="flex gap-8 items-center text-xs font-semibold uppercase tracking-widest text-white/15 animate-marquee whitespace-nowrap"
                  style={{ animationDuration: "20s" }}
                >
                  {["Frontend Architecture", "Backend Engineering", "Desktop Applications", "Interactive Experiences", "Software Development", "Database Design", "Modern UI/UX", "API Development", "Real-time Systems", "Performance Tuning"].map((item, i) => (
                    <span key={i} className="flex items-center gap-8">
                      {item}
                      <span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0" />
                    </span>
                  ))}
                  {["Frontend Architecture", "Backend Engineering", "Desktop Applications", "Interactive Experiences", "Software Development", "Database Design", "Modern UI/UX", "API Development", "Real-time Systems", "Performance Tuning"].map((item, i) => (
                    <span key={`dup-${i}`} className="flex items-center gap-8">
                      {item}
                      <span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageLayout>
  );
};
