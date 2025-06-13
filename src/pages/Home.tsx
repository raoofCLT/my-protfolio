
import { ArrowRight, Download, MapPin, Award, Zap } from 'lucide-react';
import axios from 'axios';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { useState, useEffect } from 'react';

const Home = () => {
  const clientsCounter = useAnimatedCounter({ target: 25 });
  const [showContent, setShowContent] = useState(false);
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);

  useEffect(() => {
    // Hide navbar during name animation
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.opacity = '0';
      navbar.style.pointerEvents = 'none';
    }

    // Show name animation first
    const nameTimer = setTimeout(() => {
      setNameAnimationComplete(true);
      // Show navbar after name animation
      if (navbar) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
        navbar.style.transition = 'opacity 0.5s ease-in-out';
      }
    }, 2000);

    // Show rest of content after name animation
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const handleDownloadCV = async () => {
    // Get device info (simple example)
    const deviceInfo = navigator.platform + ' - ' + navigator.userAgent;
    
    try {
      await axios.post('http://localhost:5000/api/download-cv', {
        name: 'Anonymous',
        deviceInfo,
      });
    } catch (err) {
      console.error('Failed to send download notification:', err);
    }
    const link = document.createElement('a');
    link.href = '/Abdul Raoof.pdf';
    link.download = 'Abdul_Raoof_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-24 pb-4 z-10">
      {/* Name Loading Animation */}
      {!nameAnimationComplete && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-gray-950 to-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent animate-pulse">
              Abdul Raoof
            </h1>
            <div className="mt-6 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Section */}
        <div className="text-center lg:text-left space-y-8 slide-up">
          <div className="relative inline-block perspective-card">
            <div className="w-72 h-72 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-indigo-800/40 via-purple-900/30 to-black/50 border border-indigo-400/30 overflow-hidden shadow-2xl glass-effect morphing-shadow glow-effect">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                <img src="/profilepic.jpeg" alt="Abdul Raoof" className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-indigo-500/20 rounded-3xl" />
                <div className="absolute inset-0 border-2 border-indigo-400/20 rounded-3xl" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 bg-clip-text text-transparent tilt-hover">
              Abdul Raoof
            </h1>
            <p className="text-2xl text-indigo-200 font-light">
              Full Stack Developer
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-6 text-indigo-300">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg card-hover">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Kerala, India</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg card-hover">
                <Award className="w-4 h-4 text-purple-400" />
                <span>2+ Years Professional Experience</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-indigo-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Passionate about creating scalable, user-centric applications using cutting-edge technologies. 
            Experienced in leading teams and delivering high-impact solutions for enterprise clients.
          </p>
        </div>

        {/* Enhanced Stats and Expertise Section */}
        <div className="space-y-8 fade-in-scale" style={{ animationDelay: '0.3s' }}>
          {/* Single Stats Card */}
          <div ref={clientsCounter.elementRef} className="glass-effect rounded-3xl p-8 text-center hover:translate-y-2 hover:shadow-2xl transition-all duration-500 morphing-shadow glow-effect perspective-card border border-indigo-400/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Zap className="w-10 h-10 text-yellow-400" />
              <div className="text-6xl font-bold text-indigo-400">{clientsCounter.count}+</div>
            </div>
            <div className="text-xl text-indigo-300 font-medium">Successful Projects Delivered</div>
            <div className="text-sm text-indigo-400 mt-2">With 99% Client Satisfaction Rate</div>
          </div>

          {/* Enhanced Core Expertise */}
          <div className="glass-effect rounded-3xl p-8 hover:translate-y-2 hover:shadow-2xl transition-all duration-500 morphing-shadow glow-effect perspective-card border border-indigo-400/20">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-200 text-center">
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Frontend Development',
                'Backend APIs',
                'Database Design',
                'Cloud Solutions',
                'Mobile Development',
                'DevOps & CI/CD'
              ].map((spec, index) => (
                <div
                  key={spec} 
                  className="px-4 py-3 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/40 rounded-xl text-sm text-indigo-300 hover:scale-105 morphing-shadow transition-all duration-300 hover:translate-y-1 tilt-hover text-center font-medium"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {spec}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="glass-effect rounded-3xl p-8 hover:translate-y-2 hover:shadow-2xl transition-all duration-500 morphing-shadow glow-effect perspective-card border border-indigo-400/20">
            <h3 className="text-xl font-semibold mb-6 text-indigo-200 text-center">
              Get Started
            </h3>
            <div className="flex flex-col gap-4">
              <a 
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:translate-y-1 morphing-shadow glow-effect flex items-center justify-center gap-3 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
              </a>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-4 glass-effect rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:translate-y-1 morphing-shadow flex items-center justify-center gap-3 group border border-indigo-400/30 hover:border-indigo-300/60"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
