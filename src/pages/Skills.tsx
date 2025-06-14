
import { Code, Database, Globe, Palette, Users, Zap, Trophy, Target } from 'lucide-react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const Skills = () => {
  const projectsCounter = useAnimatedCounter({ target: 15 });
  const technologiesCounter = useAnimatedCounter({ target: 20 });
  const clientsCounter = useAnimatedCounter({ target: 50 });
  const experienceCounter = useAnimatedCounter({ target: 2 });

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
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive technical skills and proven track record in modern web development technologies
          </p>
        </div>

        {/* Stats Section with Animated Counters */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            <div ref={projectsCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-5xl font-black text-blue-400 mb-3">{projectsCounter.count}+</div>
              <div className="text-slate-300 font-medium">Projects Completed</div>
            </div>
            <div ref={technologiesCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-green-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-5xl font-black text-green-400 mb-3">{technologiesCounter.count}+</div>
              <div className="text-slate-300 font-medium">Technologies Mastered</div>
            </div>
            <div ref={clientsCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-5xl font-black text-purple-400 mb-3">{clientsCounter.count}+</div>
              <div className="text-slate-300 font-medium">Happy Clients</div>
            </div>
            <div ref={experienceCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-5xl font-black text-orange-400 mb-3">{experienceCounter.count}+</div>
              <div className="text-slate-300 font-medium">Years Experience</div>
            </div>
          </div>
        </section>

        {/* Skills Categories */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-xl bg-gradient-to-br ${category.color} ${category.borderColor}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-blue-400 p-2 bg-blue-500/10 rounded-2xl">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-200 group-hover:text-white transition-colors">{category.title}</h3>
                  <span className="ml-auto px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-2xl text-sm text-green-300 font-semibold">
                    {category.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-500/30 rounded-2xl text-slate-300 hover:text-white hover:border-slate-400/50 transition-all duration-300 font-medium"
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
          <h2 className="text-5xl font-bold text-slate-200 mb-12 flex items-center justify-center gap-4">
            <Trophy className="w-12 h-12 text-yellow-400" />
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-yellow-400 p-3 bg-yellow-500/10 rounded-2xl group-hover:bg-yellow-500/20 transition-all duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">{achievement.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed font-light">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
