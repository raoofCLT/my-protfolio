import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js / Express', level: 88 },
  { name: 'MongoDB / PostgreSQL', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'REST / GraphQL APIs', level: 87 },
];

const strengths = [
  'Clean, maintainable code architecture',
  'Performance optimization expert',
  'Responsive & accessible design',
  'Agile development methodology',
  'Strong problem-solving skills',
  'Excellent communication',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const AboutPage = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
              About Me
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Building Digital{' '}
              <span className="text-gold-gradient">Excellence</span>
            </h1>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Bio & Strengths */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Profile Card */}
              <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-5">
                  <img
                    src="/profilepic.jpeg"
                    alt="Abdul Raoof"
                    className="w-20 h-20 rounded-xl object-cover border border-gold-DEFAULT/20"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-foreground mb-1">Abdul Raoof</h2>
                    <p className="text-sm text-gold-DEFAULT mb-2">Full-Stack Developer</p>
                    <p className="text-xs text-muted-foreground">Based in India • Available for remote work</p>
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div variants={itemVariants} className="mb-8">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate full-stack developer with 3+ years of experience 
                  creating modern web applications. I specialize in the MERN stack 
                  and have a keen eye for UI/UX design.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  My approach combines clean code principles with creative problem-solving 
                  to deliver exceptional digital products that exceed client expectations.
                </p>
              </motion.div>

              {/* Strengths */}
              <motion.div variants={itemVariants}>
                <h3 className="text-sm font-semibold text-foreground mb-4">Key Strengths</h3>
                <div className="space-y-2.5">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={strength}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-DEFAULT flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-sm font-semibold text-foreground mb-6">Technical Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="glass-card rounded-xl p-4"
                  >
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-gold-DEFAULT font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-background-offset rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                        className="h-full bg-gradient-to-r from-gold-DEFAULT to-gold-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
