import React, { useState } from 'react';
import { Lock, Sparkles, Activity } from 'lucide-react';

interface SecurityManifestProps {
  onShowNotification: (title: string, message: string) => void;
}

export const SecurityManifest: React.FC<SecurityManifestProps> = ({
  onShowNotification,
}) => {
  // Interactive dot matrix state: 9 dots
  const [activeDots, setActiveDots] = useState<boolean[]>([
    true, true, true,
    true, true, false,
    true, true, false,
  ]);

  // Interactive spending category for the equalizer
  const [spendingCategory, setSpendingCategory] = useState<'All' | 'Food' | 'Travel' | 'Tech'>('All');

  const toggleDot = (index: number) => {
    setActiveDots((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const spendingData = {
    All: { total: '$1,840', change: '-12% this month' },
    Food: { total: '$420', change: '8 transactions' },
    Travel: { total: '$680', change: 'Flight & transit' },
    Tech: { total: '$340', change: 'Subscriptions' },
  };

  return (
    <section
      id="security"
      className="py-24 px-6 sm:px-12 bg-[#fcfbf7] dark:bg-[#070e0a] border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300"
      aria-label="Security, Clarity and Insights"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Centered Modern Padlock Icon */}
        <div
          onClick={() =>
            onShowNotification(
              'Zero-Knowledge Architecture',
              'Your biometric authentication and credentials never leave your secure enclave.'
            )
          }
          className="w-14 h-14 mx-auto rounded-2xl bg-neutral-900/5 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-neutral-100 transition-transform duration-300 hover:scale-110 hover:bg-neutral-900/10 dark:hover:bg-neutral-700 cursor-pointer shadow-sm"
          role="button"
          tabIndex={0}
          aria-label="Security guarantee details"
        >
          <Lock className="w-8 h-8 transition-transform duration-300 hover:-rotate-6 stroke-[1.8]" />
        </div>

        {/* Manifest Statement */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed text-neutral-900 dark:text-neutral-100 max-w-4xl mx-auto text-balance">
          Designed for clarity, security, and everyday control — engineered to help you understand your money, protect your data, and make financial decisions with confidence. A new standard in digital banking, built for real life.
        </h2>
      </div>

      {/* 4-Card Editorial Carousel / Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Pink Dots Grid Pattern */}
        <div
          className="tilt-card bg-brand-burgundy rounded-3xl p-6 h-80 flex flex-col justify-between text-white shadow-md group cursor-pointer border border-rose-950/30"
          role="region"
          aria-label="Smarter money decisions interactive matrix"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300">
                Pattern Matrix
              </span>
              <span className="text-[10px] font-mono text-rose-300/70">Tap dots</span>
            </div>
            {/* Interactive Dot Matrix */}
            <div className="grid grid-cols-3 gap-3 w-fit">
              {activeDots.map((isActive, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleDot(idx)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 hover:scale-125 focus-visible:outline-none ${
                    isActive ? 'bg-brand-pink shadow-[0_0_8px_rgba(252,165,190,0.6)]' : 'bg-brand-pink/20 hover:bg-brand-pink/50'
                  }`}
                  aria-label={`Matrix point ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div>
            <span className="text-4xl font-bold block flex items-center font-mono">
              18+
            </span>
            <span className="text-xs text-brand-pink/80 tracking-wide font-mono uppercase">
              Smarter money decisions
            </span>
          </div>
        </div>

        {/* Card 2: Cap Portrait */}
        <div
          onClick={() => onShowNotification('Mobile First Speed', 'Transfer funds in under 2 seconds worldwide.')}
          className="tilt-card rounded-3xl overflow-hidden h-80 shadow-md bg-neutral-200 dark:bg-neutral-800 group cursor-pointer relative"
          role="button"
          tabIndex={0}
          aria-label="Customer using Plerouse on mobile"
        >
          <img
            alt="Active banking user in cap checking transactions"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYN30tujGBudmOcw_JoH4v8pDXWCfSbfDCi4KK-6DQfIMdzQvpzWVU_v_xUSPg-DFnBJbUKDtF8NA7_MCHf-ZhmcOYvld1zLto3jXbr6o7Kmhlx7Xw2QL1fA4EI4ifQBgrXQXsMvSHgNe-4X5ErkXhrdC3djsClEpBARfaUsDWTdulRXdaWwAqS3STrHGDvLvv24kJ-N_Z9pPIHDn9psfhoxYI8fdQBKZHPOV05YVo-MUjpizNOQj1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
            <span className="text-xs text-white font-medium">Real-time mobile experience</span>
          </div>
        </div>

        {/* Card 3: Equalizer Card with Dynamic Live Bounce */}
        <div
          className="tilt-card bg-neutral-900 rounded-3xl p-6 h-80 flex flex-col justify-between text-white shadow-md group border border-neutral-800"
          role="region"
          aria-label="Spending Insight Equalizer"
        >
          <div>
            <p className="text-base font-normal leading-snug text-neutral-200 group-hover:text-white transition-colors">
              Designed for clarity, security, and everyday financial control
            </p>

            {/* Filter pills for category */}
            <div className="flex items-center gap-1.5 mt-3">
              {(['All', 'Food', 'Travel', 'Tech'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSpendingCategory(cat)}
                  className={`px-2 py-0.5 text-[10px] rounded-md transition-colors ${
                    spendingCategory === cat
                      ? 'bg-brand-accentLime text-neutral-950 font-bold'
                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Spending insight equalizer bars with live bouncing animation */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
                  Spending Insight ({spendingCategory})
                </span>
                <span className="text-xs font-mono text-brand-accentLime">
                  {spendingData[spendingCategory].total} · {spendingData[spendingCategory].change}
                </span>
              </div>
              <span className="w-2 h-2 rounded-full bg-brand-accentLime animate-ping" aria-hidden="true"></span>
            </div>

            <div className="flex items-end gap-1.5 h-12" aria-hidden="true">
              <span className="eq-bar-1 w-2 rounded-t bg-neutral-700"></span>
              <span className="eq-bar-2 w-2 rounded-t bg-neutral-700"></span>
              <span className="eq-bar-3 w-2 rounded-t bg-neutral-700"></span>
              <span className="eq-bar-4 w-2 rounded-t bg-brand-accentLime shadow-[0_0_10px_rgba(190,242,100,0.5)]"></span>
              <span className="eq-bar-5 w-2 rounded-t bg-brand-accentLime shadow-[0_0_8px_rgba(190,242,100,0.4)]"></span>
              <span className="eq-bar-6 w-2 rounded-t bg-neutral-700"></span>
              <span className="eq-bar-7 w-2 rounded-t bg-neutral-700"></span>
            </div>
          </div>
        </div>

        {/* Card 4: Editorial Woman Portrait */}
        <div
          onClick={() => onShowNotification('Dedicated Concierge', 'Personal human banker support 24/7.')}
          className="tilt-card rounded-3xl overflow-hidden h-80 shadow-md bg-neutral-200 dark:bg-neutral-800 group cursor-pointer relative"
          role="button"
          tabIndex={0}
          aria-label="Plerouse Customer Advisory Specialist"
        >
          <img
            alt="Plerouse Customer Advisory Specialist"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4IALFdzdzOZByGmLlcCgSbz6DhJJbLEFIQRxovcIskjYYwxPHczPXvkDDzPRm07XXB-NyidAseT48umGOimUDCnnzASiJ0XpYvpz0bv57BkeRCef2H0oPFDHuzvAheWU2X8YoPkqBSWTxg5fDIsTO17VO_CyytkG76Mev3WmTazUP31prqeVn4c5uy5RqjPXVgog_VoZtksNtLl9JQUwfubG-0pXiTKmW82oxKckd0GHndf4VEqi9"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
            <span className="text-xs text-white font-medium">Dedicated Private Banker</span>
          </div>
        </div>
      </div>
    </section>
  );
};
