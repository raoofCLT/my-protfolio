import { motion } from 'framer-motion';
import { Code2, Palette, Server, Smartphone, Zap, Shield } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable APIs and server-side solutions for your applications.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Pixel-perfect designs that work flawlessly on all devices.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your applications for better user engagement.',
  },
  {
    icon: Shield,
    title: 'Security Implementation',
    description: 'Robust security measures to protect your digital assets.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const ServicesPage = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
              What I Offer
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Comprehensive solutions to bring your digital vision to life with quality and precision.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl p-6 group"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-gold-DEFAULT/10 flex items-center justify-center mb-4 group-hover:bg-gold-DEFAULT/20 transition-colors">
                  <service.icon className="w-5 h-5 text-gold-DEFAULT" />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold text-sm"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};
