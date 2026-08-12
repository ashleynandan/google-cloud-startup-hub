# AGENT.md — Project Instructions & Reference Manual

Welcome to the **Ashley Nandan | Google Cloud Startup Hub** repository. This document serves as the single source of truth and central repository for all project guidelines, architectural decisions, operational commands, and ongoing instructions.

---

## 📌 Project Overview

**Ashley Nandan | Google Cloud Startup Hub** is a modern, light, and airy web application and founder portal designed for startup founders, CEOs, and CTOs navigating Google Cloud and Google DeepMind's AI ecosystem.

### Core Objectives:
- **Founder Office Hours & Connect**: Quick calendar scheduling and intake form to connect with Ashley Nandan (Google Cloud Startup Specialist).
- **Google Cloud AI Model Matrix**: Visual framework breaking down model tiers (**Frontier**, **Workhorse**, **Scale**, and **Open Weights**) with dynamic routing guidance (e.g., scale high-throughput tasks on Gemini Flash-Lite and route complex coding/reasoning to Gemini Flash or Gemini Pro).
- **Google Cloud Updates & Insights**: Curated live news, marketplace onboarding guides, and architecture insights.
- **Google for Startups Cloud Program Checklist**: Guidance for claiming up to $200,000+ in Google Cloud & Vertex AI credits, featuring a 5-step checklist and best practices.
- **Interactive AI Strategy Advisor**: In-app Gemini-powered advisor offering real-time architecture feedback to founders.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 19, TypeScript, Vite 6 |
| **Styling & UI** | Tailwind CSS v4 (`@tailwindcss/vite`), Lucide Icons (`lucide-react`), Motion (`motion`) |
| **Backend & API** | Node.js, Express 4, `tsx` (runtime TypeScript execution), `dotenv` |
| **AI Integration** | Google GenAI SDK (`@google/genai`), Gemini 2.5 Flash / Gemini 3.5 |
| **Bundling & Build** | Vite (Client SPA), `esbuild` (Server CJS bundling) |

---

## 📂 Repository Structure

```
Github-Website/
├── dist/                          # Production build output
│   ├── assets/                    # Compiled CSS & JS client bundles
│   ├── index.html                 # Production SPA entry
│   └── server.cjs                 # Bundled standalone Express server
├── src/                           # Client source code
│   ├── components/                # Modular React UI components
│   │   ├── AiAdvisorModal.tsx     # Gemini AI Founder Strategy Advisor modal
│   │   ├── Footer.tsx             # Page footer with links and disclaimer
│   │   ├── Header.tsx             # Floating glassmorphic top navigation bar
│   │   ├── SectionConnect.tsx     # Connect & appointment booking section + intake form
│   │   ├── SectionCredits.tsx     # GCP Startup Credits guide & 5-step checklist
│   │   └── SectionGcpUpdates.tsx  # AI Model Strategy Matrix & blog news feed
│   ├── App.tsx                    # Top-level React application component
│   ├── data.ts                    # Static content, external links, credit tiers, model cards
│   ├── index.css                  # Global styles & Tailwind configuration
│   ├── main.tsx                   # React DOM root render entrypoint
│   └── types.ts                   # TypeScript interfaces and data models
├── index.html                     # Dev HTML entry template
├── metadata.json                  # Workspace metadata & capabilities
├── package.json                   # Dependencies, scripts, and build metadata
├── server.ts                      # Express API server + Vite dev middleware integration
├── tsconfig.json                  # TypeScript compiler settings
├── vite.config.ts                 # Vite bundler & Tailwind plugin configuration
└── AGENT.md                       # Ongoing project documentation & agent instructions
```

---

## 🚀 Available Commands

Run all commands from the root of the project:

| Command | Action | Description |
|---|---|---|
| `npm run dev` | Development Server | Launches `tsx server.ts`, running Express with Vite middleware on `http://localhost:3000` (or `http://0.0.0.0:3000`). |
| `npm run build` | Production Build | Builds frontend with `vite build` and bundles `server.ts` into `dist/server.cjs` via `esbuild`. |
| `npm run start` | Production Start | Runs the compiled server via `node dist/server.cjs`. |
| `npm run lint` | TypeScript Check | Runs `tsc --noEmit` to validate all TypeScript types without emitting code. |
| `npm run clean` | Clean Outputs | Removes `dist/` and any temporary server artifacts. |

---

## 🔑 Environment Variables

Create or configure `.env` in the root directory:

```env
# Port for the Express server (default: 3000)
PORT=3000

# Google Gemini API Key for AI Strategy Advisor
GEMINI_API_KEY=your_gemini_api_key_here

# App hosting URL
APP_URL=http://localhost:3000

# GitHub Integration (Automated Repo Management & Sync)
GITHUB_USERNAME=ashleynandan
GITHUB_TOKEN=your_github_personal_access_token_here

# Optional: Disable Vite Hot Module Replacement in headless/agent environments
# DISABLE_HMR=true
```

