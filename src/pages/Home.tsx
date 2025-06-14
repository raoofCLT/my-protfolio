
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
      {/* Enhanced Name Loading Animation */}
      {!nameAnimationComplete && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-gray-950 to-black flex items-center justify-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="text-center relative z-10">
            {/* Enhanced Name Typography */}
            <div className="relative">
              <h1 className="text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent animate-pulse mb-4">
                Abdul Raoof
              </h1>
              {/* Glowing effect behind text */}
              <div className="absolute inset-0 text-8xl lg:text-9xl font-black text-blue-400/20 blur-sm animate-pulse">
                Abdul Raoof
              </div>
            </div>
            
            {/* Animated subtitle */}
            <p className="text-xl lg:text-2xl text-slate-400 font-light mb-8 animate-pulse" style={{ animationDelay: '0.5s' }}>
              Full Stack Developer
            </p>
            
            {/* Enhanced loading indicator */}
            <div className="flex justify-center items-center gap-4">
              <div className="w-40 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Section */}
        <div className="text-center lg:text-left space-y-10">
          <div className="relative inline-block group">
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 p-2 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-br from-slate-800 to-slate-900">
                <img 
                  src="/profilepic.jpeg" 
                  alt="Abdul Raoof" 
                  className="w-full h-full object-cover rounded-full filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 rounded-full"></div>
                <div className="absolute inset-0 ring-2 ring-blue-400/30 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
                Abdul Raoof
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl -z-10 rounded-lg"></div>
            </div>
            
            <p className="text-2xl lg:text-3xl text-blue-300 font-light tracking-wide">
              Full Stack Developer
            </p>
            
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 text-slate-300">
              <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Kerala, India</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="font-medium">2+ Years Pro</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
            Passionate about creating scalable, user-centric applications using cutting-edge technologies. 
            Experienced in leading teams and delivering high-impact solutions.
          </p>
        </div>

        {/* Enhanced Stats and Expertise Section */}
        <div className="space-y-8">
          {/* Single Stats Card */}
          <div ref={clientsCounter.elementRef} className="bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-blue-400/30 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl">
                <Zap className="w-12 h-12 text-yellow-400" />
              </div>
              <div className="text-7xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {clientsCounter.count}+
              </div>
            </div>
            <div className="text-2xl text-blue-300 font-semibold mb-2">Successful Projects</div>
            <div className="text-slate-400">With 99% Client Satisfaction</div>
          </div>

          {/* Enhanced Core Expertise */}
          <div className="bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 shadow-2xl hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center font-semibold text-slate-200 hover:text-white transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                  <span className="relative z-10">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/20">
            <div className="flex flex-col gap-6">
              <button
                onClick={handleDownloadCV}
                className="group relative overflow-hidden bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-2xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                <Download className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download CV</span>
              </button>
              
              <a 
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
