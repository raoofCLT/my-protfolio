import { ArrowRight, Download, MapPin, Award, Zap } from "lucide-react";
import axios from "axios";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { useState, useEffect } from "react";

const Home = () => {
  const clientsCounter = useAnimatedCounter({ target: 25 });
  const [showContent, setShowContent] = useState(false);
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);

  useEffect(() => {
    // Hide navbar during name animation
    const navbar = document.querySelector("nav");
    if (navbar) {
      navbar.style.opacity = "0";
      navbar.style.pointerEvents = "none";
    }

    // Show name animation first
    const nameTimer = setTimeout(() => {
      setNameAnimationComplete(true);
      // Show navbar after name animation
      if (navbar) {
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto";
        navbar.style.transition = "opacity 0.5s ease-in-out";
      }
    }, 2000);

    // Show rest of content after name animation
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(contentTimer);
    };
  }, []);

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

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-24 pb-4 z-10">
      {/* Enhanced Name Loading Animation */}
      {!nameAnimationComplete && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-gray-950 to-black flex items-center justify-center overflow-hidden">
          <div className="text-center relative z-10">
            {/* Enhanced Name Typography */}
            <div className="relative">
              <h1 className="text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent animate-pulse mb-4">
                Abdul Raoof
              </h1>
              {/* Glowing effect behind text */}
              <div className="absolute inset-0 text-8xl lg:text-9xl font-black text-blue-400/20 blur-sm animate-pulse">
                Abdul Raoof
              </div>
            </div>

            {/* Animated subtitle */}
            <p
              className="text-xl lg:text-2xl text-slate-400 font-light mb-8 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              Full Stack Developer
            </p>

            {/* Enhanced loading indicator */}
            <div className="flex justify-center items-center gap-4">
              <div className="w-40 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Profile Section */}
        <div className="text-center lg:text-left space-y-8 slide-up">
          <div className="relative inline-block perspective-card">
            <div className="w-72 h-72 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-indigo-800/40 via-purple-900/30 to-black/50 border border-indigo-400/30 overflow-hidden shadow-2xl glass-effect morphing-shadow glow-effect">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                <img
                  src="/profilepic.jpeg"
                  alt="Abdul Raoof"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-indigo-500/20 rounded-3xl" />
                <div className="absolute inset-0 border-2 border-indigo-400/20 rounded-3xl" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 bg-clip-text text-transparent tilt-hover">
              Abdul Raoof
            </h1>
            <p className="text-2xl text-indigo-200 font-light">
              Full Stack Developer
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-6 text-indigo-300">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg card-hover">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Kerala, India</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg card-hover">
                <Award className="w-4 h-4 text-purple-400" />
                <span>1+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* <p className="text-lg text-indigo-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Passionate about creating scalable, user-centric applications using cutting-edge technologies. 
            Experienced in leading teams and delivering high-impact solutions for enterprise clients.
          </p> */}
        </div>

        {/* 🚀 Refined Stats & Actions Section */}
        <div
          className="space-y-10 fade-in-scale"
          style={{ animationDelay: "0.3s" }}
        >
          {/* 🧠 Full Stack Expertise Card */}
          <div className="bg-slate-900/50 rounded-2xl p-8 text-center border border-slate-700 hover:scale-[1.02] transition-transform duration-500 backdrop-blur-md shadow-md">
            <div className="flex flex-col items-center gap-4 mb-4">
              <Award className="w-10 h-10 text-indigo-400" />
              <h2 className="text-3xl font-semibold text-slate-200">
                Full Stack Expertise
              </h2>
            </div>
            <p className="text-lg text-indigo-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A self-motivated developer with a passion for solving real-world
              problems through code. I thrive on continuous learning, building
              intuitive applications, and pushing boundaries with modern tools
              and technologies.
            </p>
          </div>

          {/* 🎯 Action Buttons */}
          <div className="bg-slate-900/50 rounded-2xl p-8 backdrop-blur-md border border-slate-700 shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={handleDownloadCV}
                className="group relative px-8 py-4 bg-slate-800 border border-indigo-500 rounded-2xl font-semibold text-indigo-200 hover:text-white transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
                aria-label="Download CV"
              >
                <Download className="w-5 h-5 text-indigo-400 group-hover:animate-bounce" />
                <span>Download CV</span>
                <div className="absolute inset-0 bg-indigo-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </button>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 rounded-2xl font-semibold text-white transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
                aria-label="View Projects"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
