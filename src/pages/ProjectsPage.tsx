import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Folder } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { FloatingShapes } from '@/components/ui/FloatingShapes';

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
      <FloatingShapes />
      
      <section className="py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-10 sm:mb-12">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block h-[2px] bg-gradient-to-r from-gold-DEFAULT to-transparent mb-4"
              />
              <p className="text-[10px] font-medium text-gold-DEFAULT/80 tracking-[0.25em] uppercase mb-3">
                Portfolio
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Featured <span className="text-gold-gradient">Projects</span>
              </h1>
              <p className="text-sm sm:text-[15px] text-muted-foreground/80 max-w-lg">
                A collection of projects showcasing my expertise in full-stack development and modern web technologies.
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.div
                  className="group glass-card rounded-xl sm:rounded-2xl overflow-hidden h-full relative"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Gold border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,165,66,0.1), transparent, rgba(212,165,66,0.1))',
                      padding: '1px',
                    }}
                  />
                  
                  {/* Image */}
                  <div className="relative h-36 sm:h-40 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <motion.div 
                        className="absolute top-3 left-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="text-[9px] px-2.5 py-1 rounded-full bg-gold-DEFAULT/90 text-background font-semibold uppercase tracking-wider">
                          Featured
                        </span>
                      </motion.div>
                    )}
                    
                    {/* Quick actions on hover */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <motion.a
                        href={project.live}
                        className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-background transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={13} />
                      </motion.a>
                      <motion.a
                        href={project.code}
                        className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-background transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={13} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Folder className="w-4 h-4 text-gold-DEFAULT/50" />
                        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-gold-DEFAULT transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight 
                        className="w-4 h-4 text-muted-foreground/50 group-hover:text-gold-DEFAULT transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" 
                      />
                    </div>
                    <p className="text-xs sm:text-[13px] text-muted-foreground/70 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="tech-badge"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
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
              <motion.a
                href="https://github.com/abdulraoof"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-gold-DEFAULT transition-colors group"
                whileHover={{ y: -2 }}
              >
                <Github size={15} />
                <span>View more on GitHub</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};
