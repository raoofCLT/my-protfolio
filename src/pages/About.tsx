
import { Code, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend", 
      technologies: ["Node.js", "Python", "Express", "MongoDB"]
    },
    {
      category: "Tools",
      technologies: ["Git", "Docker", "AWS", "Figma"]
    }
  ];

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "2+ Years Experience",
      description: "Building modern web applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "25+ Projects",
      description: "Delivered across various industries"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "99% Client Satisfaction",
      description: "Consistent quality delivery"
    }
  ];

  return (
    <div className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About Me
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer who loves creating digital 
                experiences that make a difference.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                With over 2 years of professional experience, I specialize in building 
                scalable web applications using modern technologies. I enjoy working 
                with teams to solve complex problems and deliver high-quality solutions.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-gray-600 mb-3">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-gray-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Technical Skills
              </h3>
            </div>

            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-gray-900">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Interested in working together?
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
              >
                Get in touch →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
