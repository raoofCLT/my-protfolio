import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface UseScrollRevealProps {
  threshold?: number;
  once?: boolean;
}

export const useScrollReveal = ({ threshold = 0.1, once = true }: UseScrollRevealProps = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return { ref, isInView };
};