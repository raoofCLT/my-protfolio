import axios from "axios";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin, Instagram, Facebook } from "lucide-react";

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

  const socialLinks = [
    { icon: Github, href: "https://github.com/raoofCLT", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/raoof-clt/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/raoof_clt/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/raoofCLT", label: "Facebook" }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B0B0B] to-[#151515]" />

      {/* Subtle Gold Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
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
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Abdul
            <span className="text-gold-gradient">
              {" "}Raoof
            </span>
          </motion.h1>
        </motion.div>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-lg text-muted-subtle mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A self-motivated developer with a passion for solving real-world
          problems through code. I thrive on continuous learning, building
          intuitive applications, and pushing boundaries with modern tools and
          technologies.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={handleDownloadCV}
            className="group px-6 py-3 bg-gradient-to-r from-gold to-gold-accent rounded-full text-black font-medium hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Download CV
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="group px-6 py-3 border border-gold/30 rounded-full text-gold font-medium hover:border-gold hover:bg-gold/5 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-6 py-3 border border-border rounded-full text-foreground font-medium hover:border-gold/50 hover:text-gold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Contact Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12"
        >
          <p className="text-muted-subtle text-center mb-4 text-sm">Follow Me</p>
          <div className="flex justify-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="w-10 h-10 bg-secondary border border-border rounded-full flex items-center justify-center hover:border-gold/50 hover:scale-110 transition-all duration-300 group"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-gold/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-2 bg-gold/50 rounded-full mt-1.5"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
