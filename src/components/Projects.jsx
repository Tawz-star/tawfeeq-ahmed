import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle2, X, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-[#07090F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>AUTHENTIC WORKS &amp; CONCEPTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Featured Projects &amp; Explorations.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Hands-on software experiments bridging financial technology logic and responsive web interfaces.
          </p>
        </div>

        {/* Featured Card (Hero Project) */}
        {PROJECTS_DATA.filter((p) => p.featured).map((featured) => (
          <motion.div
            key={featured.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 mb-12 relative overflow-hidden shadow-2xl group"
          >
            {/* Top gradient glow */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    {featured.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {featured.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    {featured.title}
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {featured.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  {featured.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featured.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-white/[0.04] border border-white/10 text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href="#home"
                    className="px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-400 to-blue-600 text-black shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-opacity flex items-center gap-2"
                  >
                    <span>View Live Experience</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl text-xs font-semibold glass-panel border border-white/10 text-slate-200 hover:text-white hover:border-cyan-400/40 transition-all flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Profile</span>
                  </a>
                </div>
              </div>

              {/* Right Visual Graphic (5 cols) */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#090C16] border border-white/10 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-2 text-cyan-400">
                      <Code2 className="w-4 h-4" />
                      <span>portfolio_manifest.json</span>
                    </span>
                    <span className="text-emerald-400 font-bold">200 OK</span>
                  </div>

                  <pre className="font-mono text-xs text-slate-300 overflow-x-auto p-4 rounded-xl bg-black/40 leading-relaxed border border-white/5">
{`{
  "project": "${featured.title}",
  "creator": "${PERSONAL_INFO.fullName}",
  "college": "Bishop Heber College",
  "specialization": "FinTech & Web",
  "status": "Production Ready",
  "stack": ["React 19", "Vite", "TailwindCSS v4"],
  "theme": "Cinematic Cyber-FinTech",
  "verified": true
}`}
                  </pre>
                </div>
              </div>

            </div>
          </motion.div>
        ))}

        {/* Exploratory Concepts & Upcoming Works Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {PROJECTS_DATA.filter((p) => !p.featured).map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-violet-500/40 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display mb-3 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                  {proj.description}
                </p>

                <div className="space-y-2 mb-6">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-cyan-400 font-mono mt-0.5">›</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  {proj.id.includes('venture') ? (
                    <a
                      href="#ventures"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Explore Pitch &amp; Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline decoration-dotted"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Repository on GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <span className="text-[10px] font-mono text-slate-400">
                    {proj.badge.includes('Venture') ? 'Startup Case Study' : 'Concept Stage'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Direct Link Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">
                Explore More on GitHub (@Tawz-star)
              </h4>
              <p className="text-xs text-slate-400">
                Follow my continuous learning repository commits, experiments, and code snippets.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-bold text-xs bg-white text-black hover:bg-slate-200 transition-colors flex items-center gap-2 shrink-0 shadow-lg"
          >
            <span>Visit @Tawz-star</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
