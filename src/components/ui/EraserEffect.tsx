import { useRef, useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

interface EraserEffectProps {
  className?: string;
  overlayColor?: string;
  brushSize?: number;
}

const EraserEffect = ({ 
  className = '', 
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  brushSize = 70 
}: EraserEffectProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctx.fillStyle = overlayColor;
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    setIsReady(true);
  }, [overlayColor]);

  const erase = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';
    
    // Create soft-edged brush using radial gradient
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushSize);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();
  }, [brushSize]);

  const interpolate = useCallback((x1: number, y1: number, x2: number, y2: number) => {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const steps = Math.max(Math.floor(distance / 5), 1);
    
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;
      erase(x, y);
    }
  }, [erase]);

  const getPosition = useCallback((e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    
    if ('touches' in e) {
      const touch = e.touches[0] || e.changedTouches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
    }
    
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  const handleStart = useCallback((e: MouseEvent | TouchEvent) => {
    isDrawingRef.current = true;
    const pos = getPosition(e);
    lastPosRef.current = pos;
    erase(pos.x, pos.y);
  }, [getPosition, erase]);

  const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDrawingRef.current) return;
    
    const pos = getPosition(e);
    interpolate(lastPosRef.current.x, lastPosRef.current.y, pos.x, pos.y);
    lastPosRef.current = pos;
  }, [getPosition, interpolate]);

  const handleEnd = useCallback(() => {
    isDrawingRef.current = false;
  }, []);

  useEffect(() => {
    initCanvas();
    
    const handleResize = () => {
      initCanvas();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mouse events
    const onMouseDown = (e: MouseEvent) => handleStart(e);
    const onMouseMove = (e: MouseEvent) => handleMove(e);
    const onMouseUp = () => handleEnd();
    const onMouseLeave = () => handleEnd();

    // Touch events
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      handleStart(e);
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e);
    };
    const onTouchEnd = () => handleEnd();

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, [handleStart, handleMove, handleEnd]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 cursor-crosshair"
        style={{ pointerEvents: 'auto' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
};

export default EraserEffect;
