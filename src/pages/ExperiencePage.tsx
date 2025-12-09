import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline Dot */}
      <motion.div 
        className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
      >
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gold-DEFAULT to-gold-accent shadow-[0_0_20px_rgba(212,165,66,0.5)]" />
          <motion.div
            className="absolute inset-0 rounded-full bg-gold-DEFAULT/30"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Content Card */}
      <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <motion.div
          className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 group"
          whileHover={{ y: -4, borderColor: 'rgba(212,165,66,0.3)' }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-gold-DEFAULT/10 text-gold-DEFAULT border border-gold-DEFAULT/20 font-medium">
              <Calendar className="w-3 h-3 inline mr-1" />
              {exp.period}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-background-offset text-muted-foreground">
              <MapPin className="w-3 h-3 inline mr-1" />
              {exp.location}
            </span>
          </div>
          
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:text-gold-DEFAULT transition-colors">
            {exp.title}
          </h3>
          <p className="text-xs sm:text-sm text-gold-DEFAULT mb-3 flex items-center gap-1.5">
            <Briefcase className="w-3 h-3" />
            {exp.company}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
            {exp.description}
          </p>
          
          {/* Achievements */}
          <div className="flex flex-wrap gap-2">
            {exp.achievements.map((achievement) => (
              <span
                key={achievement}
                className="text-[10px] px-2 py-1 rounded bg-background-offset text-muted-foreground flex items-center gap-1"
              >
                <ArrowRight className="w-2.5 h-2.5 text-gold-DEFAULT" />
                {achievement}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
};

export const ExperiencePage = () => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true });

  return (
    <PageLayout>
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block h-0.5 bg-gold-DEFAULT mx-auto mb-4"
              />
              <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
                Career Path
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Work <span className="text-gold-gradient">Experience</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
                A journey through my professional career, showcasing growth and achievements.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Center Line - Desktop */}
            <motion.div
              initial={{ height: 0 }}
              animate={isTimelineInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-1/2 transform -translate-x-1/2 w-px hidden md:block"
              style={{
                background: 'linear-gradient(180deg, hsl(var(--gold-DEFAULT)) 0%, hsl(var(--gold-DEFAULT)/0.3) 50%, transparent 100%)'
              }}
            />

            {/* Mobile Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isTimelineInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-4 w-px md:hidden"
              style={{
                background: 'linear-gradient(180deg, hsl(var(--gold-DEFAULT)) 0%, hsl(var(--gold-DEFAULT)/0.3) 50%, transparent 100%)'
              }}
            />

            {/* Experience Items */}
            <div className="space-y-8 sm:space-y-12">
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
