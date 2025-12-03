import axios from "axios";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin, Instagram, Facebook, Sparkles } from "lucide-react";
import { RotatingText } from "../animations/RotatingText";
import { SparkleEffect } from "../animations/SparkleEffect";
import { FloatingParticles } from "../animations/FloatingParticles";
import { AnimatedCounter } from "../animations/AnimatedCounter";

const rotatingTexts = [
  "Full-Stack Developer",
  "React & Node.js Specialist",
  "UI/UX Focused Thinker",
  "Building Digital Experiences",
  "Crafting Scalable Applications",
];

const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "+", label: "Happy Clients" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/raoofCLT", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/raoof-clt/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/raoof_clt/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/raoofCLT", label: "Facebook" }
];

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = async () => {
    const deviceInfo = navigator.platform + " - " + navigator.userAgent;
    const userAgent = navigator.userAgent;
    const referrer = document.referrer;
    const platform = navigator.platform;
    const location = window.location.href;

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/download-cv`,
        {
          name: "Anonymous",
          deviceInfo,
          userAgent,
          referrer,
          platform,
          location,
        }
      );
    } catch (err) {
      console.log(err);
    }

    const link = document.createElement("a");
    link.href = "/Abdul Raoof.pdf";
    link.download = "Abdul_Raoof_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      
      {/* Floating Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

      {/* Floating Particles */}
      <FloatingParticles count={50} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mx-auto w-40 h-40 mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-1 bg-slate-900 rounded-full" />
          <img
            src="/profilepic.jpeg"
            alt="Abdul Raoof"
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover border-2 border-slate-800"
          />
          <SparkleEffect count={6} />
        </motion.div>

        {/* Rotating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <RotatingText texts={rotatingTexts} className="text-sm font-medium" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <SparkleEffect count={10} />
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-4">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abdul Raoof
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A passionate developer crafting beautiful, scalable web applications 
          with modern technologies. Let's build something amazing together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            className="group px-8 py-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-white font-semibold hover:border-blue-400/50 hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-2"
          >
            Download CV
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 border-2 border-slate-600/50 rounded-2xl text-white font-semibold hover:border-purple-400/50 transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl flex items-center justify-center hover:border-blue-400/50 hover:bg-slate-800 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/20"
            >
              <social.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center cursor-pointer hover:border-blue-400 transition-colors duration-300"
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
