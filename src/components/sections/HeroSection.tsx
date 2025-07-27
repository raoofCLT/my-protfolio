import { motion } from 'framer-motion';
import { Download, ArrowDown, Sparkles, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Abdul Raoof.pdf';
    link.download = 'Abdul_Raoof_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, -100, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-lg text-slate-400"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span>Hello, I'm</span>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl lg:text-8xl font-black leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Abdul
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Raoof
            </span>
          </motion.h1>

          {/* Title with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl lg:text-2xl text-slate-300 font-light"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, delay: 1.2 }}
              className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue-400"
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating digital experiences that blend innovative technology 
            with stunning design. I build scalable applications that users love.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center gap-3"
            >
              <Star className="w-5 h-5 group-hover:animate-spin" />
              See My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="group px-8 py-4 glass-morphism border border-slate-600 rounded-full font-semibold text-slate-300 hover:text-white hover:border-slate-400 transition-all duration-300 flex items-center gap-3"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Professional Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="absolute top-1/3 right-12 transform -translate-y-1/2 hidden lg:block"
          >
            <div className="professional-sphere">
              <div className="sphere-core"></div>
              <div className="sphere-outer"></div>
              <div className="sphere-glow"></div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-slate-400 cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;