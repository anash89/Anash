import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

interface FooterProps {
  onOpenAccount: () => void;
  onOpenTransfer: () => void;
  onShowNotification: (title: string, message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAccount,
  onOpenTransfer,
  onShowNotification,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@plerouse.com');
    setCopied(true);
    onShowNotification('Email Copied', 'hello@plerouse.com copied to your clipboard.');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="wealth"
      className="bg-brand-dark dark:bg-[#060c08] text-neutral-100 pt-20 pb-12 px-6 sm:px-12 border-t border-neutral-800 transition-colors duration-300"
      aria-label="Footer and Inquiries"
    >
      <div className="max-w-6xl mx-auto">
        {/* Upper Section: Brand + Help CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800 items-start">
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl font-extrabold tracking-tight">Plerouse</h3>
            <button
              type="button"
              onClick={onOpenAccount}
              className="btn-circle-arrow w-14 h-14 rounded-full bg-brand-pink text-neutral-900 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-brand-pink/20 transition-all duration-300 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Start application with Plerouse"
              title="Open Account"
            >
              <ArrowUpRight className="w-6 h-6 stroke-[2.2]" />
            </button>
          </div>

          <div className="md:col-span-7 space-y-6">
            <p className="text-2xl sm:text-3xl font-normal text-neutral-200">
              We would love to help you build a clearer financial life.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-lg sm:text-xl font-medium text-neutral-400 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-brand-pink flex items-center gap-2 group text-left"
              >
                <span>hello@plerouse.com</span>
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <div
                className="flex items-center -space-x-2"
                title="Plerouse Private Wealth Concierge"
              >
                <img
                  alt="Support team member"
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full border-2 border-brand-dark object-cover hover:scale-125 hover:z-10 transition-transform cursor-pointer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZOwf4xUyd0dRge1cCGWruPH-9npBTJu_JpSRFNTX92JrywKeZDqCsAOawEBaOSEfK_hwy_1qky7aNgqOkRFpAKhqOeA05TDKCiW2EdnF6BUJ-QsJvt5envQrEDptNRD-rJMN7SLc5gX_6VkHGCiFPZ-Dv7bUD12OV-ls30loXZxsKzHCLBg8tR1WTr9yYwKCiiPULwwfScXij3naGHDZVj67MLgjaPPzRU81GY-hUIP9HFfR1Hg0j"
                />
                <img
                  alt="Support team member"
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full border-2 border-brand-dark object-cover hover:scale-125 hover:z-10 transition-transform cursor-pointer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnuo-4q3CP2anZiIE-yPaaWlxnzfrvAt-32ix2ga9-rUzLm8wSyb04lKI1UetTvHmQPNIM68qBwjNEJdrj1YhnmT7pad9wjnUp0qJhj4wuchG4mb8VMQDa7u8nxWkF8fXDkH-g9Uyj1ppJiPkBXuADh6UfTrsyFM_C6WGynliz2KYVB3ap7Siul_5EuC6cZ2hN4LbjQK4Mo56ZRopO6mBAy93ij3Yf4f9NWbk9I7z8TfKTq3NNIEdU"
                />
                <img
                  alt="Support team member"
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full border-2 border-brand-dark object-cover hover:scale-125 hover:z-10 transition-transform cursor-pointer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTYFnuUySVgu-5taFR6mArBj2LMzUes2B7ydEtgyNqD0AMj0J06P41ewGsu_bHHnO6VfZyOk0khQZywOboF3kj4VcQDtZiUPNE5yemunPT0Hkcd3_-Q4ir2FFnCiMO8WX363UKxSSKBevoLexI3PVM9wUG3c7nW0cAWMIokuFLkon2i37HIGmynFnoG-2LJ16sLm-8kN8KOPHmLpGUmfDp6eR5kd3wwzSDm6ZzU6D0fpA2teHpJFab"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Links & Legal Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 py-14 text-xs text-neutral-400 border-b border-neutral-800">
          <div className="md:col-span-6 space-y-2">
            <p className="font-medium text-neutral-300">Plerouse Financial Inc.</p>
            <p className="max-w-xs leading-relaxed text-neutral-400">
              Banking built for clarity, confidence, and everyday control.
            </p>
          </div>
          <div className="md:col-span-3 space-y-3">
            <p className="text-white font-semibold uppercase tracking-wider text-[11px]">Products</p>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onShowNotification('Personal Banking', 'Zero fee checking with worldwide ATM access.')}
                  className="hover:text-white transition-colors text-left"
                >
                  Personal Banking
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onShowNotification('Smart Savings', 'Earn 4.85% APY with daily compounding.')}
                  className="hover:text-white transition-colors text-left"
                >
                  Smart Savings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onShowNotification('Virtual Cards', 'Instant single-use disposable cards for merchant safety.')}
                  className="hover:text-white transition-colors text-left"
                >
                  Virtual Cards
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onShowNotification('Money Insights', 'Predictive cash flow modeling and spending warnings.')}
                  className="hover:text-white transition-colors text-left"
                >
                  Money Insights
                </button>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 space-y-3">
            <p className="text-white font-semibold uppercase tracking-wider text-[11px]">Company</p>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onShowNotification('About Plerouse', 'Founded in 2024 to humanize digital banking.')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onShowNotification('Careers', 'We are hiring remote engineers and designers worldwide!')}
                  className="hover:text-white transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Editorial Typographic Wordmark with Floating Badges */}
        <div className="relative py-12 select-none overflow-hidden text-center">
          {/* Floating Badge: Smart Banking (Top Center) */}
          <div className="anim-float-1 absolute top-8 left-1/2 -translate-x-1/2 z-20">
            <button
              type="button"
              onClick={onOpenAccount}
              className="px-4 py-1.5 rounded-full bg-white text-neutral-900 text-xs font-semibold shadow hover:scale-105 transition-transform inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentLime"
            >
              Smart Banking
            </button>
          </div>

          {/* Floating Badge: Money Clarity (Bottom Left) */}
          <div className="anim-float-2 absolute bottom-14 left-8 sm:left-24 z-20">
            <button
              type="button"
              onClick={() => onShowNotification('Money Clarity', 'Crystal clear balances without hidden ledger delays.')}
              className="px-4 py-1.5 rounded-full bg-brand-accentLime text-neutral-900 text-xs font-bold shadow hover:scale-105 transition-transform inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Money Clarity
            </button>
          </div>

          {/* Floating Badge: Instant Transfer (Bottom Right) */}
          <div className="anim-float-3 absolute bottom-14 right-8 sm:right-24 z-20">
            <button
              type="button"
              onClick={onOpenTransfer}
              className="px-4 py-1.5 rounded-full bg-brand-pink text-neutral-900 text-xs font-semibold shadow hover:scale-105 transition-transform inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Instant Transfer
            </button>
          </div>

          {/* Giant Headline */}
          <h1 className="giant-wordmark font-black text-white text-[20vw] tracking-tighter opacity-95 transition-all duration-700 hover:tracking-normal hover:opacity-100">
            Plerouse
          </h1>
        </div>

        {/* Copyright Note */}
        <div className="text-center pt-8 text-[11px] text-neutral-500">
          <p>© 2026 Plerouse Financial Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
