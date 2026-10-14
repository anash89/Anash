import React, { useState } from 'react';
import { User, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface StreamItem {
  id: number;
  number: string;
  title: string;
  badge: string;
  tag: string;
  headline: string;
  image: string;
  description: string;
  actionText: string;
}

interface DarkShowcaseProps {
  onOpenTransfer: () => void;
  onOpenSavings: () => void;
  onOpenAccount: () => void;
  onShowNotification: (title: string, message: string) => void;
}

export const DarkShowcase: React.FC<DarkShowcaseProps> = ({
  onOpenTransfer,
  onOpenSavings,
  onOpenAccount,
  onShowNotification,
}) => {
  const [activeStreamId, setActiveStreamId] = useState<number>(2);
  const [securityModalOpen, setSecurityModalOpen] = useState(false);

  const streams: Record<number, StreamItem> = {
    1: {
      id: 1,
      number: '01',
      title: 'Banking',
      badge: 'Core Banking',
      tag: 'Everyday Accounts & Vaults',
      headline: 'Seamless daily spending, instant bill splitting, and full clarity.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwmaiIHFVJSdlpnUSlYQORh4qF_9LViRQykcUuU_7TOIqZ0Zyqr-fwLshqB5NV49KtTOBAZ09xqK3ImV-BFjz5y93WNja3bQtgDAfTEDXjEIPV392ViFhrtYmsB1Adz523BBWpJOZdHdBp0-Lyy11dkt-I3ikEEgk8k4IHqkB0xaF94KdK960FDtbn632iTf1ykTXZIV3lCaDT_mwO3zvqt-UhcP7co3owR9lcXPYjQ2B9u8kgV1fo',
      description: 'Global multi-currency accounts with real mid-market exchange rates, automated expense categorization, and zero foreign transaction fees.',
      actionText: 'Explore Vaults',
    },
    2: {
      id: 2,
      number: '02',
      title: 'Payments',
      badge: 'Gen Z Costumers',
      tag: 'And Everyday Control',
      headline: 'Can one smart account change the way you see your money?',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaa_LaWdLgbdKNgPbamD2KohqMgq7_2aDY9nc1T1Y_7wU8b3hGKADxYX8KRranyAKTFizQwuukEySaFmJ1dAvcirOahOlGRcFNPk38P56sCNf-rpl5MLHOrdcHKHaRfAx-Ekp-ElDVheezlaqUFZueZvoWugpIlgoi3lcJLDdrv1RbMnBg-tzE-j_-Z0FknwaDu393jGGrQfFIUe6cZmSuVPRV2PItbeD2oVVrdVETz3C-NMjRWoCN',
      description: 'Instant peer-to-peer transfers with zero wait times. Generate single-use disposable virtual cards for bulletproof online shopping security.',
      actionText: 'Try Instant Transfer',
    },
    3: {
      id: 3,
      number: '03',
      title: 'Savings',
      badge: 'High Yield 4.85%',
      tag: 'Automated Round-ups',
      headline: 'Watch your wealth build automatically in targeted flexible pots.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf74umxvRlFkVfUDAN9riGV6kdNRNMWC2xs1__Sg2DG5uyjXXKlypsZ7M3TmpQV0Fu_Wwx53F_vLgZzw9Nql4IPNgN7-SvJZgtSYJ6Z6xxU9IWA5LMKREyH1rW81EC0gDSEyMvCFpm1wI7WGJUuIn7vsm367n6Q-J5zizhrhekRFXB0T-ao2vgksm4hslrd5Qc5uX4UrZPcfjlBzke1MaIopZYhLV6uEDn2B0dSeaJvTWxo_CJZsOx',
      description: 'Earn 4.85% APY compounded daily on your spare cash. Set custom savings targets with smart rules that automatically tuck money away.',
      actionText: 'Calculate Interest',
    },
    4: {
      id: 4,
      number: '04',
      title: 'Investing',
      badge: 'Smart Portfolio',
      tag: 'Zero Commission Trading',
      headline: 'Invest in curated global funds tailored to your personal goals.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYN30tujGBudmOcw_JoH4v8pDXWCfSbfDCi4KK-6DQfIMdzQvpzWVU_v_xUSPg-DFnBJbUKDtF8NA7_MCHf-ZhmcOYvld1zLto3jXbr6o7Kmhlx7Xw2QL1fA4EI4ifQBgrXQXsMvSHgNe-4X5ErkXhrdC3djsClEpBARfaUsDWTdulRXdaWwAqS3STrHGDvLvv24kJ-N_Z9pPIHDn9psfhoxYI8fdQBKZHPOV05YVo-MUjpizNOQj1',
      description: 'Automated dividend reinvestment, fractional share trading, and ethical ESG portfolios with transparent pricing.',
      actionText: 'View Portfolios',
    },
  };

  const activeData = streams[activeStreamId];

  const handleStreamAction = () => {
    if (activeStreamId === 2) {
      onOpenTransfer();
    } else if (activeStreamId === 3) {
      onOpenSavings();
    } else {
      onOpenAccount();
    }
  };

  return (
    <section
      id="features"
      className="bg-brand-dark dark:bg-[#08130e] text-neutral-100 py-20 px-6 sm:px-12 relative overflow-hidden transition-colors duration-300"
      aria-label="Features and Core Streams"
    >
      {/* Top Meta Headlines */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 pb-16 border-b border-neutral-800 gap-4">
        <p className="uppercase">Built for clarity, control, and everyday banking</p>
        <p className="uppercase">Can one smart account simplify your financial life?</p>
      </div>

      <div className="max-w-6xl mx-auto pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Interactive Navigation & Feature List */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 mb-4">
            <span className="inline-block text-brand-lime text-2xl font-bold font-mono">
              {activeData.number}
            </span>
            <span className="uppercase tracking-widest">Active Stream</span>
          </div>

          {/* Interactive Stream Navigation List */}
          <ul
            className="space-y-4 font-semibold text-4xl sm:text-6xl tracking-tight select-none"
            role="tablist"
            aria-label="Banking stream features"
          >
            {[1, 2, 3, 4].map((id) => {
              const item = streams[id];
              const isActive = activeStreamId === id;
              return (
                <li
                  key={id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  onClick={() => setActiveStreamId(id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStreamId(id);
                    }
                  }}
                  className={`group flex items-baseline gap-4 cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentLime rounded px-2 ${
                    isActive ? 'text-white translate-x-2' : 'text-neutral-500 hover:text-neutral-200'
                  }`}
                >
                  <span
                    className={`text-base sm:text-lg font-mono transition-colors ${
                      isActive ? 'text-brand-lime' : 'text-neutral-600 group-hover:text-neutral-400'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`transition-all duration-300 ${
                      isActive ? 'border-b-2 border-brand-lime pb-1' : ''
                    }`}
                  >
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Active Stream Interactive Action Bar */}
          <div className="pt-2 flex items-center gap-4">
            <button
              type="button"
              onClick={handleStreamAction}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-accentLime hover:bg-lime-300 text-neutral-950 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{activeData.actionText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-neutral-400 hidden sm:inline">
              Instant activation with zero lock-in period
            </span>
          </div>

          {/* Bottom Highlight Card in Left Column */}
          <div
            onClick={() => setSecurityModalOpen(true)}
            className="pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 group cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSecurityModalOpen(true);
              }
            }}
            aria-label="View security certifications and guarantees"
          >
            <div className="w-48 h-48 rounded-3xl overflow-hidden bg-gradient-to-tr from-orange-600 to-amber-500 relative flex-shrink-0 shadow-lg tilt-card">
              <img
                alt="Security Feature Terminal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover mix-blend-multiply filter contrast-125 transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf74umxvRlFkVfUDAN9riGV6kdNRNMWC2xs1__Sg2DG5uyjXXKlypsZ7M3TmpQV0Fu_Wwx53F_vLgZzw9Nql4IPNgN7-SvJZgtSYJ6Z6xxU9IWA5LMKREyH1rW81EC0gDSEyMvCFpm1wI7WGJUuIn7vsm367n6Q-J5zizhrhekRFXB0T-ao2vgksm4hslrd5Qc5uX4UrZPcfjlBzke1MaIopZYhLV6uEDn2B0dSeaJvTWxo_CJZsOx"
              />
              <div className="absolute top-3 left-3 w-6 h-6 rounded-full border border-white/70 flex items-center justify-center text-xs text-white">
                ©
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-2">
                Designed for security, speed,
              </span>
              <p className="text-xl sm:text-2xl font-light text-neutral-200 leading-snug group-hover:text-white transition-colors">
                Every detail engineered to give you absolute peace of mind.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-brand-accentLime mt-3 group-hover:underline">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Bank-grade encryption & FDIC insured up to $250,000</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Portrait & Big Question Card */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-end space-y-8">
          {/* Floating Portrait Card with Stream Badge */}
          <div className="tilt-card relative w-full max-w-sm">
            {/* Floating badge */}
            <div className="anim-float-2 absolute -top-3 -left-6 z-20">
              <button
                type="button"
                onClick={() => onShowNotification(activeData.title, activeData.description)}
                className="px-4 py-1.5 rounded-full bg-brand-pink text-neutral-900 text-xs font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentLime"
                title="Click for detail"
              >
                {activeData.badge}
              </button>
            </div>

            <div className="rounded-3xl overflow-hidden bg-neutral-800 border border-neutral-700/60 shadow-xl transition-all duration-500 group">
              <div className="relative h-72 sm:h-80 overflow-hidden bg-neutral-900">
                <img
                  key={activeData.image}
                  alt={`Customer preview for ${activeData.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-opacity duration-300 animate-in fade-in"
                  src={activeData.image}
                />
              </div>
              <div className="p-4 bg-brand-cardDark border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  {activeData.tag}
                </span>
                <span className="text-xs text-brand-accentLime font-medium">
                  {activeData.title}
                </span>
              </div>
            </div>
          </div>

          {/* Big Question Banner with User Icon */}
          <div
            onClick={handleStreamAction}
            className="w-full max-w-sm p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900 shadow-lg cursor-pointer group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleStreamAction();
              }
            }}
          >
            <div className="w-10 h-10 rounded-2xl bg-brand-dark flex items-center justify-center text-brand-pink mb-4 border border-neutral-800 transition-transform duration-300 group-hover:rotate-12">
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-tight">
              {activeData.headline}
            </h3>
            <p className="mt-3 text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
              {activeData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Security Details Modal */}
      {securityModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="security-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSecurityModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0e1e17] border border-neutral-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accentLime/20 text-brand-accentLime flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 id="security-modal-title" className="text-lg font-bold">
                    Plerouse Security Architecture
                  </h4>
                  <p className="text-xs text-neutral-400">Institutional grade vaulting</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSecurityModalOpen(false)}
                className="text-neutral-400 hover:text-white p-2 rounded-lg"
                aria-label="Close security modal"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accentLime shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">FDIC Insurance</strong>
                  Your eligible deposits are insured up to $250,000 through our partner bank network.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accentLime shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">AES-256 & TLS 1.3 Encryption</strong>
                  Every byte transmitted across our network is end-to-end encrypted with rotating private keys.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accentLime shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Instant Virtual Card Freezing</strong>
                  Freeze, unfreeze, or destroy any virtual card with a single tap from your smartphone.
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSecurityModalOpen(false)}
              className="w-full py-3 rounded-full bg-brand-accentLime text-neutral-950 font-semibold hover:bg-lime-300 transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
