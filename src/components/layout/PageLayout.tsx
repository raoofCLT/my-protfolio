import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.3, ease: 'easeIn' as const }
  }
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-1 pt-16"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
