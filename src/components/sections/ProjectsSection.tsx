import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ExternalLink, Github, Zap, Star, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      title: "Albedo Educator",
      description: "A comprehensive educational platform with interactive learning modules, progress tracking, and real-time collaboration features.",
      image: "/Projects/Albedo Educator.png",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/Projects/Albedo Educator.png",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team chat, and project analytics.",
      image: "/Projects/Albedo Educator.png",
      tags: ["React Native", "Express", "Firebase", "Redux"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool with natural language processing and automated optimization.",
      image: "/Projects/Albedo Educator.png",
      tags: ["Python", "React", "OpenAI", "AWS"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        ref={elementRef}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, featuring modern web applications built with cutting-edge technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className="glass-morphism rounded-2xl overflow-hidden relative">
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                  >
                    <Star className="w-4 h-4" />
                    Featured
                  </motion.div>
                )}

                {/* Project Image */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demoUrl}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.codeUrl}
                      className="px-6 py-3 glass-morphism border border-white/20 text-white rounded-full font-semibold flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 glass-subtle rounded-lg text-sm text-slate-300 hover:text-white transition-colors duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/10 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 glass-morphism border border-blue-500/30 rounded-full font-semibold text-slate-300 hover:text-white hover:border-blue-400/50 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Zap className="w-5 h-5 text-blue-400" />
            View All Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;