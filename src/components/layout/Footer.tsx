import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/raoofCLT", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/raoof-clt", label: "LinkedIn" },
  { icon: Mail, href: "mailto:raoofkottayil@gmail.com", label: "Email" },
];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Gold gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-1 mb-3">
              <span className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Abdul
              </span>
              <span className="text-xl font-bold text-gold">.</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Frontend Engineer crafting pixel-perfect, performant web experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-4">
              Navigation
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/40 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social + Scroll top */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                >
                  <social.icon size={14} />
                </motion.a>
              ))}
              <motion.button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={14} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} Abdul Raoof. All rights reserved.
          </p>
          <p className="text-[11px] text-white/25 flex items-center gap-1">
            Built with <Heart size={10} className="text-gold/50 fill-gold/50" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};
