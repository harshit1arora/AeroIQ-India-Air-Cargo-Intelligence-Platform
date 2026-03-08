import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Pharma", value: 28 },
  { name: "Electronics", value: 22 },
  { name: "Perishables", value: 18 },
  { name: "Automotive", value: 15 },
  { name: "Textiles", value: 10 },
  { name: "Others", value: 7 },
];

const COLORS = ["#2563EB", "#3B82F6", "#E68A00", "#F59E0B", "#7C3AED", "#6B7280"];

const CommodityDonut = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="glass-card p-6"
  >
    <h3 className="font-display text-lg text-foreground mb-1">Commodity Breakdown</h3>
    <p className="text-xs text-muted-foreground mb-4">Share of Air Cargo by Commodity Type</p>
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
          dataKey="value"
          animationDuration={1500}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, fontFamily: "DM Mono", fontSize: 12, color: "#1f2937" }} formatter={(v: number) => [`${v}%`, "Share"]} />
      </PieChart>
    </ResponsiveContainer>
    <div className="grid grid-cols-2 gap-2 mt-2">
      {data.map((item, i) => (
        <div key={item.name} className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: COLORS[i] }} />
          <span>{item.name}</span>
          <span className="font-mono-data ml-auto">{item.value}%</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default CommodityDonut;
