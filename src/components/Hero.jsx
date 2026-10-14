import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal, Mail, Sparkles, ShieldCheck, Code, Cpu, ExternalLink, Camera, Rocket } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  const [profileImg, setProfileImg] = useState('/tawfeeq-profile-original.jpeg');
  const [imageError, setImageError] = useState(false);

  // Animated headline typewriter effect
  const phrases = [
    'Building Ideas Into Digital Experiences.',
    'Exploring Financial Technology & Modern Code.',
    'Connecting Commerce With Digital Innovation.'
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    const speed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setDisplayText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2400);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  // Handle local image upload preview if Tawfeeq wants to preview another photo
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImg(url);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Intro Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-semibold">{PERSONAL_INFO.status}</span>
              </div>

              <span className="hidden sm:inline text-slate-600">|</span>

              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                {PERSONAL_INFO.headline}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                  {PERSONAL_INFO.fullName}
                </span>
              </h1>

              {/* Animated Rotating Subheadline */}
              <div className="h-16 sm:h-20 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200">
                  <span className="text-cyan-400 font-mono">&gt; </span>
                  <span>{displayText}</span>
                  <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </p>
              </div>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Quick Badges: Education & Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Academics</span>
                <span className="text-xs sm:text-sm font-semibold text-white">B.Com FinTech (2nd Yr)</span>
                <span className="text-[11px] text-slate-400 block truncate">Bishop Heber College</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block">Association</span>
                <span className="text-xs sm:text-sm font-semibold text-white">Vice President</span>
                <span className="text-[11px] text-slate-400 block truncate">FinTech Association</span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left">
                <span className="text-[10px] font-mono uppercase text-violet-400 block">Core Passion</span>
                <span className="text-xs sm:text-sm font-semibold text-white">Web Development</span>
                <span className="text-[11px] text-slate-400 block truncate">Python · HTML · Java · CSS</span>
              </div>
            </motion.div>

            {/* CTAs & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-blue-600 text-black shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 active:scale-95 transition-all flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 font-bold">Explore My Work</span>
                <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm glass-panel border border-white/10 hover:border-cyan-400/40 text-slate-200 hover:text-white transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </a>

              {/* Ventures Hero CTA */}
              <a
                href="#ventures"
                className="px-5 py-3.5 rounded-xl font-semibold text-xs font-mono glass-panel border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-emerald-400 hover:bg-emerald-500/10 transition-all active:scale-95 flex items-center gap-2"
              >
                <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                <span>Explore My Ventures ↓</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-[#00F0FF] hover:border-cyan-500/40 transition-all hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-[#00F0FF] hover:border-cyan-500/40 transition-all hover:scale-110"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-[#00F0FF] hover:border-cyan-500/40 transition-all hover:scale-110"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Authentic Profile Card & Terminal Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md group"
            >
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 opacity-40 blur-xl group-hover:opacity-60 transition duration-500" />

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-[#0B0D14] border border-white/10 overflow-hidden shadow-2xl p-4 sm:p-5">
                
                {/* Photo Container */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                  <img
                    src={profileImg}
                    alt="R. Tawfeeq Ahmed"
                    onError={() => {
                      if (!imageError) {
                        setImageError(true);
                        setProfileImg('/tawfeeq-candidate.png');
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-transparent to-black/20" />

                  {/* Top-Right Badge: Institution */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-[#080A10]/90 backdrop-blur-md border border-cyan-500/30 flex items-center gap-1.5 shadow-lg">
                    <img src="/bishop-heber-crest.png" alt="BHC" className="w-4 h-4 object-contain rounded-full" onError={(e) => { e.target.style.display = 'none'; }} />
                    <span className="text-[10px] font-mono font-bold text-cyan-300">BHC · FinTech</span>
                  </div>

                  {/* Top-Left Image Switcher/Upload tool */}
                  <label
                    htmlFor="hero-photo-upload"
                    className="absolute top-3 left-3 p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-slate-300 hover:text-white cursor-pointer transition-all shadow-lg"
                    title="Change Profile Photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <input
                      id="hero-photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#090C14]/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-1.5">
                          R. Tawfeeq Ahmed
                          <ShieldCheck className="w-4 h-4 text-cyan-400" />
                        </h3>
                        <p className="text-[11px] text-slate-400 font-mono">
                          Bishop Heber College, Tiruchirappalli
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Ready to Build
                        </span>
                        <span className="text-[10px] text-slate-400 block font-mono">2nd Year FinTech</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Quick Terminal Launcher Strip */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[11px]">initializing_portfolio...</span>
                  </div>
                  <button
                    onClick={onOpenTerminal}
                    className="text-cyan-400 hover:text-cyan-300 text-[11px] underline decoration-dotted flex items-center gap-1"
                  >
                    Open CLI
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
