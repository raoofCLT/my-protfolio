import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management, secure payments, and admin dashboard.',
      stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      role: 'Lead Developer',
      outcome: '50k+ users, 99.9% uptime',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      year: '2024',
      featured: true
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Machine learning powered analytics platform providing business insights for enterprise clients.',
      stack: ['Python', 'React', 'TensorFlow', 'AWS'],
      role: 'Full Stack Developer',
      outcome: '15+ enterprise clients',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      year: '2023',
      featured: true
    },
    {
      title: 'Team Collaboration App',
      description: 'Real-time messaging and project management platform for distributed teams.',
      stack: ['Next.js', 'Socket.io', 'PostgreSQL'],
      role: 'Frontend Lead',
      outcome: '10k+ active users',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      year: '2023',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A selection of recent work showcasing my expertise in full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Calendar size={16} />
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.role}</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Stack: </span>
                    <span className="text-gray-600">{project.stack.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">Outcome: </span>
                    <span className="text-gray-600">{project.outcome}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {project.title}
                      </h4>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="text-xs text-gray-500">
                      {project.stack.join(' • ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to start your project?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's discuss how I can help bring your ideas to life
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
