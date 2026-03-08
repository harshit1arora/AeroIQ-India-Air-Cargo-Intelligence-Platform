import { motion } from "framer-motion";
import { BarChart3, Users, MessageSquare, TrendingUp, ShieldCheck, Database, ArrowLeft, Palette, Layout, Download, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { AeroWingMaster, SkyLiftLogo } from "@/components/AeroLogo";

const stats = [
  { label: "Total Queries", value: "1,284", icon: MessageSquare, trend: "+12%" },
  { label: "Active Users", value: "452", icon: Users, trend: "+5%" },
  { label: "Bot Accuracy", value: "94.2%", icon: ShieldCheck, trend: "+2%" },
  { label: "Data Latency", value: "140ms", icon: Database, trend: "-10%" },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2 text-primary text-sm font-medium hover:underline mb-2">
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
            <h1 className="font-display text-3xl font-bold text-foreground">AeroIQ <span className="text-primary">Admin Control</span></h1>
            <p className="text-muted-foreground text-sm">Intelligence analytics and brand management</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium border border-border/50 hover:bg-muted/80 transition-colors">
              Brand Audit
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Export All Assets
            </button>
          </div>
        </div>

        {/* Brand Style Guide Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-0 mb-10 border-primary/20 overflow-hidden"
        >
          <div className="bg-primary/5 border-b border-border/50 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">AeroIQ Visual Identity System</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
              Our brand represents the intersection of heavy-lift logistics and high-speed data intelligence. The "Wing-Node" logo is our primary identifier, signifying aerodynamic efficiency and digital connectivity.
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column: Specs */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6">Logo Anatomy</h3>
                  <div className="relative p-6 rounded-2xl bg-white border border-border/50 flex items-center justify-center h-48 group">
                    <AeroWingMaster className="w-24 h-24 text-primary" />
                    {/* Visual Callouts */}
                    <div className="absolute top-4 right-4 text-[8px] font-mono-data text-muted-foreground border-l border-t p-1">ENGINE_NODE</div>
                    <div className="absolute bottom-10 left-4 text-[8px] font-mono-data text-muted-foreground border-r border-b p-1">WIND_PROFILE</div>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-4 italic">Maintain a clear space of at least 20% of the logo's width around all sides.</p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6">Color Palette</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="aspect-square rounded-xl bg-[#3B82F6] shadow-lg shadow-blue-500/20" />
                      <p className="text-[9px] font-bold text-foreground">AERO_BLUE</p>
                      <p className="text-[8px] font-mono-data text-muted-foreground">HEX: #3B82F6</p>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-square rounded-xl bg-[#8B5CF6] shadow-lg shadow-purple-500/20" />
                      <p className="text-[9px] font-bold text-foreground">PULSE_PURPLE</p>
                      <p className="text-[8px] font-mono-data text-muted-foreground">HEX: #8B5CF6</p>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-square rounded-xl bg-[#0F172A] shadow-lg" />
                      <p className="text-[9px] font-bold text-foreground">DEEP_SLATE</p>
                      <p className="text-[8px] font-mono-data text-muted-foreground">HEX: #0F172A</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column: Variations */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6">Approved Variations</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-border/30 flex flex-col items-center gap-3">
                      <AeroWingMaster className="w-10 h-10 text-primary" />
                      <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Primary</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-border/30 flex flex-col items-center gap-3">
                      <AeroWingMaster className="w-10 h-10 text-white" />
                      <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">Reverse</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-border/30 flex flex-col items-center gap-3">
                      <SkyLiftLogo className="w-10 h-10 text-slate-400" />
                      <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Icon Only</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-border/30 flex flex-col items-center gap-3">
                      <div className="flex items-center gap-2">
                        <AeroWingMaster className="w-6 h-6 text-primary" />
                        <span className="font-display font-bold text-xs tracking-tighter">AeroIQ</span>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Wordmark</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6">Typography</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-muted/30">
                      <p className="font-display text-lg font-extrabold text-foreground mb-1 italic">AeroIQ Display</p>
                      <p className="text-[9px] text-muted-foreground">Plus Jakarta Sans • Extra Bold Italic</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30">
                      <p className="font-mono-data text-sm font-medium text-primary mb-1">DATA_STREAM_v2.0</p>
                      <p className="text-[9px] text-muted-foreground">JetBrains Mono • Medium</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Assets & Do's/Don'ts */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6">Asset Library</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-white border border-border/50 hover:border-primary/50 transition-all group shadow-sm">
                      <div className="flex items-center gap-3">
                        <Layout className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        <span className="text-xs font-bold text-foreground">Master_Logo.svg</span>
                      </div>
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-white border border-border/50 hover:border-primary/50 transition-all group shadow-sm">
                      <div className="flex items-center gap-3">
                        <Layout className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        <span className="text-xs font-bold text-foreground">Brand_Guidelines.pdf</span>
                      </div>
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-white border border-border/50 hover:border-primary/50 transition-all group shadow-sm">
                      <div className="flex items-center gap-3">
                        <Layout className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        <span className="text-xs font-bold text-foreground">UI_Icon_Pack.zip</span>
                      </div>
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-500 mb-6">Brand Integrity</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Do not stretch or distort the logo aspect ratio.
                    </li>
                    <li className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Do not use unapproved brand colors.
                    </li>
                    <li className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Do not place logo on busy photographic backgrounds.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Intelligence Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className={`text-xs font-bold font-mono-data ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-blue-500'}`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Conversations */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-6">Recent Intelligence Queries</h3>
              <div className="space-y-4">
                {[
                  { user: "User_482", query: "Top 5 cargo airports by growth", intent: "Airport Analytics", score: 0.98 },
                  { user: "Logistics_Hub", query: "Which commodities drive air cargo growth in India?", intent: "Commodity Insights", score: 0.96 },
                  { user: "Trade_Analyst", query: "State-wise cargo trends for Maharashtra", intent: "Regional Analysis", score: 0.94 },
                  { user: "User_129", query: "Forecast for next quarter international volume", intent: "Predictive Forecast", score: 0.92 },
                ].map((q, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border/30 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold">
                        {q.user.slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{q.query}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{q.intent}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-green-500">{(q.score * 100).toFixed(0)}%</div>
                      <div className="text-[9px] text-muted-foreground uppercase tracking-widest">Confidence</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bot Training & Knowledge */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Knowledge Sources</h3>
              <div className="space-y-3">
                {[
                  { source: "DGCA Monthly Reports", status: "Synced", color: "text-green-500" },
                  { source: "AAI Cargo Stats", status: "Synced", color: "text-green-500" },
                  { source: "Gov Open Data Portals", status: "Updating", color: "text-amber-500" },
                  { source: "Custom Airport APIs", status: "Offline", color: "text-red-500" },
                ].map((src, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <span className="text-xs font-medium">{src.source}</span>
                    <span className={`text-[10px] font-bold uppercase ${src.color}`}>{src.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-bold text-foreground">NLP Integrity</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Current model (v2.8) is performing 14% better on entity extraction compared to v2.4.</p>
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div className="bg-primary h-2 rounded-full w-[94%]" />
              </div>
              <div className="flex justify-between text-[10px] font-mono-data text-muted-foreground">
                <span>94.2% Accuracy</span>
                <span>Target: 98%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;