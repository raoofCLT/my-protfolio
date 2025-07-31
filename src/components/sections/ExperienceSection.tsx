import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    company: "Tech Solutions Inc",
    position: "Senior Frontend Developer",
    duration: "2022 - Present",
    location: "Remote",
    description: "Led frontend development team, built scalable React applications, and mentored junior developers.",
    achievements: [
      "Improved application performance by 40%",
      "Led migration to TypeScript",
      "Mentored 5+ junior developers"
    ]
  },
  {
    company: "Digital Innovations Ltd",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "New York, NY",
    description: "Developed end-to-end web applications using modern technologies and collaborated with cross-functional teams.",
    achievements: [
      "Built 15+ web applications",
      "Reduced loading time by 50%",
      "Implemented CI/CD pipelines"
    ]
  },
  {
    company: "StartupHub Co",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    location: "San Francisco, CA",
    description: "Focused on creating responsive user interfaces and optimizing user experience for startup clients.",
    achievements: [
      "Delivered 20+ client projects",
      "Increased user engagement by 35%",
      "Established design system"
    ]
  }
];

export const ExperienceSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Logo/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {experience.position}
                        </h3>
                        <h4 className="text-xl text-blue-400 font-semibold">
                          {experience.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col lg:text-right mt-2 lg:mt-0">
                        <div className="flex items-center text-slate-300 mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center text-slate-300">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (achIndex * 0.1) }}
                            className="flex items-start text-slate-300"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};