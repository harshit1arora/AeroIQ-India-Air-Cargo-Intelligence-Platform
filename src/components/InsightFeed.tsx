import { TrendingUp, TrendingDown, Zap } from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  { icon: TrendingUp, text: "Pharma exports via BOM up 23% this quarter", type: "up" as const },
  { icon: TrendingDown, text: "Perishables via MAA declined 8% — investigate cold chain", type: "down" as const },
  { icon: Zap, text: "DEL is the fastest growing cargo hub in North India", type: "neutral" as const },
];

const colorMap = {
  up: "text-green-400 bg-green-400/10",
  down: "text-red-400 bg-red-400/10",
  neutral: "text-primary bg-primary/10",
};

const InsightFeed = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="font-display text-lg text-foreground mb-4">AI-Generated Insights</h3>
    <div className="space-y-3">
      {insights.map((insight, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.4 }}
          className="glass-card-hover p-4 flex items-start gap-3"
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${colorMap[insight.type]}`}>
            <insight.icon className="w-4 h-4" />
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">{insight.text}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default InsightFeed;
