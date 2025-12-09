import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Code2, Layers, Sparkles, ChevronDown } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { MagneticButton } from '@/components/ui/MagneticButton';

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

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gold-DEFAULT/40 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0.2, 0.6, 0.2],
          scale: [0.5, 1, 0.5],
          y: [0, -100, -200],
          x: [0, Math.sin(i) * 30, 0]
        }}
        transition={{
          duration: 8 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.8,
          ease: 'easeInOut'
        }}
        style={{
          left: `${8 + i * 8}%`,
          bottom: '10%',
        }}
      />
    ))}
  </div>
);

const GlowOrb = () => (
  <div className="absolute top-1/4 right-1/4 w-96 h-96 pointer-events-none">
    <motion.div
      className="absolute inset-0 bg-gold-DEFAULT/5 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  </div>
);

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
      <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center overflow-hidden">
        <FloatingParticles />
        <GlowOrb />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(212,165,66,0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212,165,66,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-DEFAULT/10 border border-gold-DEFAULT/20 mb-6"
              >
                <span className="w-2 h-2 bg-gold-DEFAULT rounded-full animate-pulse" />
                <span className="text-[10px] sm:text-xs font-medium text-gold-DEFAULT tracking-wider uppercase">
                  Available for work
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-4">
                Hi, I'm{' '}
                <span className="text-gold-gradient relative">
                  Abdul Raoof
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gold-DEFAULT to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </h1>

              {/* Animated Role */}
              <div className="h-8 sm:h-10 mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 40, opacity: 0, rotateX: -45 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -40, opacity: 0, rotateX: 45 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-lg sm:text-xl md:text-2xl font-medium text-gold-accent flex items-center gap-2"
                  >
                    <span className="w-3 h-[2px] bg-gold-DEFAULT" />
                    {roles[roleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mb-8"
              >
                Crafting elegant digital experiences with clean code and modern
                technologies. Passionate about building scalable, performant web
                applications that make an impact.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full btn-gold text-sm font-medium"
                  >
                    Hire Me
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="/Abdul Raoof.pdf"
                    download
                    className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full btn-gold-outline text-sm font-medium"
                  >
                    <Download size={16} />
                    Resume
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex justify-center lg:justify-end order-first lg:order-last"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div 
                  className="absolute -inset-8 rounded-full opacity-30"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(212,165,66,0.3), transparent)'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-DEFAULT/20 via-gold-accent/15 to-gold-DEFAULT/20 rounded-full blur-2xl" />
                
                {/* Profile container */}
                <motion.div 
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-gold-DEFAULT via-gold-accent to-gold-DEFAULT/50">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background-deep">
                      <img
                        src="/profilepic.jpeg"
                        alt="Abdul Raoof"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -inset-2 rounded-full border border-gold-DEFAULT/20"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="absolute -inset-6 rounded-full border border-gold-DEFAULT/10" />
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 px-3 py-1.5 rounded-full bg-background-offset border border-gold-DEFAULT/30 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                >
                  <span className="text-[10px] sm:text-xs font-medium text-gold-DEFAULT">MERN Stack</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <StaggerContainer className="grid grid-cols-3 gap-3 sm:gap-4 mt-12 sm:mt-20 max-w-xl">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ y: -4, borderColor: 'rgba(212,165,66,0.3)' }}
                    className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center border border-transparent transition-colors"
                  >
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-DEFAULT mx-auto mb-2 sm:mb-3" />
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
            className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-4 h-4 text-gold-DEFAULT/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};
