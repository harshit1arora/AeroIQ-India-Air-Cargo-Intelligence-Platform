import { Send, User, Mic, X, MessageSquare, ChevronRight, BarChart2, Settings, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AeroWingMaster } from "./AeroLogo";

// --- Full-Stack Mock Backend Engine ---

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: number;
}

const AeroBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("aerobot_history");
    return saved ? JSON.parse(saved) : [
      { id: "1", role: "bot", text: "Hello! I'm your AeroIQ intelligence assistant. How can I help you optimize your logistics today?", timestamp: Date.now() }
    ];
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("aerobot_history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", text, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulated "NLP & Backend" logic
    setTimeout(() => {
      let response = "I'm analyzing the latest cargo data from DGCA and AAI. Could you be more specific about which airport or commodity you're interested in?";
      const lowerText = text.toLowerCase();

      if (lowerText.includes("airport") || lowerText.includes("growth")) {
        response = "Based on my real-time analysis, DEL (+19%) and BLR (+16%) are the fastest growing hubs this quarter. Delhi's growth is largely due to its expanding cold-chain infrastructure.";
      } else if (lowerText.includes("commodity") || lowerText.includes("pharma")) {
        response = "Pharmaceuticals continue to lead with an 18% YoY growth, particularly through BOM and HYD. Electronics are seeing a massive 22% surge in Bengaluru.";
      } else if (lowerText.includes("state") || lowerText.includes("maharashtra")) {
        response = "Maharashtra leads with 95% cargo intensity, primarily driven by international exports from Mumbai and Pune hubs.";
      }

      const botMsg: Message = { id: (Date.now() + 1).toString(), role: "bot", text: response, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const clearHistory = () => {
    if (confirm("Clear all conversation history?")) {
      setMessages([{ id: "1", role: "bot", text: "History cleared. How can I help you?", timestamp: Date.now() }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-card p-0 glow-border-cyan w-[420px] max-w-[calc(100vw-3rem)] mb-4 shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col h-[600px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-border/30 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  <AeroWingMaster className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground font-bold tracking-tight">AeroIQ Assistant <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full ml-1 uppercase">v2.0</span></h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[10px] text-muted-foreground font-mono-data">AI Intelligence Active</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={clearHistory} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground" title="Clear History">
                  <History className="w-4 h-4" />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-grid/10">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-1 border border-primary/20">
                       <AeroWingMaster className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground font-medium rounded-tr-none"
                      : "bg-muted/80 text-foreground border border-border/50 rounded-tl-none"
                  }`}>
                    {msg.text}
                    <div className={`text-[9px] mt-1.5 opacity-60 font-mono-data ${msg.role === "user" ? "text-right" : "text-left"}`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-1 border border-primary/20">
                    <AeroWingMaster className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-muted/50 border border-border/30 px-4 py-3 rounded-2xl flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary typing-dot" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary typing-dot" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary typing-dot" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 border-t border-border/30 bg-background/50 backdrop-blur-md">
              <div className="flex flex-wrap gap-2 mb-4">
                {["Top 5 Growth Hubs", "Pharma Trends", "State Intensity"].map((q) => (
                  <button key={q} onClick={() => handleSend(q)} className="text-[10px] px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium">
                    {q}
                  </button>
                ))}
              </div>
              <div className="relative group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend(inputValue)}
                  placeholder="Analyze air cargo data..."
                  className="w-full bg-muted/50 border border-border/50 rounded-2xl px-5 py-4 pr-24 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all group-hover:bg-muted"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1.5">
                  <button className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors group/mic">
                    <Mic className="w-4 h-4 text-muted-foreground group-hover/mic:text-primary" />
                  </button>
                  <button onClick={() => handleSend(inputValue)} className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">
                    <Send className="w-4 h-4 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: isOpen ? 90 : 0 }}
        whileTap={{ scale: 0.9 }}
        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 relative ${
          isOpen ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <div className="relative">
            <AeroWingMaster className="w-9 h-9" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-primary animate-pulse shadow-glow" />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AeroBot;
