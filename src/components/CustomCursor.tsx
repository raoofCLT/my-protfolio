
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
        className="fixed w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-[9999] transition-transform duration-75 mix-blend-screen"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      {/* Follower ring */}
      <div 
        className="fixed border-2 border-blue-400/50 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{
          left: cursorPosition.x - (isHovering ? 20 : 16),
          top: cursorPosition.y - (isHovering ? 20 : 16),
          width: isHovering ? 40 : 32,
          height: isHovering ? 40 : 32,
        }}
      />
    </>
  );
};

export default CustomCursor;
