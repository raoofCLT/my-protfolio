
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
      isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="text-2xl font-light text-white tracking-tight">
          Alex Chen
        </div>
        <ul className="hidden md:flex gap-12">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 font-light text-lg transition-all duration-300 relative hover:text-white after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300"
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
