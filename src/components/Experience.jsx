import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Megaphone, CalendarCheck, Sparkles, CheckCircle2, Users, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

const iconMap = {
  Crown: Crown,
  Megaphone: Megaphone,
  CalendarCheck: CalendarCheck,
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-[#07090F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono">
            <Crown className="w-3.5 h-3.5 text-violet-400" />
            <span>STUDENT GOVERNANCE &amp; INITIATIVES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Leadership &amp; Experience.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Active responsibilities across student associations, public relations, and inter-collegiate event coordination.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-6 md:left-8 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent opacity-30 hidden sm:block" />

          <div className="space-y-10">
            {EXPERIENCE_DATA.map((item, index) => {
              const Icon = iconMap[item.icon] || Crown;

              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative sm:pl-20 group"
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute left-4 md:left-6 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-[#080A10] border-2 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.6)] hidden sm:flex items-center justify-center group-hover:scale-125 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  {/* Main Experience Card */}
                  <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-400/40 relative overflow-hidden transition-all duration-300">
                    
                    {/* Top Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                            {item.role}
                          </h3>
                          <p className="text-xs font-semibold text-slate-400">
                            {item.organization} · <span className="text-slate-500">{item.scope}</span>
                          </p>
                        </div>
                      </div>

                      <span className="self-start sm:self-auto text-[10px] font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 font-semibold">
                        {item.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                      {item.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                        Core Responsibilities &amp; Team Engagement
                      </span>
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
