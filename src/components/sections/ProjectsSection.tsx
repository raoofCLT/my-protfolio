import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const projects = [
  {
    title: "Yara E-commerce",
    description: "Full-stack e-commerce platform with advanced features including user authentication, product catalog, shopping cart, and payment integration.",
    image: "/Projects/Yara E-commerce.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "StartupHub",
    description: "A comprehensive platform for startups to connect, collaborate, and showcase their innovative ideas with integrated networking features.",
    image: "/Projects/StartupHub.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Libraria",
    description: "Digital library management system with book tracking, user management, and advanced search capabilities for educational institutions.",
    image: "/Projects/Libraria.png",
    tech: ["React", "Firebase", "Material-UI", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Albedo Educator",
    description: "Educational platform designed to enhance learning experiences with interactive content, progress tracking, and collaborative features.",
    image: "/Projects/Albedo Educator.png",
    tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const ProjectsSection = () => {
  const { ref, isInView } = useScrollReveal();

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

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
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-slate-600 rounded-xl text-white font-medium hover:border-blue-400 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
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
          className="text-center mt-16"
        >
          <button className="px-8 py-4 border-2 border-slate-600 rounded-full text-white font-medium hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};