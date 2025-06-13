
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
    { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"], progress: 95, color: "text-blue-400" },
    { category: "Backend", skills: ["Node.js", "Python", "Express", "Django", "GraphQL"], progress: 90, color: "text-green-400" },
    { category: "Database", skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Firebase"], progress: 85, color: "text-purple-400" },
    { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitLab CI"], progress: 88, color: "text-orange-400" },
    { category: "Mobile", skills: ["React Native", "Flutter", "Expo", "iOS", "Android"], progress: 78, color: "text-pink-400" },
    { category: "Tools & Design", skills: ["Git", "Figma", "Adobe XD", "Webpack", "Vite"], progress: 82, color: "text-cyan-400" }
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
              <div key={index} className="glass-effect rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-all duration-500 border border-slate-600/30 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/20">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-center gap-4 lg:min-w-0 lg:flex-shrink-0">
                    <div className="p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl text-indigo-400 border border-indigo-500/30">
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
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-lg text-sm hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300"
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

        {/* Technical Expertise - New Design */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-200 mb-4 flex items-center justify-center gap-3">
              <Star className="w-10 h-10 text-blue-400" />
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Comprehensive skill set across modern technologies and development practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skillGroup, index) => (
              <div key={index} className="group">
                {/* Circular Progress Design */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgb(51 65 85)"
                      strokeWidth="8"
                      className="opacity-20"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2.512 * skillGroup.progress} 251.2`}
                      className={`${skillGroup.color} transition-all duration-1000 ease-out opacity-80 group-hover:opacity-100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-3xl font-bold ${skillGroup.color}`}>
                      {skillGroup.progress}%
                    </span>
                    <span className="text-slate-300 text-sm mt-1 text-center font-medium">
                      {skillGroup.category}
                    </span>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="text-center space-y-2">
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-600/30 rounded-full text-sm text-slate-300 hover:border-slate-500/50 hover:bg-slate-700/50 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
