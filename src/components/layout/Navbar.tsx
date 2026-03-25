import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },

  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <motion.span
            className="text-lg sm:text-xl font-bold text-foreground"
            whileHover={{ x: 2 }}
          >
            Abdul
          </motion.span>
          <motion.span
            className="text-lg sm:text-xl font-bold text-gold"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Raoof
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 flex flex-col items-center group ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="relative z-10">{link.name}</span>

              {/* Activation Capsule - Local animation to prevent ghosting */}
              {location.pathname === link.path && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gold/5 border border-gold/20 rounded-full -z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}

              {/* Accent bottom line - Scaled entry */}
              {location.pathname === link.path && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 0.5, scaleX: 1 }}
                  className="absolute -bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full btn-gold-outline group"
        >
          Hire Me
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-card/50 transition-colors"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-14 right-0 bottom-0 w-full sm:w-80 bg-background-deep border-l border-border/50 lg:hidden overflow-y-auto"
            >
              <div className="px-6 py-8 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`relative flex items-center justify-between px-4 py-4 text-base font-medium transition-all rounded-xl border border-transparent ${
                        location.pathname === link.path
                          ? "text-gold bg-gold/5 border-gold/20"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,165,66,0.8)]" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-6"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-xl btn-gold w-full"
                  >
                    Hire Me
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
