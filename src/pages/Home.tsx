
import { ArrowRight, Download, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left space-y-8">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Alex Chen
              </h1>
              <p className="text-2xl text-slate-300 font-light">
                Senior Full Stack Developer
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>6+ Years Experience</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Passionate about creating scalable, user-centric applications using cutting-edge technologies. 
              Experienced in leading teams and delivering high-impact solutions for enterprise clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <Link 
                to="/projects"
                className="px-8 py-4 border border-slate-600 rounded-xl font-semibold transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/50 flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Stats/Skills Preview */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-slate-400">Projects Completed</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-slate-400">Technologies</div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-200">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg text-sm text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
