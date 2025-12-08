import { motion } from 'framer-motion';
import { Code2, Palette, Server, Smartphone, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
    features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
    features: ['Modern Aesthetics', 'User Research', 'Wireframing', 'Prototyping'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable APIs and server-side solutions for your applications.',
    features: ['Node.js & Express', 'Database Design', 'API Development', 'Cloud Deployment'],
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Pixel-perfect designs that work flawlessly on all devices and screen sizes.',
    features: ['Mobile-First', 'Cross-Browser', 'Fluid Layouts', 'Touch Optimized'],
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Speed up your applications for better user engagement and conversions.',
    features: ['Core Web Vitals', 'Code Splitting', 'Image Optimization', 'Caching'],
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Robust security measures to protect your digital assets and user data.',
    features: ['Auth Systems', 'Data Encryption', 'OWASP Standards', 'Security Audits'],
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'Understanding your goals and requirements' },
  { step: '02', title: 'Design', description: 'Creating wireframes and visual designs' },
  { step: '03', title: 'Develop', description: 'Building with clean, scalable code' },
  { step: '04', title: 'Deploy', description: 'Launch and ongoing support' },
];

export const ServicesPage = () => {
  return (
    <PageLayout>
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block h-0.5 bg-gold-DEFAULT mx-auto mb-4"
              />
              <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
                What I Offer
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                My <span className="text-gold-gradient">Services</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
                Comprehensive solutions to bring your digital vision to life with quality and precision.
              </p>
            </div>
          </ScrollReveal>

          {/* Services Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 h-full group"
                  whileHover={{ y: -6, borderColor: 'rgba(212,165,66,0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gold-DEFAULT/10 flex items-center justify-center mb-4 group-hover:bg-gold-DEFAULT/20 transition-colors relative"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-DEFAULT" />
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-gold-DEFAULT/30 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-gold-DEFAULT transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-gold-DEFAULT flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Process Section */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 sm:mt-24">
              <div className="text-center mb-10 sm:mb-12">
                <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
                  How I Work
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  My <span className="text-gold-gradient">Process</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <motion.div
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-DEFAULT/20 mb-2 group-hover:text-gold-DEFAULT/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{item.description}</p>
                    
                    {/* Connector arrow */}
                    {index < process.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-3 top-1/2 w-4 h-4 text-gold-DEFAULT/30" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-16 sm:mt-20">
              <div className="glass-card inline-block rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Ready to start a project?</h3>
                <p className="text-sm text-muted-foreground mb-5">Let's discuss how I can help bring your vision to life.</p>
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full btn-gold text-sm font-medium group"
                  >
                    Get in Touch
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};
