
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorPosition = () => {
      setCursorPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    };

    window.addEventListener('mousemove', updateMousePosition);
    const animationId = setInterval(updateCursorPosition, 16);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearInterval(animationId);
    };
  }, [mousePosition]);

  return (
    <>
      <div 
        className="fixed w-5 h-5 bg-white/80 rounded-full pointer-events-none z-[9999] transition-transform duration-100 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      <div 
        className="fixed w-10 h-10 border-2 border-white/30 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{
          left: cursorPosition.x - 20,
          top: cursorPosition.y - 20,
        }}
      />
    </>
  );
};

export default CustomCursor;
