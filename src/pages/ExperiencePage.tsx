import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FloatingShapes } from '@/components/ui/FloatingShapes';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    achievements: ['Led team of 5 developers', 'Improved performance by 40%', 'Architected microservices'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    location: 'Hybrid',
    period: '2022 - 2023',
    description: 'Built scalable web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    achievements: ['Delivered 12+ projects', 'Reduced load time by 60%', 'Implemented CI/CD pipelines'],
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Agency',
    location: 'On-site',
    period: '2021 - 2022',
    description: 'Developed responsive user interfaces and implemented modern frontend frameworks. Focused on performance optimization and accessibility.',
    achievements: ['Built 20+ responsive sites', 'A11y compliance', 'Component library creation'],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    location: 'On-site',
    period: '2020 - 2021',
    description: 'Started my professional journey building web applications. Gained hands-on experience with JavaScript, React, and database management.',
    achievements: ['Rapid skill development', 'Agile methodology', 'Full-stack exposure'],
  },
];

const TimelineItem = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline Dot */}
      <motion.div 
        className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
      >
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gold-DEFAULT to-gold-accent shadow-[0_0_20px_rgba(212,165,66,0.4)]" />
          <motion.div
            className="absolute inset-0 rounded-full bg-gold-DEFAULT/20"
            animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Content Card */}
      <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <motion.div
          className="glass-card rounded-xl p-5 group cursor-default"
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="tech-badge flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {exp.period}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] text-muted-foreground/70">
              <MapPin className="w-3 h-3 inline mr-1" />
              {exp.location}
            </span>
          </div>
          
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:text-gold-DEFAULT transition-colors">
            {exp.title}
          </h3>
          <p className="text-xs sm:text-sm text-gold-DEFAULT/70 mb-3 flex items-center gap-1.5">
            <Briefcase className="w-3 h-3" />
            {exp.company}
          </p>
          <p className="text-xs sm:text-[13px] text-muted-foreground/80 leading-relaxed mb-4">
            {exp.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5">
            {exp.achievements.map((achievement) => (
              <span key={achievement} className="text-[10px] px-2 py-1 rounded bg-white/[0.03] text-muted-foreground/70 flex items-center gap-1">
                <ArrowRight className="w-2.5 h-2.5 text-gold-DEFAULT/60" />
                {achievement}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
};

export const ExperiencePage = () => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true });

  return (
    <PageLayout>
      <FloatingShapes />
      
      <section className="py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block h-[2px] bg-gradient-to-r from-gold-DEFAULT to-transparent mx-auto mb-4"
              />
              <p className="text-[10px] font-medium text-gold-DEFAULT/80 tracking-[0.25em] uppercase mb-3">
                Career Path
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Work <span className="text-gold-gradient">Experience</span>
              </h1>
              <p className="text-sm sm:text-[15px] text-muted-foreground/80 max-w-lg mx-auto">
                A journey through my professional career, showcasing growth and achievements.
              </p>
            </div>
          </ScrollReveal>

          <div ref={timelineRef} className="relative">
            <motion.div
              initial={{ height: 0 }}
              animate={isTimelineInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-1/2 transform -translate-x-1/2 w-px hidden md:block"
              style={{ background: 'linear-gradient(180deg, #D4A542 0%, rgba(212,165,66,0.2) 50%, transparent 100%)' }}
            />
            <motion.div
              initial={{ height: 0 }}
              animate={isTimelineInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-4 w-px md:hidden"
              style={{ background: 'linear-gradient(180deg, #D4A542 0%, rgba(212,165,66,0.2) 50%, transparent 100%)' }}
            />
            <div className="space-y-6 sm:space-y-10">
              {experiences.map((exp, index) => (
                <TimelineItem key={exp.title} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
