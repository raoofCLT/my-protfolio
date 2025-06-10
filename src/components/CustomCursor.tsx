import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const updateMousePosition = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth interpolation factor (0.1 = slower, 0.3 = faster)
      const lerpFactor = 0.15;
      
      //0 Calculate new position using lerp
      cursorRef.current.x += (targetRef.current.x - cursorRef.current.x) * lerpFactor;
      cursorRef.current.y += (targetRef.current.y - cursorRef.current.y) * lerpFactor;
      
      setMousePosition({
        x: cursorRef.current.x,
        y: cursorRef.current.y
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    animate();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference shadow-lg transition-transform duration-100 will-change-transform"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${isHovering ? 2 : 1})`,
          boxShadow: isHovering
            ? '0 0 20px rgba(255, 255, 255, 0.8)'
            : '0 0 10px rgba(255, 255, 255, 0.5)',
        }}
      />

      {/* Follower Ring */}
      <div
        className="fixed rounded-full border border-white/50 pointer-events-none z-[99998] transition-all duration-300 mix-blend-difference will-change-transform"
        style={{
          transform: `translate(${mousePosition.x - (isHovering ? 24 : 20)}px, ${mousePosition.y - (isHovering ? 24 : 20)}px)`,
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
