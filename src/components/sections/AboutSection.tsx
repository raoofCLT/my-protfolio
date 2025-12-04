import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B0B0B] to-[#151515]" />

      {/* Subtle Gold Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/15 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -15, 15],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-accent p-0.5"
              >
                <div className="w-full h-full rounded-full bg-[#0B0B0B]" />
              </motion.div>

              <motion.img
                src="/profilepic.jpeg"
                alt="Abdul Raoof"
                className="relative z-10 w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-secondary"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 -right-8 w-16 h-16 bg-gold/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-8 -left-8 w-12 h-12 bg-gold/10 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About
              <span className="text-gold-gradient"> Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                I'm a frontend-focused Full Stack Developer passionate about
                building responsive, high-performance web and mobile
                applications. I specialize in React, Next.js, Tailwind CSS, and
                React Native — delivering smooth user experiences across
                platforms.
              </p>

              <p>
                While my core expertise lies in frontend development, I also
                have solid backend knowledge with Node.js and Express. In my
                current company project, I collaborate closely with a backend
                developer — handling all frontend responsibilities and ensuring
                seamless integration with the backend APIs.
              </p>

              <p>
                I'm always eager to explore new technologies, improve
                performance, and create smooth digital experiences that make a
                real impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {[
                "Problem Solving",
                "Team Collaboration",
                "Continuous Learning",
                "Innovation",
              ].map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 bg-secondary border border-gold/10 rounded-full text-muted-foreground text-sm hover:border-gold/30 hover:text-gold transition-all duration-300"
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
