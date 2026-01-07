import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const testimonials = [
  {
    name: "Mohammed Ajmal",
    role: "Founder, CODO AI Innovations",
    content:
      "Raoof was the spark that brought our product experiences to life at CODO AI Innovations. He mastered the art of building fluid, responsive, and user-first interfaces with precision, creativity, and relentless consistency. A collaborative pillar who elevates the entire team.",
    avatar: "MA",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQENBpYgPJvp_Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730186966868?e=1769644800&v=beta&t=VcJFsa7F0oU7T_Vd6j8EaASkH1dwg3kKWXIRNsyw7YY",
    color: "bg-orange-600",
  },
  {
    name: "Lubaba PV",
    role: "Full Stack Developer, CODO AI",
    content:
      "Working side by side with Rahoof was a fantastic experience. He has a unique ability to bridge backend brilliance and user impact, creating a development synergy that helped us ship products with speed and clarity.",
    avatar: "L",
    color: "bg-emerald-600",
  },
  {
    name: "David Chen",
    role: "Founder, StartupHub",
    content:
      "Abdul understood our vision immediately and translated it into a performant, scalable MVP. His attention to detail in the UI/UX is what sets him apart. He doesn't just write code; he cares about the user experience.",
    avatar: "D",
    color: "bg-blue-600",
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
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-lg overflow-hidden`}
                >
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    t.avatar
                  )}
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
