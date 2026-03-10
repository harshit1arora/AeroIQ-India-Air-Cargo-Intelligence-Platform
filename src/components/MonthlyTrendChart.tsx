import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Line } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const data = [
  { month: "Jan", domestic: 280, international: 180, forecast: null },
  { month: "Feb", domestic: 300, international: 190, forecast: null },
  { month: "Mar", domestic: 320, international: 200, forecast: null },
  { month: "Apr", domestic: 310, international: 195, forecast: null },
  { month: "May", domestic: 340, international: 210, forecast: null },
  { month: "Jun", domestic: 360, international: 220, forecast: null },
  { month: "Jul", domestic: 350, international: 230, forecast: null },
  { month: "Aug", domestic: 370, international: 240, forecast: null },
  { month: "Sep", domestic: 390, international: 250, forecast: null },
  { month: "Oct", domestic: 410, international: 260, forecast: null },
  { month: "Nov", domestic: 400, international: 270, forecast: null },
  { month: "Dec", domestic: 420, international: 280, forecast: 420 },
  { month: "Jan '25", domestic: null, international: null, forecast: 445 },
  { month: "Feb '25", domestic: null, international: null, forecast: 460 },
  { month: "Mar '25", domestic: null, international: null, forecast: 485 },
];

const MonthlyTrendChart = () => {
  const [showForecast, setShowForecast] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass-card p-6 relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-display text-lg text-foreground mb-1">Monthly Cargo Trend 2024</h3>
          <p className="text-xs text-muted-foreground">Domestic vs International Volume (in '000 MT)</p>
        </div>
        <button
          onClick={() => setShowForecast(!showForecast)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
            showForecast 
              ? "text-primary-foreground shadow-lg"
              : "bg-secondary/10 text-muted-foreground hover:bg-secondary/20"
          }`}
          style={showForecast ? {
            backgroundColor: 'hsl(var(--deloitte-primary-green))',
            boxShadow: '0 4px 12px rgba(134, 188, 37, 0.2)'
          } : {}}
        >
          <Sparkles className={`w-3 h-3 ${showForecast ? "animate-pulse" : ""}`} />
          {showForecast ? "Forecast Active" : "AI Forecast"}
        </button>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={showForecast ? data : data.slice(0, 12)}>
          <defs>
          </defs>
          <XAxis dataKey="month" tick={{ fill: "#A0A0A0", fontSize: 10, fontFamily: "DM Mono", fontWeight: 400 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#A0A0A0", fontSize: 10, fontFamily: "DM Mono", fontWeight: 400 }} axisLine={false} tickLine={false} />
          <Tooltip 
            contentStyle={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 0, fontFamily: "DM Mono", fontSize: 12, color: "#FFFFFF" }}
            itemStyle={{ color: "#FFFFFF" }}
          />
          <Area type="monotone" dataKey="domestic" stroke="#86BC25" fill="transparent" strokeWidth={2} animationDuration={1000} />
          <Area type="monotone" dataKey="international" stroke="#5a8a1a" fill="transparent" strokeWidth={2} animationDuration={1000} />
          {showForecast && (
            <Line 
              type="monotone" 
              dataKey="forecast" 
              stroke="#6BA820"
              strokeDasharray="5 5" 
              strokeWidth={2} 
              dot={{ r: 4, fill: "#6BA820" }}
              animationDuration={1500}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="flex flex-wrap gap-4 mt-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-3 rounded-full" style={{ background: "#86BC25" }} /> Domestic
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-3 rounded-full" style={{ background: "#6D6E71" }} /> International
        </div>
        {showForecast && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-xs font-medium"
            style={{ color: '#6BA820' }}
          >
            <div className="w-3 h-3 rounded-full border-2 border-dashed" style={{ borderColor: '#6BA820' }} /> AI Forecast (Predicted)
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MonthlyTrendChart;
