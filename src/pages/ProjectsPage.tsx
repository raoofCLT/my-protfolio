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
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";
import { GlassCard } from "@/components/ui/GlassCard";

import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

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
    title: "ALBEDO Educator Platform",
    year: "2024",
    description:
      "Platform for a large-scale education platform used by 20,000+ users.",
    longDescription:
      "Designed and developed the entire frontend using React, Tailwind CSS, and Redux. Built 9 dashboards to manage users, batches, payments, and notifications. Delivered a responsive and performant UI.",
    tech: ["React", "Python", "Tailwind CSS", "Redux"],
    metrics: [
      "👥 20,000+ Active Users",
      "📊 9 Key Operations Dashboards",
      "⚡ Reduced Page Load",
    ],
    features: [
      "User and batch management dashboards",
      "Real-time notifications and updates",
      "Modern, responsive interface",
      "Scalable frontend architecture",
    ],
    role: "Frontend Lead",
    problemSolved:
      "Managing 20,000+ users and complex batch operations manually was inefficient and prone to errors.",
    status: "Live",
    category: "Education Platform",
    image: "Albedo_Educator_kgofmk",
    liveUrl: "https://operations.albedoedu.com/",
    featured: false,
  },
  {
    title: "Evoka Communications",
    year: "2025",
    description:
      "Creative agency platform for managing clients, projects, and production teams.",
    longDescription:
      "Developed a production management platform for a creative agency to manage clients, projects, and internal teams. The system supports task assignment across roles like HR, creative leads, copywriters, and coordinators, with work-hour tracking and approval workflows.",
    tech: ["React", "TypeScript", "Python", "Django", "PostgreSQL"],
    metrics: [
      "👥 Multi-role Team Workflows",
      "📂 Client & Project Management",
      "⏱️ Work-hour Tracking & Approvals",
    ],
    features: [
      "Client onboarding and project creation",
      "Task distribution to production staff and creatives",
      "Review and approval workflows for deliverables",
      "Work-hour calculation and progress tracking",
    ],
    role: "Full Stack Engineer",
    problemSolved:
      "Agency workflow was fragmented across emails and spreadsheets, causing delays and miscommunication.",
    status: "Live",
    category: "Creative Agency Platform",
    image: "Evoka_Communications_vzleam",
    liveUrl: "https://crm.evoka.in/",
    featured: false,
  },
  {
    title: "Calc (Data Analytics Platform)",
    year: "2025",
    description:
      "Data analytics platform for education data export and visualization.",
    longDescription:
      "Developed a platform to analyze educational data with interactive dashboards. Supported export, printing, and reporting features to empower data-driven decisions.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "Python"],
    metrics: [
      "📈 Visualize Data",
      "📄 Export Reports",
      "⚡ Real-time Dashboard",
    ],
    features: [
      "Comprehensive data visualization dashboards",
      "Export and print reporting tools",
      "User-friendly and interactive UI",
    ],
    role: "Frontend Developer",
    problemSolved:
      "Educational data was scattered and difficult to visualize for strategic decision-making.",
    status: "Live",
    category: "Education Platform",
    image: "Calc_hq9nyw",
    liveUrl: "https://calc.albedoedu.com/",
    featured: false,
  },
  {
    title: "Evoka School of Advertising Platform",
    year: "2025",
    description:
      "Kerala’s first advertising school platform managing students and projects.",
    longDescription:
      "Built the frontend and integrated APIs for student management, payments, attendance, and assignments. Supported live project-based learning with portfolio management.",
    tech: ["React", "TypeScript", "Tailwind CSS", "API Integrations", "Python"],
    metrics: [
      "🎓 13000+ Users",
      "💳 Payments management",
      "📚 Assignments management",
    ],
    features: [
      "Student records and attendance management",
      "Payment processing and tracking",
      "Assignment and portfolio system",
      "Seamless API integrations",
    ],
    role: "Full Stack Developer",
    problemSolved:
      "Need for a centralized platform to manage creative student portfolios, payments, and academic progress.",
    status: "Live",
    category: "Education Platform",
    image: "Evoka_wyilwq",
    liveUrl: "https://crm.evokaschool.com/",
    featured: false,
  },
  {
    title: "Yara E-commerce Platform",
    year: "2024",
    description: "Online dress retail with user auth and payment integration.",
    longDescription:
      "Developed a scalable e-commerce app with React, Node.js, and Express. Features user authentication, shopping cart, payment gateway integration, and admin controls.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    metrics: [
      "💳 Payment Transactions",
      "🛠️ Admin Controlled Products",
      "🔐 User Authentication",
    ],
    features: [
      "User login and authentication",
      "Shopping cart and checkout workflow",
      "Payment gateway integration",
      "Admin dashboard and controls",
      "Responsive design",
    ],
    role: "Full Stack Developer",
    problemSolved:
      "Building a scalable retail platform with secure payments and inventory management.",
    status: "Completed",
    category: "E-commerce",
    image: "Yara_E-commerce_xjaphj",
    githubUrl: "https://github.com/raoofCLT/Yara-e-commerce-app",
    featured: false,
  },
  {
    title: "StartupHub",
    year: "2024",
    description:
      "Community platform for startup profiles and investor connections.",
    longDescription:
      "Created a Next.js and TypeScript platform where users showcase startups and connect with investors. Features GitHub auth, real-time updates, and CMS content management.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "Sanity",
      "MongoDB",
    ],
    metrics: [
      "🧑‍💼 Verified Startup Profiles",
      "📈 Monthly Active Investors",
      "⚡ Real-time Data Synchronization",
    ],
    features: [
      "GitHub authentication with NextAuth.js",
      "Startup profile creation and discovery",
      "Search, filtering, and dynamic content",
      "Real-time updates",
    ],
    role: "Lead Developer",
    problemSolved:
      "Connecting startups with investors was a manual, opaque process lacking a central directory.",
    status: "Completed",
    category: "Community Platform",
    image: "StartupHub_ra8jnx",
    githubUrl: "https://github.com/raoofCLT/Startup-Hub",
    featured: false,
  },
  {
    title: "Libraria – E-Library Platform",
    year: "2024",
    description: "Digital library with book lending and secure admin features.",
    longDescription:
      "Built an e-library with React, Chakra UI, and Node.js backend. Features book borrowing with due dates, JWT authentication, and admin panel for managing books and users.",
    tech: ["React", "Chakra UI", "Recoil", "Node.js", "Express", "JWT"],
    metrics: [
      "🚀 Admin Managed Books",
      "📅 Borrowing System",
      "🔔 Due Date Alerts",
    ],
    features: [
      "15-day borrowing system with alerts",
      "Admin management panel",
      "JWT-based secure authentication",
      "Due date tracking and notifications",
    ],
    role: "Full Stack Developer",
    problemSolved:
      "Manual book tracking led to lost inventory and inefficiencies in smaller libraries.",
    status: "Completed",
    category: "E-library",
    image: "Libraria_e6srce",
    githubUrl: "https://github.com/raoofCLT/Libraria-Client",
    featured: false,
  },
  {
    title: "Chatzo Social Messaging",
    year: "2024",
    description: "Real-time social app for messaging and commenting.",
    longDescription:
      "Built a secure social platform with React, Node.js, and Socket.io. Features real-time chat, posts, likes, comments, and JWT authentication to foster community engagement.",
    tech: ["React", "Node.js", "Socket.io", "JWT"],
    metrics: [
      "💬 Active Chat Rooms",
      "🔐 User Authentication",
      "👥 Community Members",
    ],
    features: [
      "Real-time chatting and posts",
      "Likes and comments on posts",
      "Secure authentication with JWT",
    ],
    role: "Backend Developer",
    problemSolved:
      "Providing a secure, real-time communication channel for niche communities.",
    status: "Completed",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/raoofCLT/Chatzo",
    featured: false,
  },
];

