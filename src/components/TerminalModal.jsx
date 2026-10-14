import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, Sparkles, Send, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS_DATA, TERMINAL_BOOT_LOGS } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [logs, setLogs] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && logs.length === 0) {
      // Stream initial boot sequence
      TERMINAL_BOOT_LOGS.forEach((line, index) => {
        setTimeout(() => {
          setLogs((prev) => [...prev, { type: 'system', text: line }]);
        }, index * 240);
      });
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { type: 'info', text: "Type 'help' to see available commands (e.g. about, skills, edu, exp, contact, clear)." }
        ]);
      }, TERMINAL_BOOT_LOGS.length * 240 + 200);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    setLogs((prev) => [...prev, { type: 'user', text: `$ ${cmdStr}` }]);
    setHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    switch (cmd) {
      case 'help':
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: `Available commands:
  • about       - View personal overview and interests
  • skills      - View foundational programming & domain interests
  • edu         - View B.Com Financial Technology degree details
  • exp         - View student leadership positions
  • projects    - View featured portfolio and concepts
  • contact     - Display official contact channels
  • clear       - Clear terminal window
  • matrix      - Toggle digital code mode
  • status      - Current learning & building state`
          }
        ]);
        break;

      case 'about':
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: `${PERSONAL_INFO.fullName} | Second-Year B.Com FinTech Student
Bishop Heber College, Tiruchirappalli, Tamil Nadu, India.
Passionate about coding, web development, digital finance, and turning ideas into useful digital experiences.`
          }
        ]);
        break;

      case 'skills':
        const progList = SKILLS_DATA.programming.map((s) => `  - ${s.name}: ${s.level} (${s.stage})`).join('\n');
        const domainList = SKILLS_DATA.domains.map((d) => `  - ${d.name}: ${d.level}`).join('\n');
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: `PROGRAMMING & WEB:\n${progList}\n\nAREAS OF INTEREST:\n${domainList}`
          }
        ]);
        break;

      case 'edu':
      case 'education':
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: `DEGREE: ${EDUCATION_DATA.degree}
INSTITUTION: ${EDUCATION_DATA.institution}, ${EDUCATION_DATA.location}
STATUS: ${EDUCATION_DATA.status}
DEPT: ${EDUCATION_DATA.department}
DESCRIPTION: ${EDUCATION_DATA.description}`
          }
        ]);
        break;

      case 'exp':
      case 'experience':
      case 'leadership':
        const expList = EXPERIENCE_DATA.map((e) => `  • ${e.role} — ${e.organization} (${e.badge})`).join('\n');
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: `LEADERSHIP & POSITIONS:\n${expList}`
          }
        ]);
        break;

      case 'projects':
        const pList = PROJECTS_DATA.map((p) => `  • ${p.title} [${p.badge}]\n    ${p.description}`).join('\n\n');
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: `PROJECT SHOWCASE:\n${pList}`
          }
        ]);
        break;

      case 'contact':
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: `EMAIL:    ${PERSONAL_INFO.email}
LINKEDIN: ${PERSONAL_INFO.linkedin}
GITHUB:   ${PERSONAL_INFO.github}`
          }
        ]);
        break;

      case 'status':
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: `[ACTIVE] ${PERSONAL_INFO.status}
Current Focus: Strengthening CSS, exploring modern React interfaces, digital marketing diploma.`
          }
        ]);
        break;

      case 'matrix':
        setLogs((prev) => [
          ...prev,
          {
            type: 'matrix',
            text: `01000110 01001001 01001110 01010100 01000101 01000011 01001000
>> Entering digital stream...
>> Welcome to R. Tawfeeq Ahmed's developer environment.`
          }
        ]);
        break;

      case 'clear':
        setLogs([]);
        break;

      default:
        setLogs((prev) => [
          ...prev,
          {
            type: 'error',
            text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`
          }
        ]);
        break;
    }

    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputValue(history[nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= history.length) {
          setHistoryIndex(-1);
          setInputValue('');
        } else {
          setHistoryIndex(nextIndex);
          setInputValue(history[nextIndex]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-x-4 bottom-6 md:inset-x-auto md:right-8 md:bottom-8 md:w-[580px] z-[9990] shadow-2xl"
      >
        <div className="bg-[#0A0D14]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.15)] flex flex-col">
          {/* Terminal Title Bar */}
          <div className="bg-[#06080E] px-4 py-3 flex items-center justify-between border-b border-white/10 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer hover:opacity-80" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block cursor-pointer hover:opacity-80" onClick={() => setIsMinimized(!isMinimized)} />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <div className="ml-3 flex items-center gap-1.5 text-xs font-mono text-slate-300">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>tawfeeq@bhc-fintech:~$</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:text-white transition-colors"
                title={isMinimized ? "Expand" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Content Body */}
          {!isMinimized && (
            <>
              <div
                className="p-4 h-72 md:h-80 overflow-y-auto font-mono text-xs text-slate-300 space-y-2 selection:bg-cyan-500/30 selection:text-cyan-200"
                onClick={() => inputRef.current?.focus()}
              >
                {logs.map((log, index) => (
                  <div key={index} className="leading-relaxed">
                    {log.type === 'system' && (
                      <div className="text-cyan-400/90 font-semibold flex items-center gap-1.5">
                        <span className="text-slate-600">›</span>
                        <span>{log.text}</span>
                      </div>
                    )}
                    {log.type === 'info' && (
                      <div className="text-slate-400 bg-white/[0.02] p-2 rounded border border-white/5 my-1">
                        {log.text}
                      </div>
                    )}
                    {log.type === 'user' && (
                      <div className="text-violet-300 font-bold mt-2">
                        {log.text}
                      </div>
                    )}
                    {log.type === 'output' && (
                      <div className="text-slate-300 whitespace-pre-wrap pl-3 border-l-2 border-cyan-500/40 my-1 bg-white/[0.01] py-1">
                        {log.text}
                      </div>
                    )}
                    {log.type === 'matrix' && (
                      <div className="text-emerald-400 whitespace-pre-wrap pl-3 border-l-2 border-emerald-500/40 font-mono">
                        {log.text}
                      </div>
                    )}
                    {log.type === 'error' && (
                      <div className="text-rose-400 pl-3 border-l-2 border-rose-500/40">
                        {log.text}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input Area */}
              <div className="bg-[#06080E] px-4 py-2.5 border-t border-white/10 flex items-center gap-2 font-mono text-xs">
                <span className="text-cyan-400 font-bold">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type 'help' and press Enter..."
                  className="w-full bg-transparent text-slate-200 focus:outline-none placeholder:text-slate-600"
                  autoFocus
                />
                <button
                  onClick={() => handleCommand(inputValue)}
                  className="text-slate-400 hover:text-cyan-400 p-1"
                  title="Submit"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
