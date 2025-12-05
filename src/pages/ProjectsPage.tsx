import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const projects = [
  {
    title: 'Evoka',
    description: 'AI-powered event management platform with smart scheduling.',
    image: '/Projects/Evoka.png',
    tech: ['React', 'Node.js', 'MongoDB', 'AI'],
    live: '#',
    code: '#',
  },
  {
    title: 'Libraria',
    description: 'Modern library management system with real-time tracking.',
    image: '/Projects/Libraria.png',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    live: '#',
    code: '#',
  },
  {
    title: 'StartupHub',
    description: 'Platform connecting startups with investors and mentors.',
    image: '/Projects/StartupHub.png',
    tech: ['React', 'Express', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    title: 'Yara E-commerce',
    description: 'Full-featured e-commerce platform with payment integration.',
    image: '/Projects/Yara E-commerce.png',
    tech: ['React', 'Node.js', 'Stripe'],
    live: '#',
    code: '#',
  },
  {
    title: 'Albedo Educator',
    description: 'Educational platform with interactive learning modules.',
    image: '/Projects/Albedo Educator.png',
    tech: ['React', 'Firebase', 'Tailwind'],
    live: '#',
    code: '#',
  },
  {
    title: 'Smart Calculator',
    description: 'Advanced calculator with scientific functions and history.',
    image: '/Projects/Calc.png',
    tech: ['React', 'TypeScript'],
    live: '#',
    code: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const ProjectsPage = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
              Portfolio
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured <span className="text-gold-gradient">Projects</span>
            </h1>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group glass-card rounded-xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-1 rounded-full bg-gold-DEFAULT/10 text-gold-DEFAULT border border-gold-DEFAULT/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold-DEFAULT transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.code}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold-DEFAULT transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};
