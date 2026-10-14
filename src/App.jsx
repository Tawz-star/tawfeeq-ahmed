import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import CustomCursor from './components/CustomCursor';
import FintechCanvas from './components/FintechCanvas';
import IntroLoader from './components/IntroLoader';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080C] text-[#E2E8F0] relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Intro Boot Loader */}
      <IntroLoader onComplete={() => setLoaderFinished(true)} />

      {/* High Performance Interactive Background Canvas */}
      <FintechCanvas />

      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Cyber Grid Lines Overlay */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none z-0 opacity-40" />

      {/* Ambient Radial Vignette */}
      <div className="fixed inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Top Navigation */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Developer Terminal Panel */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Floating CLI Quick-Action Pill Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="group px-4 py-2.5 rounded-full glass-panel border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2 text-xs font-mono font-bold shadow-2xl active:scale-95"
          title="Toggle Interactive Terminal"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{isTerminalOpen ? 'Close CLI' : 'terminal.sh'}</span>
        </button>
      </div>
    </div>
  );
}
