import React, { useState } from 'react';
import { X, Check, CreditCard, Shield, Sparkles, ArrowRight, Copy } from 'lucide-react';

interface OpenAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccountCreated: (name: string, deposit: number) => void;
}

export const OpenAccountModal: React.FC<OpenAccountModalProps> = ({
  isOpen,
  onClose,
  onAccountCreated,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('United States');
  const [accountType, setAccountType] = useState<'Personal' | 'Freelancer' | 'Business'>('Personal');
  const [cardTheme, setCardTheme] = useState<'crimson' | 'obsidian' | 'emerald'>('crimson');
  const [copiedCard, setCopiedCard] = useState(false);

  if (!isOpen) return null;

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setStep(2);
  };

  const handleFinishSetup = () => {
    setStep(3);
    onAccountCreated(fullName || 'Member', 250);
  };

  const cardGradients = {
    crimson: 'from-rose-500 via-rose-600 to-red-700',
    obsidian: 'from-neutral-800 via-neutral-900 to-black',
    emerald: 'from-emerald-600 via-teal-700 to-brand-dark',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#fcfbf7] dark:bg-[#0c1611] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-neutral-900 dark:text-neutral-100 shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Dots */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step === dot
                  ? 'w-8 bg-neutral-900 dark:bg-brand-accentLime'
                  : step > dot
                  ? 'w-4 bg-neutral-400 dark:bg-neutral-600'
                  : 'w-2 bg-neutral-200 dark:bg-neutral-800'
              }`}
            />
          ))}
          <span className="text-xs font-mono text-neutral-500 ml-2">Step {step} of 3</span>
        </div>

        {/* STEP 1: Basic Information */}
        {step === 1 && (
          <form onSubmit={handleSubmitStep1} className="space-y-4">
            <div>
              <h3 id="onboarding-modal-title" className="text-2xl font-bold tracking-tight">
                Open your Plerouse Account
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Zero fees, instant approval, and no impact on your credit score.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">
                  Legal Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexandra Sterling"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentLime"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alexandra@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentLime"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentLime"
                  >
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Canada</option>
                    <option>Singapore</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">
                    Account Type
                  </label>
                  <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentLime"
                  >
                    <option>Personal</option>
                    <option>Freelancer</option>
                    <option>Business</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-brand-accentLime dark:text-neutral-950 font-semibold text-sm transition-all shadow"
            >
              Continue to Card Selection
            </button>
          </form>
        )}

        {/* STEP 2: Virtual Card Customization */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Choose Your Card</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Your instant virtual card will be generated immediately for Apple Pay & Google Wallet.
              </p>
            </div>

            {/* Live Card Preview */}
            <div
              className={`rounded-2xl p-6 bg-gradient-to-tr ${cardGradients[cardTheme]} text-white shadow-xl aspect-[1.7/1] flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold tracking-wider text-sm">Plerouse</span>
                <span className="text-[11px] uppercase tracking-widest opacity-80">Debit Virtual</span>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-lg tracking-widest">•••• •••• •••• 9842</p>
                <div className="flex items-center justify-between text-xs opacity-80 pt-1">
                  <span>{fullName || 'VALUED MEMBER'}</span>
                  <span>08/29</span>
                </div>
              </div>
            </div>

            {/* Theme Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                Card Edition
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'crimson', label: 'Crimson Gloss' },
                  { id: 'obsidian', label: 'Obsidian Black' },
                  { id: 'emerald', label: 'Emerald Forest' },
                ].map((th) => (
                  <button
                    key={th.id}
                    type="button"
                    onClick={() => setCardTheme(th.id as any)}
                    className={`py-2 px-3 text-xs rounded-xl font-medium border text-center transition-all ${
                      cardTheme === th.id
                        ? 'border-neutral-900 bg-neutral-900 text-white dark:border-brand-accentLime dark:bg-brand-accentLime dark:text-neutral-950 font-bold'
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    {th.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-semibold"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleFinishSetup}
                className="w-2/3 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-brand-accentLime dark:text-neutral-950 font-semibold text-sm transition-all shadow"
              >
                Issue Digital Card
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Complete & Ready */}
        {step === 3 && (
          <div className="space-y-5 text-center py-2">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight">Account Active!</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-sm mx-auto">
                Welcome to Plerouse, {fullName || 'Member'}. A welcome bonus of $250.00 has been credited to your available balance.
              </p>
            </div>

            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-2xl text-left space-y-2 border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-500">Virtual IBAN</span>
                <span className="font-mono font-semibold">US89 PLER 4492 8810 24</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-500">Routing Number</span>
                <span className="font-mono font-semibold">122000492</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-500">Status</span>
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified & Insured
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-brand-accentLime dark:text-neutral-950 font-semibold text-sm transition-all shadow"
            >
              Start Using Plerouse
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
