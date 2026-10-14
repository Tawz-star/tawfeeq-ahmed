import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, CheckCircle2, PlusCircle, Sparkles, ShieldCheck, ArrowUpRight, BookOpen } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function Certifications() {
  const [certs, setCerts] = useState(CERTIFICATIONS_DATA);
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleAddCert = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newEntry = {
      title: newTitle,
      type: "Self-Added Credential",
      status: "In Progress",
      category: newCategory || "Skill Track",
      description: newDesc || "Actively expanding knowledge and coursework in this domain.",
      icon: "BookOpen",
      verified: false
    };

    setCerts([...certs, newEntry]);
    setNewTitle('');
    setNewCategory('');
    setNewDesc('');
    setIsAdding(false);
  };

  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>CONTINUOUS LEARNING &amp; CREDENTIALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Certifications &amp; Learning.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Honest recognition of completed certifications and ongoing diploma coursework.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certs.map((cert, index) => {
            const isCompleted = cert.status === 'Completed' || cert.status === 'Verified Credential';

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-card p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                  isCompleted
                    ? 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.2)]'
                    : 'border-amber-500/30 hover:border-amber-400 hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.2)]'
                }`}
              >
                <div>
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {cert.category}
                    </span>

                    <span
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${
                        isCompleted
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                          : 'bg-amber-500/10 text-amber-300 border-amber-500/30 animate-pulse'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{cert.status}</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3" />
                          <span>In Progress</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                        isCompleted
                          ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                          : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                      }`}
                    >
                      <Award className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white font-display leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {cert.type}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Verification Footer */}
                <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Recognition</span>
                  <span className={isCompleted ? 'text-cyan-400 font-semibold' : 'text-amber-400 font-semibold'}>
                    {isCompleted ? 'Verified Coursework' : 'Active Study'}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Flexible Add New Certification Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-3xl border-2 border-dashed border-white/10 hover:border-cyan-400/50 transition-all flex flex-col items-center justify-center text-center group cursor-pointer bg-white/[0.01]"
            onClick={() => setIsAdding(!isAdding)}
          >
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all mb-4">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              Add Additional Learning
            </h3>
            <p className="text-xs text-slate-400 max-w-xs">
              Flexible area for upcoming certifications, diplomas, or workshops.
            </p>
            <span className="mt-4 text-[11px] font-mono text-cyan-400 underline decoration-dotted">
              {isAdding ? "Close Form" : "Click to Add Course"}
            </span>
          </motion.div>
        </div>

        {/* Inline Add Course Modal/Form */}
        {isAdding && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleAddCert}
            className="max-w-xl mx-auto glass-panel p-6 rounded-2xl border border-cyan-500/30 space-y-4 mb-12 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-cyan-400">
              <span>ADD NEW CERTIFICATION OR COURSE</span>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="text-slate-400 hover:text-white"
              >
                Cancel
              </button>
            </div>

            <div>
              <label className="text-xs text-slate-300 block mb-1 font-mono">Course / Certification Title</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Modern Web Development Bootcamp"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-xs text-slate-300 block mb-1 font-mono">Category / Domain</label>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="e.g. Frontend Development, FinTech Systems"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-xs text-slate-300 block mb-1 font-mono">Summary</label>
              <textarea
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                placeholder="Brief summary of skills acquired or currently studying..."
                rows="2"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-400 to-blue-600 text-black shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-opacity"
            >
              Add To Portfolio
            </button>
          </motion.form>
        )}

      </div>
    </section>
  );
}
