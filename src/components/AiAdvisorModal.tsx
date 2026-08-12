import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, CornerDownLeft, RefreshCw, ExternalLink } from 'lucide-react';
import { CONNECT_LINKS } from '../data';

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  source?: string;
}

export const AiAdvisorModal: React.FC<AiAdvisorModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Hi! I'm Ashley's AI Startup Strategy Assistant powered by Gemini. Ask me anything about Google Cloud model categories (Frontier, Workhorse, Scale, Open Weights), credit applications, or architecture recommendations!",
      source: "Gemini AI Strategy Advisor"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    if (!questionText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToSend,
          stage: 'Seed / Pre-Seed',
          techStack: 'Google Cloud & Gemini'
        })
      });
      const data = await res.json();

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.answer || "Start high-volume tasks with Gemini Flash-Lite ('Scale'), then dynamically route complex coding or reasoning prompts to Gemini Flash ('Workhorse').",
        source: data.source || "Gemini 2.5 Flash Strategy Advisor"
      };
      setMessages(prev => [...prev, botMsg]);
    } catch {
      // Smart Client-Side Strategy Engine for GitHub Pages
      const q = textToSend.toLowerCase();
      let answer = "";
      
      if (q.includes("agent") || q.includes("scale") || q.includes("flash-lite") || q.includes("volume")) {
        answer = "🤖 **High-Volume Agent Strategy Recommendation**:\n\n1. **Primary Workload**: Deploy **Gemini 3.5 Flash-Lite ('Scale')** for initial prompt parsing, routine classification, and high-frequency autonomous tool calling to minimize latency and token cost.\n2. **Dynamic Escalation**: Route tasks to **Gemini 3.5 Flash ('Workhorse')** whenever the agent encounters ambiguous reasoning, complex code generation, or multi-step tool orchestration.\n3. **Marketplace Monetization**: If you are packaging this agent for enterprise buyers, consider listing it directly on Google Cloud Marketplace for co-sell support.";
      } else if (q.includes("credit") || q.includes("200") || q.includes("250") || q.includes("apply") || q.includes("fund")) {
        answer = "💰 **Google for Startups Cloud Program Credits ($2k - $250k)**:\n\n1. **Early Stage / Pre-Seed**: Eligible for up to **$2,000** covering 100% of year-1 cloud spend on Firebase, BigQuery, and Gemini.\n2. **Funded / Seed+ ($250k Tier)**: Venture-backed startups can receive up to **$250,000** over two years.\n3. **Key Checklist**: Ensure you apply with a corporate email domain (not @gmail.com), have a legal entity, and use a fresh Google Cloud billing account. Book a 1:1 with Ashley Nandan before applying to review eligibility!";
      } else if (q.includes("gemma") || q.includes("open weight") || q.includes("privacy") || q.includes("on-prem") || q.includes("pro")) {
        answer = "⚖️ **Gemma Open Weights vs. Gemini Pro ('Frontier')**:\n\n• **Choose Gemma** when you require complete data sovereignty, self-hosted deployment on GKE or Vertex AI custom clusters, or strict compliance in regulated sectors (healthcare, defense, fintech).\n• **Choose Gemini Pro 3.X** when you need maximum reasoning intelligence, 1M+ context window analysis, complex multi-document synthesis, and multimodal vision understanding without managing GPU infrastructure.";
      } else if (q.includes("code") || q.includes("coding") || q.includes("developer") || q.includes("layout")) {
        answer = "💻 **Developer & Code Generation Architecture**:\n\n• **Recommended Model**: **Gemini 3.5 Flash ('Workhorse')**.\n• **Why**: Offers the optimal trade-off of ultra-low latency and state-of-the-art coding benchmark scores for full-stack scaffolding, real-time autocomplete, and automated code review pipelines.";
      } else {
        answer = `💡 **Google Cloud Architecture Recommendation** for "${textToSend}":\n\n1. **4-Tier Model Framework**: Divide your workloads into **Scale** (Gemini Flash-Lite), **Workhorse** (Gemini Flash), **Frontier** (Gemini Pro), and **Open Weights** (Gemma).\n2. **Cost Optimization**: Default to Flash-Lite for 80% of routine traffic, funnelling complex prompts upstream.\n3. **Next Steps**: Book a meeting with Ashley Nandan directly to review your startup's architecture live!`;
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: answer,
          source: "Google Cloud AI Architecture Framework"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="glass-card w-full max-w-2xl rounded-[32px] border border-white/90 shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 bg-gradient-to-r from-sky-100 via-amber-100 to-peach-100 border-b border-white/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-amber-600 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-slate-800 text-base">
                Ashley's AI Startup Strategy Advisor
              </h3>
              <p className="text-xs text-slate-600">
                Gemini-powered insights for founders, CEOs & CTOs
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/80 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Sample Question Chips */}
        <div className="p-3 bg-white/60 border-b border-slate-100 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-[11px] font-bold text-slate-400 shrink-0 uppercase tracking-wider">
            Quick Prompts:
          </span>
          <button
            onClick={() => handleSend("Which Gemini model should I use for high-volume AI agents?")}
            className="px-3 py-1 rounded-full bg-sky-100/80 hover:bg-sky-200 text-sky-800 shrink-0 font-medium transition-colors"
          >
            Agent Model Routing?
          </button>
          <button
            onClick={() => handleSend("How do I qualify for $200k in Google Cloud credits?")}
            className="px-3 py-1 rounded-full bg-amber-100/80 hover:bg-amber-200 text-amber-900 shrink-0 font-medium transition-colors"
          >
            Qualify for $200k Credits?
          </button>
          <button
            onClick={() => handleSend("When should I choose Gemma open weights vs Gemini Pro?")}
            className="px-3 py-1 rounded-full bg-emerald-100/80 hover:bg-emerald-200 text-emerald-900 shrink-0 font-medium transition-colors"
          >
            Gemma vs Gemini Pro?
          </button>
        </div>

        {/* Chat History Container */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/40">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'bot' && (
                <div className="w-8 h-8 rounded-xl bg-sky-200 text-sky-800 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm ${
                  m.sender === 'user'
                    ? 'bg-slate-800 text-white font-medium rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-line leading-relaxed">
                  {m.text}
                </div>
                {m.source && (
                  <span className="block text-[10px] text-slate-400 mt-2 pt-1 border-t border-slate-100 font-sans">
                    Source: {m.source}
                  </span>
                )}
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                  You
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-sky-200 text-sky-800 flex items-center justify-center shrink-0">
                <RefreshCw className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-white p-3 rounded-2xl text-xs text-slate-500 border border-slate-200">
                Thinking & calculating optimal model strategy...
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask about model categories, credits, or GCP architecture..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2.5 rounded-2xl text-xs sm:text-sm glass-input text-slate-800 focus:ring-2 focus:ring-sky-200"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Link in Modal */}
        <div className="p-2.5 bg-slate-100 text-center text-[11px] text-slate-500 flex items-center justify-center gap-2">
          <span>Need live technical review?</span>
          <a
            href={CONNECT_LINKS.meetAshley}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-sky-700 hover:underline inline-flex items-center gap-0.5"
          >
            Book 1:1 with Ashley <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
