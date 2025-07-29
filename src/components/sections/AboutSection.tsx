import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="relative h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -15, 15],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-slate-300 leading-relaxed"
            >
              <p className="text-lg">
                I'm a passionate MERN Stack Developer with a strong foundation in modern web technologies. 
                I love creating seamless user experiences and robust backend solutions that solve real-world problems.
              </p>
              
              <p className="text-lg">
                With expertise in React, Node.js, MongoDB, and Express, I build scalable applications 
                that are both performant and maintainable. I'm always eager to learn new technologies 
                and best practices to stay at the forefront of web development.
              </p>

              <p className="text-lg">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in writing clean, efficient code 
                and creating digital experiences that make a difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-full text-slate-300 text-sm"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-900" />
              </motion.div>
              
              <motion.img
                src="/profilepic.jpeg"
                alt="Abdul Raoof"
                className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-slate-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-blue-500/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};