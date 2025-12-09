import { motion } from 'framer-motion';

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient orb - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #D4A542 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Medium orb - bottom left */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, #EDBF63 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -15, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            width: 8 + i * 4,
            height: 8 + i * 4,
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            border: '1px solid rgba(212, 165, 66, 0.1)',
            borderRadius: i % 2 === 0 ? '2px' : '50%',
            background: i % 3 === 0 ? 'rgba(212, 165, 66, 0.03)' : 'transparent',
          }}
          animate={{
            y: [0, -30 - i * 10, 0],
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Floating dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gold-DEFAULT/30"
          style={{
            left: `${5 + i * 8}%`,
            top: `${10 + (i % 5) * 20}%`,
          }}
          animate={{
            y: [0, -50 - i * 5, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Subtle grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#D4A542" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};
