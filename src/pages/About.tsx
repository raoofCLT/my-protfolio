
import { Code, Database, Globe, Smartphone, Cloud, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      color: "text-blue-400"
    },
    {
      category: "Backend",
      icon: Database,
      technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
      color: "text-green-400"
    },
    {
      category: "Mobile",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      color: "text-purple-400"
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
      color: "text-orange-400"
    },
    {
      category: "Tools & Others",
      icon: Code,
      technologies: ["Git", "Figma", "MongoDB", "Redis", "GraphQL"],
      color: "text-indigo-400"
    },
    {
      category: "Soft Skills",
      icon: Users,
      technologies: ["Team Leadership", "Project Management", "Communication", "Problem Solving"],
      color: "text-pink-400"
    }
  ];

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices."
    },
    {
      role: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect implementations."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
            My journey in technology has been driven by curiosity and a desire to solve complex problems.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Personal Story */}
          <div className="glass-container rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">My Journey</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                My passion for technology started early, and I've been building digital experiences for over 2 years. 
                I specialize in creating scalable web applications using modern technologies like React, Node.js, and cloud platforms.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. 
                My approach combines technical expertise with creative problem-solving to deliver solutions that truly make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="glass-container rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">What Drives Me</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Innovation",
                  description: "Always exploring new technologies and pushing the boundaries of what's possible."
                },
                {
                  title: "Quality",
                  description: "Delivering clean, efficient, and maintainable code that stands the test of time."
                },
                {
                  title: "Collaboration",
                  description: "Working closely with teams to create solutions that exceed expectations."
                },
                {
                  title: "Growth",
                  description: "Continuously learning and helping others grow in their development journey."
                }
              ].map((value, index) => (
                <div key={index} className="glass-subtle rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-indigo-300 mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 glass-subtle rounded-xl flex items-center justify-center">
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-800/50 rounded-lg text-sm text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="glass-container rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-indigo-300 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
