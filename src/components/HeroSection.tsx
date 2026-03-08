import { motion } from "framer-motion";
import KPICards from "./KPICards";
import { AeroWingMaster } from "@/components/AeroLogo";

const AeroVisual = () => (
  <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
    {/* Cinematic Atmosphere (Cloud & Sky Depth) */}
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full rounded-full bg-primary/20 blur-[140px]"
      />
      {/* Distant Orbiting Data Nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-primary/5 rounded-full"
      />
    </div>

    {/* Production-Level Cargo Lifter Image */}
    <motion.div
      animate={{ y: [0, -40, 0], rotate: [0, 1, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-20"
    >
      <div className="relative p-2 md:p-4 rounded-[3rem] bg-white/40 border border-white/60 backdrop-blur-3xl shadow-[0_60px_120px_-30px_rgba(37,99,235,0.3)] group overflow-hidden">
        <div className="relative rounded-[2.5rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop" 
            alt="Cargo Lifter" 
            className="w-full max-w-[500px] h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay Gradient for integration */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
        </div>

        {/* Realistic Contrails (Simulated with CSS) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none">
          <motion.div
            animate={{ x: [40, -300], opacity: [0, 0.4, 0], scale: [1, 6], filter: ["blur(2px)", "blur(20px)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
            className="absolute top-[-40px] w-32 h-3 bg-white/50 rounded-full"
          />
          <motion.div
            animate={{ x: [60, -250], opacity: [0, 0.3, 0], scale: [1, 8], filter: ["blur(2px)", "blur(25px)"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
            className="absolute top-[-20px] w-24 h-2 bg-white/40 rounded-full"
          />
        </div>
      </div>

      {/* Modern Status Badge (Integrated Intelligence) */}
      <motion.div
        animate={{ opacity: [0, 1, 0], y: [-20, -55], scale: [0.9, 1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        className="absolute -top-20 -right-20 bg-white/95 backdrop-blur-2xl px-6 py-3.5 rounded-3xl border border-primary/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex items-center gap-4 group/badge"
      >
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.7)] animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
        </div>
        <div>
          <span className="text-[11px] font-bold text-foreground tracking-[0.15em] uppercase font-mono-data block leading-none mb-1">Fleet Sync v2.4</span>
          <span className="text-[9px] text-primary/80 font-mono-data uppercase tracking-wider font-bold">Encrypted Data Core</span>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

const HeroSection = () => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
    {/* Background Radar & Glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="relative w-[800px] h-[800px] opacity-[0.05]">
        <div className="absolute inset-0 rounded-full border border-primary/20" />
        <div className="absolute inset-[20%] rounded-full border border-primary/15" />
        <div className="absolute inset-[40%] rounded-full border border-primary/10" />
        <div
          className="absolute top-1/2 left-1/2 w-1/2 h-[2px] origin-left animate-radar"
          style={{ background: "linear-gradient(90deg, hsl(var(--primary) / 0.3), transparent)" }}
        />
      </div>
    </div>

    <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-16">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 mb-6 shadow-xl shadow-primary/5"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono-data text-primary uppercase tracking-widest font-bold">Live Intelligence Active</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-2"
          >
            <span className="text-sm font-bold text-primary/80 uppercase tracking-widest font-mono-data">Welcome Back, Harshit Arora</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 120, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tighter leading-[1.1]"
          >
            India Air Cargo <br />
            <span className="text-gradient">Intelligence Reimagined</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl text-sm md:text-lg leading-relaxed font-medium mb-10"
          >
            Harnessing Generative AI to unify scattered DGCA, AAI, and Government datasets into actionable logistics insights for the next generation of aviation trade.
          </motion.p>
        </div>

        {/* Right Side: Amazing Airplane Visual */}
        <div className="flex-1 relative w-full lg:w-auto flex justify-center lg:justify-end">
          <AeroVisual />
        </div>
      </div>

      <KPICards />
    </div>
  </section>
);

export default HeroSection;
