import { motion } from "framer-motion";
import { Zap, TrendingUp, AlertTriangle, Activity } from "lucide-react";

const tickerItems = [
  { icon: Zap, text: "DEL: Cargo throughput up 14% this hour", color: "text-blue-400" },
  { icon: TrendingUp, text: "BOM: Export capacity optimized by 12%", color: "text-green-400" },
  { icon: Activity, text: "AI Analysis: BLR-MAA route latency reduced", color: "text-purple-400" },
  { icon: AlertTriangle, text: "Logistics: Cold-chain alert for HYD pharma hub", color: "text-amber-400" },
  { icon: Zap, text: "Market: 18% increase in cross-border tech trade", color: "text-cyan-400" },
  { icon: Activity, text: "System: DGCA & AAI ingestion sync successful", color: "text-indigo-400" },
];

const GlobalTicker = () => {
  return (
    <div className="w-full bg-[#0F172A] backdrop-blur-md border-b border-white/10 py-2 overflow-hidden flex items-center shadow-lg">
      <div className="flex-shrink-0 px-6 border-r border-white/10 flex items-center gap-2 z-10 bg-[#0F172A] shadow-[10px_0_15px_rgba(15,23,42,0.9)]">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Live Intelligence</span>
      </div>
      
      <div className="relative flex flex-1 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 whitespace-nowrap pl-12"
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
              <span className="text-xs font-medium text-white/70 tracking-wide font-mono-data uppercase">
                {item.text}
              </span>
              <span className="text-white/20 ml-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalTicker;
