import { motion } from "framer-motion";
import { Zap, TrendingUp, AlertTriangle, Activity } from "lucide-react";

const tickerItems = [
  { icon: Zap, text: "DEL: Cargo throughput up 14% this hour", color: "text-blue-400" },
  { icon: TrendingUp, text: "BOM: Export capacity optimized by 12%", color: "text-emerald-400" },
  { icon: Activity, text: "AI Analysis: BLR-MAA route latency reduced", color: "text-green-500" },
  { icon: AlertTriangle, text: "Logistics: Cold-chain alert for HYD pharma hub", color: "text-yellow-500" },
  { icon: Zap, text: "Market: 18% increase in cross-border tech trade", color: "text-cyan-400" },
  { icon: Activity, text: "System: DGCA & AAI ingestion sync successful", color: "text-blue-500" },
];

const GlobalTicker = () => {
  return (
    <div className="w-full border-b py-2 overflow-hidden flex items-center" style={{ backgroundColor: '#000000', borderColor: '#2a2a2a' }}>
      <div className="flex-shrink-0 px-6 border-r flex items-center gap-2 z-10" style={{ backgroundColor: '#000000', borderColor: '#2a2a2a' }}>
        <div className="w-2 h-2 bg-red-500 animate-pulse" />
        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]" style={{ fontWeight: 700 }}>Live Intelligence</span>
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
