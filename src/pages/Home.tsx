import { useEffect, useState } from 'react';
import { MapPin, Download, Eye, CheckCircle, ArrowDown, Sparkles } from 'lucide-react';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const successfulProjects = useAnimatedCounter({ target: 25 });
  const { elementRef, hasBeenVisible } = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCV = async () => {
    try {
      await fetch('http://localhost:3001/track-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      });
    } catch (error) {
      console.log('Analytics tracking failed:', error);
    }

    const link = document.createElement('a');
    link.href = '/Abdul Raoof.pdf';
    link.download = 'Abdul_Raoof_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const mainElement = document.querySelector('main');
    const projectsSection = document.getElementById('projects');
    if (mainElement && projectsSection) {
      const sectionTop = projectsSection.offsetTop;
      mainElement.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const mainElement = document.querySelector('main');
    const contactSection = document.getElementById('contact');
    if (mainElement && contactSection) {
      const sectionTop = contactSection.offsetTop;
      mainElement.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  return (
    <div ref={elementRef} className="w-full h-full relative overflow-hidden">
      {/* Hero Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`container mx-auto px-6 h-full flex items-center transition-all duration-1000 ${hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Profile Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${hasBeenVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-6">
              {/* Profile Image with enhanced effects */}
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
                <img
                  src="/profilepic.jpeg"
                  alt="Abdul Raoof"
                  className="relative w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full border-2 border-gray-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
                <Sparkles className="absolute -bottom-1 -right-1 w-5 h-5 text-cyan-400 animate-pulse" />
              </div>

              {/* Animated Text */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                    Abdul Raoof
                  </span>
                </h1>
                
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-xl lg:text-2xl font-medium text-cyan-400">
                    Full Stack Developer
                  </p>
                </div>
                
                <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                  Crafting digital experiences with modern technologies. 
                  Passionate about creating scalable solutions and beautiful interfaces.
                </p>
              </div>

              {/* Location & Experience */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg">Rawalpindi, Pakistan</span>
                </div>
                
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/20">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-200 font-medium">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Actions Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${hasBeenVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Success Metrics */}
            <div className="glass-morphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Portfolio Highlights</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                    <div className="text-3xl lg:text-4xl font-bold text-cyan-400" ref={successfulProjects.elementRef}>
                      {successfulProjects.count}+
                    </div>
                    <p className="text-slate-300 text-sm">Successful Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <button
                onClick={scrollToProjects}
                className="group w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>See My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToContact}
                className="group w-full flex items-center justify-center space-x-3 bg-transparent hover:bg-slate-800/50 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 border-2 border-slate-600 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                <span>Contact Me</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button
                onClick={handleDownloadCV}
                className="group w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 border border-slate-500/30 focus:outline-none focus:ring-2 focus:ring-slate-400/50"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-400 mx-auto" />
          <p className="text-slate-400 text-sm mt-2">Scroll to explore</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
