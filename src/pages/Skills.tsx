
import { Code, Database, Globe, Palette, Users, Zap, Trophy, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Vue.js", "Angular", "Tailwind CSS"],
      level: "Expert",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"],
      level: "Advanced",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker", "Kubernetes"],
      level: "Advanced",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools",
      skills: ["Figma", "Adobe XD", "Photoshop", "Git", "VS Code", "Linux"],
      level: "Intermediate",
      color: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Award-Winning Projects",
      description: "Recognition for innovative solutions and exceptional user experience design"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Successfully led cross-functional teams and mentored junior developers"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Consistently delivered 40%+ performance improvements across projects"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Pioneered new development approaches that reduced delivery time by 50%"
    }
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skills and proven track record in modern web development technologies
          </p>
        </div>

        {/* Stats Section with Animated Counters */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="enhanced-card-hover glass-effect rounded-2xl p-6 text-center morphing-shadow glow-effect">
              <div className="text-4xl font-bold text-blue-400 mb-2">{counters.projects}+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="enhanced-card-hover glass-effect rounded-2xl p-6 text-center morphing-shadow glow-effect">
              <div className="text-4xl font-bold text-green-400 mb-2">{counters.technologies}+</div>
              <div className="text-slate-300">Technologies Mastered</div>
            </div>
            <div className="enhanced-card-hover glass-effect rounded-2xl p-6 text-center morphing-shadow glow-effect">
              <div className="text-4xl font-bold text-purple-400 mb-2">{counters.clients}+</div>
              <div className="text-slate-300">Happy Clients</div>
            </div>
            <div className="enhanced-card-hover glass-effect rounded-2xl p-6 text-center morphing-shadow glow-effect">
              <div className="text-4xl font-bold text-orange-400 mb-2">{counters.experience}+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
          </div>
        </section>

        {/* Skills Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <Code className="w-8 h-8 text-blue-400" />
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className={`enhanced-card-hover glass-effect rounded-2xl p-6 morphing-shadow glow-effect bg-gradient-to-br ${category.color} border ${category.borderColor}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
                  <span className="ml-auto px-3 py-1 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg text-sm text-green-300">
                    {category.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-500/30 rounded-lg text-sm text-slate-300 enhanced-card-hover"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-3xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-400" />
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="enhanced-card-hover glass-effect rounded-2xl p-6 morphing-shadow glow-effect">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-yellow-400">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-300">{achievement.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
