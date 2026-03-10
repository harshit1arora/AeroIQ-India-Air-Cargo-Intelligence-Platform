import { motion } from "framer-motion";
import { Brain, TrendingUp, AlertTriangle, Lightbulb, BarChart, PieChart, ArrowUpRight, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart as ReBarChart, Bar, Cell
} from 'recharts';

const data = [
  { name: 'Jan', imports: 220, exports: 180, growth: 12 },
  { name: 'Feb', imports: 140, exports: 160, growth: 15 },
  { name: 'Mar', imports: 320, exports: 280, growth: 18 },
  { name: 'Apr', imports: 450, exports: 350, growth: 22 },
  { name: 'May', imports: 240, exports: 260, growth: 20 },
  { name: 'Jun', imports: 480, exports: 420, growth: 25 },
];

const InsightsPage = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 pt-24 pb-16">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Brain className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">AeroIQ Intelligence</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI-Driven <span className="text-gradient">Market Insights</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Real-time analysis of India's air cargo trends, predictive forecasting, and strategic logistics recommendations powered by our custom-trained NLP models.
          </p>
        </header>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Forecast Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 glass-card p-8 border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold border border-primary/20">
                <Zap className="w-3 h-3 animate-pulse" />
                Live Forecasting
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Volume Breakdown (Q3 2024)
            </h3>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2a2a" />
                  <XAxis dataKey="name" stroke="#A0A0A0" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#A0A0A0" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a1a', 
                      borderRadius: '0px', 
                      border: '1px solid #2a2a2a',
                      backdropFilter: 'none',
                      color: '#FFFFFF'
                    }} 
                  />
                  <Area type="monotone" dataKey="imports" stackId="1" stroke="#86BC25" fillOpacity={0} fill="transparent" strokeWidth={2} />
                  <Area type="monotone" dataKey="exports" stackId="1" stroke="#5a8a1a" fillOpacity={0} fill="transparent" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="w-3 h-3 rounded bg-primary" /> Imports
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="w-3 h-3 rounded bg-[#5a8a1a]" /> Exports
              </div>
            </div>
          </motion.div>

          {/* AI Recommendation Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 border-primary/20 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Strategic Advisory
            </h3>
            
            <div className="space-y-6 flex-1">
              <div className="p-4 rounded-xl bg-white/90 border border-border/60 shadow-md">
                <p className="text-sm font-bold mb-2 flex items-center justify-between">
                  Route Optimization 
                  <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full">Recommended</span>
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Redirecting non-perishable cargo from BOM to MAA hubs could reduce latency by 14% based on current monsoon weather patterns.
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-white/90 border border-border/60 shadow-md">
                <p className="text-sm font-bold mb-2 flex items-center justify-between">
                  Capacity Management
                  <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full">Critical</span>
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Expected 22% surge in electronics from BLR hub next week. Pre-book additional 50MT capacity to avoid peak pricing.
                </p>
              </div>
            </div>
            
            <button className="mt-8 w-full py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Generate Detailed Advisory
            </button>
          </motion.div>
        </div>

        {/* Insight Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Predictive Accuracy", value: "94.8%", desc: "Based on historical correlation", icon: BarChart, color: "text-blue-500" },
            { label: "Potential Risk", value: "Low", desc: "No major supply chain disruptions", icon: AlertTriangle, color: "text-green-500" },
            { label: "Market Sentiment", value: "Bullish", desc: "12% increase in cross-border trade", icon: TrendingUp, color: "text-indigo-500" },
            { label: "Data Freshness", value: "Real-time", desc: "Last synced 4 minutes ago", icon: Zap, color: "text-amber-500" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="glass-card p-6 border-white shadow-xl hover:shadow-2xl transition-all"
            >
              <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">{item.label}</p>
              <h4 className="text-2xl font-bold mb-1">{item.value}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InsightsPage;
