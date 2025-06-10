
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
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-75 mix-blend-difference"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
      <div 
        className="fixed w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
        }}
      />
    </>
  );
};

export default CustomCursor;