export const ProjectsPage = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-[#030303] selection:bg-gold/30 pt-4 pb-20 overflow-x-hidden relative">
        <FuturisticBackground />

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

                <div className="grid grid-cols-1 gap-4">
                  {/* Live Systems Card */}
                  <div className="group/item relative overflow-hidden p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500">
                    <div className="relative z-10">
                      <span className="text-white/30 text-xs uppercase font-bold tracking-[0.2em] mb-2 block group-hover/item:text-gold transition-colors">
                        Live Systems
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-white leading-none tracking-tighter">
                          04
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
                          10
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

          {/* --- PROJECTS COMPACT LIST GRID --- */}
          {/* --- ACTIVE LAB (Ongoing Project) --- */}
          <motion.div variants={itemVariants}>
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
                    <h3 className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-white/5 font-mono absolute top-2 right-8 select-none">
                      LAB
                    </h3>
                    <h4 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
                      ZEEQUE{" "}
                      <span className="text-gold-gradient italic">Plus</span>
                    </h4>
                    <p className="text-gold-pale/70 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                      A comprehensive institutional dashboard designed to
                      centralize and automate educational operations for
                      multiple stakeholders. Architected with a multi-role RBAC
                      system.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                    {[
                      "👥 4 Specialized Dashboards",
                      "💰 Integrated Wallet System",
                      "📅 Conflict-Aware Scheduling",
                      "🎫 Real-time Support",
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
                      "Tailwind CSS",
                      "TanStack Query",
                      "Framer Motion",
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
                    <CloudinaryImage
                      publicId="ZeequePlus_ezemwu"
                      alt="Zeeque Plus Preview"
                      width={1200}
                      className="w-full aspect-video object-cover transition-transform duration-[2000ms] hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* --- PROJECTS LIST SECTION --- */}
          <div className="flex flex-col gap-32">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-3/5 group relative">
                  <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                  <GlassCard className="relative p-2 overflow-hidden border-gold/10 group-hover:border-gold/30 transition-all duration-500">
                    <div className="relative overflow-hidden rounded-xl bg-black/50">
                      {project.image.startsWith("http") ? (
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
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {project.metrics?.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-gold/5 border border-white/5 rounded-xl p-4 transition-colors hover:border-gold/20"
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

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="px-6 py-3 rounded-xl bg-gold text-black font-bold text-sm tracking-wide hover:bg-white transition-colors flex items-center gap-2"
                      >
                        Visit Project <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="px-6 py-3 rounded-xl bg-transparent border border-white/20 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        Source Code <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
