
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-all duration-500 card-hover">
            Abdul Raoof
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-500 card-hover ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/50 text-blue-300 shadow-lg shadow-blue-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 hover:scale-105'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-2xl glass-effect border border-gray-700 text-gray-300 hover:text-white transition-all duration-500 hover:scale-110 card-hover"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 slide-up">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-2xl font-medium transition-all duration-500 card-hover ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/50 text-blue-300 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
