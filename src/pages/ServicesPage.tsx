import { motion } from "framer-motion";
import { 
  ShoppingCart, Users, Database, Sparkles, ArrowRight, Code2, Globe, Monitor, 
  CheckCircle2, Search, PenTool, Rocket, LifeBuoy, Target, Briefcase, Zap
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { GlassCard } from "@/components/ui/GlassCard";

const achievements = [
  "Increase online sales with fast, conversion-focused e-commerce systems",
  "Automate business operations with custom dashboards and CRMs",
  "Build scalable backend systems ready for growth",
  "Create premium digital presence for your brand",
];

const services = [
  {
    title: "E-Commerce Platforms",
    icon: ShoppingCart,
    description: "Scalable online stores built for performance, conversions, and growth.",
    included: [
      "Product catalog & inventory system",
      "Secure payment gateway integration (Stripe, etc.)",
      "Shopping cart & checkout flow",
      "Admin dashboard for orders & customers",
      "SEO optimized product pages",
      "Mobile-first responsive UI"
    ],
    stack: ["React", "Next.js", "Node.js", "Stripe", "PostgreSQL"],
    color: "#22C55E",
  },
  {
    title: "CRM Systems",
    icon: Users,
    description: "Custom systems to manage leads, clients, and business operations.",
    included: [
      "Lead & customer management system",
      "Role-based admin dashboard",
      "Sales pipeline tracking",
      "Automated workflows & notifications",
      "Analytics & reporting dashboards",
      "Data export & integration tools"
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Redux", "Tailwind"],
    color: "#4F8EF7",
  },
  {
    title: "ERP Systems",
    icon: Database,
    description: "Complex business systems for managing company-wide operations.",
    included: [
      "Multi-department management",
      "Centralized database architecture",
      "Role-based access control",
      "Real-time reporting system",
      "Workflow automation",
      "Scalable backend architecture"
    ],
    stack: ["Node.js", "Express", "React", "Docker", "PostgreSQL"],
    color: "#A855F7",
  },
  {
    title: "Business Websites",
    icon: Briefcase,
    description: "Professional websites for companies, agencies, and startups.",
    included: [
      "Corporate landing pages",
      "Service showcase sections",
      "Lead generation forms",
      "SEO optimization",
      "Fast loading performance",
      "CMS integration"
    ],
    stack: ["Next.js", "React", "Tailwind", "Framer Motion"],
    color: "#00D4FF",
  },
  {
    title: "Personal Portfolios",
    icon: Sparkles,
    description: "High-end personal branding websites for creators and professionals.",
    included: [
      "Animated modern UI/UX",
      "Project showcase system",
      "Contact & booking integration",
      "Blog or content section",
      "Smooth transitions & micro-interactions",
      "Fully responsive design"
    ],
    stack: ["React", "Framer Motion", "Three.js", "Tailwind"],
    color: "#C9A84C",
  },
  {
    title: "Desktop Applications",
    icon: Monitor,
    description: "Cross-platform desktop software for business and productivity needs.",
    included: [
      "Offline-capable applications",
      "File/data management systems",
      "Admin tools & dashboards",
      "Local database integration",
      "Secure data handling",
      "Windows & Mac cross-platform apps"
    ],
    stack: ["Electron.js", "Node.js", "React", "SQLite"],
    color: "#E879A6",
  },
];

const process = [
  { step: "01", title: "Discover", desc: "Understanding your business goals and requirements", icon: Search },
  { step: "02", title: "Design", desc: "Wireframes, UI concepts, and user experience planning", icon: PenTool },
  { step: "03", title: "Develop", desc: "Clean, scalable, production-ready code", icon: Code2 },
  { step: "04", title: "Deploy", desc: "Hosting, optimization, and final delivery", icon: Rocket },
  { step: "05", title: "Support", desc: "Post-launch fixes and improvements", icon: LifeBuoy },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } },
};

