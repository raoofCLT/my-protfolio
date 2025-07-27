import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Code, Database, Globe, Wrench, Zap, Star } from 'lucide-react';

const SkillsSection = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Chakra UI", "Redux"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      skills: ["Node.js", "Express", "GraphQL", "REST APIs", "JWT", "Socket.io"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Firebase"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Platforms",
      skills: ["Figma", "Photoshop", "Git", "VS Code", "Vercel", "CI/CD"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        ref={elementRef}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skills and proven expertise in modern web development technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-morphism rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      custom={skillIndex}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg glass-subtle hover:glass-card transition-all duration-300 group/skill"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover/skill:shadow-lg group-hover/skill:shadow-blue-400/50"
                      ></motion.div>
                      <span className="text-slate-300 group-hover/skill:text-white transition-colors duration-300 font-medium">
                        {skill}
                      </span>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="ml-auto"
                      >
                        <Star className="w-4 h-4 text-yellow-400 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -top-4 -right-4 w-8 h-8 border border-blue-400/30 rounded-full opacity-20"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass-morphism border border-blue-500/30 rounded-full text-slate-300 hover:text-white hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="font-medium">See These Skills in Action</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;