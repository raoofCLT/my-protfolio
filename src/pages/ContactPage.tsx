import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ArrowUpRight,
  CheckCircle,
  MessageSquare,
  Clock,
  Globe2,
  Copy,
  Check,
  Instagram,
  Zap,
  Briefcase,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { GlassCard } from "@/components/ui/GlassCard";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 40, damping: 15 },
  },
};

export const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast({ description: `${label} copied to clipboard` });
    setTimeout(() => setCopied(""), 2000);
  };

  // Credentials from .env
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_TEMPLATE_ID) {
      console.error("EmailJS Env Vars:", {
        service: !!EMAILJS_SERVICE_ID,
        template: !!EMAILJS_TEMPLATE_ID,
        key: !!EMAILJS_PUBLIC_KEY,
      });
      toast({
        title: "Configuration Error",
        description:
          "EmailJS keys are missing. Try restarting the terminal to load the .env file.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name, // Matches {{name}} in your template
        email: formData.email, // Matches {{email}} in "To Email"
        title: formData.subject, // Matches {{title}} in your template
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-background selection:bg-gold/30 pt-8 pb-24 overflow-x-hidden">
        <FloatingShapes />
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 relative z-10 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- HEADER ROW (8/4) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Main Hero - Compact */}
            <GlassCard className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full min-h-[400px]">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <MessageSquare size={240} />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-sm font-bold uppercase tracking-widest">
                  Contact
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mt-6 relative z-10"
              >
                Let's build <br />
                <span className="text-gold-gradient">something epic.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/80 text-lg leading-relaxed max-w-xl mt-6 relative z-10"
              >
                Have a project in mind or just want to say hi? I'm always open
                to discussing new ideas, opportunities, and finding ways to
                collaborate.
              </motion.p>
            </GlassCard>

            {/* Services & Availability - Compact */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-4">
              {/* Service Focus */}
              <GlassCard className="flex-1 p-5 flex flex-col justify-center group hover:border-gold/30 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-10 group-hover:scale-110 transition-transform text-gold">
                  <Zap size={40} />
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] text-gold/60 uppercase tracking-widest font-bold mb-3">
                    Services
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Full Stack Web Apps",
                      "Desktop Applications",
                      "Backend Architecture",
                      "Modern Frontend & UI/UX",
                    ].map((item) => (
                      <li
                        key={item}
                        className="text-sm font-bold text-white flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>

              {/* Status */}
              <GlassCard className="flex-1 p-5 flex flex-col justify-center group hover:border-gold/30 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-10 group-hover:scale-110 transition-transform text-gold">
                  <Briefcase size={40} />
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Ready to Start
                    </div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wide font-medium mt-0.5">
                      Open for Freelance & Full-time
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* --- INTERACTIVE GRID (5/7) --- */}
          <div className="grid lg:grid-cols-12 gap-4">
            {/* Left Col: Tiles (5) */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="flex flex-col h-full justify-between gap-4">
                {/* Contact Tiles */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() =>
                      handleCopy("raoofkottayil@gmail.com", "Email")
                    }
                    className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-gold/5 hover:border-gold/20 transition-all text-left w-full h-[88px]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-0.5">
                        Email
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-gold truncate">
                        raoofkottayil@gmail.com
                      </div>
                    </div>
                    <div className="text-white/20 group-hover:text-gold transition-colors">
                      {copied === "Email" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </div>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleCopy("+919072893647", "Phone IN")}
                      className="group relative flex flex-col justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-gold/5 hover:border-gold/20 transition-all text-left h-[100px]"
                    >
                      <div className="mb-3 w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <Phone size={16} />
                      </div>
                      <div className="text-[9px] text-white/40 uppercase tracking-widest font-bold mb-0.5">
                        Phone (IN)
                      </div>
                      <div className="text-xs font-medium text-white group-hover:text-gold truncate">
                        +91 9072893647
                      </div>
                      <div className="absolute top-3 right-3 text-white/20 group-hover:text-gold transition-colors">
                        {copied === "Phone IN" ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                      </div>
                    </button>

                    <button
                      onClick={() => handleCopy("056 929 6653", "Phone UAE")}
                      className="group relative flex flex-col justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-gold/5 hover:border-gold/20 transition-all text-left h-[100px]"
                    >
                      <div className="mb-3 w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <Phone size={16} />
                      </div>
                      <div className="text-[9px] text-white/40 uppercase tracking-widest font-bold mb-0.5">
                        Phone (UAE)
                      </div>
                      <div className="text-xs font-medium text-white group-hover:text-gold truncate">
                        056 929 6653
                      </div>
                      <div className="absolute top-3 right-3 text-white/20 group-hover:text-gold transition-colors">
                        {copied === "Phone UAE" ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                      </div>
                    </button>
                  </div>

                  <div className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all w-full h-[88px]">
                    <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-0.5">
                        Location
                      </div>
                      <div className="text-sm font-medium text-white truncate">
                        Kerala, India
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Grid - Compact (2x2) */}
                <div className="grid grid-cols-2 gap-3 h-full">
                  <a
                    href="https://github.com/raoofCLT"
                    target="_blank"
                    className="group flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-black hover:border-white/20 hover:text-white transition-all h-[100px]"
                  >
                    <Github
                      size={24}
                      className="text-white/60 group-hover:text-white transition-colors"
                    />
                    <span className="text-[10px] font-bold text-white/40 group-hover:text-white">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/raoof-clt"
                    target="_blank"
                    className="group flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 hover:text-[#0077b5] transition-all h-[100px]"
                  >
                    <Linkedin
                      size={24}
                      className="text-white/60 group-hover:text-[#0077b5] transition-colors"
                    />
                    <span className="text-[10px] font-bold text-white/40 group-hover:text-[#0077b5]">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/raoof_clt/"
                    target="_blank"
                    className="group flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30 hover:text-[#E1306C] transition-all h-[100px]"
                  >
                    <Instagram
                      size={24}
                      className="text-white/60 group-hover:text-[#E1306C] transition-colors"
                    />
                    <span className="text-[10px] font-bold text-white/40 group-hover:text-[#E1306C]">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://x.com/raoof_CLT"
                    target="_blank"
                    className="group flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all h-[100px]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-white/60 group-hover:text-white transition-colors"
                    >
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                    <span className="text-[10px] font-bold text-white/40 group-hover:text-white">
                      X
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Col: Form (7) - Compact */}
            <div className="lg:col-span-7">
              <GlassCard className="h-full p-6 relative" noPadding>
                <div className="relative z-10 space-y-5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-white">
                      Send Message
                    </h3>
                    <span className="text-white/30 text-xs">Fast Response</span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-white/40 tracking-wider pl-1">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-white/40 tracking-wider pl-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-white/40 tracking-wider pl-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-white/40 tracking-wider pl-1">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-all resize-none placeholder:text-white/10"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-gold hover:bg-gold-light text-black font-bold rounded-lg py-3 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-sm shadow-lg"
                    >
                      {isSubmitting ? (
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : isSubmitted ? (
                        <>
                          Sent <CheckCircle size={16} />
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
