import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X, Sparkles } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const FixedNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sectionIds.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  if (isMobile) {
    return (
      <>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled 
              ? 'bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/20' 
              : 'bg-slate-900/80 backdrop-blur-xl border border-slate-800/30'
          }`}
        >
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AR
          </span>
          
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white flex items-center justify-center w-10 h-10 bg-slate-800/50 rounded-xl border border-slate-700/50"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </motion.nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 z-40 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    whileTap={{ scale: 0.98 }}
                    className={`relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                      activeSection === section.id
                        ? 'text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {section.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Hire Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-4 left-0 right-0 mx-auto w-fit z-50 px-2 py-2 rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/20' 
          : 'bg-slate-900/80 backdrop-blur-xl border border-slate-800/30'
      }`}
    >
      <div className="flex items-center space-x-1">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            onHoverStart={() => setIsHovered(section.id)}
            onHoverEnd={() => setIsHovered(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeSection === section.id
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {activeSection === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            
            <AnimatePresence>
              {isHovered === section.id && activeSection !== section.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-700/30 rounded-xl"
                />
              )}
            </AnimatePresence>

            <span className="relative z-10">{section.label}</span>
          </motion.button>
        ))}
        
        {/* Hire Me Button */}
        <motion.button
          onClick={() => scrollToSection('contact')}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
        >
          <Sparkles className="w-4 h-4" />
          Hire Me
        </motion.button>
      </div>
    </motion.nav>
  );
};
