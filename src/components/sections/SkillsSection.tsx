import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const skills = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Express', level: 85, category: 'Backend' },
  { name: 'MongoDB', level: 82, category: 'Database' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'AWS', level: 75, category: 'Cloud' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Redis', level: 75, category: 'Database' }
];

const categories = {
  Frontend: 'from-blue-400 to-cyan-400',
  Backend: 'from-green-400 to-emerald-400',
  Database: 'from-purple-400 to-pink-400',
  Cloud: 'from-orange-400 to-red-400',
  DevOps: 'from-indigo-400 to-purple-400',
  Tools: 'from-yellow-400 to-orange-400'
};

export const SkillsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="h-screen flex items-center bg-slate-900">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categories[skill.category as keyof typeof categories]} text-white`}>
                    {skill.category}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">{skill.level}%</span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${categories[skill.category as keyof typeof categories]} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    />
                  </div>
                  
                  {/* Glowing Dot */}
                  <motion.div
                    className={`absolute top-1/2 w-3 h-3 bg-gradient-to-r ${categories[skill.category as keyof typeof categories]} rounded-full transform -translate-y-1/2 shadow-lg`}
                    initial={{ left: "0%" }}
                    animate={isInView ? { left: `${skill.level}%` } : { left: "0%" }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    style={{ marginLeft: "-6px" }}
                  />
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