import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { AeroWingMaster } from "@/components/AeroLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/30 bg-muted/20 py-12 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AeroWingMaster className="text-primary w-7 h-7" />
              <span className="font-display text-xl font-bold text-primary glow-text-cyan">
                AeroIQ
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering logistics stakeholders with AI-driven air cargo intelligence across India's aviation network.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Market Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Airport Analytics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commodity Insights</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">DGCA Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AAI Statistics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Government Open Data</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">User Guide</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground block mb-1">Developed by</span>
              <span className="font-display font-bold text-primary text-lg glow-text-cyan">Brainvoltzz</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground font-mono-data">
          <div>
            &copy; {currentYear} AeroIQ - Deloitte Hacksplosion. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;