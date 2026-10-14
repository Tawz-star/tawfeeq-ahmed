import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Cpu, Palette, Globe, Landmark, ShieldCheck, TrendingUp, Sparkles, BookOpen, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

const iconMap = {
  Terminal: Terminal,
  Code: Code,
  Cpu: Cpu,
  Palette: Palette,
  Globe: Globe,
  Landmark: Landmark,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const allSkills = [
    ...SKILLS_DATA.programming.map((s) => ({ ...s, group: 'Programming & Web Technologies' })),
    ...SKILLS_DATA.domains.map((d) => ({ ...d, group: 'Areas of Interest & Digital Domains' }))
  ];

  const filteredSkills =
    activeTab === 'all'
      ? allSkills
      : activeTab === 'programming'
      ? SKILLS_DATA.programming.map((s) => ({ ...s, group: 'Programming & Web Technologies' }))
      : SKILLS_DATA.domains.map((d) => ({ ...d, group: 'Areas of Interest & Digital Domains' }));

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-[#07090F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AUTHENTIC CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Technical Skills &amp; Exploration.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Represented with absolute honesty. Showing foundational competencies and active learning milestones without inflated metrics.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/20'
                : 'glass-panel text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            All Areas ({allSkills.length})
          </button>

          <button
            onClick={() => setActiveTab('programming')}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'programming'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/20'
                : 'glass-panel text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            Programming &amp; Web ({SKILLS_DATA.programming.length})
          </button>

          <button
            onClick={() => setActiveTab('domains')}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'domains'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/20'
                : 'glass-panel text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            Areas of Interest ({SKILLS_DATA.domains.length})
          </button>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Code;
              const isCurrentlyLearning = skill.level.toLowerCase().includes('learning');

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Row: Icon & Status Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                          isCurrentlyLearning
                            ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 animate-pulse'
                            : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        }`}
                      >
                        {isCurrentlyLearning ? 'In Progress' : 'Verified'}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-xl font-bold text-white font-display mb-1 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>

                    {/* Skill Level & Stage */}
                    <div className="space-y-1 mb-4">
                      <p className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {skill.level}
                      </p>
                      <p className="text-[11px] font-mono text-slate-400">
                        {skill.stage}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {skill.description}
                    </p>
                  </div>

                  {/* Learning Progress Indicator / Stage Marker */}
                  <div className="pt-5 mt-5 border-t border-white/5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                      <span>Status</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          isCurrentlyLearning
                            ? 'bg-gradient-to-r from-amber-400 to-cyan-400 w-3/5'
                            : 'bg-gradient-to-r from-cyan-400 to-blue-500 w-4/5'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Honest Note Banner */}
        <div className="mt-12 p-4 rounded-2xl glass-panel border border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Committed to steady, continuous hands-on learning without inflating expertise.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
