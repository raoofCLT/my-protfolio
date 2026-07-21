import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  LayoutGrid,
  X,
  Sparkles,
  Cpu,
  ChevronRight,
  Activity,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { projects } from "@/data/portfolioData";

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

export const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", name: "All Projects" },
    { id: "lms", name: "LMS & Education" },
    { id: "crm", name: "CRM & Management" },
    { id: "ecommerce", name: "E-commerce & Social" },
    { id: "website", name: "Websites & Portals" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <PageLayout>
      <div className="min-h-screen bg-[#030303] selection:bg-gold/30 pt-4 pb-20 overflow-x-hidden relative">
        {/* Digital Scan Lines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,30px_100%]" />

        <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20" />

        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- HEADER SECTION (8/4 Grid) --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left: Title Card */}
            <GlassCard className="md:col-span-8 lg:col-span-8 p-6 md:p-12 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full min-h-[350px] md:min-h-[400px]">
              <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <LayoutGrid size={180} className="md:size-[240px]" />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-10 md:w-12 bg-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Portfolio 2025
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mt-6 relative z-10"
              >
                Selected <br />
                <span className="text-gold-gradient">Masterpieces.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/70 text-base md:text-lg leading-relaxed max-w-xl mt-6 relative z-10 font-medium"
              >
                A curated collection of scalable systems, responsive interfaces,
                and digital products engineered with precision.
              </motion.p>
            </GlassCard>

            {/* Right: GitHub / Status Card */}
            <GlassCard className="md:col-span-4 lg:col-span-4 p-6 flex flex-col justify-between hover:border-gold/20 transition-all border-white/5 bg-gradient-to-tr from-white/5 via-transparent to-white/5 group/stats">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(255,184,0,0.5)]" />
                    <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-40">
                      Overview
                    </h4>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                  {/* Live Systems Card */}
                  <div className="group/item relative overflow-hidden p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500">
                    <div className="relative z-10">
                      <span className="text-white/30 text-xs uppercase font-bold tracking-[0.2em] mb-2 block group-hover/item:text-gold transition-colors">
                        Live Systems
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-white leading-none tracking-tighter">
                          {String(
                            projects.filter((p) => p.status === "Live").length +
                              3,
                          ).padStart(2, "0")}
                        </span>
                        <div className="flex gap-1 items-center">
                          {/* <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> */}
                          <span className="text-xs text-green-500/60 font-black uppercase tracking-widest ml-1">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Completed Works Card */}
                  <div className="group/item relative overflow-hidden p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500">
                    <div className="relative z-10">
                      <span className="text-white/30 text-xs uppercase font-bold tracking-[0.2em] mb-2 block group-hover/item:text-gold transition-colors">
                        Completed
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white leading-none tracking-tighter">
                          {String(
                            projects.filter((p) => p.status === "Completed")
                              .length + 15,
                          ).padStart(2, "0")}
                        </span>
                        <span className="text-gold text-2xl font-black ml-1">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://github.com/raoofCLT"
                  target="_blank"
                  className="group flex items-center justify-between w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-gold/50 transition-all duration-500"
                  rel="noreferrer"
                >
                  <div className="flex items-center gap-3">
                    <Github
                      size={18}
                      className="text-white/20 group-hover:text-gold transition-colors"
                    />
                    <span className="text-xs font-bold text-white/40 group-hover:text-white uppercase tracking-[0.2em] transition-colors">
                      Sources
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-white/10 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500"
                  />
                </a>
              </div>
            </GlassCard>
          </div>

          {/* --- ACTIVE LAB (Ongoing Project) --- */}
          <motion.a
            variants={itemVariants}
            href="https://accredit.world"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <GlassCard className="p-6 md:p-8 border-gold/10 hover:border-gold/30 transition-all group overflow-hidden relative min-h-[350px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold pointer-events-none">
                <Sparkles size={240} />
              </div>

              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-2 bg-gold/10 rounded-lg border border-gold/20 text-white">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-widest">
                    Active Lab
                  </h3>
                  <p className="text-[9px] text-gold/50 uppercase tracking-widest font-bold">
                    Now Engineering
                  </p>
                </div>
                <div className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-md shadow-inner">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gold-pale">
                    Current Project
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-12 xl:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-5xl sm:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-white/5 font-mono absolute top-2 right-4 sm:right-8 select-none">
                      ERP
                    </h3>
                    <h4 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
                      Accredit{" "}
                      <span className="text-gold-gradient italic">OS</span>
                    </h4>
                    <p className="text-gold-pale/70 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                      High-performance enterprise ERP and operational portal for
                      Accredit Management Consultancy, unifying multi-role
                      workspaces, safety training course scheduling, financial
                      accounting (invoices, receipts, expenses), certificate
                      automation, and secure payroll management.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                    {[
                      "📊 12+ Enterprise Modules (Training, Schedulers, HR)",
                      "💵 Automated Payroll & Advances (Contract Templates)",
                      "📈 Financial Accounting (Invoices, Receipts, Expenses)",
                      "🔐 RBAC Security & Auditing (Concurrency Safety)",
                    ].map((metric, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/5 rounded-lg p-2.5 flex items-center gap-2"
                      >
                        <span className="text-gold/90 text-xs font-bold whitespace-nowrap">
                          {metric.split(" ")[0]}
                        </span>
                        <span className="text-white/50 text-[9px] uppercase tracking-wide">
                          {metric.split(" ").slice(1).join(" ")}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Node.js",
                      "Express",
                      "Prisma",
                      "PostgreSQL",
                      "Tailwind CSS",
                      "Zustand",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] bg-gold/5 border border-gold/10 px-2.5 py-1 rounded-md text-gold/60 font-mono group-hover:border-gold/30 group-hover:text-gold-pale transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-12 xl:col-span-5 perspective-1000">
                  <motion.div
                    whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                    className="relative rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 hover:border-gold/40 transition-all duration-700"
                  >
                    <img
                      src="/Projects/AccreditOS.png"
                      alt="AccreditOS Preview"
                      className="w-full aspect-video object-cover transition-transform duration-[2000ms] hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          </motion.a>

          {/* --- CATEGORY TABS --- */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-black bg-gold shadow-[0_0_15px_rgba(212,165,66,0.3)] border border-gold"
                    : "text-muted-foreground bg-white/5 border border-white/5 hover:border-gold/30 hover:text-white"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* --- PROJECTS LIST SECTION --- */}
          <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const projectLink = project.liveUrl || project.githubUrl;
                const isClickable = Boolean(projectLink);

                if (isClickable) {
                  return (
                    <motion.a
                      key={project.title}
                      href={projectLink}
                      target="_blank"
                      rel="noreferrer"
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      variants={itemVariants}
                      className={`flex flex-col lg:flex-row gap-6 lg:gap-20 items-center cursor-pointer ${
                        idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Image Section */}
                      <div className="w-full lg:w-3/5 group relative">
                        <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                        <GlassCard className="relative p-2 overflow-hidden border-gold/10 group-hover:border-gold/30 transition-all duration-500">
                          <div className="relative overflow-hidden rounded-xl bg-black/50">
                            {project.image.startsWith("http") ||
                            project.image.startsWith("/") ? (
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                              />
                            ) : (
                              <CloudinaryImage
                                publicId={project.image}
                                alt={project.title}
                                width={1000}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                              />
                            )}
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                          </div>
                        </GlassCard>
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-2/5 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-white/5 font-mono">
                            0{idx + 1}
                          </span>
                          <div className="h-px bg-gold/20 flex-1" />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                          {project.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-6 text-sm">
                          <span className="text-gold">{project.category}</span>
                          <div className="flex items-center gap-1">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                project.status === "Live"
                                  ? "bg-green-500 animate-pulse"
                                  : "bg-white/40"
                              }`}
                            />
                            <span
                              className={
                                project.status === "Live"
                                  ? "text-green-500 font-bold"
                                  : "text-white/60"
                              }
                            >
                              {project.status}
                            </span>
                          </div>
                        </div>

                        <p className="text-white/70 text-base leading-relaxed mb-8">
                          {project.longDescription}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8">
                          {project.metrics?.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-gold/5 border border-white/5 rounded-xl p-3 sm:p-4 transition-colors hover:border-gold/20"
                            >
                              <p className="text-gold font-black text-xs mb-1">
                                {metric.split(" ").slice(0, 1).join(" ")}
                              </p>
                              <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">
                                {metric.split(" ").slice(1).join(" ")}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2.5 mb-10">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/50 group-hover:text-gold group-hover:border-gold/20 transition-all"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.a>
                  );
                }

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    variants={itemVariants}
                    className={`flex flex-col lg:flex-row gap-6 lg:gap-20 items-center cursor-default ${
                      idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image Section */}
                    <div className="w-full lg:w-3/5 group relative">
                      <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                      <GlassCard className="relative p-2 overflow-hidden border-gold/10 group-hover:border-gold/30 transition-all duration-500">
                        <div className="relative overflow-hidden rounded-xl bg-black/50">
                          {project.image.startsWith("http") ||
                          project.image.startsWith("/") ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <CloudinaryImage
                              publicId={project.image}
                              alt={project.title}
                              width={1000}
                              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                          )}
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                      </GlassCard>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-white/5 font-mono">
                          0{idx + 1}
                        </span>
                        <div className="h-px bg-gold/20 flex-1" />
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-2 mb-6 text-sm">
                        <span className="text-gold">{project.category}</span>
                        <div className="flex items-center gap-1">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              project.status === "Live"
                                ? "bg-green-500 animate-pulse"
                                : "bg-white/40"
                            }`}
                          />
                          <span
                            className={
                              project.status === "Live"
                                ? "text-green-500 font-bold"
                                : "text-white/60"
                            }
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>

                      <p className="text-white/70 text-base leading-relaxed mb-8">
                        {project.longDescription}
                      </p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8">
                        {project.metrics?.map((metric, i) => (
                          <div
                            key={i}
                            className="bg-gold/5 border border-white/5 rounded-xl p-3 sm:p-4 transition-colors hover:border-gold/20"
                          >
                            <p className="text-gold font-black text-xs mb-1">
                              {metric.split(" ").slice(0, 1).join(" ")}
                            </p>
                            <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">
                              {metric.split(" ").slice(1).join(" ")}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2.5 mb-10">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/50 group-hover:text-gold group-hover:border-gold/20 transition-all"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
