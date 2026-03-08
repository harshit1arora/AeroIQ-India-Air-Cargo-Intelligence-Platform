import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CargoAirportsChart from "@/components/CargoAirportsChart";
import MonthlyTrendChart from "@/components/MonthlyTrendChart";
import CommodityDonut from "@/components/CommodityDonut";
import AeroBot from "@/components/AeroBot";
import DataSources from "@/components/DataSources";
import InsightFeed from "@/components/InsightFeed";
import Footer from "@/components/Footer";
import DataPipeline from "@/components/DataPipeline";
import HubComparison from "@/components/HubComparison";
import GlobalTicker from "@/components/GlobalTicker";

const Index = () => (
  <div className="min-h-screen bg-background bg-grid">
    <div className="fixed top-0 left-0 right-0 z-50">
      <GlobalTicker />
      <Navbar />
    </div>

    <main className="max-w-[1440px] mx-auto px-4 md:px-8 pt-32 lg:pt-40">
      <HeroSection />

      {/* Data Pipeline Visualization */}
      <section className="mt-24 relative isolate z-10 pb-8">
        <h3 className="font-display text-lg text-foreground mb-6">Unified AI Data Ingestion Pipeline</h3>
        <DataPipeline />
      </section>

      {/* Main Dashboard Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-24 relative isolate z-10">
        <div className="lg:col-span-3 flex flex-col gap-10">
          <CargoAirportsChart />
          <MonthlyTrendChart />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-10">
          <CommodityDonut />
          <HubComparison />
        </div>
      </section>

      {/* Data Sources */}
      <section className="mt-20">
        <DataSources />
      </section>

      {/* Insight Feed */}
      <section className="mt-20 pb-24">
        <InsightFeed />
      </section>
    </main>

    {/* Floating AeroBot */}
    <AeroBot />

    <Footer />
  </div>
);

export default Index;
