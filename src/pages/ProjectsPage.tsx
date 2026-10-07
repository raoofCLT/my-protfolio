import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  LayoutGrid,
  X,
  Play,
  Search,
  Lock,
  Globe,
  Terminal,
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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

export const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", name: "All Projects" },
    { id: "lms", name: "LMS & EdTech" },
    { id: "crm", name: "CRM & Management" },
    { id: "social", name: "Social & Community" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "website", name: "Websites & Portals" },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTab = activeTab === "all" || project.type === activeTab;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesTab;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description?.toLowerCase().includes(query) ||
        project.longDescription?.toLowerCase().includes(query) ||
        project.category?.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <PageLayout>
      <div className="min-h-screen bg-[#030303] selection:bg-gold/30 pt-4 pb-20 overflow-x-hidden relative">
        {/* Digital Scan Lines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,30px_100%]" />

        <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('/noise.svg')] mix-blend-overlay z-20" />

        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- HEADER SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Left: Title Card */}
            <GlassCard className="md:col-span-8 lg:col-span-8 p-6 md:p-10 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors min-h-[280px]">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <LayoutGrid size={200} />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Featured Works 2025–2026
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mt-4 relative z-10"
              >
                Selected{" "}
                <span className="text-gold-gradient">Masterpieces.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/70 text-sm sm:text-base leading-relaxed max-w-xl mt-3 relative z-10 font-medium"
              >
                Enterprise platforms, custom ERPs, and conversion-focused web
                applications built with scalable architectures and precision.
              </motion.p>
            </GlassCard>

            {/* Right: Overview Card */}
            <GlassCard className="md:col-span-4 lg:col-span-4 p-6 flex flex-col justify-between hover:border-gold/20 transition-all border-white/5 bg-gradient-to-tr from-white/5 via-transparent to-white/5">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(255,184,0,0.5)]" />
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-40">
                    Live Stats
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all">
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider block mb-1">
                      Live Systems
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-white leading-none">
                        {String(
                          projects.filter((p) => p.status === "Live").length +
                            3,
                        ).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold uppercase">
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all">
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider block mb-1">
                      Completed
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-white leading-none">
                        {String(
                          projects.filter((p) => p.status === "Completed")
                            .length + 15,
                        ).padStart(2, "0")}
                      </span>
                      <span className="text-gold text-base font-bold">+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://github.com/raoofCLT"
                  target="_blank"
                  className="group flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-gold/50 transition-all duration-300"
                  rel="noreferrer"
                >
                  <div className="flex items-center gap-2.5">
                    <Github
                      size={16}
                      className="text-white/30 group-hover:text-gold transition-colors"
                    />
                    <span className="text-xs font-bold text-white/50 group-hover:text-white uppercase tracking-wider">
                      GitHub Repos
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-white/20 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              </div>
            </GlassCard>
          </div>

          {/* --- ACTIVE LAB (Compact Flagship Spotlight) --- */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-5 sm:p-7 md:p-8 border-gold/25 hover:border-gold/40 transition-all duration-500 relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#0c0c0a] via-[#080807] to-[#040403] shadow-[0_15px_50px_rgba(0,0,0,0.6)]">
              {/* Header HUD */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-gold/10 rounded-lg border border-gold/30 text-gold">
                    <Terminal size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-white uppercase tracking-wider">
                        Active Lab Spotlight
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-gold/10 border border-gold/30 text-[9px] font-mono font-bold text-gold">
                        v2.4 ERP
                      </span>
                    </div>
                    <span className="text-[10px] text-white/40">
                      Accredit Management Consultancy • Abu Dhabi, UAE
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Production Live</span>
                </div>
              </div>

              {/* Spotlight Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left: Info & Actions */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                      Accredit{" "}
                      <span className="text-gold-gradient italic">OS</span>
                    </h3>
                    <p className="text-gold-pale/75 text-xs sm:text-sm leading-relaxed mt-2">
                      High-performance enterprise ERP unifying multi-role
                      workspaces, corporate safety training course scheduling,
                      financial accounting (invoices, receipts, expenses),
                      automated certificate generation, and secure payroll
                      management.
                    </p>
                  </div>

                  {/* 4 Compact Module Badges */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: "📊", label: "12+ Enterprise Modules" },
                      { icon: "💵", label: "Automated Payroll & Advances" },
                      { icon: "📈", label: "Financial Ledger & Invoices" },
                      { icon: "🔐", label: "RBAC Security & Audits" },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2"
                      >
                        <span className="text-xs">{m.icon}</span>
                        <span className="text-[11px] font-bold text-white/80 truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      "React",
                      "TypeScript",
                      "Node.js",
                      "Express",
                      "Supabase",
                      "PostgreSQL",
                      "Prisma",
                      "Tailwind CSS",
                      "Zustand",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-white/[0.03] border border-white/10 px-2.5 py-0.5 rounded text-gold-pale/70 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <a
                      href="https://drive.google.com/file/d/1TC48Na4lcBJiw8LDMwcYeESwWlhe7vcH/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="group/cta inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold via-amber-400 to-yellow-500 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.02] active:scale-98 transition-all"
                    >
                      <Play
                        size={13}
                        className="fill-black text-black group-hover/cta:scale-110 transition-transform"
                      />
                      <span>Watch Demo</span>
                      <ArrowUpRight size={13} />
                    </a>

                    {/* <a
                      href="https://accredit.world/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold/30 hover:bg-white/[0.06] text-white/70 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <Globe size={13} className="text-gold" />
                      <span>Client HSE Portal</span>
                    </a> */}
                  </div>
                </div>

                {/* Right: Mockup Thumbnail */}
                <div className="lg:col-span-5">
                  <a
                    href="https://drive.google.com/file/d/1TC48Na4lcBJiw8LDMwcYeESwWlhe7vcH/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="block group/mock relative rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0c] hover:border-gold/40 transition-all shadow-xl"
                  >
                    {/* Window Bar */}
                    <div className="px-3 py-2 bg-white/[0.04] border-b border-white/10 flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/70" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                      </div>
                      <div className="flex items-center gap-1 text-white/40 font-mono text-[9px]">
                        <Lock size={9} className="text-gold/70" />
                        <span>os.accredit.internal</span>
                      </div>
                      <span className="text-[9px] text-gold font-mono font-bold">
                        ERP
                      </span>
                    </div>

                    {/* Image Preview with Hover Overlay */}
                    <div className="relative aspect-video overflow-hidden bg-black/60">
                      <img
                        src="/Projects/AccreditOS.png"
                        alt="Accredit OS Preview"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/mock:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/mock:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-black font-black text-xs uppercase tracking-wider shadow-lg">
                          <Play size={13} className="fill-black" />
                          Play Video Demo
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* --- SEARCH & CATEGORY FILTER BAR --- */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar flex-nowrap sm:flex-wrap">
              {tabs.map((tab) => {
                const count =
                  tab.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.type === tab.id).length;

                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative shrink-0 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "text-black bg-gold shadow-md shadow-gold/20 border border-gold font-black"
                        : "text-white/60 bg-white/[0.03] border border-white/10 hover:border-gold/30 hover:text-white"
                    }`}
                  >
                    <span>{tab.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? "bg-black/20 text-black font-black"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full md:w-72 shrink-0">
              <div className="relative flex items-center">
                <Search
                  size={14}
                  className="absolute left-3 text-white/40 pointer-events-none"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects or tech..."
                  className="w-full pl-9 pr-8 py-2 rounded-full bg-white/[0.03] border border-white/10 focus:border-gold/50 focus:bg-white/[0.06] text-white text-xs placeholder:text-white/30 outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 p-1 text-white/40 hover:text-white"
                    aria-label="Clear search"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* --- PROJECTS GALLERY (Compact 2-Column Responsive Bento Grid) --- */}
          <div>
            {filteredProjects.length === 0 ? (
              <GlassCard className="p-10 text-center border-gold/10 rounded-2xl">
                <div className="max-w-sm mx-auto space-y-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto text-gold">
                    <Search size={18} />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    No projects found
                  </h4>
                  <p className="text-xs text-gold-pale/60">
                    No results for "{searchQuery}". Try another keyword or reset
                    the filter.
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab("all");
                      setSearchQuery("");
                    }}
                    className="px-4 py-2 rounded-full bg-gold text-black font-black text-xs uppercase tracking-wider hover:scale-105 transition-transform"
                  >
                    Reset Filter
                  </button>
                </div>
              </GlassCard>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, idx) => {
                    const isVideo =
                      Boolean(project.videoUrl) ||
                      Boolean(project.liveUrl?.includes("drive.google.com")) ||
                      Boolean(project.liveUrl?.includes("youtube.com"));

                    const primaryLink = project.liveUrl || project.githubUrl;

                    return (
                      <motion.div
                        key={project.title}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                        variants={itemVariants}
                        className="group/card h-full"
                      >
                        <GlassCard className="h-full flex flex-col justify-between p-5 rounded-2xl border-white/10 hover:border-gold/40 transition-all duration-500 bg-gradient-to-b from-white/[0.025] to-transparent hover:shadow-[0_15px_40px_rgba(212,165,66,0.08)]">
                          {/* Image Container with Window Chrome */}
                          <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-lg group-hover/card:border-gold/30 transition-all">
                            {/* Window Top Bar */}
                            <div className="px-3 py-2 bg-white/[0.03] border-b border-white/5 flex items-center justify-between text-[10px]">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                                <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                                <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                              </div>
                              <span className="text-white/30 font-mono text-[9px] truncate max-w-[150px]">
                                {project.title
                                  .toLowerCase()
                                  .replace(/[^a-z0-9]/g, "-")}
                                .app
                              </span>
                              <span className="text-gold/80 font-mono font-bold text-[9px]">
                                {project.year || "2025"}
                              </span>
                            </div>

                            {/* Thumbnail */}
                            {primaryLink ? (
                              <a
                                href={primaryLink}
                                target="_blank"
                                rel="noreferrer"
                                className="block relative cursor-pointer"
                                aria-label={`Open ${project.title}`}
                              >
                                <div className="relative aspect-video overflow-hidden bg-black/50">
                                  {project.image.startsWith("http") ||
                                  project.image.startsWith("/") ? (
                                    <img
                                      src={project.image}
                                      alt={project.title}
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                    />
                                  ) : (
                                    <CloudinaryImage
                                      publicId={project.image}
                                      alt={project.title}
                                      width={800}
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                    />
                                  )}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover/card:opacity-20 transition-opacity" />

                                  {/* Hover Badge */}
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all bg-black/40 backdrop-blur-xs">
                                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold text-black font-black text-[11px] uppercase tracking-wider shadow-md">
                                      {isVideo ? (
                                        <>
                                          <Play
                                            size={12}
                                            className="fill-black"
                                          />
                                          Watch Demo Video
                                        </>
                                      ) : (
                                        <>
                                          <ExternalLink size={12} />
                                          Open Project
                                        </>
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </a>
                            ) : (
                              <div className="relative aspect-video overflow-hidden bg-black/50">
                                {project.image.startsWith("http") ||
                                project.image.startsWith("/") ? (
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <CloudinaryImage
                                    publicId={project.image}
                                    alt={project.title}
                                    width={800}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
                              </div>
                            )}
                          </div>

                          {/* Card Content */}
                          <div className="space-y-3 pt-4 flex-1 flex flex-col">
                            {/* Meta Badges */}
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-gold/60 font-bold">
                                  #{String(idx + 1).padStart(2, "0")}
                                </span>
                                <span className="text-gold font-bold uppercase tracking-wider text-[11px]">
                                  {project.category}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px]">
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    project.status === "Live"
                                      ? "bg-emerald-400 animate-pulse"
                                      : "bg-white/30"
                                  }`}
                                />
                                <span
                                  className={
                                    project.status === "Live"
                                      ? "text-emerald-400 font-bold"
                                      : "text-white/50"
                                  }
                                >
                                  {project.status}
                                </span>
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-black text-white group-hover/card:text-gold transition-colors tracking-tight line-clamp-1">
                              {project.title}
                            </h3>

                            {/* Concise Description */}
                            <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
                              {project.description || project.longDescription}
                            </p>

                            {/* Highlight Metrics */}
                            {project.metrics && project.metrics.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {project.metrics
                                  .slice(0, 2)
                                  .map((metric, i) => (
                                    <span
                                      key={i}
                                      className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-gold-pale/75 font-semibold truncate max-w-full"
                                    >
                                      {metric}
                                    </span>
                                  ))}
                              </div>
                            )}

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
                              {project.tech.slice(0, 5).map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-white/50 font-mono"
                                >
                                  {t}
                                </span>
                              ))}
                              {project.tech.length > 5 && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded text-white/30 font-mono">
                                  +{project.tech.length - 5}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons Bar */}
                          <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                                  isVideo
                                    ? "bg-gradient-to-r from-gold via-amber-400 to-yellow-500 text-black shadow-md shadow-gold/20 hover:scale-[1.02]"
                                    : "bg-gold text-black shadow-md shadow-gold/20 hover:scale-[1.02]"
                                }`}
                              >
                                {isVideo ? (
                                  <Play
                                    size={12}
                                    className="fill-black text-black"
                                  />
                                ) : (
                                  <ExternalLink size={12} />
                                )}
                                <span>
                                  {isVideo ? "Watch Video Demo" : "Live Demo"}
                                </span>
                                <ArrowUpRight size={12} />
                              </a>
                            )}

                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                                  !project.liveUrl
                                    ? "bg-gold text-black font-black"
                                    : "bg-white/[0.03] border border-white/10 hover:border-gold/40 text-white/80 hover:text-white"
                                }`}
                              >
                                <Github
                                  size={13}
                                  className={
                                    !project.liveUrl
                                      ? "text-black"
                                      : "text-gold"
                                  }
                                />
                                <span>
                                  {project.liveUrl ? "Code" : "View Code"}
                                </span>
                              </a>
                            )}

                            {!project.liveUrl && !project.githubUrl && (
                              <span className="text-[10px] text-white/40 font-semibold uppercase tracking-wider px-2 py-1 rounded bg-white/[0.02]">
                                Client Confidential
                              </span>
                            )}
                          </div>
                        </GlassCard>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
