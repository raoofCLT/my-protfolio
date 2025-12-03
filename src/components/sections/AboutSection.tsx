import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden px-4 py-20"
    >
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
          {/* Profile Image - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
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

          {/* Text Content - Shows second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Me
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-slate-300 leading-relaxed"
            >
              <p className="text-lg">
                I'm a frontend-focused Full Stack Developer passionate about
                building responsive, high-performance web and mobile
                applications. I specialize in React, Next.js, Tailwind CSS, and
                React Native — delivering smooth user experiences across
                platforms.
              </p>

              <p className="text-lg">
                While my core expertise lies in frontend development, I also
                have solid backend knowledge with Node.js and Express. In my
                current company project, I collaborate closely with a backend
                developer — handling all frontend responsibilities and ensuring
                seamless integration with the backend APIs.
              </p>

              <p className="text-lg">
                I’m always eager to explore new technologies, improve
                performance, and create smooth digital experiences that make a
                real impact. Outside of coding, I enjoy contributing to
                projects, learning emerging tools, and collaborating with teams
                to bring ideas to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {[
                "Problem Solving",
                "Team Collaboration",
                "Continuous Learning",
                "Innovation",
              ].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-full text-slate-300 text-sm"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
