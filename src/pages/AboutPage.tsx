import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  User2,
  Heart,
  Zap,
  Layers,
  BookOpen,
  ChevronRight,
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
    name: "Tailwind",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "Docker",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
  },
  {
    name: "AWS",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Figma",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Git",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  },
  {
    name: "Redis",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg",
  },
  {
    name: "MongoDB",
    src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techIcons.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // We want to animate the *pair* entering/leaving, or individual items.
  // Ideally, keys should track the specific item index or name.
  const icon1 = techIcons[currentIndex];
  const icon2 = techIcons[(currentIndex + 1) % techIcons.length];

  return (
    <div className="flex items-center justify-around gap-2 h-24 relative overflow-hidden">
      <AnimatePresence mode="popLayout">
        {[icon1, icon2].map((tech, i) => (
          <motion.div
            key={`${tech.name}-${i}`}
            className="flex-1 flex flex-col items-center justify-center gap-2 min-w-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              ease: "backOut",
              delay: i * 0.1,
            }}
          >
            <div className="h-16 w-16 relative flex items-center justify-center">
              <img
                src={tech.src}
                alt={tech.name}
                className="w-12 h-12 object-contain drop-shadow-lg"
              />
            </div>
            <span className="text-[10px] font-mono text-gold/60 uppercase tracking-wider truncate w-full text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
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
                I'm a Full Stack Engineer focused on building scalable,
                accessible, and performant web applications that solve
                real-world problems.
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
                  Brief history of code & chaos.
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto mb-6">
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    4+
                  </div>
                  <div className="text-[10px] text-gold-pale/50 uppercase tracking-widest">
                    Years
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    20+
                  </div>
                  <div className="text-[10px] text-gold-pale/50 uppercase tracking-widest">
                    Projects
                  </div>
                </div>
              </div>

              {/* Tech Carousel (Replacing Static Link) */}
              <div className="pt-6 border-t border-gold/10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gold-pale/50 mb-3">
                  Currently using
                </div>
                <TechCarousel />
              </div>
            </GlassCard>

            {/* Narrative Box - Spans 8 cols */}
            <GlassCard className="lg:col-span-8 p-8 md:p-12 hover:border-gold/30 transition-colors flex flex-col justify-center h-full">
              <div className="space-y-6 text-gold-pale/80 text-lg leading-relaxed font-light">
                <p>
                  My coding journey began with a simple curiosity, but it has
                  evolved into a disciplined craft. I don't just write code; I
                  architect systems that are robust, scalable, and easy to
                  maintain.
                </p>
                <p>
                  Specializing in the modern React ecosystem, I view every
                  project as an opportunity to solve complex efficiency
                  problems. Whether it's optimizing database queries or refining
                  UI interactions, I prioritize technical excellence.
                </p>
                <p>
                  I believe that great software is the result of clear thinking
                  and precise execution.
                </p>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
