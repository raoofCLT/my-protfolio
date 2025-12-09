import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const projects = [
  {
    title: 'Evoka',
    description: 'AI-powered event management platform with smart scheduling and real-time collaboration features.',
    image: '/Projects/Evoka.png',
    tech: ['React', 'Node.js', 'MongoDB', 'AI'],
    live: '#',
    code: '#',
    featured: true,
  },
  {
    title: 'Libraria',
    description: 'Modern library management system with real-time tracking and automated cataloging.',
    image: '/Projects/Libraria.png',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    live: '#',
    code: '#',
  },
  {
    title: 'StartupHub',
    description: 'Platform connecting startups with investors, mentors, and resources for growth.',
    image: '/Projects/StartupHub.png',
    tech: ['React', 'Express', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    title: 'Yara E-commerce',
    description: 'Full-featured e-commerce platform with payment integration and inventory management.',
    image: '/Projects/Yara E-commerce.png',
    tech: ['React', 'Node.js', 'Stripe'],
    live: '#',
    code: '#',
    featured: true,
  },
  {
    title: 'Albedo Educator',
    description: 'Educational platform with interactive learning modules and progress tracking.',
    image: '/Projects/Albedo Educator.png',
    tech: ['React', 'Firebase', 'Tailwind'],
    live: '#',
    code: '#',
  },
  {
    title: 'Smart Calculator',
    description: 'Advanced calculator with scientific functions, history, and theme customization.',
    image: '/Projects/Calc.png',
    tech: ['React', 'TypeScript'],
    live: '#',
    code: '#',
  },
];

export const ProjectsPage = () => {
  return (
    <PageLayout>
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-10 sm:mb-12">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block h-0.5 bg-gold-DEFAULT mb-4"
              />
              <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
                Portfolio
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Featured <span className="text-gold-gradient">Projects</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg">
                A collection of projects showcasing my expertise in full-stack development and modern web technologies.
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.div
                  className="group glass-card rounded-xl sm:rounded-2xl overflow-hidden h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative h-36 sm:h-44 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] px-2 py-1 rounded-full bg-gold-DEFAULT text-background font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gold-DEFAULT/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Quick actions on hover */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.a
                        href={project.live}
                        className="w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-background transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                      <motion.a
                        href={project.code}
                        className="w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-background transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={14} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-gold-DEFAULT transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight 
                        className="w-4 h-4 text-muted-foreground group-hover:text-gold-DEFAULT transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-1 rounded-full bg-gold-DEFAULT/10 text-gold-DEFAULT border border-gold-DEFAULT/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View More CTA */}
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10 sm:mt-12">
              <a
                href="https://github.com/abdulraoof"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold-DEFAULT transition-colors"
              >
                <Github size={16} />
                View more on GitHub
                <ArrowUpRight size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};
