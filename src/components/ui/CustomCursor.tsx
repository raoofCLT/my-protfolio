import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const cursorX = useSpring(0, { stiffness: 300, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 28 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: fine)").matches === false) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setIsHovering(true);
      }
    };

    const handleOut = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x: cursorX, y: cursorY }}
    >
      <motion.div
        className="rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          opacity: isHovering ? 0.6 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};
