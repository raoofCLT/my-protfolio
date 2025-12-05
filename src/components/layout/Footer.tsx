import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-gold-DEFAULT/10">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-foreground">
              AR<span className="text-gold-DEFAULT">.</span>
            </span>
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/projects"
              className="text-xs text-muted-foreground hover:text-gold-DEFAULT transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="text-xs text-muted-foreground hover:text-gold-DEFAULT transition-colors"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="text-xs text-muted-foreground hover:text-gold-DEFAULT transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-muted-foreground hover:text-gold-DEFAULT hover:bg-gold-DEFAULT/10 transition-all"
            >
              <Github size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-muted-foreground hover:text-gold-DEFAULT hover:bg-gold-DEFAULT/10 transition-all"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-1.5 rounded-full text-muted-foreground hover:text-gold-DEFAULT hover:bg-gold-DEFAULT/10 transition-all"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
