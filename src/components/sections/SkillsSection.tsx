import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const skillCategories = {
  Frontend: [
    'React', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'
  ],
  Backend: [
    "Node.js", "Express", "GraphQL", "REST APIs", "JWT", "Socket.io"
  ],
  'Database & Cloud': [
    'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS', 'Vercel'
  ],
  'Tools & Platforms': [
    'VS Code', 'Postman', 'Figma', 'Git', 'Vercel', 'CI/CD'
  ]
};

const categoryColors = {
  Frontend: 'from-gold to-gold-accent',
  Backend: 'from-gold-accent to-gold-soft',
  'Database & Cloud': 'from-gold-soft to-gold-highlight',
  'Tools & Platforms': 'from-gold-highlight to-gold'
};

export const SkillsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="relative min-h-screen flex items-center overflow-hidden px-4 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151515] via-[#0B0B0B] to-black" />

      {/* Subtle Gold Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -15, 15],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Technical
          <span className="text-gold-gradient"> Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-xl p-5 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}`} />
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                    {category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                      className="group/skill"
                    >
                      <div className="px-2.5 py-1.5 bg-secondary/50 rounded-lg border border-border hover:border-gold/30 transition-all duration-300 hover:scale-105">
                        <span className="text-muted-foreground text-sm group-hover/skill:text-foreground transition-colors duration-300">
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
          className="mt-10 text-center"
        >
          <p className="text-muted-subtle text-sm max-w-2xl mx-auto">
            Continuously learning and adapting to new technologies. Focus on creating scalable, 
            maintainable, and user-friendly applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
