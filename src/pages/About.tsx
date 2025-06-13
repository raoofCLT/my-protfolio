
import { Award, Users, Code, Rocket, Target, Lightbulb, Trophy, Star } from 'lucide-react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const About = () => {
  const experienceCounter = useAnimatedCounter({ target: 6 });
  const projectsCounter = useAnimatedCounter({ target: 50 });
  const clientsCounter = useAnimatedCounter({ target: 25 });
  const satisfactionCounter = useAnimatedCounter({ target: 99 });

  const experiences = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale applications, mentoring junior developers, and architecting scalable solutions.",
      achievements: ["Led team of 8 developers", "Improved performance by 40%", "Delivered 15+ major projects"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Full Stack Developer",
      company: "Digital Solutions Corp",
      period: "2020 - 2022",
      description: "Developed modern web applications using React, Node.js, and cloud technologies with focus on user experience.",
      achievements: ["Built 20+ web applications", "Reduced loading time by 60%", "99.9% uptime achievement"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Created responsive web applications and implemented modern UI/UX designs for various client projects.",
      achievements: ["Designed 10+ user interfaces", "Increased user engagement by 35%", "Mobile-first approach"]
    }
  ];

  const skills = [
    { name: 'Frontend Development', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend Development', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'Database Design', level: 85, color: 'from-purple-500 to-violet-500' },
    { name: 'Cloud Architecture', level: 88, color: 'from-orange-500 to-red-500' },
    { name: 'DevOps & CI/CD', level: 82, color: 'from-pink-500 to-rose-500' },
    { name: 'Mobile Development', level: 78, color: 'from-indigo-500 to-blue-500' }
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Passionate full-stack developer with over 6 years of experience creating innovative digital solutions 
            that drive business growth and enhance user experiences.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            <div ref={experienceCounter.elementRef} className="text-center glass-effect rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-blue-400/20">
              <div className="text-5xl font-bold text-blue-400 mb-2">{experienceCounter.count}+</div>
              <div className="text-slate-300 font-medium">Years Experience</div>
            </div>
            <div ref={projectsCounter.elementRef} className="text-center glass-effect rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-purple-400/20">
              <div className="text-5xl font-bold text-purple-400 mb-2">{projectsCounter.count}+</div>
              <div className="text-slate-300 font-medium">Projects Completed</div>
            </div>
            <div ref={clientsCounter.elementRef} className="text-center glass-effect rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-green-400/20">
              <div className="text-5xl font-bold text-green-400 mb-2">{clientsCounter.count}+</div>
              <div className="text-slate-300 font-medium">Happy Clients</div>
            </div>
            <div ref={satisfactionCounter.elementRef} className="text-center glass-effect rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-yellow-400/20">
              <div className="text-5xl font-bold text-yellow-400 mb-2">{satisfactionCounter.count}%</div>
              <div className="text-slate-300 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-200 mb-4 flex items-center justify-center gap-3">
              <Trophy className="w-10 h-10 text-yellow-400" />
              Professional Experience
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A journey of continuous learning, innovation, and delivering exceptional results
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-effect rounded-3xl p-8 hover:transform hover:translateY-2 transition-all duration-500 border border-slate-600/30 hover:border-indigo-400/50">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-center gap-4 lg:min-w-0 lg:flex-shrink-0">
                    <div className="p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl text-indigo-400">
                      {exp.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-slate-200">{exp.title}</h3>
                      <p className="text-indigo-300 font-medium">{exp.company}</p>
                      <p className="text-slate-400 text-sm">{exp.period}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-lg text-sm"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-200 mb-4 flex items-center justify-center gap-3">
              <Star className="w-10 h-10 text-blue-400" />
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Mastery across the full development stack with continuous learning and adaptation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 hover:transform hover:translateY-1 transition-all duration-300 border border-slate-600/30">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-slate-200">{skill.name}</h3>
                  <span className="text-slate-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
