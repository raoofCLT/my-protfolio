
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

  const technicalSkills = [
    { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"], progress: 95, color: "from-blue-500 to-cyan-500" },
    { category: "Backend", skills: ["Node.js", "Python", "Express", "Django", "GraphQL"], progress: 90, color: "from-green-500 to-emerald-500" },
    { category: "Database", skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Firebase"], progress: 85, color: "from-purple-500 to-violet-500" },
    { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitLab CI"], progress: 88, color: "from-orange-500 to-red-500" },
    { category: "Mobile", skills: ["React Native", "Flutter", "Expo", "iOS", "Android"], progress: 78, color: "from-pink-500 to-rose-500" },
    { category: "Tools & Design", skills: ["Git", "Figma", "Adobe XD", "Webpack", "Vite"], progress: 82, color: "from-cyan-500 to-blue-500" }
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Passionate full-stack developer with over 6 years of experience creating innovative digital solutions 
            that drive business growth and enhance user experiences.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-4 gap-6">
            <div ref={experienceCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-6xl font-black text-blue-400 mb-3">{experienceCounter.count}+</div>
              <div className="text-slate-300 font-medium text-lg">Years Experience</div>
            </div>
            <div ref={projectsCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-6xl font-black text-purple-400 mb-3">{projectsCounter.count}+</div>
              <div className="text-slate-300 font-medium text-lg">Projects Completed</div>
            </div>
            <div ref={clientsCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-green-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-6xl font-black text-green-400 mb-3">{clientsCounter.count}+</div>
              <div className="text-slate-300 font-medium text-lg">Happy Clients</div>
            </div>
            <div ref={satisfactionCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-6xl font-black text-yellow-400 mb-3">{satisfactionCounter.count}%</div>
              <div className="text-slate-300 font-medium text-lg">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-200 mb-6 flex items-center justify-center gap-4">
              <Trophy className="w-12 h-12 text-yellow-400" />
              Professional Experience
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto font-light">
              A journey of continuous learning, innovation, and delivering exceptional results
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-indigo-400/40 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex items-center gap-6 lg:min-w-0 lg:flex-shrink-0">
                    <div className="p-5 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl border border-indigo-400/30 group-hover:border-indigo-400/50 transition-all duration-300">
                      <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                        {exp.icon}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold text-slate-200 group-hover:text-white transition-colors duration-300">{exp.title}</h3>
                      <p className="text-indigo-300 font-semibold text-lg">{exp.company}</p>
                      <p className="text-slate-400">{exp.period}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 leading-relaxed mb-6 text-lg font-light">{exp.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-2xl font-medium hover:border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-500/30 hover:via-purple-500/30 hover:to-indigo-500/30 transition-all duration-300"
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
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-200 mb-6 flex items-center justify-center gap-4">
              <Star className="w-12 h-12 text-blue-400" />
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto font-light">
              Comprehensive skill set across modern technologies and development practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skillGroup, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-200 mb-4">{skillGroup.category}</h3>
                  
                  {/* Progress Bar */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="rgb(51 65 85)"
                        strokeWidth="8"
                        className="opacity-20"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2.512 * skillGroup.progress} 251.2`}
                        className="transition-all duration-1000 ease-out"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" className={`bg-gradient-to-r ${skillGroup.color}`} stopColor="#3b82f6" />
                          <stop offset="100%" className={`bg-gradient-to-r ${skillGroup.color}`} stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {skillGroup.progress}%
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gradient-to-r from-slate-700/30 via-slate-600/30 to-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl px-4 py-3 text-center text-slate-300 hover:text-white hover:border-slate-500/50 transition-all duration-300 font-medium"
                    >
                      {skill}
                    </div>
                  ))}
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
