
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
      image: "/api/placeholder/500/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
      metrics: ["99.9% uptime", "50k+ daily users", "40% faster load time"],
      links: {
        demo: "#",
        github: "#"
      },
      featured: true
    },
    {
      title: "AI Analytics Dashboard",
      description: "Machine learning powered analytics platform providing real-time insights and predictive analytics for business intelligence.",
      image: "/api/placeholder/500/300",
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "D3.js"],
      metrics: ["95% accuracy", "10x faster insights", "Enterprise ready"],
      links: {
        demo: "#",
        github: "#"
      },
      featured: true
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable real-time messaging platform with file sharing, video calls, and team collaboration features.",
      image: "/api/placeholder/500/300",
      technologies: ["React", "Socket.io", "Node.js", "Redis", "WebRTC"],
      metrics: ["10k+ concurrent users", "Sub-second latency", "99.5% uptime"],
      links: {
        demo: "#",
        github: "#"
      },
      featured: false
    },
    {
      title: "Task Management System",
      description: "Comprehensive project management tool with kanban boards, time tracking, and team collaboration features.",
      image: "/api/placeholder/500/300",
      technologies: ["Vue.js", "Express", "PostgreSQL", "JWT", "Tailwind"],
      metrics: ["5k+ active users", "Mobile responsive", "Real-time sync"],
      links: {
        demo: "#",
        github: "#"
      },
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications, 
            innovative solutions, and cutting-edge technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-yellow-400" />
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="group glass-effect glass-effect-hover border border-slate-700 rounded-2xl overflow-hidden card-hover morphing-shadow glow-effect perspective-card">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Metrics</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, metricIndex) => (
                        <span key={metricIndex} className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-lg text-xs text-green-300 card-hover tilt-hover">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-lg text-xs text-slate-300 card-hover tilt-hover">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.links.demo} className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 card-hover flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a href={project.links.github} className="px-4 py-2 border border-slate-600 rounded-lg font-semibold transition-all duration-300 hover:border-slate-400 hover:bg-slate-700/50 card-hover flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <h2 className="text-3xl font-bold text-slate-200 mb-8">All Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="glass-effect glass-effect-hover border border-slate-700 rounded-xl p-6 card-hover morphing-shadow glow-effect perspective-card">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-blue-300">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded text-xs text-yellow-300 card-hover tilt-hover">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300 card-hover tilt-hover">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400 card-hover tilt-hover">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a href={project.links.demo} className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-sm card-hover">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a href={project.links.github} className="text-slate-400 hover:text-slate-300 transition-colors flex items-center gap-1 text-sm card-hover">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
