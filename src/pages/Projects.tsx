
import { useState } from 'react';
import { ExternalLink, Github, Calendar, Star, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      longDescription: "Built a comprehensive e-commerce platform using React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and real-time inventory tracking.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      category: "fullstack",
      featured: true,
      status: "Live",
      year: "2024",
      metrics: ["10k+ users", "99.9% uptime", "40% conversion rate"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and advanced filtering.",
      longDescription: "Developed a productivity application using React and Firebase. Features include drag-and-drop task boards, real-time collaboration, team management, file attachments, and comprehensive reporting.",
      image: "/placeholder.svg",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      category: "frontend",
      featured: true,
      status: "Live",
      year: "2023",
      metrics: ["5k+ active users", "98% satisfaction", "50% productivity boost"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      longDescription: "Created a comprehensive weather dashboard using React and third-party APIs. Features include current weather, 7-day forecasts, interactive maps, severe weather alerts, and location-based suggestions.",
      image: "/placeholder.svg",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      category: "frontend",
      featured: false,
      status: "Live",
      year: "2023",
      metrics: ["Real-time data", "Global coverage", "Mobile optimized"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "A scalable API gateway built with Node.js, featuring rate limiting, authentication, and request routing.",
      longDescription: "Designed and implemented a high-performance API gateway using Node.js and Express. Features include request routing, rate limiting, authentication middleware, logging, and comprehensive monitoring.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
      category: "backend",
      featured: false,
      status: "Live",
      year: "2023",
      metrics: ["1M+ requests/day", "99.99% uptime", "Sub-100ms latency"],
      github: "#",
      live: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications, frontend interfaces, 
            and backend services built with modern technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-project-card rounded-3xl overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">{project.status}</span>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">{project.year}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-lg text-xs font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="glass-subtle px-3 py-1 rounded-lg text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center justify-center gap-2 px-4 py-3 glass-morphism border border-slate-600/30 rounded-xl font-medium hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'glass-morphism border-indigo-400/50 text-indigo-300'
                    : 'glass-subtle text-slate-400 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-800/50 border border-slate-700/30 text-slate-300 px-2 py-1 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-slate-500 text-xs px-2 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center gap-2 px-3 py-2 glass-subtle rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-container rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center gap-3 mx-auto"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
