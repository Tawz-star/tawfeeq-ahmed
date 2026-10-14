import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Sparkles } from 'lucide-react';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('SYSTEM BOOTING');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('tawfeeq_intro_seen');
    if (hasSeenIntro) {
      setVisible(false);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText('SYSTEM READY // WELCOME');
          setTimeout(() => {
            sessionStorage.setItem('tawfeeq_intro_seen', 'true');
            setVisible(false);
            onComplete?.();
          }, 400);
          return 100;
        }

        if (next > 70) setStatusText('CONNECTING FINTECH NODES...');
        else if (next > 40) setStatusText('LOADING IDENTITY & WORK...');
        else if (next > 20) setStatusText('VERIFYING CREDENTIALS...');
        return next;
      });
    }, 55);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        clearInterval(interval);
        setVisible(false);
        onComplete?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100000] bg-[#06070A] flex flex-col items-center justify-center p-6"
        >
          {/* Ambient glow in loader */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

          <div className="w-full max-w-md glass-panel p-8 rounded-2xl border border-white/10 relative shadow-2xl overflow-hidden">
            {/* Top header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-white font-semibold tracking-wider">TAWFEEQ_OS // v2.0</span>
              </div>
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>

            {/* Profile Identification */}
            <div className="mb-6 space-y-1">
              <h2 className="text-xl font-bold font-display text-white tracking-wide flex items-center gap-2">
                R. Tawfeeq Ahmed
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                B.Com Financial Technology · Bishop Heber College
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden mb-4 p-[1px] border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Status log */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="text-cyan-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                {statusText}
              </span>
              <button
                onClick={handleSkip}
                className="text-slate-500 hover:text-white transition-colors underline decoration-dotted text-[10px]"
              >
                Skip [Esc]
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
