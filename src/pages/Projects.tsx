
import { Code2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { elementRef, hasBeenVisible } = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      title: "ALBEDO Educator Platform",
      year: "2025",
      description:
        "Frontend for a large-scale education platform used by 8,000+ users.",
      longDescription:
        "Designed and developed the complete frontend of Albedo Educator using React, Tailwind CSS, and Redux. Built 9 functional dashboards for operations like user management, batch scheduling, and payments. Ensured responsive UI and improved performance.",
      tech: ["React", "Tailwind CSS", "Redux"],
      metrics: [
        "👥 8,000+ Users",
        "📊 9 Dashboards",
        "⚡ Real-time UI"
      ],
      features: [
        "User and batch management",
        "Real-time notifications",
        "Modern, responsive UI",
        "Scalable frontend architecture"
      ],
      status: "Live",
      category: "Education Platform",
      image: "/Projects/Albedo Educator.png",
      liveUrl: "https://operations.albedoedu.com/"
    },
    {
      title: "Yara E-commerce Platform",
      year: "2024",
      description:
        "Online dress retail platform with authentication and payment integration.",
      longDescription:
        "Built a scalable e-commerce app using React, Node.js, and Express. Features include user auth, shopping cart, and payment gateway. Used MongoDB for database and followed best backend practices.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      metrics: [
        "🛒 E-commerce Ready",
        "💳 Payment Integration",
        "🛠️ Admin Controls",
        "🔐 Auth Enabled"
      ],
      features: [
        "User authentication",
        "Shopping cart system",
        "Payment integration",
        "Responsive UI",
        "Backend optimization"
      ],
      status: "Completed",
      category: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/raoofCLT/Yara-e-commerce-app"
    },
    {
      title: "StartupHub",
      year: "2024",
      description:
        "Community platform for startup profiles and investor connections.",
      longDescription:
        "A Next.js & TypeScript-based platform where users create startup profiles and connect with investors. Features include GitHub auth, real-time updates, and Sanity CMS for content.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "Sanity"],
      metrics: [
        "🧑‍💼 GitHub Auth",
        "📈 Real-time Updates",
        "🧰 CMS Powered"
      ],
      features: [
        "GitHub authentication with NextAuth.js",
        "Dynamic startup profile management",
        "Search & filtering features",
        "Real-time updates and content management"
      ],
      status: "Completed",
      category: "Community Platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/raoofCLT/Startup-Hub"
    },
    {
      title: "Libraria – E-Library Platform",
      year: "2024",
      description:
        "Digital library platform with book lending and admin features.",
      longDescription:
        "Built an e-library app using React, Chakra UI, and Node.js backend. Features include book borrowing for 15 days, due date tracking, secure auth with JWT, and admin panel for book/user management.",
      tech: ["React", "Chakra UI", "Recoil", "Node.js", "Express", "MongoDB", "JWT"],
      metrics: [
        "🚀 Live on Vercel",
        "👤 Auth with JWT",
        "📚 300+ Books",
      ],
      features: [
        "15-day book borrowing system",
        "Due date and overdue notifications",
        "Admin panel for book/user management",
        "Secure authentication"
      ],
      status: "Completed",
      category: "E-library",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/raoofCLT/Libraria-Client"
    },
    {
      title: "Chatzo Social Messaging",
      year: "2024",
      description:
        "Social platform for messaging, commenting, and engaging in real-time.",
      longDescription:
        "A real-time social app with messaging, post sharing, and engagement features. Ensures secure authentication and fosters a connected user community.",
      tech: ["React", "Node.js", "Socket.io", "JWT"],
      metrics: [
        "💬 Real-time Messaging",
        "🔐 JWT Authentication",
        "👥 Community Engagement"
      ],
      features: [
        "Real-time chat and posts",
        "User likes and comments",
        "Secure auth for communication"
      ],
      status: "Completed",
      category: "Social Media",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/raoofCLT/Chatzo"
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
