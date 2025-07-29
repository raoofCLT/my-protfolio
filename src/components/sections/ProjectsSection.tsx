import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useState } from 'react';

const projects = [
  {
    title: "ALBEDO Educator Platform",
    year: "2025",
    description:
      "Frontend for a large-scale education platform used by 8,000+ users.",
    longDescription:
      "Designed and developed the complete frontend of Albedo Educator using React, Tailwind CSS, and Redux. Built 9 functional dashboards for operations like user management, batch scheduling, and payments. Ensured responsive UI and improved performance.",
    tech: ["React", "Tailwind CSS", "Redux"],
    metrics: [
      "👥 8,000+ Users",
      "📊 9 Dashboards",
      "⚡ Real-time UI"
    ],
    features: [
      "User and batch management",
      "Real-time notifications",
      "Modern, responsive UI",
      "Scalable frontend architecture"
    ],
    status: "Live",
    category: "Education Platform",
    image: "/Projects/Albedo Educator.png",
    liveUrl: "https://operations.albedoedu.com/",
    featured: false
  },
  {
    title: "Yara E-commerce Platform",
    year: "2024",
    description:
      "Online dress retail platform with authentication and payment integration.",
    longDescription:
      "Built a scalable e-commerce app using React, Node.js, and Express. Features include user auth, shopping cart, and payment gateway. Used MongoDB for database and followed best backend practices.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    metrics: [
      // "🛒 E-commerce Ready",
      "💳 Payment Integration",
      "🛠️ Admin Controls",
      "🔐 Auth Enabled"
    ],
    features: [
      "User authentication",
      "Shopping cart system",
      "Payment integration",
      "Responsive UI",
      "Backend optimization"
    ],
    status: "Completed",
    category: "E-commerce",
    image: "/Projects/Yara E-commerce.png",
    githubUrl: "https://github.com/raoofCLT/Yara-e-commerce-app",
    featured: false
  },
  {
    title: "StartupHub",
    year: "2024",
    description:
      "Community platform for startup profiles and investor connections.",
    longDescription:
      "A Next.js & TypeScript-based platform where users create startup profiles and connect with investors. Features include GitHub auth, real-time updates, and Sanity CMS for content.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "Sanity"],
    metrics: [
      "🧑‍💼 GitHub Auth",
      "📈 Real-time Updates",
      "🧰 CMS Powered"
    ],
    features: [
      "GitHub authentication with NextAuth.js",
      "Dynamic startup profile management",
      "Search & filtering features",
      "Real-time updates and content management"
    ],
    status: "Completed",
    category: "Community Platform",
    image: "/Projects/StartupHub.png",
    githubUrl: "https://github.com/raoofCLT/Startup-Hub",
    featured: false
  },
  {
    title: "Libraria – E-Library Platform",
    year: "2024",
    description:
      "Digital library platform with book lending and admin features.",
    longDescription:
      "Built an e-library app using React, Chakra UI, and Node.js backend. Features include book borrowing for 15 days, due date tracking, secure auth with JWT, and admin panel for book/user management.",
    tech: ["React", "Chakra UI", "Recoil", "Node.js", "Express", "MongoDB", "JWT"],
    metrics: [
      "🚀 Live on Vercel",
      "👤 Auth with JWT",
      "📚 300+ Books",
    ],
    features: [
      "15-day book borrowing system",
      "Due date and overdue notifications",
      "Admin panel for book/user management",
      "Secure authentication"
    ],
    status: "Completed",
    category: "E-library",
    image: "/Projects/Libraria.png",
    githubUrl: "https://github.com/raoofCLT/Libraria-Client",
    featured: false
  },
  {
    title: "Chatzo Social Messaging",
    year: "2024",
    description:
      "Social platform for messaging, commenting, and engaging in real-time.",
    longDescription:
      "A real-time social app with messaging, post sharing, and engagement features. Ensures secure authentication and fosters a connected user community.",
    tech: ["React", "Node.js", "Socket.io", "JWT"],
    metrics: [
      "💬 Real-time Messaging",
      "🔐 JWT Authentication",
      "👥 Community Engagement"
    ],
    features: [
      "Real-time chat and posts",
      "User likes and comments",
      "Secure auth for communication"
    ],
    status: "Completed",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/raoofCLT/Chatzo",
    featured: false
  }
];

export const ProjectsSection = () => {
  const { ref, isInView } = useScrollReveal();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  const handleToggleProjects = () => {
    setShowAllProjects(prev => !prev);
  };

  return (
    <section id="projects" ref={ref} className="relative min-h-screen flex items-center bg-slate-900 py-20 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -12, 12],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2 
          className="text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Featured
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Projects</span>
        </motion.h2>

        {/* Debug indicator */}
        <div className="text-center text-white mb-4 text-sm">
          {showAllProjects ? 'Showing all projects' : 'Showing 4 projects'}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${showAllProjects}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative h-full"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30">
                      {project.status}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-white text-sm bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    <span>{project.year}</span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-20">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.liveUrl && project.status === 'Live' ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      ) : null}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-sm text-blue-400 font-medium mb-2">
                    {project.category}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-lg text-xs font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/30 text-slate-300 rounded-lg text-sm hover:border-blue-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    {project.liveUrl && project.status === 'Live' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 h-12"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="flex-1 px-6 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-slate-400 font-medium cursor-not-allowed h-12 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        No Demo
                      </button>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-2 border-slate-600 rounded-xl text-white font-medium hover:border-blue-400 transition-all duration-300 hover:scale-105 flex items-center gap-2 h-12"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="px-6 py-3 border-2 border-slate-600/30 rounded-xl text-slate-400 font-medium cursor-not-allowed h-12 flex items-center gap-2"
                      >
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

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 relative z-10"
        >
          <button 
            onClick={handleToggleProjects}
            className="px-8 py-4 border-2 border-slate-600 rounded-full text-white font-medium hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-105 inline-block cursor-pointer bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50"
            style={{ zIndex: 1000 }}
          >
            {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};