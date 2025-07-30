import { useEffect } from 'react';
import { ScrollProgress } from './ScrollProgress';
import { FixedNavbar } from './FixedNavbar';
import { ScrollToTop } from './ScrollToTop';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';

export const SinglePagePortfolio = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      <ScrollProgress />
      <FixedNavbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <ScrollToTop />
    </div>
  );
};