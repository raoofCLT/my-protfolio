
import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navItems = [
    { href: '#home', label: 'Home', icon: Home, key: '1' },
    { href: '#about', label: 'About', icon: User, key: '2' },
    { href: '#skills', label: 'Skills', icon: Code, key: '3' },
    { href: '#projects', label: 'Projects', icon: Briefcase, key: '4' },
    { href: '#contact', label: 'Contact', icon: Mail, key: '5' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href);
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
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

    const handleKeyPress = (e: KeyboardEvent) => {
      // ESC to close mobile menu
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        return;
      }

      // Number keys 1-5 for navigation
      const keyPressed = e.key;
      const navItem = navItems.find(item => item.key === keyPressed);
      if (navItem && (e.ctrlKey || e.metaKey || e.altKey)) {
        e.preventDefault();
        scrollToSection(navItem.href);
      }

      // Arrow keys for section navigation
      if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        e.preventDefault();
        const currentIndex = navItems.findIndex(item => item.href === activeSection);
        let nextIndex;
        
        if (e.key === 'ArrowDown') {
          nextIndex = currentIndex < navItems.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : navItems.length - 1;
        }
        
        scrollToSection(navItems[nextIndex].href);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, activeSection]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 navbar-container border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="text-2xl font-bold relative group"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600 bg-clip-text text-transparent">
                Abdul Raoof
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-clip-text text-transparent">
                Abdul Raoof
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className={`flex shine-effect items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-500 card-hover text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                  activeSection === item.href 
                    ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/50 text-blue-300 shadow-lg shadow-blue-500/25' 
                    : ''
                }`}
                title={`Navigate to ${item.label} (Alt+${item.key})`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl glass-effect border border-gray-700 text-gray-300 hover:text-white transition-all duration-500 hover:scale-110 card-hover focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              title="Toggle menu (ESC to close)"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 slide-up">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`flex items-center gap-3 px-4 py-4 rounded-2xl font-medium transition-all duration-500 card-hover text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 ${
                    activeSection === item.href 
                      ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-white' 
                      : ''
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
