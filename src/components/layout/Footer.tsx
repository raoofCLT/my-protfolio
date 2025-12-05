import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/abdulraoof', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/abdulraoof', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@abdulraoof.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-gold-DEFAULT/10">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Abdul Raoof. All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <Link to="/projects" className="text-xs text-muted-foreground hover:text-gold-DEFAULT transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-xs text-muted-foreground hover:text-gold-DEFAULT transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold-DEFAULT transition-colors"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
