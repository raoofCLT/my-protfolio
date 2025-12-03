import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/raoofCLT", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/raoof-clt/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/raoof_clt/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/raoofCLT", label: "Facebook" }
];

export const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Abdul Raoof
            </span>
            <p className="text-slate-400 text-sm mt-2">Full Stack Developer</p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center group hover:border-blue-400/50 hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <social.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-sm flex items-center gap-2"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>© {new Date().getFullYear()}</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
