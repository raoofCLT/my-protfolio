import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      style={{
        scaleX: scrollProgress / 100,
        transformOrigin: '0%',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgressBar;