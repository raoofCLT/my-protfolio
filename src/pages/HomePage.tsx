import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code2, Layers, Sparkles } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const roles = [
  'Full-Stack Developer',
  'React Architect',
  'UI Engineer',
  'Problem Solver',
  'Modern Web Crafter',
];

const stats = [
  { icon: Code2, value: '3+', label: 'Years Experience' },
  { icon: Layers, value: '25+', label: 'Projects Completed' },
  { icon: Sparkles, value: '15+', label: 'Technologies' },
];

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
          animationDelay: `${i * 1.2}s`,
          width: `${3 + (i % 3)}px`,
          height: `${3 + (i % 3)}px`,
        }}
      />
    ))}
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
      <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center">
        <FloatingParticles />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-4"
              >
                Welcome to my portfolio
              </motion.p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-4">
                Hi, I'm{' '}
                <span className="text-gold-gradient">Abdul Raoof</span>
              </h1>

              {/* Animated Role */}
              <div className="h-10 mb-6 overflow-hidden">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="text-xl md:text-2xl font-medium text-gold-accent"
                >
                  {roles[roleIndex]}
                </motion.div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-8">
                Crafting elegant digital experiences with clean code and modern
                technologies. Passionate about building scalable, performant web
                applications that make an impact.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold text-sm"
                >
                  Hire Me
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="/Abdul Raoof.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold-outline text-sm"
                >
                  <Download size={16} />
                  Resume
                </a>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-DEFAULT/20 to-gold-accent/20 rounded-full blur-2xl opacity-50" />
                
                {/* Profile */}
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gold-DEFAULT/30">
                  <img
                    src="/profilepic.jpeg"
                    alt="Abdul Raoof"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-gold-DEFAULT/10 scale-[1.15] animate-gold-pulse" />
                <div className="absolute inset-0 rounded-full border border-gold-DEFAULT/5 scale-[1.30]" />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mt-20 max-w-xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-xl p-4 text-center"
              >
                <stat.icon className="w-5 h-5 text-gold-DEFAULT mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};
