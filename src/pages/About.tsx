
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale applications, mentoring junior developers, and architecting scalable solutions."
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLab",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Created responsive user interfaces and improved user experience across multiple products."
    }
  ];

  const technologies = [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"] },
    { category: "Backend", skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"] },
    { category: "Database", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
    { category: "DevOps & Tools", skills: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Vercel"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 6+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-slate-200">Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
                  <span className="text-slate-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-purple-300 font-medium mb-2">{exp.company}</p>
                <p className="text-slate-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-slate-200">Technologies & Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((category, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-200 mb-4">{category.category}</h3>
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

        {/* Education & Certifications */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold text-slate-200">Education & Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-green-300">Education</h3>
              </div>
              <p className="text-slate-300 mb-2"><strong>Bachelor of Computer Science</strong></p>
              <p className="text-slate-400">University of California, Berkeley • 2015-2019</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-yellow-300">Certifications</h3>
              </div>
              <ul className="text-slate-300 space-y-1">
                <li>• AWS Certified Solutions Architect</li>
                <li>• Google Cloud Professional Developer</li>
                <li>• MongoDB Certified Developer</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
