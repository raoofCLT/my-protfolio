import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  User2,
  Heart,
  Zap,
  Layers,
  BookOpen,
  ChevronRight,
  Cpu,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { GlassCard } from "@/components/ui/GlassCard";

/* --- Animation Variants --- */
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 50, damping: 20 },
  },
};

/* --- Icons for Infinite Slider --- */
const techIcons = [
  {
    name: "React",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    src: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
  },
  {
    name: "TypeScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Node.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "Tailwind",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "Redis",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg",
  },
  {
    name: "MongoDB",
    src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "Redux",
    src: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
  {
    name: "Git",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  },
  {
    name: "Material UI",
    src: "https://img.icons8.com/color/480/material-ui.png",
  },
  {
    name: "HTML",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "ShadCN",
    src: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
  },
  {
    name: "CSS",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "JavaScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Bootstrap",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },
  {
    name: "Socket.io",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
  },
  {
    name: "Vite",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
  },
  {
    name: "Chakra UI",
    src: "https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-icon.svg",
  },
  {
    name: "Postman",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

const values = [
  {
    icon: Layers,
    title: "Engineering",
    desc: "Robust architectures, clean patterns, and maintainable codebases.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "High-performance applications with sub-second latency.",
  },
  {
    icon: Heart,
    title: "Product",
    desc: "User-centric design thinking merged with technical excellence.",
  },
];

const TechCarousel = () => {
  // Initialize with shuffled icons to avoid empty state on mount
  const [marqueeList] = useState(() =>
    [...techIcons].sort(() => Math.random() - 0.5)
  );

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-70%); }
          }
          .animate-marquee {
            animation: marquee 10s linear infinite;
          }
          .paused-on-hover:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="relative flex w-full overflow-hidden select-none py-2 paused-on-hover">
        <div className="flex gap-4 items-center w-max animate-marquee">
          {[...marqueeList, ...marqueeList].map((tech, i) => (
            <div
              key={i}
              className="group shrink-0 relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:bg-white/5"
              title={tech.name}
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-10 h-10 object-contain transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const AboutPage = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-background selection:bg-gold/30 pt-6 pb-20 overflow-x-hidden relative">
        <FloatingShapes />
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <motion.div
          className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- SECTION 1: Intro (8/4 Grid) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[400px]">
            {/* Left: Typography Focus - Spans 8 cols */}
            <GlassCard className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <Cpu size={240} />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-sm font-bold uppercase tracking-widest">
                  About Me
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mt-6 relative z-10"
              >
                Architecting <br />
                <span className="text-gold-gradient">Digital Success.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/80 text-lg leading-relaxed max-w-xl mt-6 relative z-10"
              >
                I’m a Full Stack Engineer focused on designing and building
                scalable, accessible, and high-performance web applications that
                solve real-world problems with clean and maintainable code.
              </motion.p>
            </GlassCard>

            {/* Right: Unique Profile Composition - Spans 4 cols */}
            <div className="lg:col-span-4 h-full flex items-center justify-center perspective-1000">
              <motion.div
                variants={itemVariants}
                className="relative w-full h-full min-h-[400px] group"
              >
                <GlassCard className="w-full h-full !p-0 overflow-hidden relative border-gold/20 group-hover:border-gold/50 transition-colors bg-black/40">
                  <img
                    src="/profilepic.jpeg"
                    alt="Abdul Raoof"
                    className="w-full h-full object-cover object-top grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for Text Readability if needed */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                  {/* Floating Tech Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-black/60 backdrop-blur-xl rounded-lg border border-gold/20 px-3 py-1.5 flex items-center gap-2">
                      <span className="animate-pulse w-2 h-2 rounded-full bg-gold"></span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                        PTR-01
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>

          {/* --- SECTION 2: Journey Grid (4/8 Grid) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Stats Box - Spans 4 cols */}
            <GlassCard className="lg:col-span-4 flex flex-col justify-between p-8 hover:border-gold/30 transition-colors h-full">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen size={20} className="text-white" />
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">
                    My Journey
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                  From curiosity to clean code.
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto mb-6">
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    2+
                  </div>
                  <div className="text-[10px] text-gold-pale/50 uppercase tracking-widest">
                    Years
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    15+
                  </div>
                  <div className="text-[10px] text-gold-pale/50 uppercase tracking-widest">
                    Projects
                  </div>
                  <div className="text-[9px] text-gold-pale/30 mt-1">
                    Real-world & Production-ready
                  </div>
                </div>
              </div>

              {/* Tech Carousel (Replacing Static Link) */}
              <div className="pt-6 border-t border-gold/10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gold-pale/50 mb-3">
                  Technologies
                </div>
                <TechCarousel />
              </div>
            </GlassCard>

            {/* Narrative Box - Spans 8 cols */}
            <GlassCard className="lg:col-span-8 p-8 md:p-12 hover:border-gold/30 transition-colors flex flex-col justify-center h-full">
              <div className="space-y-6 text-gold-pale/80 text-lg leading-relaxed font-light">
                <p>
                  My journey into coding started with curiosity and gradually
                  evolved into a disciplined engineering mindset. I don’t just
                  write code — I design robust, scalable, and maintainable
                  systems built to last.
                </p>
                <p>
                  With a strong focus on the modern React ecosystem, I approach
                  every project as an opportunity to improve performance,
                  usability, and efficiency. From optimizing data flows to
                  refining UI interactions, I care deeply about quality and
                  detail.
                </p>
                <p>
                  I believe great software is built through clear thinking,
                  thoughtful design, and precise execution.
                </p>
                <p className="pt-2 text-gold/90 font-medium">
                  I enjoy building products that are simple to use, efficient
                  under the hood, and meaningful in real life.
                </p>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
