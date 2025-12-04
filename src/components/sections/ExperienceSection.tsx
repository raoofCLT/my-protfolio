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
  }
];

export const ExperienceSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151515] via-[#0B0B0B] to-black" />

      {/* Subtle glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          My <span className="text-gold-gradient">Experience</span>
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-xl p-5 hover:border-gold/30 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Company Logo/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {experience.logo ? (
                        <img
                          src={experience.logo}
                          alt={experience.company + " Logo"}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <Building2 className="w-5 h-5 text-black" />
                      )}
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-0.5">
                          {experience.position}
                        </h3>
                        <h4 className="text-gold font-medium text-sm">
                          {experience.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col sm:text-right mt-2 sm:mt-0">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-3 h-3 mr-1.5" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center text-muted-subtle text-xs mt-1">
                          <MapPin className="w-3 h-3 mr-1.5" />
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
