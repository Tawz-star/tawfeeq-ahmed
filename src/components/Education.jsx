import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Building2, BookCheck, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Academic Profile.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Bridging financial commerce principles and digital technology at Bishop Heber College.
          </p>
        </div>

        {/* Academic Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl"
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600" />

            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              
              {/* Institution Emblem & Degree Details */}
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-2xl bg-[#0D101C] border border-cyan-500/30 p-3 shrink-0 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                  <img
                    src="/bishop-heber-crest.png"
                    alt="Bishop Heber College"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span class="font-bold text-cyan-400 text-sm">BHC</span>';
                    }}
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{EDUCATION_DATA.status}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {EDUCATION_DATA.degree}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-400">
                    <p className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{EDUCATION_DATA.institution}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{EDUCATION_DATA.location}</span>
                    </p>
                    <p className="text-cyan-400/90 font-mono">
                      Department: {EDUCATION_DATA.department}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="shrink-0 bg-white/[0.03] border border-white/10 px-4 py-3 rounded-2xl text-left md:text-right">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                  Status
                </span>
                <span className="text-sm font-bold text-cyan-400 font-mono">
                  Currently Enrolled
                </span>
                <span className="text-xs text-slate-400 block">Undergraduate Program</span>
              </div>
            </div>

            {/* Program Description */}
            <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-cyan-400" />
                <span>Academic Overview</span>
              </h4>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {EDUCATION_DATA.description}
              </p>
            </div>

            {/* Core Focus Pillars */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-4">
                Core Interdisciplinary Focus Areas
              </span>

              <div className="grid sm:grid-cols-2 gap-3">
                {EDUCATION_DATA.coreFocus.map((focus, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
