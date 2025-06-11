
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: ["Real-time updates", "Payment integration", "Admin dashboard", "Mobile responsive"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { users: "10k+", performance: "99.9%", rating: "4.8/5" }
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with team chat, file sharing, and progress tracking capabilities.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      features: ["Team collaboration", "File sharing", "Progress tracking", "Real-time chat"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { users: "5k+", performance: "99.5%", rating: "4.9/5" }
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive business intelligence platform with interactive charts, data visualization, and reporting tools.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      features: ["Interactive charts", "Data export", "Custom reports", "API integration"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { users: "3k+", performance: "99.8%", rating: "4.7/5" }
    }
  ];

  return (
    <div className="min-h-screen py-24 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6 tilt-hover">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-3xl p-8 lg:p-12 card-hover morphing-shadow glow-effect perspective-card slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 glass-effect rounded-lg card-hover text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 glass-effect rounded-lg card-hover text-gray-400 hover:text-gray-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="glass-effect rounded-xl p-4 text-center card-hover">
                      <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Users</div>
                      <div className="text-lg font-bold text-white">{project.stats.users}</div>
                    </div>
                    <div className="glass-effect rounded-xl p-4 text-center card-hover">
                      <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Uptime</div>
                      <div className="text-lg font-bold text-white">{project.stats.performance}</div>
                    </div>
                    <div className="glass-effect rounded-xl p-4 text-center card-hover">
                      <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Rating</div>
                      <div className="text-lg font-bold text-white">{project.stats.rating}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300 card-hover"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden card-hover morphing-shadow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
