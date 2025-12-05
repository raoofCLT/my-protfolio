import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout/PageLayout';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Company',
    period: '2023 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Agency',
    period: '2022 - 2023',
    description: 'Built responsive web apps and RESTful APIs for various clients across multiple industries.',
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Inc',
    period: '2021 - 2022',
    description: 'Developed modern UI components and implemented state management solutions.',
  },
  {
    title: 'Junior Developer',
    company: 'Web Studio',
    period: '2020 - 2021',
    description: 'Started professional journey building websites and learning modern frameworks.',
  },
];

export const ExperiencePage = () => {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium text-gold-DEFAULT tracking-widest uppercase mb-2">
            My Journey
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Work <span className="text-gold-gradient">Experience</span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-gold-DEFAULT/50 via-gold-DEFAULT/20 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-gold-DEFAULT/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold-DEFAULT" />
                </div>

                {/* Content Card */}
                <div className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-gold-DEFAULT/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-sm font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-[10px] font-medium text-gold-DEFAULT px-2 py-0.5 rounded-full bg-gold-DEFAULT/10">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-gold-accent mb-2">
                    {exp.company}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
