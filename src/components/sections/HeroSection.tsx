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
    // Collect only the specific data you want in the email
    const deviceInfo = navigator.platform + " - " + navigator.userAgent;
    const userAgent = navigator.userAgent;
    const referrer = document.referrer;
    const platform = navigator.platform;
    const location = window.location.href;

    console.log("🚀 Starting CV download process...");
    console.log("📧 Attempting to send notification to backend...");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/download-cv",
        {
          name: "Anonymous", // You can collect this from a form if needed
          deviceInfo,
          userAgent,
          referrer,
          platform,
          location,
        }
      );

      console.log("✅ Notification sent successfully:", response.data);
    } catch (err) {
      console.error("❌ Failed to send download notification:", err);

      // More detailed error logging
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("📊 Server response error:", {
          status: err.response.status,
          data: err.response.data,
          headers: err.response.headers,
        });
      } else if (err.request) {
        // The request was made but no response was received
        console.error("🌐 Network error - no response received:", err.request);
        console.error(
          "💡 This usually means the backend server is not running on port 5000"
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("⚙️ Request setup error:", err.message);
      }
    }

    // Proceed with CV download regardless of notification success
    console.log("📄 Proceeding with CV download...");
    const link = document.createElement("a");
    link.href = "/Abdul Raoof.pdf";
    link.download = "Abdul_Raoof_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("✅ CV download initiated");
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 px-4 py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Abdul
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Raoof
            </span>
          </motion.h1>
        </motion.div>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
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
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={handleDownloadCV}
            className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-medium hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Download CV
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 border-2 border-slate-600 rounded-full text-white font-medium hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Contact Me
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12"
        >
          <p className="text-slate-400 text-center mb-6">Follow Me</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center hover:border-blue-400/50 hover:scale-110 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
