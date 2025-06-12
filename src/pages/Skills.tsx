
import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Smartphone, Award, Users, Clock, Coffee } from 'lucide-react';

const Skills = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    clients: 0,
    experience: 0
  });

  // Animated counter hook
  useEffect(() => {
    const targets = {
      projects: 15,
      technologies: 20,
      clients: 50,
      experience: 2
    };

    const animateCounter = (key: keyof typeof targets, target: number) => {
      let current = 0;
      const increment = target / 50; // 50 steps for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    // Start animations with delays
    setTimeout(() => animateCounter('projects', 15), 500);
    setTimeout(() => animateCounter('technologies', 20), 700);
    setTimeout(() => animateCounter('clients', 50), 900);
    setTimeout(() => animateCounter('experience', 2), 1100);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Backend Development", 
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "FastAPI"],
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "DevOps & Tools",
      icon: <Code className="w-8 h-8" />,
      skills: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes"],
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6 tilt-hover">
            Skills & Expertise
          </h2>
          <p className="text-xl text-teal-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skills across modern development stack
          </p>
        </div>

        {/* Technical Expertise Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-slate-200">Technical Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="enhanced-card-hover glass-effect rounded-xl p-6 morphing-shadow glow-effect perspective-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-200 mb-4 group-hover:text-emerald-100 transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-teal-900/30 text-teal-300 text-sm rounded-md border border-teal-700/30 enhanced-card-hover"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: `${counters.projects}+`, icon: Award },
            { label: "Happy Clients", value: `${counters.clients}+`, icon: Users },
            { label: "Technologies", value: `${counters.technologies}+`, icon: Code },
            { label: "Years Experience", value: `${counters.experience}+`, icon: Clock }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center enhanced-card-hover glass-effect rounded-xl p-6 morphing-shadow glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-emerald-200 mb-1">{stat.value}</div>
              <div className="text-sm text-teal-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
