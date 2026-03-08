import { BarChart3, Brain, Database, FileText, User, Settings, LogOut, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { generateCargoReport } from "@/lib/reportGenerator";
import { AeroWingMaster } from "@/components/AeroLogo";

const navLinks = [
  { label: "Dashboard", icon: BarChart3, path: "/" },
  { label: "AI Insights", icon: Brain, path: "/insights" },
  { label: "Data Sources", icon: Database, path: "/data-sources" },
  { label: "Reports", icon: FileText, path: "/reports" },
];

const Navbar = () => {
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleDownload = async () => {
    const toastId = "download-report";
    toast.loading("Synthesizing AI Market Intelligence...", {
      id: toastId,
    });
    
    // Slight delay to simulate complex AI analysis
    setTimeout(() => {
      try {
        console.log("Starting PDF generation...");
        generateCargoReport();
        console.log("PDF generation successful.");
        toast.success("Intelligence Report Downloaded", {
          id: toastId,
          description: "Your official AeroIQ Analysis (PDF) is now available in your downloads.",
        });
      } catch (error) {
        console.error("PDF Generation Error:", error);
        toast.error("Generation Failed. Please check console.", {
          id: toastId,
        });
      }
    }, 1800);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative z-50 glass-navbar px-6 py-3 border-b border-white/5 shadow-lg"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <AeroWingMaster className="text-white w-7 h-7" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-gradient">
            AeroIQ
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-muted/20 p-1 rounded-2xl border border-border/50">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`px-5 py-2 text-sm font-semibold transition-all rounded-xl flex items-center gap-2 ${
                location.pathname === link.path 
                ? "bg-white text-primary shadow-sm border border-border/50" 
                : "text-muted-foreground hover:text-foreground hover:bg-white/50"
              }`}
            >
              <link.icon className={`w-4 h-4 ${location.pathname === link.path ? "text-primary" : ""}`} />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleDownload}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white font-bold text-sm hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4" />
            Export Intelligence
          </button>

          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-primary/50 transition-all group overflow-hidden"
            >
              <User className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-56 glass-card p-2 border border-white/10 shadow-2xl"
                >
                  <div className="px-3 py-2 border-b border-white/5 mb-2">
                    <p className="text-sm font-bold">Harshit Arora</p>
                    <p className="text-[10px] text-muted-foreground font-mono-data">Lead Stakeholder</p>
                  </div>
                  <Link 
                    to="/profile" 
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                  >
                    <User className="w-4 h-4" /> Profile Settings
                  </Link>
                  <Link 
                    to="/admin" 
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                  >
                    <Settings className="w-4 h-4" /> Admin Console
                  </Link>
                  <button 
                    onClick={() => {
                      setShowProfileMenu(false);
                      toast.info("Logged out successfully");
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-all mt-2"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
