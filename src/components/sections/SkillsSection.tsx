import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const skillCategories = {
  //  'React', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Chakra UI', 'HTML5', 'CSS3', 'JavaScript', 'Redux'
  Frontend: [
    'React', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'
  ],
  Backend: [
    "Node.js", "Express", "GraphQL", "REST APIs","JWT","Socket.io"
  ],
  'Database & Cloud': [
    'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS','Vercel'
  ],
  'Tools & Platforms' : [
    'VS Code', 'Postman', 'Figma', 'Git', 'Vercel', 'CI/CD'
  ]
};

const categoryColors = {
  Frontend: 'from-blue-400 to-cyan-400',
  Backend: 'from-green-400 to-emerald-400',
  'Database & Cloud': 'from-purple-400 to-pink-400',
  'Tools & Platforms' : 'from-yellow-400 to-orange-400'
};

export const SkillsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden px-4 py-20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -10, 10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2 
          className="text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Technical
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 max-w-5xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}`} />
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="group/skill"
                    >
                      <div className="px-3 py-2 bg-slate-700/30 rounded-lg border border-slate-600/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                        <span className="text-slate-300 text-sm font-medium group-hover/skill:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Continuously learning and adapting to new technologies. These skills represent my current expertise, 
            with a focus on creating scalable, maintainable, and user-friendly applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};