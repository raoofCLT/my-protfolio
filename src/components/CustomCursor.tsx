
import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smoother interpolation with better easing
      const lerpFactor = 0.08;
      
      // Calculate distance to determine if cursor should move
      const dx = targetRef.current.x - cursorRef.current.x;
      const dy = targetRef.current.y - cursorRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Only update if there's meaningful movement (prevents jittering)
      if (distance > 0.5) {
        cursorRef.current.x += dx * lerpFactor;
        cursorRef.current.y += dy * lerpFactor;
        
        setMousePosition({
          x: cursorRef.current.x,
          y: cursorRef.current.y
        });
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer');

      setIsHovering(!!isInteractive);
    };

    // Initialize cursor position to current mouse position
    const initializeCursor = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      targetRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseenter', initializeCursor, { once: true });
    
    animate();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseenter', initializeCursor);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference shadow-lg transition-all duration-200 will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0) scale(${isHovering ? 1.5 : 1})`,
          boxShadow: isHovering
            ? '0 0 20px rgba(255, 255, 255, 0.8)'
            : '0 0 10px rgba(255, 255, 255, 0.5)',
        }}
      />

      {/* Follower Ring */}
      <div
        className="fixed rounded-full border border-white/50 pointer-events-none z-[99998] transition-all duration-300 mix-blend-difference will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x - (isHovering ? 24 : 20)}px, ${mousePosition.y - (isHovering ? 24 : 20)}px, 0)`,
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
