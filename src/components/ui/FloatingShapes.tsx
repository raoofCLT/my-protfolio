import { motion } from 'framer-motion';

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient orb - top right */}
      <motion.div
        className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #D4A542 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Medium orb - bottom left */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #F2C572 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -10, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center accent */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.015]"
        style={{
          background: 'radial-gradient(circle, #D4A542 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.012]">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#D4A542" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};
