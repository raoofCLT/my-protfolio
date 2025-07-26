
import { Code2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { elementRef, hasBeenVisible } = useIntersectionObserver({ threshold: 0.1 });

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
    <div className="min-h-screen bg-slate-950 text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A glimpse into what I've built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
