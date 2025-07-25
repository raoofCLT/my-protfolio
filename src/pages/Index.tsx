
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import LiquidBackground from '../components/LiquidBackground';
import { initScrollAnimations } from '../utils/scrollAnimations';

const Index = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <LiquidBackground />
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
