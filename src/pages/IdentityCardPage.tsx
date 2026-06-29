import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { toast, Toaster } from "sonner";
import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  Download,
  Copy,
  Share2,
  Github,
  Linkedin,
  Instagram,
  Zap,
  MapPin,
  RotateCw,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";

const PROFILE = {
  name: "Abdul Raoof",
  title: "Full Stack Developer",
  stack: "React · Next.js · Node.js",
  phoneUAE: "+971569296653",
  phoneIN: "+919072893647",
  email: "raoofclt.dev@gmail.com",
  location: "UAE",
  portfolio: "https://raoofclt.vercel.app",
  tagline:
    "Building accessible, pixel-perfect, and performant web applications.",
  image: "/ME.jpg",
};

const VCARD = `BEGIN:VCARD
VERSION:3.0
FN:${PROFILE.name}
TITLE:${PROFILE.title}
TEL;TYPE=CELL:${PROFILE.phoneUAE}
TEL;TYPE=WORK:${PROFILE.phoneIN}
EMAIL:${PROFILE.email}
URL:${PROFILE.portfolio}
NOTE:${PROFILE.stack} | ${PROFILE.location}
END:VCARD`;

export function IdentityCardPage() {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [showBusinessCard, setShowBusinessCard] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(`${PROFILE.phoneUAE}`);
    } catch {}
    toast.success("Phone number copied", {
      description: "Number copied to clipboard",
    });
    setExpanded(true);
  };

  const copyInfo = async () => {
    const info = `${PROFILE.name}\n${PROFILE.title}\n${PROFILE.phoneUAE}\n${PROFILE.email}\n${PROFILE.portfolio}`;
    try {
      await navigator.clipboard.writeText(info);
    } catch {}
    toast.success("Contact info copied");
  };

  const saveVCard = () => {
    const blob = new Blob([VCARD], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Abdul-Raoof.vcf";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Contact saved", { description: "Abdul-Raoof.vcf" });
  };

  const share = async () => {
    const data = {
      title: PROFILE.name,
      text: `${PROFILE.name} — ${PROFILE.title}`,
      url:
        typeof window !== "undefined"
          ? window.location.href
          : PROFILE.portfolio,
    };
    if (typeof navigator !== "undefined" && (navigator as any).share) {
      try {
        await (navigator as any).share(data);
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(data.url);
    } catch {}
    toast.success("Link copied! Share it anywhere ✓");
  };

  const actions = [
    {
      icon: Phone,
      label: "Call UAE",
      href: `tel:${PROFILE.phoneUAE}`,
      glow: "glow-green",
      color: "#22C55E",
    },
    {
      icon: MessageCircle,
      label: "WA UAE",
      href: `https://wa.me/${PROFILE.phoneUAE.replace(/\D/g, "")}`,
      glow: "glow-green",
      color: "#22C55E",
    },
    {
      icon: Mail,
      label: "Email Me",
      href: `mailto:${PROFILE.email}`,
      glow: "glow-blue",
      color: "#4F8EF7",
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: PROFILE.portfolio,
      glow: "glow-cyan",
      color: "#00D4FF",
    },
    {
      icon: Download,
      label: "Save Contact",
      onClick: saveVCard,
      glow: "glow-gold",
      color: "#C9A84C",
    },
    {
      icon: Copy,
      label: "Copy Info",
      onClick: copyInfo,
      glow: "glow-purple",
      color: "#A855F7",
    },
  ];

  const socials = [
    {
      icon: Github,
      href: "https://github.com/raoofclt",
      label: "GitHub",
      color: "#E5E5E5",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/raoofclt",
      label: "LinkedIn",
      color: "#4F8EF7",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/raoof.clt/",
      label: "Instagram",
      color: "#E879A6",
    },
    {
      icon: Globe,
      href: PROFILE.portfolio,
      label: "Portfolio",
      color: "#00D4FF",
    },
  ];

  return (
    <PageLayout>
      <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden nfc-grain bg-transparent">
        {/* Ambient gold glow (drifting) */}
        <div
          aria-hidden
          className="ambient-drift pointer-events-none absolute left-1/2 top-1/3 h-[680px] w-[680px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.22), transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          aria-hidden
          className="ambient-drift pointer-events-none absolute left-1/2 top-2/3 h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.10), transparent 65%)",
            filter: "blur(80px)",
            animationDelay: "-4s",
          }}
        />

        {/* Floating particles */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {Array.from({ length: 14 }).map((_, i) => {
            const left = (i * 37) % 100;
            const size = 1 + ((i * 13) % 3);
            const dur = 9 + ((i * 7) % 9);
            const delay = -(i * 1.3);
            return (
              <span
                key={i}
                className="particle absolute rounded-full"
                style={{
                  left: `${left}%`,
                  bottom: `-20px`,
                  width: size,
                  height: size,
                  background:
                    i % 3 === 0
                      ? "rgba(0,212,255,0.55)"
                      : "rgba(201,168,76,0.65)",
                  boxShadow:
                    i % 3 === 0
                      ? "0 0 8px rgba(0,212,255,0.6)"
                      : "0 0 8px rgba(201,168,76,0.6)",
                  animationDuration: `${dur}s`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>



        <main className="relative z-10 flex min-h-[calc(100vh-80px)] items-start sm:items-center justify-center px-4 py-8 pb-28 sm:pb-8">
          <motion.section
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card float-card relative w-full max-w-[420px] md:max-w-[850px] rounded-3xl p-6 sm:p-7 md:p-10"
            style={{
              boxShadow:
                "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 60px -20px rgba(201,168,76,0.15)",
            }}
          >
            {/* Top label row */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <span className="label-caps">PORTFOLIO 2025</span>
              <span
                className="inline-flex items-center gap-2 label-caps"
                style={{ color: "#22C55E" }}
              >
                <span
                  className="pulse-dot inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "#22C55E" }}
                />
                AVAILABLE
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Left Column: Profile */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-64 shrink-0 md:border-r border-white/5 md:pr-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: "0 0 50px rgba(201,168,76,0.45)" }}
                  />
                  <div
                    className="relative h-28 w-28 rounded-full p-[2px]"
                    style={{
                      background:
                        "linear-gradient(135deg, #C9A84C, #D4A843 60%, rgba(255,255,255,0.1))",
                    }}
                  >
                    <div
                      className="h-full w-full overflow-hidden rounded-full"
                      style={{ background: "#141414" }}
                    >
                      {!imgError ? (
                        <img
                          src={PROFILE.image}
                          alt={PROFILE.name}
                          className="h-full w-full object-cover"
                          onError={() => setImgError(true)}
                          loading="eager"
                        />
                      ) : (
                        <div
                          className="flex h-full w-full items-center justify-center font-display text-3xl font-bold"
                          style={{ color: "#C9A84C" }}
                        >
                          AR
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="font-display mt-5 text-[34px] font-bold leading-tight"
                  style={{ color: "#F2F2F2" }}
                >
                  {PROFILE.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="mt-1.5 text-[15px] font-normal"
                  style={{ color: "#A1A1A1" }}
                >
                  {PROFILE.title}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  className="mt-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-[3px]"
                  style={{
                    borderColor: "rgba(201,168,76,0.25)",
                    background: "rgba(201,168,76,0.06)",
                  }}
                >
                  <span
                    style={{
                      color: "#C9A84C",
                      letterSpacing: "0.22em",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {PROFILE.stack}
                  </span>
                </motion.div>

                <p
                  className="mt-4 max-w-[300px] text-[13px] leading-relaxed"
                  style={{ color: "#A1A1A1" }}
                >
                  {PROFILE.tagline}
                </p>

                <div
                  className="mt-6 inline-flex items-center gap-1.5 text-xs md:self-start"
                  style={{ color: "#6B6B6B" }}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {PROFILE.location} 🇦🇪
                </div>

                {/* Socials (Left Column Footer) */}
                <div
                  className="mt-8 md:mt-auto flex w-full items-center justify-center gap-3 border-t pt-6 md:justify-start"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        title={s.label}
                        aria-label={s.label}
                        className="group relative grid h-10 w-10 place-items-center rounded-full transition-all hover:scale-110"
                        style={{
                          color: "#6B6B6B",
                          background: "rgba(255,255,255,0.03)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            s.color;
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(255,255,255,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "#6B6B6B";
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(255,255,255,0.03)";
                        }}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="flex-1 flex flex-col w-full min-w-0">
                {/* Actions Row */}
                <div className="mt-2 md:mt-0 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={copyPhone}
                    className="cta-gold flex-1 flex items-center justify-center gap-2 rounded-full px-6 py-4 font-display text-base font-semibold tracking-tight"
                  >
                    <Zap className="h-5 w-5" strokeWidth={2.5} />
                    Connect
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowBusinessCard(true)}
                    className="flex-1 flex items-center justify-center gap-2 rounded-full px-6 py-4 font-display text-base font-semibold tracking-tight bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    style={{ color: "#E5E5E5" }}
                  >
                    Business Card
                  </motion.button>
                </div>

                {/* Action grid */}
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      key="grid"
                      initial={{ opacity: 0, height: 0, padding: 0, margin: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        padding: "16px",
                        margin: "-16px",
                      }}
                      exit={{ opacity: 0, height: 0, padding: 0, margin: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 grid grid-cols-3 gap-2.5">
                        {actions.map((a, i) => {
                          const Icon = a.icon;
                          const inner = (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 * i, duration: 0.35 }}
                              whileHover={{ scale: 1.05, y: -3 }}
                              whileTap={{ scale: 0.96 }}
                              className={`action-tile ${a.glow} group flex aspect-square cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl p-2`}
                              style={{ ["--tile-color" as any]: a.color }}
                            >
                              <Icon
                                className="h-[22px] w-[22px] -translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-1"
                                style={{
                                  color: a.color,
                                  filter: `drop-shadow(0 4px 10px ${a.color}66)`,
                                }}
                                strokeWidth={1.75}
                              />
                              <span
                                className="text-[10px] font-medium tracking-wide"
                                style={{ color: "#A1A1A1" }}
                              >
                                {a.label}
                              </span>
                            </motion.div>
                          );
                          return a.href ? (
                            <a
                              key={a.label}
                              href={a.href}
                              target={
                                a.href.startsWith("http") ? "_blank" : undefined
                              }
                              rel="noreferrer"
                            >
                              {inner}
                            </a>
                          ) : (
                            <button
                              key={a.label}
                              onClick={a.onClick}
                              className="text-left"
                            >
                              {inner}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* QR */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-6 rounded-2xl p-4 qr-glow"
                  style={{
                    background: "rgba(20,20,20,0.55)",
                    border: "1px solid rgba(0,212,255,0.14)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        color: "#00D4FF",
                        fontSize: "10px",
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Scan to Save
                    </span>
                    <span
                      style={{
                        color: "#6B6B6B",
                        fontSize: "10px",
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                      }}
                    >
                      v1.0
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="rounded-xl bg-white p-2.5">
                      <QRCodeSVG
                        value={PROFILE.portfolio}
                        size={84}
                        bgColor="#ffffff"
                        fgColor="#0A0A0A"
                        level="M"
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className="font-display text-sm font-semibold"
                        style={{ color: "#E5E5E5" }}
                      >
                        Share this card instantly
                      </p>
                      <p
                        className="mt-1 text-[11px]"
                        style={{ color: "#6B6B6B" }}
                      >
                        Point any camera to open my portfolio.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </main>

        {/* Business Card Modal */}
        <AnimatePresence>
          {showBusinessCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBusinessCard(false)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            >
              <div
                className="relative w-full max-w-[500px] aspect-[1.586/1]"
                style={{ perspective: "2000px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(!isFlipped);
                }}
              >
                <motion.div
                  className="w-full h-full relative cursor-pointer"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 17,
                    mass: 1.2,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8)",
                    }}
                  >
                    <img
                      src="/Business%20Card%20FR.jpeg"
                      alt="Business Card Front"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md rounded-full p-2.5 text-white/80 border border-white/10 flex items-center justify-center">
                      <RotateCw size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                  {/* Back */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8)",
                    }}
                  >
                    <img
                      src="/Bussiness%20Card%20BK.jpeg"
                      alt="Business Card Back"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md rounded-full p-2.5 text-white/80 border border-white/10 flex items-center justify-center">
                      <RotateCw size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sticky share — mobile only */}
        <div
          className="fixed inset-x-0 bottom-0 z-20 px-4 pb-4 pt-3 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(10,10,10,0.9) 40%)",
          }}
        >
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileTap={{ scale: 0.97 }}
            onClick={share}
            className="glass-card glow-gold mx-auto flex w-full max-w-[420px] items-center justify-center gap-2 rounded-full py-3.5 font-display text-sm font-semibold"
            style={{ color: "#E5E5E5" }}
          >
            <Share2 className="h-4 w-4" style={{ color: "#C9A84C" }} />
            Share My Card
          </motion.button>
        </div>
      </div>
    </PageLayout>
  );
}