> **Note**: If `GEMINI_API_KEY` is not provided or set to default, the server provides a graceful fallback response based on Google Cloud's model tier routing framework.

---

## 🐙 GitHub Integration & Remote Repository Sync

The agent is configured to manage the GitHub account and sync local changes directly to GitHub.

- **GitHub Account**: `ashleynandan`
- **Authentication**: Personal Access Token (PAT) with `repo`, `admin:repo_hook`, `project`, `user` scopes stored in `.env`.

### Common Sync Operations:

1. **Create Remote Repository via GitHub API**:
   ```bash
   curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
     -H "Accept: application/vnd.github+json" \
     https://api.github.com/user/repos \
     -d '{"name":"<REPO_NAME>","private":true,"description":"Ashley Nandan | Google Cloud Startup Hub"}'
   ```

2. **Connect Remote and Push**:
   ```bash
   git remote add origin https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/<REPO_NAME>.git
   git branch -M main
   git push -u origin main
   ```

3. **Routine Sync / Push**:
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   git push origin main
   ```

---

## 🧩 Components & Architecture Details

- **[`src/App.tsx`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/src/App.tsx)**: Main page layout wrapping Header, Sections, Footer, and AI Advisor modal.
- **[`src/components/Header.tsx`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/src/components/Header.tsx)**: Floating glassmorphism navbar with navigation anchors and AI Advisor launcher.
- **[`src/components/SectionConnect.tsx`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/src/components/SectionConnect.tsx)**: Hero section with Google Calendar booking links, LinkedIn profile connection, and founder office hours intake form.
- **[`src/components/SectionGcpUpdates.tsx`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/src/components/SectionGcpUpdates.tsx)**: Interactive 4-Tier Model Strategy Matrix (Frontier, Workhorse, Scale, Open Weights) and latest Google Cloud news feed.
- **[`src/components/SectionCredits.tsx`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/src/components/SectionCredits.tsx)**: Google for Startups Cloud Program credit tiers ($2k to $250k), application links, and 5-step preparation checklist.
- **[`src/components/AiAdvisorModal.tsx`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/src/components/AiAdvisorModal.tsx)**: Real-time Gemini AI strategy advisor modal querying the `/api/advisor` endpoint.
- **[`src/components/Footer.tsx`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/src/components/Footer.tsx)**: Clean footer with disclaimer, quick links, and copyright.
- **[`src/data.ts`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/src/data.ts)**: Static definitions for model matrix categories, blog posts, credit tiers, and calendar/external links.
- **[`src/types.ts`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/src/types.ts)**: TypeScript interfaces (`ModelCategory`, `BlogUpdate`, `SignupFormData`, `CreditTier`).
- **[`server.ts`](file:///usr/local/google/home/ashleynandan/Jetski/Github-Website/server.ts)**: Node/Express backend serving `/api/health`, `/api/blog-updates`, `/api/signup`, `/api/advisor`, and integrating Vite middleware in development mode.

---

## 🎨 Design & Coding Guidelines

1. **Light & Airy Aesthetic**:
   - Palette: Clean warm whites (`#faf8f5`), subtle mesh gradients, glassmorphism (`backdrop-blur-md`), slate text (`text-slate-800`), and Google brand color accents (Blue/Sky, Emerald, Amber, Violet).
2. **Component Modularity**:
   - Keep UI sections decoupled into dedicated components in `src/components/`.
   - Keep data models and configuration in `src/types.ts` and `src/data.ts`.
3. **Type Safety**:
   - Avoid `any` where possible. Strictly type component props and API payloads.
4. **Resilience & Graceful Fallbacks**:
   - Ensure UI states handle loading, error, and empty states cleanly.
   - API routes should return user-friendly messages even if external services are unavailable.

---

## 📝 Ongoing Instructions & Decision Log

*Add new project-specific instructions, user preferences, and implementation notes below.*

### General Agent Conventions:
- Maintain documentation integrity: Preserve existing comments and docstrings unless explicitly requested to update them.
- Format all file references with clickable markdown links (`file:///...`).
- Record major architecture decisions, new routes, and significant feature additions into this file (`AGENT.md` / `AGENTS.md`).

### Change & Instruction Log:
- **2026-08-12**: Initialized repository workspace and established `AGENT.md` as the ongoing central documentation and instructions hub for the Google Cloud Startup Hub project.
- **2026-08-12**: Configured GitHub authentication with `ashleynandan` account (PAT authenticated with full `repo` and admin scopes) for automated Git remote sync and GitHub API repository management.
- **2026-08-12**: Documented component breakdown, GitHub workflow commands, and environment variables. Added symlink alias `AGENTS.md -> AGENT.md`.
- **2026-08-12**: Created GitHub repository [`ashleynandan/google-cloud-startup-hub`](https://github.com/ashleynandan/google-cloud-startup-hub), configured client-side resilience for static hosting, built static bundle in `static/`, and deployed live on GitHub Pages: [`https://ashleynandan.github.io/google-cloud-startup-hub/`](https://ashleynandan.github.io/google-cloud-startup-hub/).
