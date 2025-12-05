import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, Code2 } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
];

const highlights = [
  { icon: GraduationCap, label: 'Education', value: 'Computer Science' },
  { icon: MapPin, label: 'Location', value: 'Available Remote' },
  { icon: Briefcase, label: 'Status', value: 'Open to Work' },
  { icon: Code2, label: 'Focus', value: 'Full-Stack' },
];

export const AboutPage = () => {
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
            Get to know me
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            About <span className="text-gold-gradient">Me</span>
          </h1>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-card/50 border border-border/50">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT" />
                Biography
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Full-Stack Developer with expertise in building
                  modern web applications. With a strong foundation in both frontend
                  and backend technologies, I create seamless digital experiences.
                </p>
                <p>
                  My journey in tech started with curiosity and has evolved into a
                  deep love for clean code, elegant solutions, and continuous learning.
                  I thrive in collaborative environments and enjoy tackling complex
                  challenges.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card/30 border border-border/30 hover:border-gold-DEFAULT/20 transition-colors"
                >
                  <item.icon className="w-4 h-4 text-gold-DEFAULT mb-2" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT" />
              Skills & Technologies
            </h2>

            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + groupIndex * 0.1 }}
                className="p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <p className="text-xs font-medium text-gold-DEFAULT uppercase tracking-wider mb-3">
                  {skillGroup.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs rounded-full bg-card border border-border/50 text-foreground hover:border-gold-DEFAULT/30 transition-colors"
                    >
                      <span className="w-1 h-1 inline-block rounded-full bg-gold-DEFAULT mr-1.5" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Download CV */}
            <motion.a
              href="/Abdul Raoof.pdf"
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 mt-4 rounded-full border border-gold-DEFAULT/50 text-gold-DEFAULT text-sm font-medium hover:bg-gold-DEFAULT hover:text-background transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};
