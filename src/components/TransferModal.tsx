import React, { useState } from 'react';
import { X, Send, Zap, CheckCircle2, User } from 'lucide-react';

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBalance: number;
  onSendTransfer: (recipient: string, amount: number) => void;
}

export const TransferModal: React.FC<TransferModalProps> = ({
  isOpen,
  onClose,
  currentBalance,
  onSendTransfer,
}) => {
  const [recipient, setRecipient] = useState('Elena Rostova');
  const [amount, setAmount] = useState<number>(45);
  const [note, setNote] = useState('Dinner split');
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contacts = [
    {
      name: 'Elena Rostova',
      handle: '@elena.r',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBSXWKCOoRY0ZNROnLy2hYtkFWPMfrIzl1-xpEQQmBJK_f_mNMDf6ZKjWoOzQF90zgZoc1xZ2y1TUaRijr3JHEU-gs4cbD6K5znE2Z8AJsUwmtwta1h_0MAzCVLJNI8lAoN1w6F_q6HG8OM0aO_rdx94nDdXr9w5SXIvczTwewS3cxUkOZjGvEJ6nudhqfIMAD70-7C4XHjm4rVktB3CzJtioDb9tzTEVUm4Cnga1JmX2vhRhIThlk8',
    },
    {
      name: 'Marcus Vance',
      handle: '@marcus.v',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBKL98lXjHlHBxzEftjbpmNmoddaHC6kLa9ViTwy1EOzc6zZ2ffC8EFD1C7E-cwkCPd8W6Xp7xhPgUmp264ECZnwQn62M2XJnDPVHGgWb4Dkuj7w086fthj4puyoPR0XqWPp15tMcUHQIjOdkyXPhEPM3W6U_OscAfLl9-q0v1t9KIbxxwY7u8mxKc_BKHkx3IXHwTyA3Iu0D4PGbxGH-4h1zGn6UMer5sklUmrhrwcnBSDJHi-VZJ4',
    },
    {
      name: 'Amina Patel',
      handle: '@amina.p',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAMICwV1oQunZVqlAFW7WDbR8STV2I1LkJnJYry9S-8Wj412Cb_I6M752EKgs3nVDN7PkEcO9uF74OoxlqD0W8wp--ceQxgAkx6Qdh9hnNPKsBI1tVq04XYjvS1tqZ0Okq2xcggUnbI7mR-UvkSWIrbvXqL9rM3h6Nax1YLJ24hdHP8NjAoPWyLU2mBGx1BCvmNoLyCk4bqN7R2RQyRKQ_pj68L7xSuHfk5vb9Wk99thwJxKsWURrdA',
    },
    {
      name: 'Liam O’Connor',
      handle: '@liam.oc',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAz4OzoWrDDnBFkBX9CdQrSTGyabyEQkk_HGBmQ7fTbe9mMnT8KYFZ_Jj17aqAaE9s0iGpafOvAuHpw8aQjX69j84wr3APO5cscU1NWqT3OjTl_ubjJs0A8KlLcnQC9yt38Lfu_yIgBaIB9xISsYWvI6L7geshTctxFKlJoD0jwoFULll_81ePMNsrOBYDJ8DO0ALz1yOVB-Q7whsAeeihXgYnG7L8cjpP2S6WGmfWIN3mbHihvKyt7',
    },
  ];

  if (!isOpen) return null;

  const handleExecuteTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0 || amount > currentBalance) return;
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      onSendTransfer(recipient, amount);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="transfer-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#fcfbf7] dark:bg-[#0c1611] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-md w-full text-neutral-900 dark:text-neutral-100 shadow-2xl relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
          aria-label="Close transfer modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-brand-accentLime text-neutral-950 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold">Transfer Complete!</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              ${amount.toFixed(2)} sent instantly to {recipient}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleExecuteTransfer} className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Instant Wire
              </div>
              <h3 id="transfer-modal-title" className="text-2xl font-bold tracking-tight">
                Send Money
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Available: ${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>

            {/* Quick Contacts */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                Choose Recipient
              </label>
              <div className="grid grid-cols-2 gap-2">
                {contacts.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setRecipient(c.name)}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all ${
                      recipient === c.name
                        ? 'border-neutral-900 dark:border-brand-accentLime bg-neutral-100 dark:bg-neutral-800/80 shadow-sm'
                        : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/40'
                    }`}
                  >
                    <img
                      src={c.avatar}
                      alt={c.name}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold truncate">{c.name}</p>
                      <p className="text-[10px] text-neutral-400 truncate">{c.handle}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-neutral-400">
                  $
                </span>
                <input
                  type="number"
                  min="1"
                  max={currentBalance}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full pl-9 pr-4 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-2xl font-bold font-mono focus:outline-none focus:ring-2 focus:ring-brand-accentLime"
                />
              </div>

              {/* Quick Preset Pills */}
              <div className="flex gap-2 pt-1">
                {[15, 25, 50, 100].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className="flex-1 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    ${preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">
                Note / Memo
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What is this for?"
                className="w-full px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentLime"
              />
            </div>

            <button
              type="submit"
              disabled={isSending || amount <= 0 || amount > currentBalance}
              className="w-full py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-brand-accentLime dark:text-neutral-950 font-bold text-sm transition-all shadow disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSending ? (
                <span>Routing Transfer...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send ${amount.toFixed(2)} Instantly</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
