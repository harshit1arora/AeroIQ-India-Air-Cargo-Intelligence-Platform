import { Globe, RefreshCw, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const sources = [
  { name: "DGCA", url: "dgca.gov.in", desc: "Flight & cargo statistics", synced: "2 min ago" },
  { name: "AAI", url: "aai.aero", desc: "Airport traffic reports", synced: "5 min ago" },
  { name: "data.gov.in", url: "data.gov.in", desc: "Open government cargo datasets", synced: "12 min ago" },
];

const DataSources = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-display text-lg text-foreground">Connected Data Sources</h3>
      <div className="hidden sm:flex items-center gap-3 bg-muted/30 px-4 py-1.5 rounded-full border border-border/50">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <div className="overflow-hidden w-48 h-4 relative">
          <motion.div 
            animate={{ y: [0, -20, -40, -60, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full"
          >
            <p className="text-[9px] font-mono-data text-muted-foreground uppercase leading-5">Fetching DGCA Batch #482...</p>
            <p className="text-[9px] font-mono-data text-muted-foreground uppercase leading-5">AAI Terminal Syncing...</p>
            <p className="text-[9px] font-mono-data text-muted-foreground uppercase leading-5">Pharma Entities Identified...</p>
            <p className="text-[9px] font-mono-data text-muted-foreground uppercase leading-5">Ingesting data.gov.in Feed...</p>
          </motion.div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {sources.map((src, i) => (
        <motion.div
          key={src.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card-hover p-5"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              <span className="text-[10px] text-green-400 font-mono-data">Connected</span>
            </div>
          </div>
          <h4 className="font-display font-bold text-foreground">{src.name}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{src.url}</p>
          <p className="text-xs text-muted-foreground mt-2">{src.desc}</p>
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/30">
            <RefreshCw className="w-3 h-3 text-primary animate-sync" />
            <span className="text-[10px] text-muted-foreground font-mono-data">Synced {src.synced}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default DataSources;
