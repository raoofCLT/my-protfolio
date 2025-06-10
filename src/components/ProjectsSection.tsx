
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'Architected and led development of a scalable e-commerce platform serving 50k+ daily users. Implemented microservices architecture, real-time inventory management, and advanced analytics dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      metrics: ['99.9% uptime', '2.3s avg load time', '50k+ daily users'],
      links: [
        { label: 'Case Study', href: '#' },
        { label: 'Live Demo', href: '#' }
      ]
    },
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Built a machine learning platform providing predictive analytics and automated insights for business intelligence. Led a team of 4 developers using agile methodologies.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker', 'Kubernetes'],
      metrics: ['40% accuracy improvement', '60% faster insights', '15+ enterprise clients'],
      links: [
        { label: 'Technical Overview', href: '#' },
        { label: 'Documentation', href: '#' }
      ]
    },
    {
      title: 'Real-time Collaboration Suite',
      description: 'Developed a comprehensive collaboration platform with video conferencing, document sharing, and project management. Scaled to support 10k+ concurrent users.',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'WebRTC', 'Redis', 'Nginx'],
      metrics: ['10k+ concurrent users', '99.5% uptime', '4.8/5 user rating'],
      links: [
        { label: 'Architecture Details', href: '#' },
        { label: 'Performance Report', href: '#' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto relative scroll-reveal">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black z-[-1]" />
      
      <h2 className="text-4xl md:text-5xl font-light text-center mb-20 text-white tracking-tight">
        Featured Work
      </h2>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-800/30 border border-slate-700 rounded-sm p-8 md:p-12 transition-all duration-500 hover:border-slate-500 hover:bg-slate-800/50"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-slate-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-200 font-medium mb-3">Key Metrics</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="bg-slate-700/50 text-slate-200 px-4 py-2 rounded-sm text-sm border border-slate-600"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-slate-200 font-medium mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-900/80 text-slate-300 px-4 py-2 rounded-sm text-sm border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between">
                <div className="space-y-4">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block w-full px-6 py-3 text-center bg-white text-gray-900 font-medium rounded-sm transition-all duration-300 hover:bg-slate-100 hover:shadow-lg"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
