import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  CheckCircle,
  MessageSquare,
  Clock,
  Copy,
  Check,
  Instagram,
  Briefcase,
  X,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
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

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_TEMPLATE_ID) {
      toast({
        title: "Configuration Error",
        description:
          "Email configuration is missing. Please contact via phone or direct email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
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
      <div className="min-h-screen bg-[#030303] selection:bg-gold/30 pt-4 pb-20 overflow-x-hidden relative">

        <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,30px_100%]" />
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20" />

        <motion.div
          className="max-w-[1240px] mx-auto px-4 md:px-6 relative z-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- TOP ROW: HEADER SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <GlassCard className="md:col-span-8 lg:col-span-8 p-6 md:p-12 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-colors h-full min-h-[350px] md:min-h-[400px]">
              <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-6 text-gold">
                <MessageSquare size={180} className="md:size-[240px]" />
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 relative z-10"
              >
                <div className="h-px w-10 md:w-12 bg-gold" />
                <span className="text-gold text-xs font-black uppercase tracking-widest">
                  Connect
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mt-6 relative z-10"
              >
                Let's build <br />
                <span className="text-gold-gradient italic">
                  something epic.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gold-pale/70 text-base md:text-lg leading-relaxed max-w-xl mt-6 relative z-10 font-medium"
              >
                Have a project in mind or just want to say hi? I'm always open
                to discussing new ideas, 2025 opportunities, and engineering
                challenges.
              </motion.p>
            </GlassCard>

            <div className="md:col-span-4 lg:col-span-4 grid grid-cols-1 gap-6">
              <GlassCard className="flex flex-col justify-center p-8 md:p-10 hover:border-gold/30 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden h-full group">
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] text-gold group-hover:scale-110 transition-transform duration-[2s] pointer-events-none">
                  <Briefcase size={200} />
                </div>

                <div className="space-y-12 relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></span>
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-black text-white uppercase tracking-wider">
                        Available Now
                      </div>
                      <p className="text-xs text-white/30 font-bold uppercase tracking-[0.2em] mt-1.5">
                        Open for 2025 Projects
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-xs text-gold font-black uppercase tracking-[0.3em]">
                      Core Expertise
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {["Full Stack", "Frontend Eng", "UI/UX Design"].map(
                        (s) => (
                          <span
                            key={s}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase text-white/60 tracking-widest hover:border-gold/30 hover:text-gold transition-all duration-300"
                          >
                            {s}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* --- BOTTOM ROW: INTERACTIVE SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Contact Details */}
            <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => handleCopy("raoofkottayil@gmail.com", "Email")}
                  className="group relative flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-gold/5 hover:border-gold/20 transition-all text-left w-full h-[100px]"
                >
                  <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/30 uppercase tracking-[0.2em] font-black mb-1">
                      Direct Email
                    </div>
                    <div className="text-sm md:text-base font-bold text-white group-hover:text-gold truncate">
                      raoofkottayil@gmail.com
                    </div>
                  </div>
                  <div className="text-white/20 group-hover:text-gold transition-colors flex-shrink-0">
                    {copied === "Email" ? (
                      <Check size={18} />
                    ) : (
                      <Copy size={18} />
                    )}
                  </div>
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "India", val: "9072893647", key: "Phone IN" },
                    { label: "UAE", val: "056 929 6653", key: "Phone UAE" },
                  ].map((p) => (
                    <button
                      key={p.key}
                      onClick={() => handleCopy(p.val, p.key)}
                      className="group relative flex flex-col justify-center p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-gold/5 hover:border-gold/20 transition-all text-left h-[100px]"
                    >
                      <div className="text-xs text-white/30 uppercase tracking-widest font-black mb-1.5">
                        {p.label}
                      </div>
                      <div className="text-[11px] font-bold text-white group-hover:text-gold truncate">
                        {p.val}
                      </div>
                      <div className="absolute top-4 right-4 text-white/20 group-hover:text-gold transition-colors">
                        {copied === p.key ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 w-full h-[88px]">
                  <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/30 uppercase tracking-[0.2em] font-black mb-1">
                      Main Location
                    </div>
                    <div className="text-sm font-bold text-white truncate">
                      Kerala, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Github,
                    label: "GitHub",
                    url: "https://github.com/raoofCLT",
                    color: "group-hover:text-white",
                    bg: "group-hover:bg-white/10",
                  },
                  {
                    icon: Linkedin,
                    label: "Linkedin",
                    url: "https://www.linkedin.com/in/raoof-clt",
                    color: "group-hover:text-[#0077b5]",
                    bg: "group-hover:bg-[#0077b5]/10",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    url: "https://www.instagram.com/raoof_clt/",
                    color: "group-hover:text-[#E1306C]",
                    bg: "group-hover:bg-[#E1306C]/10",
                  },
                  {
                    icon: X,
                    label: "X",
                    url: "https://x.com/raoof_CLT",
                    color: "group-hover:text-white",
                    bg: "group-hover:bg-white/10",
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    className={`group flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 h-[100px] ${s.bg}`}
                    rel="noreferrer"
                  >
                    <s.icon
                      size={24}
                      className={`text-white/40 transition-all duration-300 group-hover:scale-110 ${s.color}`}
                    />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white transition-colors">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Messaging Form */}
            <div className="md:col-span-7 lg:col-span-7">
              <GlassCard className="h-full p-6 md:p-8" noPadding>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
                      Send <span className="text-gold">Message</span>
                    </h3>
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-gold animate-pulse" />
                      <span className="text-white/30 text-[10px] uppercase font-black tracking-widest">
                        Reply Time: ~2h
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[11px] uppercase font-black text-white/40 tracking-wider pl-1 font-mono">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10 font-bold"
                          placeholder="ABDUL RAOOF"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] uppercase font-black text-white/40 tracking-wider pl-1 font-mono">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10 font-bold"
                          placeholder="client@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] uppercase font-black text-white/40 tracking-wider pl-1 font-mono">
                        Inquiry Subject
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10 font-bold"
                        placeholder="Project Collaboration"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] uppercase font-black text-white/40 tracking-wider pl-1 font-mono">
                        Message Brief
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-all resize-none placeholder:text-white/10 font-medium"
                        placeholder="Briefly describe your project goals..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-gold hover:bg-gold-light text-black font-black uppercase tracking-widest rounded-xl py-4 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 text-sm shadow-2xl"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : isSubmitted ? (
                        <>
                          SENT SUCCESSFUL <CheckCircle size={18} />
                        </>
                      ) : (
                        <>
                          DISPATCH MESSAGE <Send size={18} />
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
