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
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { GlassCard } from "@/components/ui/GlassCard";
import { useToast } from "@/hooks/use-toast";

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

  const getTime = () => {
    const date = new Date();
    return date.toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast({ description: `${label} copied to clipboard` });
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-[#030303] selection:bg-gold-DEFAULT/30 pt-4 pb-20 overflow-x-hidden">
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
            <GlassCard className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-end relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors min-h-[240px]">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-12">
                <MessageSquare size={180} className="text-white" />
              </div>

              <div className="relative z-10 w-full md:w-3/4">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4 backdrop-blur-md w-fit"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                    Contact
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[0.95] mb-2"
                >
                  Let's build <br />
                  <span className="text-gold-gradient">something epic.</span>
                </motion.h1>
              </div>
            </GlassCard>

            {/* Live Status & Time - Compact */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-4">
              <GlassCard className="flex-1 p-5 flex flex-col justify-between group hover:border-gold/30 bg-gradient-to-br from-white/5 to-transparent">
                <div className="flex justify-between items-center mb-2">
                  <div className="p-2 bg-black/40 rounded-lg border border-white/10 text-white group-hover:text-gold transition-colors">
                    <Globe2 size={18} />
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-white/40">
                    IST
                  </span>
                </div>
                <div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
                    Local Time
                  </div>
                  <div className="text-2xl font-bold text-white font-mono tracking-tight">
                    {getTime()}
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="flex-1 p-5 flex items-center justify-between group hover:border-green-500/30 hover:bg-green-500/[0.02]">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">
                      Open for Work
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wide">
                      Responding within 24h
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

                  <button
                    onClick={() => handleCopy("+919072893647", "Phone")}
                    className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-gold/5 hover:border-gold/20 transition-all text-left w-full h-[88px]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-0.5">
                        Phone
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-gold truncate">
                        +91 9072893647
                      </div>
                    </div>
                    <div className="text-white/20 group-hover:text-gold transition-colors">
                      {copied === "Phone" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </div>
                  </button>

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
