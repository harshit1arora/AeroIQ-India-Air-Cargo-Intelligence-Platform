import { motion } from "framer-motion";
import { Database, CheckCircle2, Clock, RefreshCw, Globe, ShieldCheck, Activity, Link as LinkIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

const sources = [
  { 
    name: "DGCA Statistics", 
    desc: "Directorate General of Civil Aviation - Official monthly air cargo traffic data.",
    status: "Healthy", 
    latency: "120ms", 
    frequency: "Monthly", 
    lastSync: "4m ago",
    type: "REST API",
    reliability: 0.99
  },
  { 
    name: "AAI Hub Reports", 
    desc: "Airports Authority of India - Real-time volume data from 125+ airports.",
    status: "Healthy", 
    latency: "85ms", 
    frequency: "Daily", 
    lastSync: "12m ago",
    type: "WebSocket",
    reliability: 0.98
  },
  { 
    name: "MoCA Dashboard", 
    desc: "Ministry of Civil Aviation - Policy updates and infrastructure development tracking.",
    status: "Healthy", 
    latency: "240ms", 
    frequency: "Weekly", 
    lastSync: "1h ago",
    type: "GraphQL",
    reliability: 0.95
  },
  { 
    name: "Custom Airport APIs", 
    desc: "Proprietary APIs for major private hubs like DEL, BOM, and BLR.",
    status: "Maintenance", 
    latency: "N/A", 
    frequency: "Real-time", 
    lastSync: "3h ago",
    type: "gRPC",
    reliability: 0.92
  },
];

const DataSourcesPage = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 pt-24 pb-16">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Database className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Data Infrastructure</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Intelligence <span className="text-gradient">Data Sources</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            AeroIQ aggregates data from official government portals and private airport hubs to provide a single source of truth for India's air cargo logistics.
          </p>
        </header>

        {/* Sync Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 border-green-500/20 bg-green-500/5">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-5 h-5 text-green-500" />
              <h3 className="font-bold text-foreground">Global Health</h3>
            </div>
            <p className="text-2xl font-bold text-green-500">98.2%</p>
            <p className="text-xs text-muted-foreground">Uptime across all data ingestion pipelines</p>
          </div>
          <div className="glass-card p-6 border-primary/20 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-5 h-5 text-primary animate-spin-slow" />
              <h3 className="font-bold text-foreground">Active Pipelines</h3>
            </div>
            <p className="text-2xl font-bold text-primary">12 Active</p>
            <p className="text-xs text-muted-foreground">Monitoring 425 data endpoints simultaneously</p>
          </div>
          <div className="glass-card p-6 border-indigo-500/20 bg-indigo-500/5">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-indigo-500" />
              <h3 className="font-bold text-foreground">Data Integrity</h3>
            </div>
            <p className="text-2xl font-bold text-indigo-500">Verified</p>
            <p className="text-xs text-muted-foreground">AES-256 encrypted end-to-end tunneling</p>
          </div>
        </div>

        {/* Sources List */}
        <div className="space-y-6">
          {sources.map((source, i) => (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="glass-card p-6 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-3 rounded-2xl ${source.status === 'Healthy' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-foreground">{source.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border ${
                        source.status === 'Healthy' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                      }`}>
                        {source.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{source.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 w-full lg:w-auto">
                  <div className="text-center lg:text-left">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Protocol</p>
                    <p className="text-sm font-mono-data text-foreground">{source.type}</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Latency</p>
                    <p className="text-sm font-mono-data text-foreground">{source.latency}</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Frequency</p>
                    <p className="text-sm font-mono-data text-foreground">{source.frequency}</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Last Sync</p>
                    <p className="text-sm font-mono-data text-primary font-bold">{source.lastSync}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full lg:w-auto">
                  <button className="flex-1 lg:flex-none px-4 py-2 rounded-xl bg-muted text-foreground text-xs font-bold hover:bg-muted/80 transition-all flex items-center justify-center gap-2">
                    <Clock className="w-3 h-3" />
                    History
                  </button>
                  <button className="flex-1 lg:flex-none px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    <LinkIcon className="w-3 h-3" />
                    Connect
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DataSourcesPage;
