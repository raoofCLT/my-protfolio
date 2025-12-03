import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SparkleEffect } from "../animations/SparkleEffect";
import { FloatingParticles } from "../animations/FloatingParticles";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const strengths = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Creative approaches to challenges" },
  { icon: Rocket, title: "Fast Learner", desc: "Adapting to new technologies quickly" },
  { icon: Users, title: "Team Player", desc: "Effective collaboration & communication" },
];

const education = [
  { year: "2024", title: "MERN Stack Development", institution: "Brototype" },
  { year: "2023", title: "B.Com Computer Applications", institution: "University of Calicut" },
];

export const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      
      {/* Floating Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <FloatingParticles count={30} />

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
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-3xl relative overflow-hidden group hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  Who I Am
                </h3>
                
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I'm a frontend-focused Full Stack Developer passionate about
                    building responsive, high-performance web and mobile
                    applications. I specialize in React, Next.js, Tailwind CSS, and
                    React Native.
                  </p>
                  <p>
                    While my core expertise lies in frontend development, I also
                    have solid backend knowledge with Node.js and Express. I collaborate
                    closely with teams, handling frontend responsibilities and ensuring
                    seamless integration with backend APIs.
                  </p>
                  <p>
                    I'm always eager to explore new technologies, improve
                    performance, and create smooth digital experiences that make a
                    real impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                      {index < education.length - 1 && (
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-400/50 to-transparent" />
                      )}
                    </div>
                    <div className="flex-1 p-4 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-xl hover:border-blue-400/30 transition-all duration-300 group-hover:translate-x-2">
                      <span className="text-sm text-blue-400 font-medium">{edu.year}</span>
                      <h4 className="text-white font-semibold mt-1">{edu.title}</h4>
                      <p className="text-slate-400 text-sm">{edu.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile + Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-72 h-72"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-1 bg-slate-900 rounded-3xl" />
                <img
                  src="/profilepic.jpeg"
                  alt="Abdul Raoof"
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-2xl object-cover"
                />
                <SparkleEffect count={6} />
              </motion.div>
            </div>

            {/* Strengths Grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">My Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {strengths.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="p-5 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl hover:border-blue-400/30 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
