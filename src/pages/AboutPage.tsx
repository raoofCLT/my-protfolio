import { motion } from 'framer-motion';
import { CheckCircle2, Code, Palette, Database, Globe, Server } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { FloatingShapes } from '@/components/ui/FloatingShapes';

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
      <FloatingShapes />
      
      <section className="py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-10 sm:mb-14">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block h-[2px] bg-gradient-to-r from-gold-DEFAULT to-transparent mb-4"
              />
              <p className="text-[10px] font-medium text-gold-DEFAULT/80 tracking-[0.25em] uppercase mb-3">
                About Me
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Building Digital{' '}
                <span className="text-gold-gradient">Excellence</span>
              </h1>
            </div>
          </ScrollReveal>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Bio & Strengths */}
            <div className="space-y-6">
              {/* Profile Card */}
              <ScrollReveal direction="left">
                <motion.div 
                  className="glass-card-premium rounded-2xl p-5 sm:p-6"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                    <div className="relative image-glow">
                      <motion.img
                        src="/profilepic.jpeg"
                        alt="Abdul Raoof"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover"
                        style={{
                          border: '2px solid rgba(212, 165, 66, 0.2)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Glow effect */}
                      <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-gold-DEFAULT/20 via-transparent to-gold-DEFAULT/20 opacity-0 hover:opacity-100 transition-opacity blur-xl -z-10" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-1">Abdul Raoof</h2>
                      <p className="text-sm text-gold-DEFAULT/80 mb-3">Full-Stack Developer</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="tech-badge">3+ Years Exp</span>
                        <span className="tech-badge">Remote Ready</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Bio */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-4 pl-1">
                  <p className="text-sm sm:text-[15px] text-muted-foreground/90 leading-relaxed">
                    I'm a passionate full-stack developer with 3+ years of experience 
                    creating modern web applications. I specialize in the MERN stack 
                    and have a keen eye for UI/UX design.
                  </p>
                  <p className="text-sm sm:text-[15px] text-muted-foreground/90 leading-relaxed">
                    My approach combines clean code principles with creative problem-solving 
                    to deliver exceptional digital products that exceed client expectations.
                  </p>
                </div>
              </ScrollReveal>

              {/* Strengths */}
              <ScrollReveal delay={0.2}>
                <div className="pt-2">
                  <h3 className="text-xs font-semibold text-foreground/90 mb-4 flex items-center gap-3">
                    <span className="w-5 h-[1px] bg-gradient-to-r from-gold-DEFAULT to-transparent" />
                    Key Strengths
                  </h3>
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {strengths.map((strength) => (
                      <StaggerItem key={strength}>
                        <motion.div
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/[0.02] transition-colors group"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-DEFAULT/70 flex-shrink-0 group-hover:text-gold-DEFAULT transition-colors" />
                          <span className="text-xs sm:text-[13px] text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">{strength}</span>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Skills */}
            <div className="space-y-6">
              <ScrollReveal direction="right">
                <h3 className="text-xs font-semibold text-foreground/90 mb-5 flex items-center gap-3">
                  <span className="w-5 h-[1px] bg-gradient-to-r from-gold-DEFAULT to-transparent" />
                  Technical Skills
                </h3>
              </ScrollReveal>
              
              <StaggerContainer className="space-y-3">
                {skills.map((skill, index) => (
                  <StaggerItem key={skill.name}>
                    <motion.div
                      className="glass-card rounded-xl p-4 group cursor-default"
                      whileHover={{ scale: 1.01, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gold-DEFAULT/8 flex items-center justify-center group-hover:bg-gold-DEFAULT/15 transition-colors">
                            <skill.icon className="w-4 h-4 text-gold-DEFAULT/80" />
                          </div>
                          <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                        </div>
                        <span className="text-[11px] text-gold-DEFAULT/70 font-medium">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Tech Stack Grid */}
              <ScrollReveal delay={0.3}>
                <div className="mt-6 pt-4">
                  <div className="section-divider mb-6" />
                  <h3 className="text-xs font-semibold text-foreground/90 mb-4 flex items-center gap-3">
                    <span className="w-5 h-[1px] bg-gradient-to-r from-gold-DEFAULT to-transparent" />
                    Tech Stack
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {techStack.map((category, idx) => (
                      <motion.div
                        key={category.name}
                        className="glass-card rounded-xl p-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="text-[10px] text-gold-DEFAULT/60 uppercase tracking-wider mb-2">{category.name}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {category.items.map((item) => (
                            <span key={item} className="tech-badge">
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
