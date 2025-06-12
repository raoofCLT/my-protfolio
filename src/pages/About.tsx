import { Code, Briefcase, GraduationCap, Award, TrendingUp, Users, Globe, Zap } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale applications, mentoring junior developers, and architecting scalable solutions.",
      achievements: ["Increased system performance by 40%", "Led team of 5 developers", "Reduced deployment time by 60%"]
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLab",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications using React, Node.js, and cloud technologies.",
      achievements: ["Built 15+ production applications", "Improved user engagement by 35%", "Implemented CI/CD pipelines"]
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Created responsive user interfaces and improved user experience across multiple products.",
      achievements: ["Reduced page load time by 50%", "Increased conversion rate by 25%", "Launched 8 successful projects"]
    }
  ];

  const technologies = [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"], level: "Expert" },
    { category: "Backend", skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"], level: "Advanced" },
    { category: "Database", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"], level: "Advanced" },
    { category: "DevOps & Tools", skills: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Vercel"], level: "Intermediate" }
  ];

  const achievements = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Improved application performance by 40% through code optimization and caching strategies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Successfully led and mentored development teams of up to 5 developers"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Built applications serving 100k+ users across multiple countries"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Implemented cutting-edge technologies that reduced development time by 50%"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect - Professional",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer Associate",
    "Microsoft Azure Developer Associate",
    "Certified Kubernetes Administrator (CKA)"
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 6+ years of experience creating digital solutions 
            that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        {/* Key Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-400" />
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-400">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300">{achievement.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-slate-200">Professional Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
                  <span className="text-slate-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-purple-300 font-medium mb-2">{exp.company}</p>
                <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-400">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-green-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-slate-200">Technical Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((category, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-slate-200">{category.category}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg text-sm text-green-300">
                    {category.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg text-sm text-blue-300 hover:border-blue-400/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Core Values */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold text-slate-200">Education & Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="enhanced-card-hover glass-effect rounded-xl p-6 morphing-shadow glow-effect">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-green-300">Education</h3>
              </div>
              <p className="text-slate-300 mb-2"><strong>Bachelor of Computer Science</strong></p>
              <p className="text-slate-400 mb-4">University of Kerala • 2020-2024</p>
              <p className="text-sm text-slate-500">First Class with Distinction</p>
            </div>
            
            <div className="enhanced-card-hover glass-effect rounded-xl p-6 morphing-shadow glow-effect">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-yellow-300">Core Values</h3>
              </div>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  <span className="text-sm">Quality-driven development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  <span className="text-sm">Continuous learning mindset</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  <span className="text-sm">User-centric design approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  <span className="text-sm">Collaborative teamwork</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  <span className="text-sm">Innovation and creativity</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
