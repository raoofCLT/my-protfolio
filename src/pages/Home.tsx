
import { ArrowRight, Download, MapPin, Calendar, Star, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-4">
        {/* Enhanced 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl floating perspective-card" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl floating-reverse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-600/5 rounded-full blur-2xl floating-slow" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-indigo-600/8 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left space-y-8 slide-up">
            <div className="relative inline-block perspective-card">
              <div className="w-56 h-56 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 overflow-hidden shadow-2xl card-3d glass-effect morphing-shadow glow-effect">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center relative depth-layer">
                  <img src="/profilepic.jpeg" alt="Abdul Raoof" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold gradient-text animate-pulse tilt-hover">
                Abdul Raoof
              </h1>
              <p className="text-2xl text-gray-300 font-light">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 text-gray-400">
                <div className="flex items-center gap-2 glass-effect glass-effect-hover px-4 py-2 rounded-lg card-3d">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Kerala, India</span>
                </div>
                <div className="flex items-center gap-2 glass-effect glass-effect-hover px-4 py-2 rounded-lg card-3d-reverse">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>+1 Years Experience</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Passionate about creating scalable, user-centric applications using cutting-edge technologies. 
              Experienced in leading teams and delivering high-impact solutions for enterprise clients.
            </p>

            {/* Action Buttons - Mobile Only */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:hidden">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl font-semibold transition-all duration-500 hover:scale-110 morphing-shadow glow-effect flex items-center gap-2 card-3d group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button>
              <Link 
                to="/projects"
                className="px-8 py-4 glass-effect glass-effect-hover rounded-2xl font-semibold transition-all duration-500 hover:scale-105 morphing-shadow flex items-center gap-2 card-3d-reverse group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Stats/Skills Preview */}
          <div className="space-y-6 fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-effect glass-effect-hover rounded-2xl p-6 text-center card-3d morphing-shadow glow-effect perspective-card">
                <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-400">Projects Completed</div>
                <Star className="w-6 h-6 text-yellow-400 mx-auto mt-2" />
              </div>
              <div className="glass-effect glass-effect-hover rounded-2xl p-6 text-center card-3d-reverse morphing-shadow glow-effect perspective-card">
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-400">Technologies</div>
                <Award className="w-6 h-6 text-green-400 mx-auto mt-2" />
              </div>
            </div>

            <div className="glass-effect glass-effect-hover rounded-2xl p-6 card-3d morphing-shadow glow-effect perspective-card">
              <h3 className="text-xl font-semibold mb-4 text-gray-200 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:scale-110 morphing-shadow transition-all duration-300 card-3d tilt-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons - Desktop Only */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl font-semibold transition-all duration-500 hover:scale-110 morphing-shadow glow-effect flex items-center gap-2 card-3d group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button>
              <Link 
                to="/projects"
                className="px-8 py-4 glass-effect glass-effect-hover rounded-2xl font-semibold transition-all duration-500 hover:scale-105 morphing-shadow flex items-center gap-2 card-3d-reverse group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
