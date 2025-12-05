import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const projects = [
  {
    title: 'Evoka',
    description: 'Modern event management platform',
    image: '/Projects/Evoka.png',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Libraria',
    description: 'Digital library management system',
    image: '/Projects/Libraria.png',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    title: 'StartupHub',
    description: 'Startup ecosystem platform',
    image: '/Projects/StartupHub.png',
    tech: ['React', 'Express', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Yara E-commerce',
    description: 'Full-featured online store',
    image: '/Projects/Yara E-commerce.png',
    tech: ['Next.js', 'Stripe', 'Prisma'],
    github: '#',
    live: '#',
  },
  {
    title: 'Albedo Educator',
    description: 'Educational learning platform',
    image: '/Projects/Albedo Educator.png',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    title: 'Calculator',
    description: 'Scientific calculator app',
    image: '/Projects/Calc.png',
    tech: ['JavaScript', 'CSS', 'HTML'],
    github: '#',
    live: '#',
  },
];

export const ProjectsPage = () => {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium text-gold-DEFAULT tracking-widest uppercase mb-2">
            My Work
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Featured <span className="text-gold-gradient">Projects</span>
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-card/50 border border-border/50 hover:border-gold-DEFAULT/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-gold-DEFAULT/10 text-gold-DEFAULT"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="p-1.5 rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-gold-DEFAULT hover:border-gold-DEFAULT/30 transition-colors"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={project.live}
                    className="p-1.5 rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-gold-DEFAULT hover:border-gold-DEFAULT/30 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Gold glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 gold-glow-sm rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
