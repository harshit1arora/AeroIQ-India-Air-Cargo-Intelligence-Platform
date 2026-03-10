import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";

const data = [
  { airport: "DEL", growth: 19 },
  { airport: "BLR", growth: 16 },
  { airport: "HYD", growth: 14 },
  { airport: "MAA", growth: 12 },
  { airport: "BOM", growth: 11 },
  { airport: "CCU", growth: 9 },
  { airport: "AMD", growth: 8 },
  { airport: "COK", growth: 7 },
  { airport: "PNQ", growth: 6 },
  { airport: "NAG", growth: 5 },
];

const getBarColor = (growth: number) => {
  // Deloitte color palette - green shades
  if (growth >= 15) return "#5FA51C";  // Darker green
  if (growth >= 10) return "#86BC25";  // Primary green
  if (growth >= 7) return "#A0CB41";   // Light green
  return "#C8E6C9";                     // Very light green
};

const CargoAirportsChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="glass-card p-6 border border-border rounded-none"
  >
    <h3 className="font-display text-lg text-foreground mb-1">Top 10 Cargo Airports by Growth</h3>
    <p className="text-xs text-muted-foreground mb-4">FY2024 Year-over-Year Growth Rate (%)</p>
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data} layout="vertical" margin={{ left: 10, right: 20 }}>
        <XAxis type="number" tick={{ fill: "#6D6E71", fontSize: 11, fontFamily: "DM Mono" }} axisLine={false} tickLine={false} />
        <YAxis dataKey="airport" type="category" tick={{ fill: "#6D6E71", fontSize: 12, fontFamily: "DM Mono" }} axisLine={false} tickLine={false} width={40} />
        <Tooltip
          contentStyle={{ background: "#F4F4F4", border: "1px solid #86BC25", borderRadius: 8, fontFamily: "DM Mono", fontSize: 12, color: "#1C1C1C" }}
          labelStyle={{ color: "#86BC25", fontWeight: "bold" }}
          formatter={(value: number) => [`${value}%`, "Growth"]}
        />
        <Bar dataKey="growth" radius={[0, 6, 6, 0]} animationDuration={1500}>
          {data.map((entry, index) => (
            <Cell key={index} fill={getBarColor(entry.growth)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
);

export default CargoAirportsChart;
