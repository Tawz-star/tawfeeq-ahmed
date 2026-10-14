import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionState, setSubmissionState] = useState(null); // 'submitted' | null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please enter your message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});

    // Confetti celebration
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00F0FF', '#8B5CF6', '#3B82F6']
      });
    } catch (err) {
      // ignore
    }

    // Set state
    setSubmissionState('prepared');
  };

  const handleLaunchEmailClient = () => {
    const subject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMUNICATION CHANNELS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Have an Idea? Let's Connect.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            I'm always interested in learning, connecting with people, and exploring opportunities to collaborate on meaningful digital projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Fastest way to reach me for inquiries, student collaborations, and conversations.
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-blue-400/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>Connect</span>
                </a>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                LinkedIn Profile
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-white hover:text-blue-300 transition-colors block truncate"
              >
                tawfeeq-ahmed-24269b377
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Professional updates, networking, and student leadership discussions.
              </p>
            </div>

            {/* GitHub Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-violet-400/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 hover:text-violet-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>Follow</span>
                </a>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                GitHub Repository
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-white hover:text-violet-300 transition-colors block"
              >
                github.com/Tawz-star
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Open source commits, foundational scripts, and web development experiments.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white font-display mb-1">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your details below. Fields are validated to ensure your message reaches me reliably.
                </p>
              </div>

              {submissionState === 'prepared' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-4"
                >
                  <div className="flex items-center gap-3 text-cyan-400 font-bold font-display text-lg">
                    <Sparkles className="w-5 h-5" />
                    <span>Message Ready for Dispatch!</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>! As this is a static client environment without a dedicated backend configured yet, your message has been pre-formatted for Tawfeeq's direct inbox (<span className="text-cyan-300 font-mono">{PERSONAL_INFO.email}</span>).
                  </p>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-300 space-y-1">
                    <p><strong className="text-cyan-400">Subject:</strong> {formData.subject}</p>
                    <p className="line-clamp-2"><strong className="text-cyan-400">Preview:</strong> {formData.message}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={handleLaunchEmailClient}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-400 to-blue-600 text-black shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email Client</span>
                    </button>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `Subject: ${formData.subject}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`
                        );
                        alert("Message copied to clipboard! You can paste it into Gmail/Outlook.");
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold glass-panel border border-white/10 text-slate-200 hover:text-white"
                    >
                      Copy Formatted Text
                    </button>

                    <button
                      onClick={() => {
                        setSubmissionState(null);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs text-slate-400 hover:text-white"
                    >
                      Reset Form
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 font-mono italic">
                    Note: To connect an automatic headless dispatch without opening an email client, configure an endpoint like Web3Forms or Formspree in this component.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-xs sm:text-sm focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      Your Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-xs sm:text-sm focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Collaboration on Web Project / FinTech Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-xs sm:text-sm focus:outline-none transition-colors ${
                        errors.subject ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Tawfeeq, I'd like to talk about..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-xs sm:text-sm focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black shadow-lg shadow-cyan-500/20 hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center font-mono pt-1">
                    Direct email fallback enabled · No third-party data tracking
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
