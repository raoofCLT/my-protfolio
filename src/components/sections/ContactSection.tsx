import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SparkleEffect } from '../animations/SparkleEffect';
import { FloatingParticles } from '../animations/FloatingParticles';
import { useState } from 'react';
import { useToast } from '../../hooks/use-toast';

const contactInfo = [
  { icon: Mail, value: "raoofkottayil@gmail.com", href: "mailto:raoofkottayil@gmail.com", label: "Email" },
  { icon: Phone, value: "+91 90728 93647", href: "tel:+919072893647", label: "Phone" },
  { icon: MapPin, value: "Kerala, India", href: null, label: "Location" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/raoofCLT", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/raoof-clt/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/raoof_clt/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/raoofCLT", label: "Facebook" }
];

export const ContactSection = () => {
  const { ref, isInView } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({ title: "Validation Error", description: "Please fix the errors.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        toast({ title: "Message Sent!", description: "I'll get back to you soon." });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else throw new Error(result.message || 'Failed to send');
    } catch (error) {
      toast({ title: "Failed", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative min-h-screen flex items-center py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      
      {/* Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <FloatingParticles count={30} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <SparkleEffect count={10} />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Glass Card */}
            <div className="p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-slate-400 mb-8">
                Ready to bring your ideas to life? I'm here to help transform your vision into reality.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700/30 rounded-2xl hover:border-blue-400/50 hover:bg-slate-800/80 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">{item.label}</p>
                          <span className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">
                            {item.value}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700/30 rounded-2xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">{item.label}</p>
                          <span className="text-white font-medium">{item.value}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-slate-700/30">
                <p className="text-slate-400 text-sm mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center hover:border-blue-400/50 hover:bg-slate-800 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      <social.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'name' || formData.name ? 'top-2 text-xs text-blue-400' : 'top-4 text-slate-400'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 pt-7 pb-3 bg-slate-800/50 border rounded-xl text-white focus:outline-none transition-all duration-300 ${errors.name ? 'border-red-400/50' : 'border-slate-700/50 focus:border-blue-400/50'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'email' || formData.email ? 'top-2 text-xs text-blue-400' : 'top-4 text-slate-400'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 pt-7 pb-3 bg-slate-800/50 border rounded-xl text-white focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-400/50' : 'border-slate-700/50 focus:border-blue-400/50'}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'subject' || formData.subject ? 'top-2 text-xs text-blue-400' : 'top-4 text-slate-400'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 pt-7 pb-3 bg-slate-800/50 border rounded-xl text-white focus:outline-none transition-all duration-300 ${errors.subject ? 'border-red-400/50' : 'border-slate-700/50 focus:border-blue-400/50'}`}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="relative">
                <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'message' || formData.message ? 'top-2 text-xs text-blue-400' : 'top-4 text-slate-400'}`}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  maxLength={500}
                  className={`w-full px-4 pt-7 pb-3 bg-slate-800/50 border rounded-xl text-white focus:outline-none transition-all duration-300 resize-none ${errors.message ? 'border-red-400/50' : 'border-slate-700/50 focus:border-blue-400/50'}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                <div className="text-xs text-slate-400 mt-1 text-right">{formData.message.length}/500</div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
