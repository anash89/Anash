import React, { useState } from 'react';
import { ArrowUpRight, Plus, Send, Wallet, TrendingUp, Sparkles } from 'lucide-react';

interface VibrantPinkSectionProps {
  balance: number;
  savingsGoal: number;
  savingsProgress: number;
  currency: string;
  onOpenTransfer: () => void;
  onOpenSavings: () => void;
  onOpenAccount: () => void;
  onShowNotification: (title: string, message: string) => void;
}

export const VibrantPinkSection: React.FC<VibrantPinkSectionProps> = ({
  balance,
  savingsGoal,
  savingsProgress,
  currency,
  onOpenTransfer,
  onOpenSavings,
  onOpenAccount,
  onShowNotification,
}) => {
  const [impactModalOpen, setImpactModalOpen] = useState(false);

  // Format balance with standard European delimiter as seen in design '2.409.00'
  const formattedBalance = balance.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <section
      id="cards"
      className="bg-brand-pink dark:bg-[#bf4f6f] text-neutral-900 py-20 px-6 sm:px-12 transition-colors duration-300"
      aria-label="Community, Impact & Live Balance"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Title with Action Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-16 border-b border-neutral-900/10 dark:border-neutral-900/20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight max-w-2xl leading-tight text-neutral-950">
            Can a single building change an entire neighborhood?
          </h2>
          <button
            type="button"
            onClick={() => setImpactModalOpen(true)}
            className="btn-circle-arrow w-14 h-14 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-xl transition-all duration-300 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            aria-label="Learn about Plerouse urban reinvestment initiative"
            title="Urban Reinvestment Initiative"
          >
            <ArrowUpRight className="w-6 h-6 stroke-[2.2]" />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Customer Community & Stat */}
          <div className="lg:col-span-5 space-y-8">
            {/* Clustered Avatars with Floating Badge */}
            <div className="relative w-64 h-48 mx-auto sm:mx-0">
              <img
                alt="Community member"
                referrerPolicy="no-referrer"
                onClick={() => onShowNotification('Elena Rostova', 'Automated savings member since 2024.')}
                className="anim-float-1 absolute top-8 left-2 w-14 h-14 rounded-full border-2 border-white object-cover shadow hover:scale-110 transition-transform cursor-pointer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSXWKCOoRY0ZNROnLy2hYtkFWPMfrIzl1-xpEQQmBJK_f_mNMDf6ZKjWoOzQF90zgZoc1xZ2y1TUaRijr3JHEU-gs4cbD6K5znE2Z8AJsUwmtwta1h_0MAzCVLJNI8lAoN1w6F_q6HG8OM0aO_rdx94nDdXr9w5SXIvczTwewS3cxUkOZjGvEJ6nudhqfIMAD70-7C4XHjm4rVktB3CzJtioDb9tzTEVUm4Cnga1JmX2vhRhIThlk8"
              />
              <img
                alt="Community member"
                referrerPolicy="no-referrer"
                onClick={() => onShowNotification('Marcus Vance', 'Small business account holder.')}
                className="anim-float-2 absolute top-0 left-20 w-16 h-16 rounded-full border-2 border-white object-cover shadow hover:scale-110 transition-transform cursor-pointer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKL98lXjHlHBxzEftjbpmNmoddaHC6kLa9ViTwy1EOzc6zZ2ffC8EFD1C7E-cwkCPd8W6Xp7xhPgUmp264ECZnwQn62M2XJnDPVHGgWb4Dkuj7w086fthj4puyoPR0XqWPp15tMcUHQIjOdkyXPhEPM3W6U_OscAfLl9-q0v1t9KIbxxwY7u8mxKc_BKHkx3IXHwTyA3Iu0D4PGbxGH-4h1zGn6UMer5sklUmrhrwcnBSDJHi-VZJ4"
              />
              <img
                alt="Community member"
                referrerPolicy="no-referrer"
                onClick={() => onShowNotification('Amina Patel', 'Cross-border digital nomad.')}
                className="anim-float-3 absolute top-12 left-32 w-16 h-16 rounded-full border-2 border-white object-cover shadow hover:scale-110 transition-transform cursor-pointer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMICwV1oQunZVqlAFW7WDbR8STV2I1LkJnJYry9S-8Wj412Cb_I6M752EKgs3nVDN7PkEcO9uF74OoxlqD0W8wp--ceQxgAkx6Qdh9hnNPKsBI1tVq04XYjvS1tqZ0Okq2xcggUnbI7mR-UvkSWIrbvXqL9rM3h6Nax1YLJ24hdHP8NjAoPWyLU2mBGx1BCvmNoLyCk4bqN7R2RQyRKQ_pj68L7xSuHfk5vb9Wk99thwJxKsWURrdA"
              />
              <img
                alt="Community member"
                referrerPolicy="no-referrer"
                onClick={() => onShowNotification('Liam O’Connor', 'Plerouse Wealth investor.')}
                className="anim-float-1 absolute top-20 left-16 w-16 h-16 rounded-full border-2 border-white object-cover shadow-md hover:scale-110 transition-transform cursor-pointer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz4OzoWrDDnBFkBX9CdQrSTGyabyEQkk_HGBmQ7fTbe9mMnT8KYFZ_Jj17aqAaE9s0iGpafOvAuHpw8aQjX69j84wr3APO5cscU1NWqT3OjTl_ubjJs0A8KlLcnQC9yt38Lfu_yIgBaIB9xISsYWvI6L7geshTctxFKlJoD0jwoFULll_81ePMNsrOBYDJ8DO0ALz1yOVB-Q7whsAeeihXgYnG7L8cjpP2S6WGmfWIN3mbHihvKyt7"
              />
              {/* Floating tag on avatar cluster */}
              <div className="anim-float-2 absolute bottom-2 left-32 z-10">
                <span className="px-3.5 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-semibold tracking-wide shadow-md hover:scale-105 transition-transform inline-block">
                  Money Clarity
                </span>
              </div>
            </div>

            <div>
              <p className="text-6xl sm:text-7xl font-extrabold tracking-tight text-neutral-950 flex items-center font-mono">
                <span>18</span>+
              </p>
              <p className="text-sm font-medium text-neutral-900 mt-1">
                Users building better money habits
              </p>
              <p className="text-xs text-neutral-800/80 mt-1">
                Over 18,400 active monthly depositors across 34 countries
              </p>
            </div>
          </div>

          {/* Right: Modern Banking Card Widgets */}
          <div className="lg:col-span-7 space-y-4">
            {/* Dark Balance Widget Card */}
            <div className="tilt-card bg-brand-dark text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden group border border-neutral-800">
              <div className="flex items-center justify-between mb-8 relative z-10">
                <span className="text-xl font-bold tracking-tight">Plerouse</span>
                <div className="flex items-center space-x-2">
                  <span className="relative radar-beacon px-3.5 py-1.5 rounded-full bg-brand-accentLime text-neutral-950 text-xs font-bold tracking-tight shadow flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neutral-950"></span>
                    Smart Banking
                  </span>
                  <img
                    alt="Account holder profile"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-brand-accentLime object-cover transition-transform group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYIt2JV59NJlCPd9GecMqYgFWkM09BCyQTeyr2gZbZH_faJQZSmiWn5dbAxKJ7t2jHC4cVZs_a17zEk2vVZYYqGzbaRDAaQwP-QaWYzWw0EUJ-6WeLg51b4Pc1yDz170SCPzZFHOKvqHHwfSElVklSnJsv2UnpRFB2iGqaMHieaX4thouGoFZUjmDWFwPT2yDTbVRJYZREfAsygVH_Tn54GGxGzgEciMLkUBqE3SOXqRUAhvPbAJVb"
                  />
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
                    Available Balance
                  </p>
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +$340.20 this week
                  </span>
                </div>
                <h3 className="text-5xl sm:text-6xl font-extrabold font-mono tracking-tight text-white">
                  {formattedBalance}
                </h3>

                {/* Interactive Card Quick Controls */}
                <div className="mt-6 pt-6 border-t border-neutral-800/80 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={onOpenTransfer}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-accentLime text-neutral-950 text-xs font-semibold hover:bg-lime-300 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Money</span>
                  </button>
                  <button
                    type="button"
                    onClick={onOpenSavings}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Goal</span>
                  </button>
                  <button
                    type="button"
                    onClick={onOpenAccount}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Wallet className="w-3.5 h-3.5" />
                    <span>Manage Card</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Burgundy Savings Goal Bar */}
            <div
              onClick={onOpenSavings}
              className="tilt-card bg-brand-burgundy text-white rounded-3xl p-6 sm:p-8 flex items-center justify-between shadow-lg group hover:bg-[#520d0d] transition-all cursor-pointer border border-rose-950/40"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenSavings();
                }
              }}
              aria-label={`View Savings Goal. Target is ${savingsGoal}K, currently at ${Math.round((savingsProgress / (savingsGoal * 1000)) * 100)}%`}
            >
              <div className="space-y-1">
                <span className="text-base sm:text-xl font-semibold tracking-tight text-amber-100 block">
                  Savings Goal
                </span>
                <span className="text-xs text-rose-200/80 font-mono">
                  ${savingsProgress.toLocaleString()} saved · 71% completed
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white transition-transform group-hover:scale-105 inline-block font-mono">
                  {savingsGoal}K
                </span>
                <ArrowUpRight className="w-6 h-6 text-rose-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Urban Community Impact Modal */}
      {impactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setImpactModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0e1e17] border border-neutral-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-pink" />
                Urban Neighborhood Reinvestment
              </h4>
              <button
                type="button"
                onClick={() => setImpactModalOpen(false)}
                className="text-neutral-400 hover:text-white p-2"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              For every digital transaction made through Plerouse, a percentage of merchant interchange is dedicated to urban revitalisation projects, clean community hubs, and micro-loans for local independent businesses.
            </p>
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="p-3 bg-neutral-900 rounded-2xl border border-neutral-800">
                <span className="text-xs text-neutral-400 block">Community Grants</span>
                <span className="text-xl font-bold text-brand-pink font-mono">$1.4M</span>
              </div>
              <div className="p-3 bg-neutral-900 rounded-2xl border border-neutral-800">
                <span className="text-xs text-neutral-400 block">Local Businesses</span>
                <span className="text-xl font-bold text-brand-accentLime font-mono">240+</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setImpactModalOpen(false)}
              className="w-full py-3 rounded-full bg-brand-pink text-neutral-950 font-semibold hover:bg-rose-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
