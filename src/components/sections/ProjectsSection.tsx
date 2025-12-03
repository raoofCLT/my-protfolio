import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SparkleEffect } from '../animations/SparkleEffect';
import { FloatingParticles } from '../animations/FloatingParticles';
import { useState } from 'react';

const projects = [
  {
    title: "ALBEDO Educator Platform",
    year: "2024",
    description: "Frontend for a large-scale education platform used by 20,000+ users.",
    tech: ["React", "Python", "Tailwind CSS", "Redux"],
    metrics: ["👥 20,000+ Users", "📊 9 Dashboards", "⚡ Fast Load"],
    status: "Live",
    category: "Education",
    image: "/Projects/Albedo Educator.png",
    liveUrl: "https://operations.albedoedu.com/",
  },
  {
    title: "Evoka Communications",
    year: "2025",
    description: "Creative agency platform for managing clients, projects, and teams.",
    tech: ["React", "TypeScript", "Python", "Django", "PostgreSQL"],
    metrics: ["👥 Multi-role", "📂 Projects", "⏱️ Tracking"],
    status: "Live",
    category: "Agency",
    image: "/Projects/Evoka Communications.png",
    liveUrl: "https://communications.moajmalnk.in/",
  },
  {
    title: "Calc Analytics",
    year: "2025",
    description: "Data analytics platform for education data visualization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    metrics: ["📈 Visualize", "📄 Export", "⚡ Real-time"],
    status: "Live",
    category: "Analytics",
    image: "/Projects/Calc.png",
    liveUrl: "https://calc.albedoedu.com/",
  },
  {
    title: "Evoka School Platform",
    year: "2025",
    description: "Kerala's first advertising school management platform.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Python"],
    metrics: ["🎓 13000+ Users", "💳 Payments", "📚 Assignments"],
    status: "Live",
    category: "Education",
    image: "/Projects/Evoka.png",
    liveUrl: "https://evoka.moajmalnk.com/",
  },
  {
    title: "Yara E-commerce",
    year: "2024",
    description: "Online retail with authentication and payment integration.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    metrics: ["💳 Payments", "🛠️ Admin", "🔐 Auth"],
    status: "Completed",
    category: "E-commerce",
    image: "/Projects/Yara E-commerce.png",
    githubUrl: "https://github.com/raoofCLT/Yara-e-commerce-app",
  },
  {
    title: "StartupHub",
    year: "2024",
    description: "Community platform for startup profiles and investors.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    metrics: ["🧑‍💼 Profiles", "📈 Investors", "⚡ Real-time"],
    status: "Completed",
    category: "Community",
    image: "/Projects/StartupHub.png",
    githubUrl: "https://github.com/raoofCLT/Startup-Hub",
  },
  {
    title: "Libraria E-Library",
    year: "2024",
    description: "Digital library with book lending and admin features.",
    tech: ["React", "Chakra UI", "Node.js", "JWT"],
    metrics: ["🚀 Admin", "📅 Borrowing", "🔔 Alerts"],
    status: "Completed",
    category: "E-library",
    image: "/Projects/Libraria.png",
    githubUrl: "https://github.com/raoofCLT/Libraria-Client",
  },
  {
    title: "Chatzo Social",
    year: "2024",
    description: "Real-time social app for messaging and comments.",
    tech: ["React", "Node.js", "Socket.io", "JWT"],
    metrics: ["💬 Chat", "🔐 Auth", "👥 Community"],
    status: "Completed",
    category: "Social",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/raoofCLT/Chatzo",
  },
];

export const ProjectsSection = () => {
  const { ref, isInView } = useScrollReveal();
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" ref={ref} className="relative min-h-screen flex items-center overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      
      {/* Floating Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <FloatingParticles count={40} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <SparkleEffect count={10} />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 2, rotateX: 2 }}
              className="group relative h-full perspective-1000"
            >
              <div className="h-full bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-3xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-3xl" />
                
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium border border-green-400/30">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400">{project.status}</span>
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs border border-white/20">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-blue-900/80 to-transparent">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-300 rounded-lg text-xs">
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700/50 border border-slate-600/30 text-slate-300 rounded-lg text-xs hover:border-blue-400/50 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white text-sm font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    ) : (
                      <button disabled className="flex-1 px-4 py-2.5 bg-slate-700/50 rounded-xl text-slate-400 text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" />
                        No Demo
                      </button>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 border border-slate-600/50 rounded-xl text-white text-sm font-medium hover:border-blue-400/50 transition-all duration-300 flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    ) : (
                      <button disabled className="px-4 py-2.5 border border-slate-600/30 rounded-xl text-slate-400 text-sm font-medium flex items-center gap-2 cursor-not-allowed">
                        <Github className="w-4 h-4" />
                        Private
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-white font-medium hover:border-blue-400/50 transition-all duration-300"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
