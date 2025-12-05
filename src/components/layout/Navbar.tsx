import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div
          className={`flex items-center justify-between px-4 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#0B0B0B]/90 backdrop-blur-md border border-gold-DEFAULT/10'
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-sm font-semibold tracking-wide text-foreground hover:text-gold-DEFAULT transition-colors"
          >
            AR<span className="text-gold-DEFAULT">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-xs font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-gold-DEFAULT'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gold-DEFAULT"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Hire Me Button */}
          <Link
            to="/contact"
            className="hidden md:block text-xs font-medium px-4 py-1.5 rounded-full border border-gold-DEFAULT/50 text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-background transition-all duration-300"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-1"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 p-4 rounded-2xl bg-[#0B0B0B]/95 backdrop-blur-md border border-gold-DEFAULT/10"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'text-gold-DEFAULT bg-gold-DEFAULT/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-card'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium py-2 px-3 rounded-lg text-center border border-gold-DEFAULT/50 text-gold-DEFAULT mt-2"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
