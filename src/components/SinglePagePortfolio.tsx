import { useEffect } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollProgress } from './ScrollProgress';
import { AppSidebar } from './AppSidebar';
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 relative">
          {/* Header with sidebar trigger */}
          <header className="fixed top-0 left-0 right-0 z-30 h-12 flex items-center bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
            <SidebarTrigger className="ml-4 text-white hover:text-purple-400 transition-colors" />
            <div className="flex-1">
              <ScrollProgress />
            </div>
          </header>

          {/* Main content with top padding for fixed header */}
          <main className="pt-12">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          
          <ScrollToTop />
        </div>
      </div>
    </SidebarProvider>
  );
};