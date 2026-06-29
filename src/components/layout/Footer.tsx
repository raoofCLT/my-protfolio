import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/raoofCLT", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/raoof-clt",
    label: "LinkedIn",
  },
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
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[11px] text-muted-foreground/60">
            © {new Date().getFullYear()} Abdul Raoof. All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-6">
            <Link
              to="/"
              className="text-[11px] text-muted-foreground/60 hover:text-gold transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[11px] text-muted-foreground/60 hover:text-gold transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-[11px] text-muted-foreground/60 hover:text-gold transition-colors"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="text-[11px] text-muted-foreground/60 hover:text-gold transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="text-[11px] text-muted-foreground/60 hover:text-gold transition-colors"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="text-[11px] text-muted-foreground/60 hover:text-gold transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/50 hover:text-gold transition-colors"
                aria-label={social.label}
                whileHover={{ y: -2 }}
              >
                <social.icon size={15} />
              </motion.a>
            ))}

            {/* Scroll to top */}
            <motion.button
              onClick={scrollToTop}
              className="ml-2 w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-muted-foreground/50 hover:text-gold hover:border-gold/20 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
