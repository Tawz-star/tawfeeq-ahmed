import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Code2, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05060A] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top animated gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Identity & Quote */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 p-[1px]">
                <div className="w-full h-full bg-[#0A0D15] rounded-[7px] flex items-center justify-center font-mono font-black text-xs text-cyan-400">
                  TA
                </div>
              </div>
              <span className="text-lg font-bold text-white font-display">
                {PERSONAL_INFO.fullName}
              </span>
            </div>

            <p className="text-sm text-slate-400 italic font-mono max-w-md">
              “Designed with curiosity. Built with code. Driven by continuous learning.”
            </p>

            <p className="text-xs text-slate-500 font-mono">
              Bishop Heber College, Tiruchirappalli · B.Com Financial Technology
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all hover:scale-110"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all hover:scale-110"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all hover:scale-110"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="p-3 rounded-xl glass-panel border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all hover:scale-110 group"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-500">
              © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
            </span>
          </div>

        </div>

        {/* Bottom subtle status badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Portfolio Status: Production Ready · Built with React &amp; Tailwind</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-cyan-400">passion</span>
            <span>for Web Development &amp; FinTech</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
