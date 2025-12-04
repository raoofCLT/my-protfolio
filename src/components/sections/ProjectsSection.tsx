import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useState } from 'react';

const projects = [
  {
    title: "ALBEDO Educator Platform",
    year: "2024",
    description: "Frontend for a large-scale education platform used by 20,000+ users.",
    tech: ["React", "Tailwind CSS", "Redux"],
    metrics: ["20K+ Users", "9 Dashboards"],
    status: "Live",
    category: "Education",
    image: "/Projects/Albedo Educator.png",
    liveUrl: "https://operations.albedoedu.com/",
  },
  {
    title: "Calc (Data Analytics)",
    year: "2025",
    description: "Data analytics platform for education data export and visualization.",
    tech: ["React", "Tailwind CSS", "Redux"],
    metrics: ["Data Viz", "Export Reports"],
    status: "Live",
    category: "Analytics",
    image: "/Projects/Calc.png",
    liveUrl: "https://albedo-calc.vercel.app/",
  },
  {
    title: "Evoka School Platform",
    year: "2025",
    description: "Kerala's first advertising school platform for students and projects.",
    tech: ["React", "Tailwind CSS", "API"],
    metrics: ["13K+ Users", "Payments"],
    status: "Live",
    category: "Education",
    image: "/Projects/Evoka.png",
    liveUrl: "https://evokaschool.vercel.app/",
  },
  {
    title: "Yara E-commerce",
    year: "2024",
    description: "Online dress retail with user auth and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    metrics: ["Payments", "Admin Panel"],
    status: "Completed",
    category: "E-commerce",
    image: "/Projects/Yara E-commerce.png",
    githubUrl: "https://github.com/raoofCLT/Yara-e-commerce-app",
  },
  {
    title: "StartupHub",
    year: "2024",
    description: "Community platform for startup profiles and investor connections.",
    tech: ["Next.js", "TypeScript", "Sanity"],
    metrics: ["Profiles", "Real-time"],
    status: "Completed",
    category: "Community",
    image: "/Projects/StartupHub.png",
    githubUrl: "https://github.com/raoofCLT/Startup-Hub",
  },
  {
    title: "Libraria – E-Library",
    year: "2024",
    description: "Digital library with book lending and secure admin features.",
    tech: ["React", "Node.js", "JWT"],
    metrics: ["Borrowing", "Alerts"],
    status: "Completed",
    category: "E-library",
    image: "/Projects/Libraria.png",
    githubUrl: "https://github.com/raoofCLT/Libraria-Client",
  },
];

export const ProjectsSection = () => {
  const { ref, isInView } = useScrollReveal();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <section id="projects" ref={ref} className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B0B0B] to-[#151515]" />

      {/* Subtle Gold Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/15 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -15, 15],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Featured
          <span className="text-gold-gradient"> Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${showAllProjects}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    <span className="text-gold text-xs font-medium bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-gold/20">
                      {project.status}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 text-foreground text-xs bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-border">
                    {project.year}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      {project.liveUrl && project.status === 'Live' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-gold/80 backdrop-blur-md rounded-full flex items-center justify-center text-black hover:bg-gold transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-foreground/80 backdrop-blur-md rounded-full flex items-center justify-center text-black hover:bg-foreground transition-all duration-300 hover:scale-110"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="text-xs text-gold font-medium mb-1">
                    {project.category}
                  </div>
                  
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed flex-1 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="bg-gold/10 border border-gold/20 text-gold-accent px-2 py-0.5 rounded text-xs"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-secondary border border-border text-muted-foreground rounded text-xs hover:border-gold/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    {project.liveUrl && project.status === 'Live' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-gold to-gold-accent rounded-lg text-black font-medium text-center hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 text-xs flex items-center justify-center gap-1.5"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="flex-1 px-3 py-2 bg-secondary border border-border rounded-lg text-muted-foreground font-medium cursor-not-allowed text-xs flex items-center justify-center gap-1.5"
                      >
                        <ExternalLink className="w-3 h-3" />
                        No Demo
                      </button>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 border border-border rounded-lg text-foreground font-medium hover:border-gold/50 hover:text-gold transition-all duration-300 text-xs flex items-center gap-1.5"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="px-3 py-2 border border-border rounded-lg text-muted-foreground font-medium cursor-not-allowed text-xs flex items-center gap-1.5"
                      >
                        <Github className="w-3 h-3" />
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10"
        >
          <button 
            onClick={() => setShowAllProjects(prev => !prev)}
            className="px-6 py-2.5 border border-gold/30 rounded-full text-gold font-medium hover:border-gold hover:bg-gold/5 transition-all duration-300 hover:scale-105 text-sm"
          >
            {showAllProjects ? 'Show Less' : 'View All Projects'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
