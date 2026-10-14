import React, { useState } from 'react';
import { CreditCard, Sparkles, Zap, Users } from 'lucide-react';

interface HeroProps {
  onOpenAccount: () => void;
  onOpenTransfer: () => void;
  onShowNotification: (title: string, message: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAccount,
  onOpenTransfer,
  onShowNotification,
}) => {
  const [cardTheme, setCardTheme] = useState<'crimson' | 'obsidian' | 'emerald'>('crimson');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setMousePos({ x, y });
  };

  const handleCardMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const cardGradients = {
    crimson: 'from-rose-500 via-rose-600 to-red-700',
    obsidian: 'from-neutral-800 via-neutral-900 to-black',
    emerald: 'from-emerald-600 via-teal-700 to-brand-dark',
  };

  return (
    <section
      id="personal"
      className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 bg-[#fcfbf7] dark:bg-[#070e0a] overflow-hidden transition-colors duration-300"
    >
      {/* Subtle Background Grid Guide Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-15 max-w-6xl mx-auto border-x border-neutral-200 dark:border-neutral-800 flex justify-between"
        aria-hidden="true"
      >
        <div className="w-1/3 border-r border-neutral-200 dark:border-neutral-800 h-full"></div>
        <div className="w-1/3 border-r border-neutral-200 dark:border-neutral-800 h-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Top Pill Tag */}
        <div className="anim-float-1 inline-flex items-center gap-1.5 px-3.5 py-1 mb-8 rounded-full bg-neutral-200/70 dark:bg-neutral-800/80 text-xs font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm cursor-pointer hover:bg-neutral-300/80 dark:hover:bg-neutral-700 transition-colors"
          onClick={() => onShowNotification('Next-Gen Security', 'AI-assisted transaction auditing with 99.99% uptime guarantees.')}
          role="button"
          tabIndex={0}
          aria-label="Smart Banking features"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Smart Banking
        </div>

        {/* Main Editorial Headline with inline badges */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter-headline text-neutral-900 dark:text-white leading-[1.12] max-w-4xl mx-auto text-balance">
          Can one smarter bank{' '}
          {/* Lime pill with dots */}
          <button
            type="button"
            onClick={() => onShowNotification('Curated Banking Tools', 'Zero hidden fees, instant foreign exchange, and smart tax vaults.')}
            className="anim-float-2 inline-flex items-center justify-center align-middle mx-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#ccf736] text-neutral-900 text-xs sm:text-sm font-bold shadow-sm hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            aria-label="View core features summary"
            title="Click to view features"
          >
            <span className="inline-flex space-x-1" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-neutral-900"></span>
              <span className="w-2 h-2 rounded-full bg-neutral-900"></span>
              <span className="w-2 h-2 rounded-full bg-neutral-900"></span>
            </span>
          </button>{' '}
          change how you{' '}
          {/* Avatar stack badge */}
          <button
            type="button"
            onClick={() => onShowNotification('Trusted Globally', 'Over 18,400+ members manage their finances with Plerouse today.')}
            className="anim-float-3 inline-flex items-center align-middle mx-1.5 -space-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentLime rounded-full"
            aria-label="View community of over 18,400 members"
            title="18,400+ Active Members"
          >
            <img
              alt="Plerouse Member"
              referrerPolicy="no-referrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG8M64ek-YIjDcKBRzTxT0qVEHM4tUYhJ1aNp3RAQLsg6uu3dAqT1E2_EPHZIVMkmvAySISJm7XrmA3Fq1v2w9xdLR8Sgnfo1F3ARrQdU9FwoU6kAwdZB6zG2TGqIbriy7WVPmpLrrsqWFys2o4JgiEjfKgUETBJUAo-vvY6lpxeKghbeQrdASdNCi_yKgc05p33YLmclRE84ZPbchYY04SQL1q5fmAWn2HZF-8PesL00Q9W8906P-"
            />
            <img
              alt="Plerouse Member"
              referrerPolicy="no-referrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 delay-75"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6UcB-ZWtovTmPrSvy-Q7bJ1hC2s8Nr_lK-m0MLDCuTZqRiFO5bX7pzF0rTRaQo23ENDOb75ZRo5pcpbSzbnS-m_bPuoqP38bDu4IwRV_CBw5zJ6t4-gMTwzvX_GiksYOYAb91QB3dhE-nzfRBPmauezInwkUyvIYwIgMrac77hEgcGIoIaD3zRebfFtKvfQky16YyRPP8y1eVEElRNTMVb51jbiUfgT_MtrC4c-D45WH5MZ7oyLs9"
            />
            <img
              alt="Plerouse Member"
              referrerPolicy="no-referrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 delay-150"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNrumAwcIM_X5xHE8WEfgNKbL1I8s6Xyl4xW6LqeVFMCwFvxu-78RIijFME8hGLFrSShMBkyL5o3qmM6JwHfrvi1Mz9dCDaKmnD8Y5DU8jr56K3Do4Q6Nt45-ETelWoCuwZXNxIR24-LXUqK2EDiTK3g1dLd6H62__tMmYYrzRX0w_hjO2o4X5BBrCBRe_7hMyEhMcEGuP8z4sqbPQBiSWLDv9VpydEXNGxtv_6HMwygXIPjOIxey0"
            />
          </button>{' '}
          manage money?{' '}
          {/* Pink Pill Badge with interactive transfer launch */}
          <button
            type="button"
            onClick={onOpenTransfer}
            className="anim-float-1 inline-flex items-center align-middle mx-1 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-brand-pink text-neutral-900 text-xs sm:text-sm font-medium shadow-sm hover:scale-105 hover:bg-rose-300 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            aria-label="Simulate instant transfer"
            title="Click to test Instant Transfer"
          >
            Instant transfer
          </button>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto font-normal">
          Spend, save, transfer, and track your money with clarity — all from one secure digital account.
        </p>

        {/* Card Customization Tabs */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="text-xs text-neutral-500 dark:text-neutral-400 mr-1">Virtual Card:</span>
          {(['crimson', 'obsidian', 'emerald'] as const).map((theme) => (
            <button
              key={theme}
              type="button"
              onClick={() => setCardTheme(theme)}
              className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                cardTheme === theme
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                  : 'bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          ))}
        </div>

        {/* Hero Card Showcase */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
            }}
            className="tilt-card relative w-full max-w-sm sm:max-w-md bg-neutral-900 dark:bg-neutral-950 rounded-[2.5rem] p-4 shadow-2xl group cursor-pointer border border-neutral-800"
            role="region"
            aria-label="Plerouse Digital Card interactive showcase"
          >
            <div
              className={`relative rounded-[2rem] overflow-hidden bg-gradient-to-b ${cardGradients[cardTheme]} aspect-[4/5] flex flex-col justify-between p-6 transition-colors duration-500`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between z-10">
                <span className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center text-white text-xs font-bold transition-transform duration-500 group-hover:rotate-180">
                  ©
                </span>
                <span className="text-xs uppercase tracking-wider text-white/80 font-medium">Digital Card</span>
              </div>

              {/* Stylized Model Portrait */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <img
                  alt="Smart Banking Account Holder"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-90 brightness-110 contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwmaiIHFVJSdlpnUSlYQORh4qF_9LViRQykcUuU_7TOIqZ0Zyqr-fwLshqB5NV49KtTOBAZ09xqK3ImV-BFjz5y93WNja3bQtgDAfTEDXjEIPV392ViFhrtYmsB1Adz523BBWpJOZdHdBp0-Lyy11dkt-I3ikEEgk8k4IHqkB0xaF94KdK960FDtbn632iTf1ykTXZIV3lCaDT_mwO3zvqt-UhcP7co3owR9lcXPYjQ2B9u8kgV1fo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
              </div>

              {/* Card Bottom Info */}
              <div className="relative z-10 flex items-end justify-between mt-auto">
                <div className="text-left">
                  <p className="text-xs text-white/70">Smart Banking</p>
                  <p className="text-sm font-semibold text-white tracking-wide">
                    Your money,<br />clearly organized.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenAccount();
                  }}
                  className="px-5 py-2.5 rounded-full bg-white text-neutral-900 font-semibold text-xs tracking-tight shadow hover:bg-neutral-100 hover:scale-105 active:scale-95 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentLime"
                >
                  Open Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