export const ServicesPage = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-[#030303] selection:bg-gold/30 pt-6 pb-20 overflow-x-hidden relative">
        {/* Digital Scan Lines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,30px_100%]" />

        {/* Noise Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20" />

        <motion.div
          className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10 space-y-12 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <GlassCard className="p-6 md:p-12 relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors">
            <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
              <Target size={180} className="md:size-[240px]" />
            </div>

            <motion.div variants={itemVariants} className="flex items-center gap-3 relative z-10 mb-6">
              <div className="h-px w-10 md:w-12 bg-gold" />
              <span className="text-gold font-bold tracking-widest uppercase text-xs">What I Build</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white tracking-tight leading-[1.1] mb-6 relative z-10 max-w-4xl">
              Building High-Performance <span className="text-gold-gradient inline-block relative">Digital Products</span> <br className="hidden md:block" /> That Grow Your Business.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gold-pale/70 text-base md:text-lg leading-relaxed max-w-2xl relative z-10 font-medium">
              I build scalable digital products and enterprise-grade systems that help businesses automate operations, increase revenue, and build a strong digital presence across web and desktop platforms.
            </motion.p>
          </GlassCard>

          {/* What I Help You Achieve */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-6 md:p-10 border-gold/10 bg-black/40">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-black text-white mb-2">What I Help You Achieve</h3>
                  <p className="text-sm text-gold-pale/50">Delivering real business value through engineering.</p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-gold">
                        <Zap size={16} />
                      </div>
                      <p className="text-sm font-medium text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="group h-full">
                  <GlassCard className="h-full flex flex-col p-6 md:p-10 relative overflow-hidden hover:border-gold/30 transition-colors duration-500">
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 80% 20%, ${service.color}, transparent 50%)` }}
                    />
                    
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className="p-4 rounded-2xl border bg-black/40 backdrop-blur-md relative z-10"
                        style={{ borderColor: `${service.color}40` }}
                      >
                        <Icon size={24} style={{ color: service.color }} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                    <p className="text-gold-pale/60 text-sm leading-relaxed mb-6 relative z-10 font-medium">
                      {service.description}
                    </p>

                    <div className="mb-8 flex-1 relative z-10">
                      <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">What's Included</p>
                      <ul className="space-y-2">
                        {service.included.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[13px] text-white/70">
                            <CheckCircle2 size={14} className="text-gold mt-0.5 flex-shrink-0 opacity-80" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Process Section */}
          <motion.div variants={itemVariants}>
             <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="h-px w-8 bg-gold/50" />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest text-center">My Process</h3>
              <div className="h-px w-8 bg-gold/50" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
               {process.map((p, i) => {
                 const PIcon = p.icon;
                 return (
                   <GlassCard key={i} className="p-6 relative group border-gold/10 hover:border-gold/30">
                     <div className="text-4xl font-black text-white/5 absolute top-4 right-4">{p.step}</div>
                     <PIcon size={20} className="text-gold mb-4" />
                     <h4 className="text-white font-bold mb-2">{p.title}</h4>
                     <p className="text-xs text-gold-pale/60 leading-relaxed font-medium">{p.desc}</p>
                   </GlassCard>
                 )
               })}
            </div>
          </motion.div>

          {/* Tech Stack Marquee */}
          <motion.div variants={itemVariants} className="pt-16 pb-8 overflow-hidden relative w-full">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-10 justify-center relative z-10">
              <div className="h-px w-8 bg-gold/30" />
              <h3 className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em] text-center">Powered By Premium Technologies</h3>
              <div className="h-px w-8 bg-gold/30" />
            </div>

            <div className="flex w-fit">
              <motion.div 
                className="flex items-center gap-6 pr-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {[
                  "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL",
                  "Framer Motion", "Stripe", "GraphQL", "Express", "MongoDB", "Redux", "Electron",
                  "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL",
                  "Framer Motion", "Stripe", "GraphQL", "Express", "MongoDB", "Redux", "Electron"
                ].map((tech, i) => (
                  <div 
                    key={i} 
                    className="flex-shrink-0 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 text-white/60 font-semibold tracking-wider text-[13px] whitespace-nowrap hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-20 pb-10 flex justify-center">
            <GlassCard className="max-w-3xl w-full p-8 md:p-14 text-center flex flex-col items-center group relative overflow-hidden border-gold/20 shadow-[0_0_40px_rgba(212,165,66,0.05)]">
               <Globe size={48} className="text-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
               <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Have a business idea or system in mind?</h3>
               <p className="text-gold-pale/70 mb-10 max-w-lg text-lg">Let’s build a scalable digital product that automates, grows, and performs.</p>
               <a href="/contact" className="px-10 py-5 rounded-xl bg-gold text-black font-black text-sm uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(212,165,66,0.3)] hover:shadow-[0_0_40px_rgba(212,165,66,0.5)] hover:-translate-y-1">
                 Start Your Project <ArrowRight size={18} />
               </a>
               
               <p className="mt-8 text-xs text-white/40 font-medium">
                 Perfect for startups needing MVPs, businesses needing automation, and founders wanting a premium web presence.
               </p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
