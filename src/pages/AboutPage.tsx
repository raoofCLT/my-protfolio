import { motion } from 'framer-motion';
import { CheckCircle2, Code, Palette, Database, Globe, Smartphone, Server } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const skills = [
  { name: 'React / Next.js', level: 95, icon: Code },
  { name: 'TypeScript', level: 90, icon: Code },
  { name: 'Node.js / Express', level: 88, icon: Server },
  { name: 'MongoDB / PostgreSQL', level: 85, icon: Database },
  { name: 'Tailwind CSS', level: 92, icon: Palette },
  { name: 'REST / GraphQL APIs', level: 87, icon: Globe },
];

const strengths = [
  'Clean, maintainable code architecture',
  'Performance optimization expert',
  'Responsive & accessible design',
  'Agile development methodology',
  'Strong problem-solving skills',
  'Excellent communication',
];

const techStack = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'GraphQL'] },
  { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
  { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
];

export const AboutPage = () => {
  return (
    <PageLayout>
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-12 sm:mb-16">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block h-0.5 bg-gold-DEFAULT mb-4"
              />
              <p className="text-xs font-medium text-gold-DEFAULT tracking-[0.2em] uppercase mb-3">
                About Me
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Building Digital{' '}
                <span className="text-gold-gradient">Excellence</span>
              </h1>
            </div>
          </ScrollReveal>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Bio & Strengths */}
            <div className="space-y-6 sm:space-y-8">
              {/* Profile Card */}
              <ScrollReveal direction="left">
                <motion.div 
                  className="glass-card rounded-2xl p-5 sm:p-6"
                  whileHover={{ borderColor: 'rgba(212,165,66,0.3)' }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                    <motion.img
                      src="/profilepic.jpeg"
                      alt="Abdul Raoof"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border-2 border-gold-DEFAULT/20"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(212,165,66,0.5)' }}
                    />
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-1">Abdul Raoof</h2>
                      <p className="text-sm text-gold-DEFAULT mb-2">Full-Stack Developer</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] px-2 py-1 rounded-full bg-gold-DEFAULT/10 text-gold-DEFAULT border border-gold-DEFAULT/20">
                          3+ Years Exp
                        </span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-gold-DEFAULT/10 text-gold-DEFAULT border border-gold-DEFAULT/20">
                          Remote Ready
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Bio */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    I'm a passionate full-stack developer with 3+ years of experience 
                    creating modern web applications. I specialize in the MERN stack 
                    and have a keen eye for UI/UX design.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    My approach combines clean code principles with creative problem-solving 
                    to deliver exceptional digital products that exceed client expectations.
                  </p>
                </div>
              </ScrollReveal>

              {/* Strengths */}
              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-gold-DEFAULT" />
                    Key Strengths
                  </h3>
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {strengths.map((strength) => (
                      <StaggerItem key={strength}>
                        <motion.div
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-card/50 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold-DEFAULT flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{strength}</span>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Skills */}
            <div className="space-y-6 sm:space-y-8">
              <ScrollReveal direction="right">
                <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-gold-DEFAULT" />
                  Technical Skills
                </h3>
              </ScrollReveal>
              
              <StaggerContainer className="space-y-4">
                {skills.map((skill, index) => (
                  <StaggerItem key={skill.name}>
                    <motion.div
                      className="glass-card rounded-xl p-4 group"
                      whileHover={{ borderColor: 'rgba(212,165,66,0.3)', y: -2 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gold-DEFAULT/10 flex items-center justify-center group-hover:bg-gold-DEFAULT/20 transition-colors">
                            <skill.icon className="w-4 h-4 text-gold-DEFAULT" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs text-gold-DEFAULT font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-background-offset rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="h-full bg-gradient-to-r from-gold-DEFAULT to-gold-accent rounded-full relative"
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold-accent rounded-full shadow-[0_0_10px_rgba(212,165,66,0.5)]" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Tech Stack Grid */}
              <ScrollReveal delay={0.3}>
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-gold-DEFAULT" />
                    Tech Stack
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {techStack.map((category) => (
                      <motion.div
                        key={category.name}
                        className="glass-card rounded-xl p-4"
                        whileHover={{ borderColor: 'rgba(212,165,66,0.2)' }}
                      >
                        <p className="text-[10px] text-gold-DEFAULT uppercase tracking-wider mb-2">{category.name}</p>
                        <div className="flex flex-wrap gap-1">
                          {category.items.map((item) => (
                            <span
                              key={item}
                              className="text-[10px] px-2 py-0.5 rounded bg-background-offset text-muted-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
