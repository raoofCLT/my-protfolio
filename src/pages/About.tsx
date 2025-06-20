
import { Award, Users, Code, Rocket, Target, Lightbulb, Trophy, Star, MapPin, Calendar, Heart } from 'lucide-react';
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
      description: "Leading development of enterprise-scale applications, mentoring junior developers, and architecting scalable solutions that serve millions of users.",
      achievements: ["Led team of 8 developers", "Improved performance by 40%", "Delivered 15+ major projects", "Implemented CI/CD pipelines"],
      color: "from-blue-600/20 to-indigo-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Full Stack Developer",
      company: "Digital Solutions Corp",
      period: "2020 - 2022",
      description: "Developed modern web applications using React, Node.js, and cloud technologies with focus on user experience and scalable architecture.",
      achievements: ["Built 20+ web applications", "Reduced loading time by 60%", "99.9% uptime achievement", "Mentored 5+ junior developers"],
      color: "from-purple-600/20 to-violet-600/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Created responsive web applications and implemented modern UI/UX designs for various client projects with focus on mobile-first approach.",
      achievements: ["Designed 10+ user interfaces", "Increased user engagement by 35%", "Mobile-first approach", "Cross-browser compatibility"],
      color: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-500/30"
    }
  ];

  const personalInfo = [
    { icon: <MapPin className="w-5 h-5" />, label: "Based in Kerala, India" },
    { icon: <Calendar className="w-5 h-5" />, label: "Available for remote work" },
    { icon: <Heart className="w-5 h-5" />, label: "Passionate about clean code" }
  ];

  const technicalSkills = [
    { 
      category: "Frontend Development", 
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"], 
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    { 
      category: "Backend Development", 
      skills: ["Node.js", "Python", "Express", "Django", "GraphQL", "REST APIs", "Microservices"], 
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    { 
      category: "Database & Cloud", 
      skills: ["MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "Firebase"], 
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30"
    },
    { 
      category: "Tools & Methodologies", 
      skills: ["Git", "VS Code", "Agile", "CI/CD", "Testing", "DevOps", "Linux"], 
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Enhanced Header with Personal Touch */}
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl mb-8">
            <Star className="w-12 h-12 text-indigo-400" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-slate-300 leading-relaxed">
              Passionate full-stack developer with over 6 years of experience creating innovative digital solutions 
              that drive business growth and enhance user experiences.
            </p>
            <div className="flex items-center justify-center gap-8 text-slate-400">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-2">
                  {info.icon}
                  <span className="text-sm">{info.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            <div ref={experienceCounter.elementRef} className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-blue-400 mb-2">{experienceCounter.count}+</div>
              <div className="text-slate-300 font-medium">Years Experience</div>
            </div>
            <div ref={projectsCounter.elementRef} className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-purple-400 mb-2">{projectsCounter.count}+</div>
              <div className="text-slate-300 font-medium">Projects Completed</div>
            </div>
            <div ref={clientsCounter.elementRef} className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-green-400 mb-2">{clientsCounter.count}+</div>
              <div className="text-slate-300 font-medium">Happy Clients</div>
            </div>
            <div ref={satisfactionCounter.elementRef} className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-yellow-400 mb-2">{satisfactionCounter.count}%</div>
              <div className="text-slate-300 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Enhanced Professional Experience */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-200 mb-4 flex items-center justify-center gap-3">
              <Trophy className="w-10 h-10 text-yellow-400" />
              Professional Journey
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A journey of continuous learning, innovation, and delivering exceptional results
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br ${exp.color} backdrop-blur-xl border ${exp.borderColor} rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-center gap-4 lg:min-w-0 lg:flex-shrink-0">
                    <div className="p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl text-indigo-400 border border-indigo-500/30">
                      {exp.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-indigo-300 font-medium">{exp.company}</p>
                      <p className="text-slate-400 text-sm">{exp.period}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-center gap-2 text-sm text-slate-300"
                        >
                          <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Technical Skills without Progress Bars */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-200 mb-4 flex items-center justify-center gap-3">
              <Lightbulb className="w-10 h-10 text-yellow-400" />
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Comprehensive skill set across modern technologies and development practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skillGroup, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${skillGroup.bgColor} backdrop-blur-xl border ${skillGroup.borderColor} rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center mb-6">
                  <h3 className={`text-2xl font-bold ${skillGroup.color} text-center`}>
                    {skillGroup.category}
                  </h3>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group bg-slate-800/30 border border-slate-600/30 rounded-xl p-4 text-center hover:border-slate-500/50 hover:bg-slate-700/40 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                        {skill}
                      </span>
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
