import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Coins, Users2, Sparkles, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_CARDS } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Coins: Coins,
  Users2: Users2,
};

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle background ambient line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>FOUNDATIONAL PROFILE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Curiosity Drives My Journey.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Exploring the dynamic intersection of financial technology, modern web development, and proactive student leadership.
          </p>
        </div>

        {/* Narrative & Institutional Profile Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main narrative block (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            <div className="flex items-center gap-3 text-cyan-400 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>THE PERSONAL MANIFESTO</span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {PERSONAL_INFO.aboutFull}
            </p>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-2xl font-black font-display text-white">2nd</span>
                <span className="text-[11px] text-slate-400 block font-mono">Year Student</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-2xl font-black font-display text-cyan-400">3</span>
                <span className="text-[11px] text-slate-400 block font-mono">Languages</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-2xl font-black font-display text-violet-400">3</span>
                <span className="text-[11px] text-slate-400 block font-mono">Leadership Roles</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-2xl font-black font-display text-emerald-400">100%</span>
                <span className="text-[11px] text-slate-400 block font-mono">Curiosity Driven</span>
              </div>
            </div>
          </div>

          {/* Academic Profile & Institution Card (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 space-y-6 relative">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0F1320] border border-white/10 flex items-center justify-center p-2.5 shadow-lg shadow-cyan-500/10">
                <img
                  src="/bishop-heber-crest.png"
                  alt="Bishop Heber College"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-xs font-mono font-bold text-cyan-400">BHC</span>';
                  }}
                />
              </div>

              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                  Institution of Study
                </span>
                <h3 className="text-lg font-bold text-white font-display">
                  Bishop Heber College
                </h3>
                <p className="text-xs text-slate-400">
                  Tiruchirappalli, Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Department:</strong> Department of Commerce
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Academic Track:</strong> B.Com Financial Technology
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Key Alignment:</strong> Merging banking fundamentals with algorithmic &amp; web solutions
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-xs text-cyan-200 font-mono">
              "Honest learner, enthusiastic experimenter, dedicated to building meaningful digital products."
            </div>
          </div>

        </div>

        {/* Three Core Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {HIGHLIGHT_CARDS.map((card, idx) => {
            const Icon = iconMap[card.icon] || Code2;
            const accentBorder =
              card.accent === 'cyan'
                ? 'group-hover:border-cyan-400/50 group-hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.2)]'
                : card.accent === 'violet'
                ? 'group-hover:border-violet-400/50 group-hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.2)]'
                : 'group-hover:border-blue-400/50 group-hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]';

            const iconBg =
              card.accent === 'cyan'
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                : card.accent === 'violet'
                ? 'bg-violet-500/10 text-violet-400 border-violet-500/20'
                : 'bg-blue-500/10 text-blue-400 border-blue-500/20';

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`group glass-card p-8 rounded-3xl border border-white/10 transition-all duration-300 ${accentBorder}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform ${iconBg}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2 mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                    {card.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
