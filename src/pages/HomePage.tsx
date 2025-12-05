import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const roles = [
  'Full-Stack Developer',
  'UI Engineer',
  'API Architect',
  'MERN Developer',
];

export const HomePage = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Code, label: 'Years Experience', value: '3+' },
    { icon: Layers, label: 'Projects Completed', value: '25+' },
    { icon: Zap, label: 'Tech Stack', value: '15+' },
  ];

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-xs font-medium text-gold-DEFAULT tracking-widest uppercase mb-3">
              Welcome to my portfolio
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-gold-gradient">Abdul Raoof</span>
            </h1>

            {/* Animated Role */}
            <div className="h-8 mb-6 overflow-hidden">
              <motion.p
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg md:text-xl text-gold-accent font-medium"
              >
                {roles[roleIndex]}
              </motion.p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Crafting elegant digital experiences with clean code and modern
              technologies. Passionate about building scalable web applications.
            </p>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-DEFAULT to-gold-accent text-background text-sm font-semibold hover:shadow-lg hover:shadow-gold-DEFAULT/20 transition-all duration-300"
            >
              Let's Work Together
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-gold-DEFAULT/30 gold-glow-sm">
              <img
                src="/profilepic.jpeg"
                alt="Abdul Raoof"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-gold-DEFAULT/10 scale-110" />
            <div className="absolute inset-0 rounded-full border border-gold-DEFAULT/5 scale-125" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-gold-DEFAULT/20 transition-colors"
            >
              <stat.icon className="w-5 h-5 text-gold-DEFAULT mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </PageLayout>
  );
};
