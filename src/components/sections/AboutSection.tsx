import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MapPin, Award, Code, Zap } from 'lucide-react';

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        ref={elementRef}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with a keen eye for creating digital experiences 
                that seamlessly blend functionality with aesthetic appeal. My journey in technology 
                started with curiosity and has evolved into a dedicated pursuit of crafting solutions 
                that make a real difference.
              </p>
              
              <p>
                With expertise spanning both frontend and backend technologies, I specialize in building 
                scalable applications using modern frameworks like React, Node.js, and cloud platforms. 
                My approach combines technical excellence with user-centered design principles.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous 
                learning and staying at the forefront of technological innovation.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-8">
              <div className="glass-card p-6 rounded-2xl text-center card-hover">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Code className="w-6 h-6 text-blue-400" />
                  <span className="text-3xl font-bold text-white">15+</span>
                </div>
                <p className="text-slate-400">Projects Completed</p>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center card-hover">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <span className="text-3xl font-bold text-white">2+</span>
                </div>
                <p className="text-slate-400">Years Experience</p>
              </div>
            </motion.div>

            {/* Location & Status */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Kerala, India</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">Available for Work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden glass-morphism border-2 border-blue-400/30">
                <img
                  src="/profilepic.jpeg"
                  alt="Abdul Raoof"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-blue-500/10"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25"
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;