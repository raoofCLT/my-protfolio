
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Award, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Apps', 'Mobile Apps', 'E-commerce', 'SaaS'];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Comprehensive e-commerce solution with payment integration and analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Real-time updates", "Payment processing", "Mobile responsive"],
      metrics: { users: "10K+", rating: "4.8/5" },
      status: "Live",
      category: "E-commerce",
      image: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with team features and time tracking.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      features: ["Team collaboration", "Time tracking", "Real-time chat"],
      metrics: { teams: "500+", rating: "4.9/5" },
      status: "Live",
      category: "Web Apps",
      image: "/placeholder.svg"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts.",
      technologies: ["React", "TypeScript", "Weather API"],
      features: ["Location-based", "7-day forecast", "Weather alerts"],
      metrics: { users: "5K+", rating: "4.7/5" },
      status: "Live",
      category: "Web Apps",
      image: "/placeholder.svg"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication.",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      features: ["Biometric auth", "Real-time transactions", "Multi-currency"],
      metrics: { users: "25K+", rating: "4.9/5" },
      status: "Live",
      category: "Mobile Apps",
      image: "/placeholder.svg"
    },
    {
      title: "SaaS Analytics Platform",
      description: "Enterprise analytics platform with real-time insights and custom dashboards.",
      technologies: ["Vue.js", "Python", "FastAPI"],
      features: ["Real-time analytics", "Custom dashboards", "API integration"],
      metrics: { clients: "100+", rating: "4.8/5" },
      status: "Live",
      category: "SaaS",
      image: "/placeholder.svg"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-24 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6 tilt-hover">
            Featured Projects
          </h2>
          <p className="text-xl text-teal-200 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions and cutting-edge technologies through real-world applications
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 enhanced-card-hover morphing-shadow ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                  : 'glass-effect text-emerald-300 hover:text-emerald-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-effect rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-32 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-400/30">
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-400/30">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <button className="p-1.5 bg-black/40 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-black/60 transition-all duration-300">
                    <Github className="w-3 h-3 text-white" />
                  </button>
                  <button className="p-1.5 bg-black/40 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-black/60 transition-all duration-300">
                    <ExternalLink className="w-3 h-3 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-200 mb-1 group-hover:text-emerald-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-teal-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-emerald-400">{value}</div>
                      <div className="text-xs text-teal-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xs font-medium text-emerald-300 mb-2 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Features
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-0.5 bg-emerald-900/30 text-emerald-300 text-xs rounded-md border border-emerald-700/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-medium text-emerald-300 mb-2 flex items-center gap-1">
                    <Code className="w-3 h-3" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-teal-900/30 text-teal-300 text-xs rounded-md border border-teal-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-3 px-3 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-emerald-500 hover:to-teal-500 text-sm flex items-center justify-center gap-2 group">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
