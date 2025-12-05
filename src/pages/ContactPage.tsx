import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@abdulraoof.com' },
  { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX' },
  { icon: MapPin, label: 'Location', value: 'India' },
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
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
              Get in Touch
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's <span className="text-gold-gradient">Connect</span>
            </h1>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Info Cards */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="glass-card rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold-DEFAULT/10 flex items-center justify-center">
                      <info.icon className="w-4 h-4 text-gold-DEFAULT" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{info.label}</p>
                      <p className="text-sm text-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs text-muted-foreground mb-3">Follow me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-muted-foreground hover:text-gold-DEFAULT hover:bg-gold-DEFAULT/10 transition-all border border-border/50"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-background border border-border rounded-lg gold-focus transition-all text-foreground placeholder:text-muted-subtle"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-background border border-border rounded-lg gold-focus transition-all text-foreground placeholder:text-muted-subtle"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 text-sm bg-background border border-border rounded-lg gold-focus transition-all resize-none text-foreground placeholder:text-muted-subtle"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg btn-gold text-sm"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
