import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, TrendingUp, Package, Plane } from "lucide-react";

const airportData = {
  DEL: { name: "Delhi", growth: 19, volume: 920, top: "Electronics", imports: 520, exports: 400 },
  BOM: { name: "Mumbai", growth: 11, volume: 850, top: "Pharma", imports: 410, exports: 440 },
  BLR: { name: "Bengaluru", growth: 16, volume: 410, top: "Perishables", imports: 190, exports: 220 },
  HYD: { name: "Hyderabad", growth: 14, volume: 380, top: "Pharma", imports: 170, exports: 210 },
  MAA: { name: "Chennai", growth: 12, volume: 350, top: "Automotive", imports: 180, exports: 170 },
};

type AirportCode = keyof typeof airportData;

const HubComparison = () => {
  const [hub1, setHub1] = useState<AirportCode>("DEL");
  const [hub2, setHub2] = useState<AirportCode>("BOM");

  const h1 = airportData[hub1];
  const h2 = airportData[hub2];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <ArrowLeftRight className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-lg text-foreground">Hub Comparison Analysis</h3>
          <p className="text-xs text-muted-foreground">Select two hubs to compare performance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Hub 1 */}
        <div className="space-y-6">
          <select 
            value={hub1} 
            onChange={(e) => setHub1(e.target.value as AirportCode)}
            className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {Object.keys(airportData).map((code) => (
              <option key={code} value={code}>{airportData[code as AirportCode].name} ({code})</option>
            ))}
          </select>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" /> Growth Rate
              </div>
              <div className="text-2xl font-bold text-primary">+{h1.growth}%</div>
            </div>
            <div className="p-4 rounded-xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                <Package className="w-3.5 h-3.5" /> Annual Volume
              </div>
              <div className="text-2xl font-bold text-foreground">{h1.volume}K MT</div>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase">Imports</span>
                  <span className="text-xs font-bold text-primary">{h1.imports}K</span>
                </div>
                <div className="w-px h-6 bg-border/50" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase">Exports</span>
                  <span className="text-xs font-bold text-green-500">{h1.exports}K</span>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                <Plane className="w-3.5 h-3.5" /> Top Commodity
              </div>
              <div className="text-xl font-display text-secondary">{h1.top}</div>
            </div>
          </div>
        </div>

        {/* Hub 2 */}
        <div className="space-y-6">
          <select 
            value={hub2} 
            onChange={(e) => setHub2(e.target.value as AirportCode)}
            className="w-full bg-white/80 border border-border rounded-lg px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
          >
            {Object.keys(airportData).map((code) => (
              <option key={code} value={code}>{airportData[code as AirportCode].name} ({code})</option>
            ))}
          </select>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" /> Growth Rate
              </div>
              <div className="text-2xl font-bold text-primary">+{h2.growth}%</div>
            </div>
            <div className="p-4 rounded-xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                <Package className="w-3.5 h-3.5" /> Annual Volume
              </div>
              <div className="text-2xl font-bold text-foreground">{h2.volume}K MT</div>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase">Imports</span>
                  <span className="text-xs font-bold text-primary">{h2.imports}K</span>
                </div>
                <div className="w-px h-6 bg-border/50" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase">Exports</span>
                  <span className="text-xs font-bold text-green-500">{h2.exports}K</span>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                <Plane className="w-3.5 h-3.5" /> Top Commodity
              </div>
              <div className="text-xl font-display text-secondary">{h2.top}</div>
            </div>
          </div>
        </div>

        {/* VS Indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex w-10 h-10 rounded-full bg-primary items-center justify-center text-primary-foreground font-bold italic shadow-xl shadow-primary/30 z-20">
          VS
        </div>
      </div>
    </motion.div>
  );
};

export default HubComparison;