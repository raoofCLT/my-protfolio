
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
      year: '2024'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Machine learning powered analytics platform providing business insights and predictive analytics for enterprise clients.',
      tech: ['Python', 'React', 'TensorFlow', 'AWS'],
      metrics: ['40% accuracy boost', '15+ clients'],
      category: 'AI/ML Platform',
      status: 'Live',
      year: '2023'
    },
    {
      title: 'Real-time Chat App',
      description: 'Scalable messaging platform with video calls, file sharing, and team collaboration features for modern workspaces.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'WebRTC'],
      metrics: ['10k+ users', '99.5% uptime'],
      category: 'Communication Tool',
      status: 'Live',
      year: '2023'
    },
    {
      title: 'Task Management System',
      description: 'Comprehensive project management tool with team collaboration, time tracking, and advanced reporting capabilities.',
      tech: ['Vue.js', 'Express', 'MySQL', 'Redis'],
      metrics: ['5k+ teams', '4.8★ rating'],
      category: 'Productivity Tool',
      status: 'Live',
      year: '2022'
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Excellence in Innovation",
      description: "Recognized for developing cutting-edge solutions that drive business growth"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Performance Leadership",
      description: "Consistently delivered 40%+ performance improvements across all projects"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Excellence",
      description: "Led cross-functional teams and mentored 10+ junior developers"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Technical Innovation",
      description: "Pioneered new development approaches reducing delivery time by 50%"
    }
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
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
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group enhanced-card-hover glass-effect rounded-3xl p-8 morphing-shadow glow-effect border border-slate-600/30 hover:border-indigo-400/50 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">{project.status}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                
                <div className="text-sm text-indigo-400 mb-4 font-medium">
                  {project.category}
                </div>

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
            ))}
          </div>
        </section>

        {/* Enhanced Professional Experience Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-200 mb-4 flex items-center justify-center gap-3">
              <Zap className="w-10 h-10 text-yellow-400" />
              Professional Experience
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Key achievements and recognitions throughout my development career
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="enhanced-card-hover glass-effect rounded-3xl p-8 morphing-shadow glow-effect border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl text-yellow-400">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-300">{achievement.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
