import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowUpRight, CheckCircle } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FloatingShapes } from '@/components/ui/FloatingShapes';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@abdulraoof.com', href: 'mailto:contact@abdulraoof.com' },
  { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
  { icon: MapPin, label: 'Location', value: 'India', href: '#' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/abdulraoof', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/abdulraoof', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/abdulraoof', label: 'Twitter' },
];

export const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <PageLayout>
      <FloatingShapes />
      
      <section className="py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block h-[2px] bg-gradient-to-r from-gold-DEFAULT to-transparent mx-auto mb-4"
              />
              <p className="text-[10px] font-medium text-gold-DEFAULT/80 tracking-[0.25em] uppercase mb-3">
                Get in Touch
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Let's <span className="text-gold-gradient">Connect</span>
              </h1>
              <p className="text-sm sm:text-[15px] text-muted-foreground/80 max-w-md mx-auto">
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Contact Info */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="space-y-4 sm:space-y-5">
                {/* Info Cards */}
                <StaggerContainer className="space-y-3">
                  {contactInfo.map((info) => (
                    <StaggerItem key={info.label}>
                      <motion.a
                        href={info.href}
                        className="glass-card rounded-xl p-4 flex items-center gap-4 group block"
                        whileHover={{ y: -3, scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-gold-DEFAULT/8 flex items-center justify-center group-hover:bg-gold-DEFAULT/15 transition-colors">
                          <info.icon className="w-4 h-4 text-gold-DEFAULT/80" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">{info.label}</p>
                          <p className="text-sm text-foreground/90 group-hover:text-gold-DEFAULT transition-colors">{info.value}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-all group-hover:text-gold-DEFAULT/70" />
                      </motion.a>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* Social Links */}
                <div className="pt-2">
                  <p className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-3">Follow me</p>
                  <div className="flex gap-2.5">
                    {socialLinks.map((social) => (
                      <MagneticButton key={social.label} strength={0.3}>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-muted-foreground/60 hover:text-gold-DEFAULT hover:bg-gold-DEFAULT/10 transition-all border border-white/[0.05] hover:border-gold-DEFAULT/20"
                          aria-label={social.label}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon size={17} />
                        </motion.a>
                      </MagneticButton>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <motion.div 
                  className="glass-card rounded-xl p-4"
                  whileHover={{ scale: 1.01 }}
                >
                  <p className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-2">Availability</p>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="w-2 h-2 bg-emerald-500/80 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm text-foreground/90">Available for freelance projects</span>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <motion.form
                onSubmit={handleSubmit}
                className="glass-card-premium rounded-2xl p-5 sm:p-6 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="premium-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="premium-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="premium-input"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="premium-input resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <MagneticButton className="w-full">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-gold text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={15} />
                        <span>Message Sent!</span>
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-background border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </motion.button>
                </MagneticButton>
              </motion.form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
