import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Code2, Layers, Sparkles, ChevronDown } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FloatingShapes } from '@/components/ui/FloatingShapes';
import EraserEffect from '@/components/ui/EraserEffect';
const roles = [
  'Full-Stack Developer',
  'React Architect',
  'UI Engineer',
  'Problem Solver',
  'Modern Web Crafter',
  'MERN Specialist',
];

const stats = [
  { icon: Code2, value: 3, suffix: '+', label: 'Years Experience' },
  { icon: Layers, value: 25, suffix: '+', label: 'Projects Completed' },
  { icon: Sparkles, value: 15, suffix: '+', label: 'Technologies' },
];

export const HomePage = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <FloatingShapes />
      
      <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center overflow-hidden">
        {/* Mouse eraser effect overlay */}
        <EraserEffect 
          className="z-[5]" 
          overlayColor="rgba(0, 0, 0, 0.35)" 
          brushSize={70} 
        />
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none">
          <motion.div
            className="absolute inset-0 rounded-full opacity-[0.04]"
            style={{
              background: 'radial-gradient(circle, #D4A542 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-DEFAULT/8 border border-gold-DEFAULT/15 mb-6"
              >
                <motion.span 
                  className="w-1.5 h-1.5 bg-gold-DEFAULT rounded-full"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[10px] font-medium text-gold-DEFAULT/90 tracking-wider uppercase">
                  Available for work
                </span>
              </motion.div>

              {/* Name with eraser reveal effect */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] mb-5">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Hi, I'm{' '}
                </motion.span>
                <span className="relative inline-block overflow-hidden">
                  {/* Eraser mask overlay */}
                  <motion.span
                    className="absolute inset-0 bg-background z-10"
                    initial={{ x: 0 }}
                    animate={{ x: '105%' }}
                    transition={{ 
                      delay: 0.5, 
                      duration: 1.2, 
                      ease: [0.76, 0, 0.24, 1] 
                    }}
                  />
                  {/* Gold accent reveal bar */}
                  <motion.span
                    className="absolute inset-y-0 w-[3px] bg-gradient-to-b from-gold-DEFAULT via-gold-accent to-gold-DEFAULT z-20"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: '3400%', opacity: 0 }}
                    transition={{ 
                      delay: 0.5, 
                      duration: 1.2, 
                      ease: [0.76, 0, 0.24, 1],
                      opacity: { delay: 1.5, duration: 0.3 }
                    }}
                  />
                  <span className="text-gold-gradient">Abdul Raoof</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gold-DEFAULT via-gold-accent to-transparent"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.7, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </span>
              </h1>

              {/* Animated Role - Typewriter style */}
              <div className="h-9 sm:h-10 mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 30, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -30, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-lg sm:text-xl md:text-2xl font-medium text-gold-accent/90 flex items-center gap-3"
                  >
                    <motion.span 
                      className="w-8 h-[1px] bg-gradient-to-r from-gold-DEFAULT to-transparent"
                      initial={{ width: 0 }}
                      animate={{ width: 32 }}
                      transition={{ duration: 0.3 }}
                    />
                    {roles[roleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm sm:text-[15px] text-muted-foreground/90 leading-relaxed max-w-md mb-8"
              >
                Crafting elegant digital experiences with clean code and modern
                technologies. Passionate about building scalable, performant web
                applications that make an impact.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold text-sm font-medium"
                  >
                    <span>Hire Me</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="/Abdul Raoof.pdf"
                    download
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold-outline text-sm font-medium"
                  >
                    <Download size={15} />
                    <span>Resume</span>
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex justify-center lg:justify-end order-first lg:order-last"
            >
              <div className="relative group">
                {/* Outer rotating ring */}
                <motion.div 
                  className="absolute -inset-6 rounded-full opacity-40"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(212,165,66,0.15) 10%, transparent 20%)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Glow halo effect */}
                <motion.div 
                  className="absolute -inset-4 rounded-full opacity-50"
                  style={{
                    background: 'radial-gradient(circle, rgba(212,165,66,0.15) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Profile container */}
                <motion.div 
                  className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-gold-DEFAULT via-gold-accent/50 to-gold-DEFAULT/30">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img
                        src="/profilepic.jpeg"
                        alt="Abdul Raoof"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Decorative rings */}
                <motion.div 
                  className="absolute -inset-3 rounded-full border border-gold-DEFAULT/10"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="absolute -inset-8 rounded-full border border-gold-DEFAULT/5" />
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-1 -right-1 sm:bottom-2 sm:right-2 px-3 py-1.5 rounded-full glass-card-premium"
                  initial={{ opacity: 0, scale: 0, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-[10px] font-medium text-gold-DEFAULT">MERN Stack</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <StaggerContainer className="grid grid-cols-3 gap-3 sm:gap-4 mt-14 sm:mt-20 max-w-xl">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card-premium rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center cursor-default"
                  >
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-DEFAULT/80 mx-auto mb-2 sm:mb-3" />
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <span className="text-[9px] text-muted-foreground/60 uppercase tracking-[0.2em]">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 text-gold-DEFAULT/40" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};
