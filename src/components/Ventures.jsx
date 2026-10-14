import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  ExternalLink, 
  ArrowRight, 
  ArrowLeft, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Compass, 
  Briefcase, 
  TrendingUp, 
  Repeat, 
  Package, 
  Globe, 
  Sparkles, 
  Layers, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { VENTURES_SECTION } from '../data/portfolioData';

const stageIcons = {
  AlertCircle,
  Lightbulb,
  Compass,
  Briefcase,
  TrendingUp,
  Repeat,
  Package,
  Globe,
  ExternalLink
};

export default function Ventures() {
  const [selectedVenture, setSelectedVenture] = useState(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const openVenturePitch = (venture, initialStage = 0) => {
    setSelectedVenture(venture);
    setActiveStageIndex(initialStage);
    document.body.style.overflow = 'hidden';
  };

  const closePitchModal = () => {
    setSelectedVenture(null);
    document.body.style.overflow = 'auto';
  };

  // Keyboard navigation for pitch modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedVenture) return;
      if (e.key === 'Escape') closePitchModal();
      if (e.key === 'ArrowRight') {
        setActiveStageIndex((prev) => Math.min(prev + 1, selectedVenture.stages.length - 1));
      }
      if (e.key === 'ArrowLeft') {
        setActiveStageIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVenture]);

  const activeStage = selectedVenture ? selectedVenture.stages[activeStageIndex] : null;

  return (
    <section id="ventures" className="relative py-28 overflow-hidden bg-[#06070B]">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-violet-500/10 border border-white/10 text-xs font-mono text-cyan-300">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>{VENTURES_SECTION.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight">
            {VENTURES_SECTION.heading}
          </h2>

          <p className="text-sm sm:text-base text-cyan-400/90 font-mono font-medium tracking-wide">
            {VENTURES_SECTION.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed pt-1">
            {VENTURES_SECTION.description}
          </p>
        </div>

        {/* Two Venture Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {VENTURES_SECTION.ventures.map((venture, idx) => {
            const isCyan = venture.accent === 'cyan';
            const accentBorder = isCyan
              ? 'hover:border-cyan-400/50 hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.2)]'
              : 'hover:border-emerald-400/50 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.2)]';

            const badgeBg = isCyan
              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
              : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';

            const buttonPrimary = isCyan
              ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black shadow-cyan-500/20'
              : 'bg-gradient-to-r from-emerald-400 to-teal-600 text-black shadow-emerald-500/20';

            return (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between group transition-all duration-400 relative overflow-hidden ${accentBorder}`}
              >
                {/* Top Subtle Glow Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                  style={{
                    background: isCyan 
                      ? 'linear-gradient(90deg, #00F0FF, #8B5CF6)' 
                      : 'linear-gradient(90deg, #10B981, #A3E635)'
                  }}
                />

                <div>
                  {/* Header Row: Number, Tag & Status */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-black text-slate-500 group-hover:text-white transition-colors">
                        {venture.number}
                      </span>
                      <span className="text-xs font-mono text-slate-400 tracking-wider">
                        {venture.tag}
                      </span>
                    </div>

                    <span className={`text-[11px] font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 ${badgeBg}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      <span>{venture.status}</span>
                    </span>
                  </div>

                  {/* Project Image Banner */}
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10 group-hover:border-white/20 transition-all">
                    <img
                      src={venture.previewImg}
                      alt={venture.name}
                      onError={(e) => {
                        e.target.src = venture.ogImg;
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090F] via-transparent to-transparent opacity-80" />

                    {/* Overlay Tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {venture.categories.slice(0, 2).map((cat) => (
                          <span key={cat} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/70 backdrop-blur-md border border-white/10 text-slate-300">
                            {cat}
                          </span>
                        ))}
                      </div>

                      {venture.headline && (
                        <span className="text-[10px] font-mono text-emerald-300 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-500/30 hidden sm:inline-block">
                          {venture.headline}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & One-Liner */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3 group-hover:text-cyan-300 transition-colors">
                    {venture.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {venture.oneLiner}
                  </p>

                  {/* Highlight Specs / Stats */}
                  {venture.stats && (
                    <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 mb-6 text-center">
                      {venture.stats.map((s, i) => (
                        <div key={i}>
                          <span className="font-display font-black text-lg text-emerald-400 block">{s.value}</span>
                          <span className="text-[10px] font-mono text-slate-400 block">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => openVenturePitch(venture)}
                    className={`w-full sm:w-auto flex-1 py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:opacity-95 active:scale-95 transition-all ${buttonPrimary}`}
                  >
                    <span>Explore the Concept</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={venture.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-semibold glass-panel border border-white/10 text-slate-200 hover:text-white hover:border-white/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Startup Pitch Experience Modal */}
      <AnimatePresence>
        {selectedVenture && activeStage && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePitchModal}
              className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#090C14] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 bg-[#06080E] border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                    selectedVenture.accent === 'cyan' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {selectedVenture.number}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base font-display">
                      {selectedVenture.name}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400">
                      Interactive Startup Pitch Experience
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedVenture.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-cyan-400 hover:text-white bg-white/5 border border-white/10"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={closePitchModal}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Close [Esc]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Pitch Stage Progress Stepper (Tabs) */}
              <div className="bg-[#080B12] px-6 py-3 border-b border-white/10 overflow-x-auto scrollbar-none flex items-center gap-2 shrink-0">
                {selectedVenture.stages.map((stg, i) => {
                  const isActive = i === activeStageIndex;
                  const isCompleted = i < activeStageIndex;

                  return (
                    <button
                      key={stg.stageNum}
                      onClick={() => setActiveStageIndex(i)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all flex items-center gap-2 ${
                        isActive
                          ? selectedVenture.accent === 'cyan'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                          : isCompleted
                          ? 'text-slate-300 hover:text-white bg-white/[0.03]'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <span>{stg.stageNum}</span>
                      <span className="hidden md:inline">{stg.stageTitle}</span>
                    </button>
                  );
                })}
              </div>

              {/* Stage Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                
                {/* Stage Header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
                    <span>Stage {activeStage.stageNum} of {selectedVenture.stages.length}</span>
                    <span>·</span>
                    <span className={selectedVenture.accent === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'}>
                      {activeStage.stageTitle}
                    </span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {activeStage.subtitle}
                  </h4>
                </div>

                {/* Summary Quote */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {activeStage.summary}
                </div>

                {/* Dynamic Content Per Stage */}
                
                {/* 1. Comparison Layout (LoopStep Stage 1) */}
                {activeStage.comparison && (
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                      <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {activeStage.comparison.traditional.title}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeStage.comparison.traditional.desc}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/30 space-y-2">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {activeStage.comparison.loopstep.title}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeStage.comparison.loopstep.desc}
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. Detailed Bullet Points */}
                {activeStage.details && (
                  <div className="space-y-3 pt-2">
                    {activeStage.details.map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.015] border border-white/5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          selectedVenture.accent === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                        }`} />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. Workflow Steps (SWOPLT Stage 3) */}
                {activeStage.workflow && (
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {activeStage.workflow.map((w) => (
                      <div key={w.step} className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 space-y-1">
                        <span className="text-xs font-mono font-bold text-cyan-400">Step {w.step}</span>
                        <h5 className="text-sm font-bold text-white">{w.title}</h5>
                        <p className="text-xs text-slate-300 leading-relaxed">{w.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. Mechanism Steps (LoopStep Stage 3) */}
                {activeStage.mechanismSteps && (
                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    {activeStage.mechanismSteps.map((m) => (
                      <div key={m.step} className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center space-y-2">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono font-black mx-auto flex items-center justify-center text-sm">
                          {m.step}
                        </div>
                        <h5 className="text-base font-bold text-white">{m.title}</h5>
                        <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. Product Editions (LoopStep Stage 4) */}
                {activeStage.editions && (
                  <div className="space-y-4 pt-2">
                    <div className="grid sm:grid-cols-3 gap-4">
                      {activeStage.editions.map((ed) => (
                        <div key={ed.name} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-sm font-bold text-white">{ed.name}</h5>
                              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">{ed.thickness}</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-3">{ed.use}</p>
                            <div className="space-y-1 mb-4">
                              {ed.materials.map((m, i) => (
                                <span key={i} className="text-[10px] font-mono text-slate-400 block">· {m}</span>
                              ))}
                            </div>
                          </div>
                          <span className="text-2xl font-black font-display text-white">{ed.price}</span>
                        </div>
                      ))}
                    </div>

                    {activeStage.adapterNote && (
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 font-mono">
                        {activeStage.adapterNote}
                      </div>
                    )}
                  </div>
                )}

                {/* 6. SDGs Impact (LoopStep Stage 5) */}
                {activeStage.sdgs && (
                  <div className="space-y-4 pt-2">
                    <div className="grid sm:grid-cols-3 gap-3">
                      {activeStage.sdgs.map((sdg) => (
                        <div key={sdg.code} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                          <span className="text-xs font-mono font-bold text-emerald-400">{sdg.code}</span>
                          <h6 className="text-xs font-bold text-white">{sdg.title}</h6>
                          <p className="text-[11px] text-slate-400 leading-relaxed">{sdg.desc}</p>
                        </div>
                      ))}
                    </div>

                    {activeStage.personalization && (
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-slate-300 space-y-1">
                        <strong className="text-white block font-mono">3D Phone Foot-Scan Personalization:</strong>
                        <p className="text-slate-400">{activeStage.personalization}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* 7. Live Demonstration Stage (Stage 6) */}
                {activeStage.liveUrl && (
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-5 pt-4">
                    <div className="max-w-md mx-auto aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
                      <img
                        src={selectedVenture.previewImg}
                        alt="Live Project"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <a
                          href={activeStage.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-white text-black hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-2xl"
                        >
                          <span>{activeStage.ctaText}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 font-mono">
                      Opens official live application: <span className="text-cyan-400">{activeStage.liveUrl}</span>
                    </p>
                  </div>
                )}

              </div>

              {/* Modal Bottom Stepper Navigation */}
              <div className="px-6 py-4 bg-[#06080E] border-t border-white/10 flex items-center justify-between shrink-0">
                <button
                  disabled={activeStageIndex === 0}
                  onClick={() => setActiveStageIndex((prev) => Math.max(prev - 1, 0))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel border border-white/10 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <span className="text-xs font-mono text-slate-500">
                  {activeStageIndex + 1} / {selectedVenture.stages.length}
                </span>

                {activeStageIndex < selectedVenture.stages.length - 1 ? (
                  <button
                    onClick={() => setActiveStageIndex((prev) => Math.min(prev + 1, selectedVenture.stages.length - 1))}
                    className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                      selectedVenture.accent === 'cyan'
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black shadow-lg shadow-cyan-500/20'
                        : 'bg-gradient-to-r from-emerald-400 to-teal-600 text-black shadow-lg shadow-emerald-500/20'
                    }`}
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href={selectedVenture.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
