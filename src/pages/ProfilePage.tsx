import { motion } from "framer-motion";
import { User, Mail, Shield, Bell, Key, Globe, Camera, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      
      <main className="max-w-[1000px] mx-auto px-4 md:px-8 pt-32 pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Intelligence Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Avatar & Basic Info */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-2xl overflow-hidden group">
                  <User className="w-16 h-16 text-white" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-green-500 border-4 border-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>
              
              <h2 className="font-display text-2xl font-bold text-foreground">Harshit Arora</h2>
              <p className="text-sm text-muted-foreground font-mono-data mb-6">Lead Stakeholder</p>
              
              <div className="flex flex-col gap-2">
                <button className="w-full py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all">
                  Edit Profile
                </button>
                <button className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all">
                  View Public Page
                </button>
              </div>
            </motion.div>

            <div className="glass-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Security Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium">2FA Enabled</span>
                  </div>
                  <div className="w-8 h-4 bg-primary/20 rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-primary rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Key className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-medium">Last Login</span>
                  </div>
                  <span className="text-[10px] font-mono-data text-muted-foreground">2h ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Settings & Details */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-8">Account Settings</h3>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Email Address</label>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm">harshit.arora@deloitte.com</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Region</label>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">India Hub (APAC)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Notification Preferences</label>
                  <div className="space-y-3">
                    {[
                      { icon: Bell, label: "Cargo Volume Alerts", desc: "Get notified when major hubs exceed predicted growth" },
                      { icon: Shield, label: "Security Reports", desc: "Weekly summary of account access and integrity" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
                        <div className="flex items-center gap-4">
                          <item.icon className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                        <div className="w-10 h-5 bg-primary rounded-full relative">
                          <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex justify-end gap-4">
                <button className="px-6 py-2 rounded-xl text-sm font-medium hover:bg-white/5 transition-all">Cancel</button>
                <button className="px-6 py-2 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Save Changes
                </button>
              </div>
            </motion.div>

            <div className="glass-card p-8 border-destructive/20 bg-destructive/5">
              <h3 className="text-sm font-bold text-destructive uppercase tracking-widest mb-4">Danger Zone</h3>
              <p className="text-xs text-muted-foreground mb-6">Once you delete your account, there is no going back. Please be certain.</p>
              <button className="px-6 py-2 rounded-xl border border-destructive/50 text-destructive text-sm font-bold hover:bg-destructive hover:text-white transition-all">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;