import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CargoAirportsChart from "@/components/CargoAirportsChart";
import MonthlyTrendChart from "@/components/MonthlyTrendChart";
import CommodityDonut from "@/components/CommodityDonut";
import StateHeatmap from "@/components/StateHeatmap";
import AeroBot from "@/components/AeroBot";
import DataSources from "@/components/DataSources";
import InsightFeed from "@/components/InsightFeed";
import Footer from "@/components/Footer";
import DataPipeline from "@/components/DataPipeline";
import HubComparison from "@/components/HubComparison";

const Index = () => (
  <div className="min-h-screen bg-background bg-grid">
    <Navbar />

    <main className="max-w-[1440px] mx-auto px-4 md:px-8">
      <HeroSection />

      {/* Data Pipeline Visualization */}
      <section className="mt-8">
        <h3 className="font-display text-lg text-foreground mb-4">Unified AI Data Ingestion Pipeline</h3>
        <DataPipeline />
      </section>

      {/* Main Dashboard Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <CargoAirportsChart />
          <MonthlyTrendChart />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <CommodityDonut />
          <StateHeatmap />
          <HubComparison />
        </div>
      </section>

      {/* Data Sources */}
      <section className="mt-10">
        <DataSources />
      </section>

      {/* Insight Feed */}
      <section className="mt-10 pb-16">
        <InsightFeed />
      </section>
    </main>

    {/* Floating AeroBot */}
    <AeroBot />

    <Footer />
  </div>
);

export default Index;
