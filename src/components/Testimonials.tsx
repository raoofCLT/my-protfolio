import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager at TechFlow",
    content:
      "Abdul is an exceptional developer who brings both technical expertise and creative problem-solving to the table. He delivered our platform ahead of schedule and the code quality was outstanding.",
    avatar: "S",
    color: "bg-blue-500",
  },
  {
    name: "David Chen",
    role: "Founder, StartupHub",
    content:
      "Working with Abdul was a game-changer for our startup. He understood our vision immediately and translated it into a performant, scalable MVP that investors loved.",
    avatar: "D",
    color: "bg-emerald-500",
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director, Evoka",
    content:
      "The attention to detail in the UI/UX is what sets Abdul apart. He doesn't just write code; he cares about the user experience. Highly recommended!",
    avatar: "E",
    color: "bg-purple-500",
  },
];

export const Testimonials = () => {
  return (
    <div className="py-10 relative">
      <div className="flex items-center gap-3 mb-8 px-4">
        <div className="p-2 bg-gold/10 rounded-lg border border-gold/20 text-white">
          <Quote size={20} />
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-widest">
          Testimonials
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col justify-between hover:border-gold/30 transition-colors p-6">
              <div className="mb-6 relative">
                <Quote
                  className="absolute -top-2 -left-2 text-gold/10 rotate-180"
                  size={40}
                />
                <p className="text-white/80 relative z-10 italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4 mt-auto">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-[10px] text-gold uppercase tracking-wide font-bold">
                    {t.role}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
