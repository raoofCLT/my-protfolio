
import { ExternalLink, Github, Calendar, Users, Award, Trophy, Target, Code2, Zap } from 'lucide-react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const Projects = () => {
  const projectsCounter = useAnimatedCounter({ target: 15 });
  const clientsCounter = useAnimatedCounter({ target: 50 });
  const experienceCounter = useAnimatedCounter({ target: 2 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard. Built with modern technologies for optimal performance.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: ['50k+ users', '99.9% uptime'],
      category: 'Web Application',
      status: 'Live',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Machine learning powered analytics platform providing business insights and predictive analytics for enterprise clients.',
      tech: ['Python', 'React', 'TensorFlow', 'AWS'],
      metrics: ['40% accuracy boost', '15+ clients'],
      category: 'AI/ML Platform',
      status: 'Live',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'Real-time Chat App',
      description: 'Scalable messaging platform with video calls, file sharing, and team collaboration features for modern workspaces.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'WebRTC'],
      metrics: ['10k+ users', '99.5% uptime'],
      category: 'Communication Tool',
      status: 'Live',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
      title: 'Task Management System',
      description: 'Comprehensive project management tool with team collaboration, time tracking, and advanced reporting capabilities.',
      tech: ['Vue.js', 'Express', 'MySQL', 'Redis'],
      metrics: ['5k+ teams', '4.8★ rating'],
      category: 'Productivity Tool',
      status: 'Live',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Excellence in Innovation",
      description: "Recognized for developing cutting-edge solutions that drive business growth and digital transformation"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Leadership",
      description: "Consistently delivered 40%+ performance improvements and reduced loading times across all projects"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Excellence",
      description: "Led cross-functional teams of 5-8 developers and mentored 15+ junior developers throughout career"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Technical Innovation",
      description: "Pioneered new development approaches and architectures reducing delivery time by 60%"
    }
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Showcasing innovative solutions and cutting-edge applications that demonstrate expertise in modern web development
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div ref={projectsCounter.elementRef} className="enhanced-card-hover glass-effect rounded-3xl p-8 text-center morphing-shadow glow-effect border border-blue-400/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code2 className="w-8 h-8 text-blue-400" />
                <div className="text-5xl font-bold text-blue-400">{projectsCounter.count}+</div>
              </div>
              <div className="text-lg text-slate-300 font-medium">Projects Completed</div>
              <div className="text-sm text-slate-400 mt-2">Across Various Industries</div>
            </div>
            
            <div ref={clientsCounter.elementRef} className="enhanced-card-hover glass-effect rounded-3xl p-8 text-center morphing-shadow glow-effect border border-purple-400/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8 text-purple-400" />
                <div className="text-5xl font-bold text-purple-400">{clientsCounter.count}+</div>
              </div>
              <div className="text-lg text-slate-300 font-medium">Happy Clients</div>
              <div className="text-sm text-slate-400 mt-2">99% Satisfaction Rate</div>
            </div>
            
            <div ref={experienceCounter.elementRef} className="enhanced-card-hover glass-effect rounded-3xl p-8 text-center morphing-shadow glow-effect border border-green-400/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8 text-green-400" />
                <div className="text-5xl font-bold text-green-400">{experienceCounter.count}+</div>
              </div>
              <div className="text-lg text-slate-300 font-medium">Years Experience</div>
              <div className="text-sm text-slate-400 mt-2">Professional Development</div>
            </div>
          </div>
        </section>

        {/* Enhanced Projects Grid */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group enhanced-card-hover glass-effect rounded-3xl overflow-hidden morphing-shadow glow-effect border border-slate-600/30 hover:border-indigo-400/50 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="text-sm text-indigo-400 mb-3 font-medium">
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-200 mb-4 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-slate-200 font-medium mb-3 text-sm">Key Metrics</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.metrics.map((metric, metricIndex) => (
                          <span
                            key={metricIndex}
                            className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-lg text-sm font-medium"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-slate-200 font-medium mb-3 text-sm">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-500/30 text-slate-300 px-3 py-1 rounded-lg text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-sm font-medium hover:scale-105 transition-transform">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 glass-effect border border-slate-500/30 rounded-xl text-sm font-medium hover:scale-105 transition-transform">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Professional Experience Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-slate-200 mb-4 flex items-center justify-center gap-3">
              <Zap className="w-12 h-12 text-yellow-400" />
              Professional Experience
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Key achievements and recognitions throughout my development career
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="enhanced-card-hover glass-effect rounded-3xl p-8 morphing-shadow glow-effect border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500">
                <div className="flex items-start gap-6 mb-4">
                  <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl text-yellow-400 flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-300 mb-3">{achievement.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                  </div>
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
