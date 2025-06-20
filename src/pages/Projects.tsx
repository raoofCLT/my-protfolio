
import { Code2, Users, Award } from 'lucide-react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectsCounter = useAnimatedCounter({ target: 15 });
  const clientsCounter = useAnimatedCounter({ target: 50 });
  const experienceCounter = useAnimatedCounter({ target: 2 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard. Built with modern technologies for optimal performance.',
      longDescription: 'A comprehensive e-commerce platform built for scalability and performance. Features include real-time inventory management, secure payment processing with Stripe, advanced analytics dashboard, and multi-vendor support. The platform handles 50k+ concurrent users with 99.9% uptime.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
      metrics: ['50k+ users', '99.9% uptime', '$2M+ processed'],
      category: 'Web Application',
      status: 'Live',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      features: [
        'Real-time inventory management',
        'Multi-vendor marketplace',
        'Advanced analytics dashboard',
        'Secure payment processing',
        'Mobile-responsive design',
        'SEO optimized'
      ]
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Machine learning powered analytics platform providing business insights and predictive analytics for enterprise clients.',
      longDescription: 'An advanced analytics platform that leverages machine learning to provide actionable business insights. Built with Python and TensorFlow for the ML backend, React for the frontend, and deployed on AWS for scalability.',
      tech: ['Python', 'React', 'TensorFlow', 'AWS', 'PostgreSQL', 'Docker'],
      metrics: ['40% accuracy boost', '15+ clients', '10TB+ data processed'],
      category: 'AI/ML Platform',
      status: 'Live',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      features: [
        'Predictive analytics engine',
        'Real-time data visualization',
        'Custom ML model training',
        'Automated report generation',
        'API integrations',
        'Enterprise security'
      ]
    },
    {
      title: 'Real-time Chat App',
      description: 'Scalable messaging platform with video calls, file sharing, and team collaboration features for modern workspaces.',
      longDescription: 'A modern communication platform designed for teams and businesses. Features real-time messaging, video conferencing, file sharing, and collaboration tools. Built with Next.js and Socket.io for real-time capabilities.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'WebRTC', 'Redis', 'Docker'],
      metrics: ['10k+ users', '99.5% uptime', '1M+ messages/day'],
      category: 'Communication Tool',
      status: 'Live',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      features: [
        'Real-time messaging',
        'Video conferencing',
        'File sharing & storage',
        'Team workspaces',
        'Mobile applications',
        'End-to-end encryption'
      ]
    },
    {
      title: 'Task Management System',
      description: 'Comprehensive project management tool with team collaboration, time tracking, and advanced reporting capabilities.',
      longDescription: 'A feature-rich project management platform that helps teams organize, track, and complete projects efficiently. Includes Kanban boards, Gantt charts, time tracking, and comprehensive reporting.',
      tech: ['Vue.js', 'Express', 'MySQL', 'Redis', 'Docker', 'AWS'],
      metrics: ['5k+ teams', '4.8★ rating', '100k+ tasks completed'],
      category: 'Productivity Tool',
      status: 'Live',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      features: [
        'Kanban & Gantt charts',
        'Time tracking',
        'Team collaboration',
        'Advanced reporting',
        'Mobile apps',
        'Third-party integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl mb-8">
            <Code2 className="w-12 h-12 text-indigo-400" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions and cutting-edge applications that demonstrate 
            expertise in modern web development and problem-solving
          </p>
        </div>

        {/* Animated Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div ref={projectsCounter.elementRef} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:border-indigo-400/50">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code2 className="w-8 h-8 text-blue-400" />
                <div className="text-5xl font-bold text-blue-400">{projectsCounter.count}+</div>
              </div>
              <div className="text-lg text-slate-300 font-medium">Projects Completed</div>
              <div className="text-sm text-slate-400 mt-2">Across Various Industries</div>
            </div>
            
            <div ref={clientsCounter.elementRef} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:border-purple-400/50">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8 text-purple-400" />
                <div className="text-5xl font-bold text-purple-400">{clientsCounter.count}+</div>
              </div>
              <div className="text-lg text-slate-300 font-medium">Happy Clients</div>
              <div className="text-sm text-slate-400 mt-2">99% Satisfaction Rate</div>
            </div>
            
            <div ref={experienceCounter.elementRef} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:border-green-400/50">
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
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
