import { ExternalLink, Github, Code, Users, Clock, Award, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0
  });

  // Animated counter effect
  useEffect(() => {
    const animateCounter = (key: keyof typeof counters, target: number) => {
      let current = 0;
      const increment = target / 40;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    setTimeout(() => animateCounter('projects', 15), 500);
    setTimeout(() => animateCounter('technologies', 20), 700);
  }, []);

  const filters = ['All', 'Web Apps', 'Mobile Apps', 'E-commerce', 'SaaS'];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced features like real-time inventory, payment integration, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      features: ["Real-time updates", "Payment processing", "Admin dashboard", "Mobile responsive"],
      metrics: { users: "10K+", performance: "99.9%", rating: "4.8/5" },
      status: "Live",
      category: "E-commerce",
      image: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with team features, time tracking, and detailed reporting capabilities.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      features: ["Team collaboration", "Time tracking", "Real-time chat", "Progress analytics"],
      metrics: { teams: "500+", tasks: "50K+", rating: "4.9/5" },
      status: "Live",
      category: "Web Apps",
      image: "/placeholder.svg"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, historical data, and personalized notifications.",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
      features: ["Location-based", "7-day forecast", "Weather alerts", "Historical data"],
      metrics: { users: "5K+", accuracy: "95%", rating: "4.7/5" },
      status: "Live",
      category: "Web Apps",
      image: "/placeholder.svg"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication, real-time transactions, and financial insights.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      features: ["Biometric auth", "Real-time transactions", "Financial insights", "Multi-currency"],
      metrics: { users: "25K+", security: "100%", rating: "4.9/5" },
      status: "Live",
      category: "Mobile Apps",
      image: "/placeholder.svg"
    },
    {
      title: "SaaS Analytics Platform",
      description: "Enterprise analytics platform providing real-time insights, custom dashboards, and automated reporting.",
      technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      features: ["Real-time analytics", "Custom dashboards", "Automated reports", "API integration"],
      metrics: { clients: "100+", data: "1M+ events", rating: "4.8/5" },
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

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="enhanced-card-hover glass-effect rounded-2xl overflow-hidden morphing-shadow glow-effect perspective-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-400/30">
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-400/30">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button className="p-2 bg-black/40 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-black/60 transition-all duration-300 enhanced-card-hover">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/40 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-black/60 transition-all duration-300 enhanced-card-hover">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-teal-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-emerald-400">{value}</div>
                      <div className="text-xs text-teal-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium text-emerald-300 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-md border border-emerald-700/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-emerald-300 mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-teal-900/30 text-teal-300 text-xs rounded-md border border-teal-700/30 enhanced-card-hover"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-emerald-500 hover:to-teal-500 enhanced-card-hover morphing-shadow flex items-center justify-center gap-2 group">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: `${counters.projects}+`, icon: Award },
            { label: "Happy Clients", value: "50+", icon: Users },
            { label: "Technologies Used", value: `${counters.technologies}+`, icon: Code },
            { label: "Coffee Consumed", value: "∞", icon: Clock }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center enhanced-card-hover glass-effect rounded-xl p-6 morphing-shadow glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-emerald-200 mb-1">{stat.value}</div>
              <div className="text-sm text-teal-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
