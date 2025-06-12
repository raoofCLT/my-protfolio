
import { ArrowRight, Download, MapPin, Calendar, Star, Award, Users, Coffee } from 'lucide-react';
import axios from 'axios';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const Home = () => {
  const clientsCounter = useAnimatedCounter({ target: 25 });
  const coffeeCounter = useAnimatedCounter({ target: 500 });

  const handleDownloadCV = async () => {
    // Get device info (simple example)
    const deviceInfo = navigator.platform + ' - ' + navigator.userAgent;
    
    try {
      await axios.post('http://localhost:5000/api/download-cv', {
        name: 'Anonymous',
        deviceInfo,
      });
    } catch (err) {
      // Optionally handle error
      console.error('Failed to send download notification:', err);
    }
    // Trigger download
    const link = document.createElement('a');
    link.href = '/Abdul Raoof.pdf';
    link.download = 'Abdul_Raoof_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-24 pb-4 z-10">
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Section */}
        <div className="text-center lg:text-left space-y-8 slide-up">
          <div className="relative inline-block perspective-card">
            <div className="w-64 h-64 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-indigo-800/40 via-purple-900/30 to-black/50 border border-indigo-400/30 overflow-hidden shadow-2xl glass-effect morphing-shadow glow-effect">
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
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>+1 Years Experience</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-indigo-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Passionate about creating scalable, user-centric applications using cutting-edge technologies. 
            Experienced in leading teams and delivering high-impact solutions for enterprise clients.
          </p>

          {/* Action Buttons - Mobile Only */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:hidden">
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 rounded-2xl font-semibold transition-all duration-500 hover:scale-110 hover:translate-y-1 morphing-shadow glow-effect flex items-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </button>
            <a 
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-4 glass-effect rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:translate-y-1 morphing-shadow flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats/Skills Preview */}
        <div className="space-y-6 fade-in-scale" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-2 gap-6">
            <div ref={clientsCounter.elementRef} className="glass-effect rounded-2xl p-6 text-center hover:translate-y-1 hover:shadow-lg transition-all morphing-shadow glow-effect perspective-card">
              <div className="text-4xl font-bold text-indigo-400 mb-2">{clientsCounter.count}+</div>
              <div className="text-indigo-300">Happy Clients</div>
              <Users className="w-6 h-6 text-green-400 mx-auto mt-2" />
            </div>
            <div ref={coffeeCounter.elementRef} className="glass-effect rounded-2xl p-6 text-center hover:translate-y-1 hover:shadow-lg transition-all morphing-shadow glow-effect perspective-card">
              <div className="text-4xl font-bold text-purple-400 mb-2">{coffeeCounter.count}+</div>
              <div className="text-indigo-300">Cups of Coffee</div>
              <Coffee className="w-6 h-6 text-yellow-400 mx-auto mt-2" />
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6 hover:translate-y-1 hover:shadow-lg transition-all morphing-shadow glow-effect perspective-card">
            <h3 className="text-xl font-semibold mb-4 text-indigo-200 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Specializations
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Full Stack Development', 'UI/UX Design', 'API Development', 'Database Design', 'Cloud Solutions', 'Mobile Apps'].map((spec, index) => (
                <span 
                  key={spec} 
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/40 rounded-full text-sm text-indigo-300 hover:scale-110 morphing-shadow transition-all duration-300 hover:translate-y-1 tilt-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons - Desktop Only */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 rounded-2xl font-semibold transition-all duration-500 hover:scale-110 hover:translate-y-1 morphing-shadow glow-effect flex items-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </button>
            <a 
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-4 glass-effect rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:translate-y-1 morphing-shadow flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
