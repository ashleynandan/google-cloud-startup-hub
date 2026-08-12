import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory newsletter / founder office hours signups
const signups: Array<{ id: string; name: string; email: string; role: string; startup: string; createdAt: string }> = [];

// Gemini AI Client Lazy Helper
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// 1. Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 2. Google Cloud Blog Top Updates API
app.get("/api/blog-updates", (_req, res) => {
  res.json({
    source: "https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud?e=48754805",
    updates: [
      {
        id: "1",
        title: "Introducing Gemini 3.5 & Flash-Lite Scale Category",
        date: "August 2026",
        tag: "AI & ML",
        readTime: "3 min read",
        summary: "Discover how Google DeepMind's simplified 4-category model matrix (Frontier, Workhorse, Scale, Open Weights) helps founders choose the exact right model for scale, efficiency, and complex reasoning.",
        link: "https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud?e=48754805",
        badge: "Featured Strategy"
      },
      {
        id: "2",
        title: "Onboard Your AI Agent to Google Cloud Marketplace",
        date: "July 2026",
        tag: "Marketplace & Monetization",
        readTime: "5 min read",
        summary: "Startups can now publish and sell agentic AI solutions directly to enterprise buyers through the Google Cloud Marketplace partner portal with co-sell guidance.",
        link: "https://docs.cloud.google.com/marketplace/docs/partners/ai-agents",
        badge: "For Founders & CTOs"
      },
      {
        id: "3",
        title: "Google Cloud for Startups: Up to $200k in Credits & Best Practices",
        date: "Recent Update",
        tag: "Startup Programs",
        readTime: "4 min read",
        summary: "Step-by-step best practices, architecture review guides, and application checklists to maximize your startup credit approval for Gemini, Vertex AI, and Cloud Infrastructure.",
        link: "https://cloud.google.com/startup/apply?hl=en&e=48754805",
        badge: "Up to $200K Credits"
      }
    ]
  });
});

// 3. Founder Signup / Office Hours Request API
app.post("/api/signup", (req, res) => {
  const { name, email, role, startup, interests } = req.body;
  if (!email || !name) {
    res.status(400).json({ error: "Name and email are required" });
    return;
  }

  const newEntry = {
    id: Math.random().toString(36).substring(2, 9),
    name,
    email,
    role: role || "Founder / Executive",
    startup: startup || "Stealth Startup",
    interests: interests || [],
    createdAt: new Date().toISOString()
  };

  signups.push(newEntry);
  res.json({
    success: true,
    message: `Welcome, ${name}! Ashley or the Google Cloud Startup team will reach out with customized GCP resources and credit guidance.`,
    entry: newEntry
  });
});

// 4. AI Founder Strategy Advisor (Gemini integration)
app.post("/api/advisor", async (req, res) => {
  try {
    const { question, stage, techStack } = req.body;
    if (!question) {
      res.status(400).json({ error: "Question is required" });
      return;
    }

    const ai = getGenAI();
    if (!ai) {
      // Fallback response if API key is not configured yet
      res.json({
        answer: `Great question! When considering ${techStack || 'your AI startup architecture'}, our Google Cloud engineering recommendation is:
        
1. **Start high-volume or agentic background tasks** with the **Gemini 3.5 Flash-Lite ('Scale')** model for maximum throughput and cost efficiency.
2. **Dynamically funnel** to **Gemini 3.5 Flash ('Workhorse')** when advanced reasoning, complex layout generation, or heavy coding is required.
3. For top-tier strategic reasoning or compliance roles, step up to **Gemini Pro ('Frontier')**.

To discuss this tailored to your ${stage || 'startup'} architecture, book a slot with Ashley Nandan directly!`,
        source: "Rule-based Startup Framework"
      });
      return;
    }

    const prompt = `You are an AI advisor for Ashley Nandan, a Google Cloud Startup Specialist assisting startup founders, CEOs, and CTOs.
    
Context about Google Cloud Model Strategy:
- Frontier Models (e.g. Gemini Pro 3.X): High intelligence for complex reasoning, strategy, compliance.
- Workhorse Models (e.g. Gemini Flash): Balanced speed & reasoning for general development and logistics.
- Scale Models (e.g. Gemini Flash-Lite): High-throughput automation for mass-scaling foundational agent tasks.
- Open Weights Models (e.g. Gemma): For controlled innovation in regulated industries.
Engineering Recommendation: Start high-volume tasks with Gemini Flash-Lite ('Scale') model, and dynamically funnel to Gemini Flash ('Workhorse') when advanced capabilities (complex coding, layouts) are required.
Google Cloud Credits: Up to $200k for eligible startups.

User Startup Stage: ${stage || 'Not specified'}
User Tech Stack / Focus: ${techStack || 'Not specified'}
User Question: "${question}"

Provide a concise, friendly, extremely helpful 2-3 paragraph response advising the founder with clear actionable takeaways and model recommendations.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      answer: response.text,
      source: "Gemini 2.5 Flash Strategy Advisor"
    });
  } catch (err: any) {
    console.error("Error in AI advisor route:", err);
    res.status(500).json({
      answer: "Start high-volume agentic tasks with Gemini Flash-Lite ('Scale'), then dynamically route complex coding or reasoning prompts to Gemini Flash ('Workhorse') or Gemini Pro ('Frontier'). Book a meeting with Ashley Nandan to review your architecture live!",
      error: err.message
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
