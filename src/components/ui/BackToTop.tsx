import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (!homeSection) {
        setShow(window.scrollY > 100); // fallback
        return;
      }
      const rect = homeSection.getBoundingClientRect();
      // If the bottom of the home section is above the top of the viewport, show the button
      setShow(rect.bottom < 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button
        onClick={scrollToTop}
        className="p-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default BackToTop; 