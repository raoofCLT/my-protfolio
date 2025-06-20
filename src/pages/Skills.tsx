
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
      level: "Expert"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"],
      level: "Advanced"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker", "Kubernetes"],
      level: "Advanced"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools",
      skills: ["Figma", "Adobe XD", "Photoshop", "Git", "VS Code", "Linux"],
      level: "Intermediate"
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
            <div ref={projectsCounter.elementRef} className="glass-card rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl font-bold text-indigo-400 mb-2">{projectsCounter.count}+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div ref={technologiesCounter.elementRef} className="glass-card rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl font-bold text-indigo-400 mb-2">{technologiesCounter.count}+</div>
              <div className="text-slate-300">Technologies Mastered</div>
            </div>
            <div ref={clientsCounter.elementRef} className="glass-card rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl font-bold text-indigo-400 mb-2">{clientsCounter.count}+</div>
              <div className="text-slate-300">Happy Clients</div>
            </div>
            <div ref={experienceCounter.elementRef} className="glass-card rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl font-bold text-indigo-400 mb-2">{experienceCounter.count}+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
          </div>
        </section>

        {/* Skills Categories */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
                  <span className="ml-auto px-3 py-1 glass-subtle rounded-lg text-sm text-indigo-300">
                    {category.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 glass-subtle rounded-lg text-sm text-slate-300"
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
            <Trophy className="w-8 h-8 text-indigo-400" />
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-indigo-400">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-300">{achievement.title}</h3>
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
