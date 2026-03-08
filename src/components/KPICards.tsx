import { Package, Plane, TrendingUp, ShieldCheck, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface KPIItem {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix: string;
  decimals: number;
  prefix: string;
  text?: string;
}

const kpis: KPIItem[] = [
  { icon: Package, label: "Total Cargo Volume", value: 4.2, suffix: "M MT", decimals: 1, prefix: "" },
  { icon: Plane, label: "Active Cargo Airports", value: 35, suffix: "", decimals: 0, prefix: "" },
  { icon: TrendingUp, label: "YoY Growth", value: 12.4, suffix: "%", decimals: 1, prefix: "+" },
  { icon: ShieldCheck, label: "Data Reliability", value: 98.2, suffix: "%", decimals: 1, prefix: "" },
];

const KPICards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {kpis.map((kpi, i) => (
      <motion.div
        key={kpi.label}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
        className="glass-card-hover p-5 group"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center animate-pulse-glow">
            <kpi.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{kpi.label}</span>
        </div>
        <div className="text-2xl font-bold text-foreground">
          {kpi.text ? (
            <span className="font-display text-primary">{kpi.text}</span>
          ) : (
            <AnimatedCounter end={kpi.value} suffix={kpi.suffix} prefix={kpi.prefix} decimals={kpi.decimals} />
          )}
        </div>
        {/* Mini sparkline placeholder */}
        <div className="mt-3 h-8 flex items-end gap-[2px]">
          {[40, 55, 35, 60, 50, 70, 65, 80, 75, 90, 85, 95].map((h, j) => (
            <motion.div
              key={j}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.6 + j * 0.05, duration: 0.3 }}
              className="flex-1 rounded-sm bg-primary/30 group-hover:bg-primary/50 transition-colors"
            />
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

export default KPICards;
