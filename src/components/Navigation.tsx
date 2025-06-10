
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-[20px] border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transform transition-transform duration-300 hover:perspective-1000 hover:rotateY-3">
          Alex Chen
        </div>
        <ul className="hidden md:flex gap-10">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 font-medium transition-all duration-300 relative transform hover:text-white hover:perspective-1000 hover:rotateX-2 hover:-translate-y-1 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-white after:to-gray-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
