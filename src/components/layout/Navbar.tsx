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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <motion.span
            className="text-lg sm:text-xl font-bold text-foreground tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            whileHover={{ x: 2 }}
          >
            Abdul
          </motion.span>
          <motion.span
            className="text-lg sm:text-xl font-bold text-gold"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            .
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 py-2 ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold-light rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-2 text-[11px] font-bold px-6 py-2.5 rounded-full btn-gold-outline group tracking-wider uppercase"
        >
          Hire Me
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-xl lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-16 right-0 bottom-0 w-full sm:w-80 bg-background border-l border-gold/10 lg:hidden overflow-y-auto"
            >
              <div className="px-8 py-10 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between py-5 text-lg font-semibold transition-colors border-b border-white/5 ${
                        location.pathname === link.path
                          ? "text-gold"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <span className="w-2 h-2 rounded-full bg-gold" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="pt-8"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 text-sm font-bold py-4 rounded-2xl btn-gold w-full"
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
