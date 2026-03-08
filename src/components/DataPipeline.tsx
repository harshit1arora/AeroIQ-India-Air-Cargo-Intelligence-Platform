import { motion } from "framer-motion";
import { Database, ArrowRight, Zap, Layers, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Database, label: "Extraction", color: "text-blue-400", desc: "DGCA, AAI, data.gov.in" },
  { icon: Layers, label: "Processing", color: "text-purple-400", desc: "Cleaning & Normalization" },
  { icon: Zap, label: "AI Analysis", color: "text-amber-400", desc: "Trend & Pattern Detection" },
  { icon: CheckCircle2, label: "Insights", color: "text-green-400", desc: "Actionable Intelligence" },
];

const DataPipeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-8 mb-10 overflow-hidden relative"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col md:flex-row items-center gap-4 flex-1 w-full">
            <div className="flex flex-col items-center text-center">
              <div className={`w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-3 border border-border/50 shadow-lg group hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-7 h-7 ${step.color} group-hover:animate-pulse`} />
              </div>
              <h4 className="font-display font-bold text-foreground text-sm">{step.label}</h4>
              <p className="text-[10px] text-muted-foreground mt-1">{step.desc}</p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center flex-1">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="h-[2px] bg-gradient-to-r from-primary/50 to-transparent relative"
                >
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-primary animate-bounce-x" />
                </motion.div>
              </div>
            )}
            
            {index < steps.length - 1 && (
              <div className="md:hidden flex items-center justify-center py-2">
                <ArrowRight className="w-4 h-4 text-primary rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mt-8 pt-6 border-t border-border/30 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono-data text-muted-foreground uppercase tracking-widest">Pipeline Live & Synchronized</span>
        </div>
        <button className="text-[10px] text-primary hover:underline font-mono-data uppercase tracking-widest">
          View Raw Logs
        </button>
      </div>
    </motion.div>
  );
};

export default DataPipeline;