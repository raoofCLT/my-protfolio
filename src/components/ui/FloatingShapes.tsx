import { motion } from "framer-motion";

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cinematic flowing gradient - red/gold like soharon */}
      <div className="absolute inset-0">
        {/* Main flowing shape */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[900px] h-[900px] opacity-[0.12]"
          style={{
            background:
              "radial-gradient(ellipse at center, #D4A542 0%, #8B3A1A 30%, transparent 65%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.95, 1],
            rotate: [0, 15, -10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Secondary warm accent */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-[600px] h-[600px] opacity-[0.08]"
          style={{
            background:
              "radial-gradient(ellipse at center, #C74B2A 0%, #6B2010 40%, transparent 65%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -50, 0],
            scale: [1, 1.1, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Deep gold bottom glow */}
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gold/30"
          style={{
            background:
              "radial-gradient(ellipse at center, #F2C572 0%, #D4A542 30%, transparent 60%)",
            filter: "blur(90px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Very subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
