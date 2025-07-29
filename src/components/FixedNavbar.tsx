import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  };

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