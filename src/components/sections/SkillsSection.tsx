import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SparkleEffect } from '../animations/SparkleEffect';
import { FloatingParticles } from '../animations/FloatingParticles';

const skillCategories = {
  Frontend: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'React Native', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Redux', level: 85 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 85 },
    { name: 'GraphQL', level: 70 },
    { name: 'REST APIs', level: 90 },
    { name: 'Socket.io', level: 75 },
    { name: 'JWT', level: 85 },
  ],
  'Database & Cloud': [
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Firebase', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Vercel', level: 90 },
    { name: 'MySQL', level: 75 },
  ],
  'Tools': [
    { name: 'Git', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 80 },
    { name: 'Postman', level: 90 },
    { name: 'Docker', level: 65 },
    { name: 'CI/CD', level: 70 },
  ],
};

const categoryGradients = {
  Frontend: 'from-blue-400 to-cyan-400',
  Backend: 'from-green-400 to-emerald-400',
  'Database & Cloud': 'from-purple-400 to-pink-400',
  'Tools': 'from-orange-400 to-yellow-400',
};

export const SkillsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="relative min-h-screen flex items-center overflow-hidden px-4 py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      
      {/* Floating Blobs */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <FloatingParticles count={35} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <SparkleEffect count={8} />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="p-6 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryGradients[category as keyof typeof categoryGradients]}`} />
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.15 + skillIndex * 0.05, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${categoryGradients[category as keyof typeof categoryGradients]} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies. Always excited to explore 
            emerging tools and frameworks to deliver better solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
