import React from 'react';
import { Header } from './components/Header';
import { SectionConnect } from './components/SectionConnect';
import { SectionGcpUpdates } from './components/SectionGcpUpdates';
import { SectionCredits } from './components/SectionCredits';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] bg-mesh-gradient text-slate-800 selection:bg-sky-200 selection:text-slate-900 relative">
      {/* Floating Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Connect with me */}
        <SectionConnect />

        {/* Section 2: Google Cloud Updates */}
        <SectionGcpUpdates />

        {/* Section 3: Credits */}
        <SectionCredits />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
