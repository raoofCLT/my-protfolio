
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorPosition = () => {
      setCursorPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    const animationId = setInterval(updateCursorPosition, 16);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      clearInterval(animationId);
    };
  }, [mousePosition]);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transition-all duration-100 mix-blend-difference shadow-lg"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: isHovering ? 'scale(2)' : 'scale(1)',
          boxShadow: isHovering ? '0 0 20px rgba(255, 255, 255, 0.8)' : '0 0 10px rgba(255, 255, 255, 0.5)',
        }}
      />
      {/* Follower ring */}
      <div 
        className="fixed border border-white/50 rounded-full pointer-events-none z-[9998] transition-all duration-500 mix-blend-difference"
        style={{
          left: cursorPosition.x - (isHovering ? 24 : 20),
          top: cursorPosition.y - (isHovering ? 24 : 20),
          width: isHovering ? 48 : 40,
          height: isHovering ? 48 : 40,
          borderWidth: isHovering ? '2px' : '1px',
          opacity: isHovering ? 0.8 : 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;
