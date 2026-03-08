import { motion } from "framer-motion";

const states = [
  { name: "Maharashtra", volume: 95, code: "MH" },
  { name: "Karnataka", volume: 82, code: "KA" },
  { name: "Tamil Nadu", volume: 75, code: "TN" },
  { name: "Delhi NCR", volume: 90, code: "DL" },
  { name: "Telangana", volume: 70, code: "TS" },
  { name: "Gujarat", volume: 55, code: "GJ" },
  { name: "West Bengal", volume: 45, code: "WB" },
  { name: "Kerala", volume: 40, code: "KL" },
];

const getIntensity = (volume: number) => {
  if (volume >= 85) return "bg-primary/70 border-primary/40";
  if (volume >= 65) return "bg-primary/40 border-primary/25";
  if (volume >= 45) return "bg-primary/20 border-primary/15";
  return "bg-primary/10 border-primary/10";
};

const StateHeatmap = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="glass-card p-6 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.path 
          d="M10 10 Q 50 50 90 90" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-primary"
        />
        <motion.path 
          d="M90 10 Q 50 50 10 90" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="text-secondary"
        />
      </svg>
    </div>
    <h3 className="font-display text-lg text-foreground mb-1">State-wise Cargo Intensity</h3>
    <p className="text-xs text-muted-foreground mb-4">Relative cargo volume by origin state</p>
    <div className="grid grid-cols-2 gap-3">
      {states.map((state, i) => (
        <motion.div
          key={state.code}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className={`p-3 rounded-lg border ${getIntensity(state.volume)} transition-all duration-300 hover:scale-105 cursor-default`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono-data text-sm font-bold text-foreground">{state.code}</span>
            <span className="font-mono-data text-xs text-muted-foreground">{state.volume}%</span>
          </div>
          <span className="text-xs text-muted-foreground mt-1 block">{state.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default StateHeatmap;
