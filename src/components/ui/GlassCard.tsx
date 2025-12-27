import React from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

export const GlassCard = ({
  children,
  className = "",
  noPadding = false,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`group relative bg-[#0E0E0E]/80 backdrop-blur-xl border border-[#D4A542]/20 rounded-[2rem] overflow-hidden ${
        noPadding ? "" : "p-6 sm:p-8"
      } ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      {...props}
    >
      {/* Grid Pattern Background - Tinted Gold */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,165,66,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,165,66,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />

      {/* Dynamic Spotlight - Gold */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 165, 66, 0.08), 
              transparent 80%
            )
          `,
        }}
      />

      {/* Hover Border - Gold */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-[#D4A542]/40 transition-colors duration-500 rounded-[2rem] pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
};
