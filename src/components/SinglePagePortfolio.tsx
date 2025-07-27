import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import ScrollProgressBar from './ScrollProgressBar';
import BackToTopButton from './BackToTopButton';


const SinglePagePortfolio = () => {
  return (
    <div className="relative">

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
};

export default SinglePagePortfolio;