import React, { useState } from 'react';
import { X, TrendingUp, PiggyBank, Plus, Check } from 'lucide-react';

interface SavingsGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  savingsGoal: number; // in thousands (e.g. 60)
  savingsProgress: number; // e.g. 42600
  availableBalance: number;
  onDepositToGoal: (amount: number) => void;
}

export const SavingsGoalModal: React.FC<SavingsGoalModalProps> = ({
  isOpen,
  onClose,
  savingsGoal,
  savingsProgress,
  availableBalance,
  onDepositToGoal,
}) => {
  const [depositAmount, setDepositAmount] = useState<number>(100);
  const [depositSuccess, setDepositSuccess] = useState(false);

  if (!isOpen) return null;

  const totalGoal = savingsGoal * 1000;
  const progressPercent = Math.min(100, Math.round((savingsProgress / totalGoal) * 100));
  const annualInterest = (savingsProgress * 0.0485).toFixed(2);

  const handleDeposit = () => {
    if (depositAmount <= 0 || depositAmount > availableBalance) return;
    onDepositToGoal(depositAmount);
    setDepositSuccess(true);
    setTimeout(() => {
      setDepositSuccess(false);
    }, 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="savings-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#fcfbf7] dark:bg-[#0c1611] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-md w-full text-neutral-900 dark:text-neutral-100 shadow-2xl relative space-y-6"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
          aria-label="Close savings goal dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-500 mb-1">
            <PiggyBank className="w-4 h-4" />
            4.85% APY High Yield Pot
          </div>
          <h3 id="savings-modal-title" className="text-2xl font-bold tracking-tight">
            Savings Goal: {savingsGoal}K
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Automated compounding daily with zero lock-in penalty.
          </p>
        </div>

        {/* Progress Bar & Amount */}
        <div className="p-5 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold font-mono text-neutral-950 dark:text-white">
              ${savingsProgress.toLocaleString()}
            </span>
            <span className="text-sm font-semibold text-neutral-500 font-mono">
              of ${totalGoal.toLocaleString()}
            </span>
          </div>

          <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>{progressPercent}% Achieved</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <TrendingUp className="w-3.5 h-3.5" /> +${annualInterest}/yr interest
            </span>
          </div>
        </div>

        {/* Quick Deposit Widget */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-neutral-600 dark:text-neutral-400">
            <span>Transfer from Available Balance</span>
            <span className="font-mono text-neutral-500">
              Avail: ${availableBalance.toFixed(2)}
            </span>
          </div>

          <div className="flex gap-2">
            {[50, 100, 250, 500].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setDepositAmount(preset)}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all ${
                  depositAmount === preset
                    ? 'border-neutral-900 bg-neutral-900 text-white dark:border-brand-accentLime dark:bg-brand-accentLime dark:text-neutral-950'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50'
                }`}
              >
                +${preset}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleDeposit}
            disabled={depositAmount <= 0 || depositAmount > availableBalance}
            className="w-full py-3 rounded-full bg-brand-burgundy text-white hover:bg-[#5a0d0d] font-bold text-sm transition-all shadow disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {depositSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Deposited +${depositAmount}!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add ${depositAmount} to Savings Goal</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
