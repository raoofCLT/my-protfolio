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
    title: "ALBEDO Educator Platform",
    year: "2024",
    description:
      "Frontend for a large-scale education platform used by 20,000+ users.",
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
    status: "Live",
    category: "Education Platform",
    image: "/Projects/Albedo Educator.png",
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
    status: "Live",
    category: "Creative Agency Platform",
    image: "/Projects/Evoka Communications.png",
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
    status: "Live",
    category: "Education Platform",
    image: "/Projects/Calc.png",
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
    status: "Live",
    category: "Education Platform",
    image: "/Projects/Evoka.png",
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
    status: "Completed",
    category: "E-commerce",
    image: "/Projects/Yara E-commerce.png",
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
    status: "Completed",
    category: "Community Platform",
    image: "/Projects/StartupHub.png",
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
    status: "Completed",
    category: "E-library",
    image: "/Projects/Libraria.png",
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
            <GlassCard className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full min-h-[400px]">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <LayoutGrid size={240} />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-sm font-bold uppercase tracking-widest">
                  Portfolio 2024
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mt-6 relative z-10"
              >
                Selected <br />
                <span className="text-gold-gradient">Masterpieces.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/80 text-lg leading-relaxed max-w-xl mt-6 relative z-10"
              >
                A curated collection of scalable systems, responsive interfaces,
                and digital products engineered with precision.
              </motion.p>
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
                href="https://github.com/raoofCLT"
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
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                      />
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
                    <span className="text-xs font-bold text-gold/80 uppercase tracking-widest px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-6 text-sm">
                    <span className="text-gold">{project.category}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-white/60">{project.status}</span>
                  </div>

                  <p className="text-white/70 text-base leading-relaxed mb-8">
                    {project.longDescription}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.metrics?.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/5 rounded-lg p-3"
                      >
                        <p className="text-gold/90 text-xs font-bold mb-1">
                          {metric.split(" ")[0]}
                        </p>
                        <p className="text-white/50 text-[10px] uppercase tracking-wide">
                          {metric.split(" ").slice(1).join(" ")}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md bg-gold/5 border border-gold/10 text-[11px] font-mono text-gold/60"
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
