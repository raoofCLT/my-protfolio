import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    company: "CODO AI Innovations",
    position: "Frontend Developer",
    duration: "Dec 2024 - Present",
    location: "Kerala, India",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQERydTRc7i5Pg/company-logo_200_200/company-logo_200_200/0/1732527011160/codo_ai_logo?e=1756944000&v=beta&t=d21-GsPDbU-l7t4AmuxcALr1EBS-iFGX1cyj6XU0BW4"
  },
  {
    company: "Freelance Projects",
    position: "Full Stack Developer",
    duration: "Oct 2024 - Present",
    location: "Remote"
    // no logo
  }
];

export const ExperienceSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements - Same as About */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Company Logo/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {experience.logo ? (
                        <img
                          src={experience.logo}
                          alt={experience.company + " Logo"}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <Building2 className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {experience.position}
                        </h3>
                        <h4 className="text-lg text-blue-400 font-semibold">
                          {experience.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col lg:text-right mt-4 lg:mt-0">
                        <div className="flex items-center text-slate-300 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center text-slate-300 text-sm">
                          <MapPin className="w-3 h-3 mr-2" />
                          {experience.location}
                        </div>
                      </div>
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