
const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      links: [
        { label: 'Live Demo', href: '#' },
        { label: 'GitHub', href: '#' }
      ]
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning platform that provides predictive analytics and automated insights for business intelligence.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      links: [
        { label: 'Live Demo', href: '#' },
        { label: 'GitHub', href: '#' }
      ]
    },
    {
      title: 'Real-time Collaboration Tool',
      description: 'Slack-inspired communication platform with video conferencing, file sharing, and project management features.',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'WebRTC', 'Redis'],
      links: [
        { label: 'Live Demo', href: '#' },
        { label: 'GitHub', href: '#' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 max-w-6xl mx-auto relative scroll-reveal">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-[-1]" />
      
      <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transform transition-transform duration-300 hover:perspective-1000 hover:rotateX-2">
        Featured Projects
      </h2>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-[25px] p-10 relative overflow-hidden border border-white/10 transform transition-all duration-400 hover:perspective-1000 hover:rotateX-1 hover:rotateY-1 hover:translateZ-5 hover:shadow-2xl hover:shadow-white/10 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-gray-600 before:via-gray-400 before:to-gray-600 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
          >
            <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-white/10 px-4 py-2 rounded-2xl text-sm text-gray-300 border border-white/20 transition-all duration-300 transform hover:perspective-1000 hover:rotateX-2 hover:-translate-y-1 hover:bg-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl font-semibold transition-all duration-300 border border-white/20 transform hover:perspective-1000 hover:rotateX-2 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
