import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-300" },
    { icon: Mail, href: "mailto:abdulraoof@example.com", label: "Email", color: "hover:text-red-400" }
  ];

  const contactInfo = [
    { icon: MapPin, text: "Kerala, India", color: "text-blue-400" },
    { icon: Phone, text: "+91 XXX XXX XXXX", color: "text-green-400" },
    { icon: Mail, text: "abdulraoof@example.com", color: "text-purple-400" }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        ref={elementRef}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass-morphism rounded-2xl p-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <MessageCircle className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information */}
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-400" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300"
                  >
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                    <span className="text-slate-300">{info.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 glass-subtle rounded-xl text-slate-300 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="glass-morphism rounded-2xl p-6 text-center border border-green-500/30"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for Work</span>
              </div>
              <p className="text-slate-300 text-sm">
                Open to new opportunities and exciting projects
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 pt-8 border-t border-slate-700"
        >
          <p className="text-slate-400">
            © 2024 Abdul Raoof. Built with ❤️ using React, TypeScript & Framer Motion
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;