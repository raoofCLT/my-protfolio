import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const FixedNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
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
        {/* Mobile Hamburger Button */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            duration: 0.6
          }}
          className="fixed top-4 right-4 z-50 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full p-3 shadow-2xl shadow-black/20"
        >
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white relative z-10"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.4
                }}
                className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-l border-slate-700/50 z-40 shadow-2xl"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-6 border-b border-slate-700/50">
                    <motion.h2 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    >
                      Navigation
                    </motion.h2>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col space-y-3">
                      {sections.map((section, index) => (
                        <motion.button
                          key={section.id}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (index * 0.1) }}
                          onClick={() => scrollToSection(section.id)}
                          whileHover={{ 
                            scale: 1.02,
                            x: 10,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative group px-6 py-4 rounded-2xl text-left transition-all duration-300 ${
                            activeSection === section.id
                              ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white border border-purple-500/30'
                              : 'text-slate-300 hover:text-white hover:bg-slate-700/30'
                          }`}
                        >
                          {/* Active indicator */}
                          {activeSection === section.id && (
                            <motion.div
                              layoutId="mobileActiveSection"
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-r-full"
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                          
                          {/* Hover effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <motion.span 
                            className="relative z-10 font-medium text-lg"
                            animate={{
                              fontWeight: activeSection === section.id ? 600 : 500
                            }}
                          >
                            {section.label}
                          </motion.span>
                          
                          {/* Arrow indicator for active */}
                          {activeSection === section.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute right-4 top-1/2 -translate-y-1/2"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-6 border-t border-slate-700/50"
                  >
                    <p className="text-xs text-slate-400 text-center">
                      Tap outside to close
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        duration: 0.6
      }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-3 shadow-2xl shadow-black/20"
    >
      <div className="flex items-center space-x-1">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            onHoverStart={() => setIsHovered(section.id)}
            onHoverEnd={() => setIsHovered(null)}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === section.id
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {/* Active section background */}
            {activeSection === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                initial={false}
                transition={{ 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 30 
                }}
              />
            )}
            
            {/* Hover effect background */}
            <AnimatePresence>
              {isHovered === section.id && activeSection !== section.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-slate-700/50 rounded-full"
                />
              )}
            </AnimatePresence>

            {/* Glow effect for active section */}
            {activeSection === section.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-sm"
              />
            )}

            <motion.span 
              className="relative z-10"
              animate={{
                scale: activeSection === section.id ? 1.05 : 1,
                fontWeight: activeSection === section.id ? 600 : 500
              }}
              transition={{ duration: 0.2 }}
            >
              {section.label}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};