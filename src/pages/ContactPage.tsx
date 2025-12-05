import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { useToast } from '@/hooks/use-toast';

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
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@abdulraoof.dev' },
    { icon: Phone, label: 'Phone', value: '+1 234 567 890' },
    { icon: MapPin, label: 'Location', value: 'Remote / Worldwide' },
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-medium text-gold-DEFAULT tracking-widest uppercase mb-2">
            Get in Touch
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Contact <span className="text-gold-gradient">Me</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50 hover:border-gold-DEFAULT/20 transition-colors"
              >
                <div className="p-2 rounded-lg bg-gold-DEFAULT/10">
                  <item.icon className="w-4 h-4 text-gold-DEFAULT" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-card/50 border border-border/50 text-muted-foreground hover:text-gold-DEFAULT hover:border-gold-DEFAULT/30 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-card/50 border border-border/50 text-muted-foreground hover:text-gold-DEFAULT hover:border-gold-DEFAULT/30 transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg bg-card/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-DEFAULT/50 focus:ring-1 focus:ring-gold-DEFAULT/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg bg-card/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-DEFAULT/50 focus:ring-1 focus:ring-gold-DEFAULT/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="w-full px-3 py-2 text-sm rounded-lg bg-card/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-DEFAULT/50 focus:ring-1 focus:ring-gold-DEFAULT/20 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-gold-DEFAULT to-gold-accent text-background text-sm font-semibold hover:shadow-lg hover:shadow-gold-DEFAULT/20 transition-all duration-300"
            >
              Send Message
              <Send size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </PageLayout>
  );
};
