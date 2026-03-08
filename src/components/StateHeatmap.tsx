import { motion } from "framer-motion";

const states = [
  { name: "Maharashtra", volume: 95, code: "MH", imports: 52, exports: 43 },
  { name: "Karnataka", volume: 82, code: "KA", imports: 38, exports: 44 },
  { name: "Tamil Nadu", volume: 75, code: "TN", imports: 35, exports: 40 },
  { name: "Delhi NCR", volume: 90, code: "DL", imports: 50, exports: 40 },
  { name: "Telangana", volume: 70, code: "TS", imports: 32, exports: 38 },
  { name: "Gujarat", volume: 55, code: "GJ", imports: 25, exports: 30 },
  { name: "West Bengal", volume: 45, code: "WB", imports: 20, exports: 25 },
  { name: "Kerala", volume: 40, code: "KL", imports: 18, exports: 22 },
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
    className="glass-card p-6 relative overflow-hidden h-full flex flex-col"
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
    <div className="mb-4">
      <h3 className="font-display text-lg text-foreground mb-1">State-wise Cargo Intensity</h3>
      <p className="text-xs text-muted-foreground">Relative cargo volume by origin state</p>
    </div>
    
    <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
      {states.map((state, i) => (
        <motion.div
          key={state.code}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className={`p-3 rounded-xl border ${getIntensity(state.volume)} transition-all duration-300 hover:scale-[1.03] cursor-default group`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono-data text-sm font-bold text-foreground">{state.code}</span>
            <span className="font-mono-data text-[10px] text-muted-foreground font-bold">{state.volume}%</span>
          </div>
          <span className="text-[10px] font-bold text-foreground/80 block mb-2 truncate">{state.name}</span>
          
          <div className="flex items-center gap-1 h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.4)]" 
              style={{ width: `${(state.imports / (state.imports + state.exports)) * 100}%` }} 
            />
            <div 
              className="h-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" 
              style={{ width: `${(state.exports / (state.imports + state.exports)) * 100}%` }} 
            />
          </div>
          <div className="flex justify-between mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[8px] font-bold text-primary">I: {state.imports}%</span>
            <span className="text-[8px] font-bold text-green-500">E: {state.exports}%</span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default StateHeatmap;
