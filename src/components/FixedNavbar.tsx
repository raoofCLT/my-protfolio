import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

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
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
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
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            duration: 0.6
          }}
          className="fixed top-4 right-4 z-40 navbar-container rounded-full p-2"
        >
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-foreground flex items-center justify-center w-8 h-8 leading-none"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </motion.nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 right-4 z-30 navbar-container rounded-2xl p-4"
            >
              <div className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                      activeSection === section.id
                        ? 'text-black bg-gradient-to-r from-gold to-gold-accent'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {section.label}
                  </motion.button>
                ))}
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
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        duration: 0.6
      }}
      className="fixed top-4 left-0 right-0 mx-auto w-fit z-40 navbar-container rounded-full px-3 py-2"
    >
      <div className="flex items-center space-x-0.5">
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
            className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === section.id
                ? 'text-black'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {/* Active section background */}
            {activeSection === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-gradient-to-r from-gold to-gold-accent rounded-full shadow-lg gold-glow-sm"
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
                  className="absolute inset-0 bg-secondary rounded-full"
                />
              )}
            </AnimatePresence>

            <motion.span 
              className="relative z-10"
              animate={{
                scale: activeSection === section.id ? 1.02 : 1,
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
