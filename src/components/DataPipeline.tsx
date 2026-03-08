import { motion } from "framer-motion";
import { Database, ArrowRight, Zap, Layers, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Database, label: "Extraction", color: "text-blue-400", desc: "DGCA, AAI, data.gov.in", status: "Active" },
  { icon: Layers, label: "Processing", color: "text-purple-400", desc: "Cleaning & Normalization", status: "Healthy" },
  { icon: Zap, label: "AI Analysis", color: "text-amber-400", desc: "Trend & Pattern Detection", status: "Syncing" },
  { icon: CheckCircle2, label: "Insights", color: "text-green-400", desc: "Actionable Intelligence", status: "Ready" },
];

const DataPipeline = () => (
  <div className="glass-card p-8 bg-gradient-to-r from-muted/20 to-transparent relative overflow-hidden">
    {/* Background Grid for Pipeline Feel */}
    <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]" />
    
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col md:flex-row items-center flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col items-center text-center group relative"
          >
            <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4 border border-white/10 group-hover:border-primary/50 transition-all shadow-lg group-hover:shadow-primary/20 ${step.color}`}>
              <step.icon className="w-8 h-8" />
              {/* Pulsing Status Dot */}
              <div className="absolute -top-1 -right-1 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  step.status === "Active" ? "bg-blue-400" : 
                  step.status === "Healthy" ? "bg-green-400" : 
                  step.status === "Syncing" ? "bg-amber-400" : "bg-emerald-400"
                }`} />
                <span className="text-[8px] font-bold text-white/70 uppercase tracking-tighter">{step.status}</span>
              </div>
            </div>
            <h4 className="font-bold text-foreground text-sm mb-1">{step.label}</h4>
            <p className="text-[10px] text-muted-foreground leading-tight max-w-[120px]">{step.desc}</p>
          </motion.div>
          
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center justify-center mx-4 my-4 md:my-0">
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default DataPipeline;