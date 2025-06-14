
import { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Calendar, Users, Award } from 'lucide-react';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className={`space-y-8 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Abdul Raoof
              </h1>
              <h2 className="text-2xl md:text-3xl text-indigo-300 font-light">
                Full Stack Developer
              </h2>
            </div>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies. 
              Passionate about creating scalable solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center justify-center gap-3"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group px-8 py-4 glass-morphism border border-slate-600/50 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:abdulraoof.k@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 glass-subtle rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-12 hidden lg:block">
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-1/3 left-12 hidden lg:block">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                number: "2+",
                label: "Years Experience",
                description: "Building digital solutions"
              },
              {
                icon: Users,
                number: "50+",
                label: "Projects Completed",
                description: "From concept to deployment"
              },
              {
                icon: Award,
                number: "99%",
                label: "Client Satisfaction",
                description: "Delivering quality results"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 glass-card rounded-2xl card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 glass-subtle rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-indigo-300 mb-2">{stat.label}</div>
                <div className="text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-container rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              About Me
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating efficient, scalable solutions and staying up-to-date with the latest industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["React", "Node.js", "TypeScript", "Python", "AWS"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass-subtle rounded-xl text-sm font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('#about')}
              className="group px-6 py-3 glass-morphism border border-indigo-400/50 rounded-xl font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Learn More About Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Location & Availability */}
      <section className="py-20 px-8">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 text-slate-300 mb-4">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span>Based in India</span>
            </div>
            <p className="text-lg text-white font-medium mb-2">
              Available for Remote Work
            </p>
            <p className="text-slate-400">
              Open to freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
