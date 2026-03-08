import { motion } from "framer-motion";
import { FileText, Download, Clock, Search, Filter, Share2, MoreVertical, Eye, FilePieChart, Layout } from "lucide-react";
import Navbar from "@/components/Navbar";
import { generateCargoReport } from "@/lib/reportGenerator";
import { toast } from "sonner";

const reports = [
  { id: "AIQ-9842", title: "Monthly Cargo Performance (June 2024)", date: "June 30, 2024", size: "2.4 MB", type: "PDF", status: "Generated" },
  { id: "AIQ-9841", title: "Pharma Logistics Optimization Report", date: "June 25, 2024", size: "1.8 MB", type: "PDF", status: "Generated" },
  { id: "AIQ-9840", title: "Delhi Hub Infrastructure Audit", date: "June 20, 2024", size: "3.2 MB", type: "PDF", status: "Archived" },
  { id: "AIQ-9839", title: "Q2 2024 Market Forecast Summary", date: "June 15, 2024", size: "1.1 MB", type: "PDF", status: "Generated" },
  { id: "AIQ-9838", title: "Commodity Growth Trends Analysis", date: "June 10, 2024", size: "2.9 MB", type: "PDF", status: "Generated" },
];

const ReportsPage = () => {
  const handleDownload = async () => {
    const toastId = "download-report-page";
    toast.loading("Compiling intelligence assets...", { id: toastId });
    
    setTimeout(() => {
      try {
        generateCargoReport();
        toast.success("Intelligence Report Downloaded", {
          id: toastId,
          description: "AeroIQ Market Analysis (PDF) is now available in your downloads.",
        });
      } catch (error) {
        toast.error("Export failed. Please try again.", { id: toastId });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 pt-24 pb-16">
        <header className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Intelligence Center</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Generated <span className="text-gradient">Market Reports</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Access and download professional intelligence reports, audit logs, and strategic market forecasts synthesized by our AI engine.
            </p>
          </div>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all group"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            Generate New Report
          </button>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search reports by ID or title..." 
              className="w-full bg-white border border-border/50 rounded-xl px-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
            />
          </div>
          <div className="flex gap-4">
            <button className="px-5 py-3 rounded-xl bg-white border border-border/50 flex items-center gap-2 text-sm font-bold text-muted-foreground hover:bg-muted/30 transition-all">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="px-5 py-3 rounded-xl bg-white border border-border/50 flex items-center gap-2 text-sm font-bold text-muted-foreground hover:bg-muted/30 transition-all">
              <FilePieChart className="w-4 h-4" />
              Export All
            </button>
          </div>
        </div>

        {/* Reports Table */}
        <div className="glass-card overflow-hidden border-primary/10 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/30 border-b border-border/50">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Report ID</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Title</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Generated Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">File Info</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {reports.map((report, i) => (
                  <motion.tr 
                    key={report.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="hover:bg-primary/5 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <span className="text-xs font-mono-data font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">{report.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{report.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {report.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold bg-muted px-1.5 py-0.5 rounded text-muted-foreground">{report.type}</span>
                        <span className="text-[10px] text-muted-foreground">{report.size}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white rounded-lg transition-colors text-muted-foreground hover:text-primary" title="Preview">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button onClick={handleDownload} className="p-2 hover:bg-white rounded-lg transition-colors text-muted-foreground hover:text-primary" title="Download">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white rounded-lg transition-colors text-muted-foreground hover:text-primary" title="Share">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white rounded-lg transition-colors text-muted-foreground" title="More">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State or Footer */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Showing 5 of 124 generated reports. <span className="text-primary font-bold cursor-pointer hover:underline">View Archived Reports</span>
        </p>
      </main>
    </div>
  );
};

export default ReportsPage;
