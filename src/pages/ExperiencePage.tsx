import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout/PageLayout';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2023 - Present',
    description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    side: 'left',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2022 - 2023',
    description: 'Built scalable web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    side: 'right',
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2021 - 2022',
    description: 'Developed responsive user interfaces and implemented modern frontend frameworks. Focused on performance optimization and accessibility.',
    side: 'left',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    period: '2020 - 2021',
    description: 'Started my professional journey building web applications. Gained hands-on experience with JavaScript, React, and database management.',
    side: 'right',
  },
];

export const ExperiencePage = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
              Career Path
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Work <span className="text-gold-gradient">Experience</span>
            </h1>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-gold-DEFAULT via-gold-DEFAULT/50 to-transparent hidden md:block"
            />

            {/* Mobile Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              className="absolute left-4 w-0.5 bg-gradient-to-b from-gold-DEFAULT via-gold-DEFAULT/50 to-transparent md:hidden"
            />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: exp.side === 'left' ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className={`relative flex items-center ${
                    exp.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="timeline-dot animate-gold-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    exp.side === 'left' ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="glass-card rounded-xl p-5"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-DEFAULT/10 text-gold-DEFAULT border border-gold-DEFAULT/20">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-xs text-gold-DEFAULT mb-3">{exp.company}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
