import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  duration?: number;
  once?: boolean;
}

const getVariants = (direction: string, duration: number): Variants => {
  const directions: Record<string, Variants> = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    },
    down: {
      hidden: { opacity: 0, y: -50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    },
    left: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    },
    right: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    }
  };
  return directions[direction] || directions.up;
};

export const ScrollReveal = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });
  const variants = getVariants(direction, duration);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for child animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  once = true
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger item for use inside StaggerContainer
export const StaggerItem = ({ 
  children, 
  className = '',
  direction = 'up'
}: { 
  children: ReactNode; 
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
}) => {
  const variants: Record<string, Variants> = {
    up: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    },
    left: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    },
    right: {
      hidden: { opacity: 0, x: 30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    }
  };

  return (
    <motion.div variants={variants[direction]} className={className}>
      {children}
    </motion.div>
  );
};
