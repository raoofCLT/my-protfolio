import { motion } from 'framer-motion';
import { Code2, Palette, Server, Smartphone, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FloatingShapes } from '@/components/ui/FloatingShapes';

const services = [
  { icon: Code2, title: 'Web Development', description: 'Custom web applications built with modern frameworks and best practices.', features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'] },
  { icon: Palette, title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.', features: ['Modern Aesthetics', 'User Research', 'Wireframing', 'Prototyping'] },
  { icon: Server, title: 'Backend Development', description: 'Scalable APIs and server-side solutions for your applications.', features: ['Node.js & Express', 'Database Design', 'API Development', 'Cloud Deployment'] },
  { icon: Smartphone, title: 'Responsive Design', description: 'Pixel-perfect designs that work flawlessly on all devices.', features: ['Mobile-First', 'Cross-Browser', 'Fluid Layouts', 'Touch Optimized'] },
  { icon: Zap, title: 'Performance', description: 'Speed up your applications for better engagement and conversions.', features: ['Core Web Vitals', 'Code Splitting', 'Image Optimization', 'Caching'] },
  { icon: Shield, title: 'Security', description: 'Robust security measures to protect your digital assets.', features: ['Auth Systems', 'Data Encryption', 'OWASP Standards', 'Security Audits'] },
];

const process = [
  { step: '01', title: 'Discovery', description: 'Understanding your goals' },
  { step: '02', title: 'Design', description: 'Creating wireframes & visuals' },
  { step: '03', title: 'Develop', description: 'Building with clean code' },
  { step: '04', title: 'Deploy', description: 'Launch and support' },
];

export const ServicesPage = () => {
  return (
    <PageLayout>
      <FloatingShapes />
      
      <section className="py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <motion.span initial={{ width: 0 }} animate={{ width: 32 }} transition={{ delay: 0.3, duration: 0.6 }} className="block h-[2px] bg-gradient-to-r from-gold-DEFAULT to-transparent mx-auto mb-4" />
              <p className="text-[10px] font-medium text-gold-DEFAULT/80 tracking-[0.25em] uppercase mb-3">What I Offer</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">My <span className="text-gold-gradient">Services</span></h1>
              <p className="text-sm sm:text-[15px] text-muted-foreground/80 max-w-lg mx-auto">Comprehensive solutions to bring your digital vision to life.</p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div className="glass-card rounded-xl p-5 h-full group" whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.3 }}>
                  <motion.div className="w-10 h-10 rounded-xl bg-gold-DEFAULT/8 flex items-center justify-center mb-4 group-hover:bg-gold-DEFAULT/15 transition-colors" whileHover={{ rotate: 5 }}>
                    <service.icon className="w-5 h-5 text-gold-DEFAULT/80" />
                  </motion.div>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-gold-DEFAULT transition-colors">{service.title}</h3>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed mb-4">{service.description}</p>
                  <div className="space-y-1.5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-[11px] text-muted-foreground/60">
                        <CheckCircle className="w-3 h-3 text-gold-DEFAULT/60 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="mt-14 sm:mt-20">
              <div className="text-center mb-8">
                <p className="text-[10px] font-medium text-gold-DEFAULT/80 tracking-[0.25em] uppercase mb-2">How I Work</p>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">My <span className="text-gold-gradient">Process</span></h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {process.map((item, index) => (
                  <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center group">
                    <motion.div className="text-3xl sm:text-4xl font-bold text-gold-DEFAULT/15 mb-2 group-hover:text-gold-DEFAULT/30 transition-colors" whileHover={{ scale: 1.1 }}>{item.step}</motion.div>
                    <h3 className="text-sm font-semibold text-foreground/90 mb-1">{item.title}</h3>
                    <p className="text-[10px] text-muted-foreground/60">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-14">
              <div className="glass-card-premium inline-block rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Ready to start a project?</h3>
                <p className="text-sm text-muted-foreground/70 mb-5">Let's discuss how I can help bring your vision to life.</p>
                <MagneticButton>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold text-sm font-medium group">
                    <span>Get in Touch</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
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
