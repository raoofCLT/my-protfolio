
import { ArrowRight, Download, MapPin, Calendar, Star, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl floating" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-600/5 rounded-full blur-2xl floating" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left space-y-8 slide-up">
            <div className="relative inline-block">
              <div className="w-56 h-56 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 overflow-hidden shadow-2xl card-3d glass-effect">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center relative">
                  <div className="text-7xl">👨‍💻</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-green-500 rounded-full border-4 border-black animate-pulse shadow-lg shadow-green-500/50" />
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold gradient-text animate-pulse">
                Alex Chen
              </h1>
              <p className="text-2xl text-gray-300 font-light">
                Senior Full Stack Developer
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 text-gray-400">
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>6+ Years Experience</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Passionate about creating scalable, user-centric applications using cutting-edge technologies. 
              Experienced in leading teams and delivering high-impact solutions for enterprise clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center gap-2 card-3d group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button>
              <Link 
                to="/projects"
                className="px-8 py-4 glass-effect rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-xl flex items-center gap-2 card-3d group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Stats/Skills Preview */}
          <div className="space-y-6 fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-effect rounded-2xl p-6 text-center card-3d hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
                <Star className="w-6 h-6 text-yellow-400 mx-auto mt-2" />
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center card-3d hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-400">Technologies</div>
                <Award className="w-6 h-6 text-green-400 mx-auto mt-2" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6 card-3d hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-semibold mb-4 text-gray-200 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:scale-110 hover:shadow-lg transition-all duration-300 card-3d">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🏆', label: 'Top Performer' },
                { icon: '⚡', label: 'Fast Delivery' },
                { icon: '🎯', label: 'Goal Oriented' }
              ].map((badge, index) => (
                <div key={index} className="glass-effect rounded-xl p-4 text-center card-3d hover:shadow-lg transition-all duration-500" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className="text-xs text-gray-400">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
