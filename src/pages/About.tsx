
import { Code, Briefcase, GraduationCap, Award, TrendingUp, Users, Globe, Zap, Star, Rocket } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale applications, mentoring junior developers, and architecting scalable solutions.",
      achievements: ["Increased system performance by 40%", "Led team of 5 developers", "Reduced deployment time by 60%"],
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=80&h=80&fit=crop&crop=center"
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLab",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications using React, Node.js, and cloud technologies.",
      achievements: ["Built 15+ production applications", "Improved user engagement by 35%", "Implemented CI/CD pipelines"],
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center"
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Created responsive user interfaces and improved user experience across multiple products.",
      achievements: ["Reduced page load time by 50%", "Increased conversion rate by 25%", "Launched 8 successful projects"],
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=80&h=80&fit=crop&crop=center"
    }
  ];

  const technologies = [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"], level: "Expert", color: "blue" },
    { category: "Backend", skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"], level: "Advanced", color: "green" },
    { category: "Database", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"], level: "Advanced", color: "purple" },
    { category: "DevOps & Tools", skills: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Vercel"], level: "Intermediate", color: "orange" }
  ];

  const achievements = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Improved application performance by 40% through code optimization and caching strategies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Successfully led and mentored development teams of up to 5 developers",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Built applications serving 100k+ users across multiple countries",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Implemented cutting-edge technologies that reduced development time by 50%",
      color: "from-yellow-500 to-orange-500"
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
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 6+ years of experience creating digital solutions 
            that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        {/* Enhanced About Me Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Profile Image */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-indigo-800/40 via-purple-900/30 to-black/50 border border-indigo-400/30 overflow-hidden shadow-2xl glass-effect morphing-shadow glow-effect">
                <img src="/profilepic.jpeg" alt="Abdul Raoof" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-indigo-500/20" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
            </div>
            
            {/* Enhanced About Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-indigo-200 flex items-center gap-3">
                  <Rocket className="w-10 h-10 text-blue-400" />
                  Building Digital Excellence
                </h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  With over 6 years of experience in full-stack development, I architect and deliver scalable solutions that drive business growth. My expertise spans modern web technologies, cloud infrastructure, and agile methodologies.
                </p>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  I focus on creating maintainable, performance-optimized applications while fostering collaborative team environments and continuous learning.
                </p>
              </div>
              
              {/* Personal Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-4 rounded-xl border border-blue-400/20">
                  <div className="text-2xl font-bold text-blue-400">25+</div>
                  <div className="text-sm text-slate-300">Projects Completed</div>
                </div>
                <div className="glass-effect p-4 rounded-xl border border-purple-400/20">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-sm text-slate-300">Happy Clients</div>
                </div>
                <div className="glass-effect p-4 rounded-xl border border-green-400/20">
                  <div className="text-2xl font-bold text-green-400">2+</div>
                  <div className="text-sm text-slate-300">Years Experience</div>
                </div>
                <div className="glass-effect p-4 rounded-xl border border-yellow-400/20">
                  <div className="text-2xl font-bold text-yellow-400">15+</div>
                  <div className="text-sm text-slate-300">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-200 mb-12 flex items-center justify-center gap-3">
            <Award className="w-10 h-10 text-yellow-400" />
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="enhanced-card-hover glass-effect rounded-3xl p-8 morphing-shadow glow-effect border border-slate-600/30 hover:border-slate-400/50 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className={`p-4 bg-gradient-to-br ${achievement.color}/20 rounded-2xl text-white flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">{achievement.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Professional Experience Section */}
        <section className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-slate-200">Professional Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="enhanced-card-hover glass-effect rounded-3xl p-8 morphing-shadow glow-effect border border-slate-600/30 hover:border-slate-400/50 transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <img 
                      src={exp.logo} 
                      alt={exp.company}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-500/30"
                    />
                  </div>
                  
                  {/* Experience Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-300 mb-1">{exp.title}</h3>
                        <p className="text-lg text-purple-300 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-slate-400 font-medium bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-600/30 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed mb-6">{exp.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg p-3">
                            <span className="text-sm text-green-300 font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Technologies Section */}
        <section className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl font-bold text-slate-200">Technical Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="enhanced-card-hover glass-effect rounded-3xl p-8 morphing-shadow glow-effect border border-slate-600/30 hover:border-slate-400/50 transition-all duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-slate-200">{category.category}</h3>
                  <span className={`px-4 py-2 bg-gradient-to-r from-${category.color}-600/20 to-${category.color}-500/20 border border-${category.color}-500/30 rounded-lg text-sm text-${category.color}-300 font-medium`}>
                    {category.level}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-4 py-3 bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-500/30 rounded-lg text-sm text-slate-300 hover:border-slate-400/50 transition-colors duration-300 text-center font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Core Values */}
        <section>
          <div className="flex items-center justify-center gap-3 mb-12">
            <GraduationCap className="w-10 h-10 text-green-400" />
            <h2 className="text-4xl font-bold text-slate-200">Education & Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="enhanced-card-hover glass-effect rounded-3xl p-8 morphing-shadow glow-effect border border-green-400/20 hover:border-green-400/40 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-semibold text-green-300">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-slate-200">Bachelor of Computer Science</p>
                  <p className="text-slate-400">University of Kerala • 2020-2024</p>
                  <p className="text-sm text-green-300 mt-2">First Class with Distinction</p>
                </div>
              </div>
            </div>
            
            <div className="enhanced-card-hover glass-effect rounded-3xl p-8 morphing-shadow glow-effect border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-semibold text-yellow-300">Core Values</h3>
              </div>
              <ul className="text-slate-300 space-y-3">
                {[
                  "Quality-driven development",
                  "Continuous learning mindset", 
                  "User-centric design approach",
                  "Collaborative teamwork",
                  "Innovation and creativity"
                ].map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-sm">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
