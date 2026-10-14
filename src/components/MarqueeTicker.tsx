import React from 'react';

interface MarqueeTickerProps {
  borderTop?: boolean;
  borderBottom?: boolean;
  className?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  borderTop = true,
  borderBottom = true,
  className = '',
}) => {
  const items = [
    'Secure Banking',
    'Instant Transfers',
    'Smart Savings',
    'Virtual Cards',
    'AI Money Insights',
    'Zero Hidden Fees',
  ];

  return (
    <section
      aria-label="Features Ticker"
      className={`bg-white dark:bg-[#0c1611] ${
        borderTop ? 'border-t border-neutral-200 dark:border-neutral-800' : ''
      } ${
        borderBottom ? 'border-b border-neutral-200 dark:border-neutral-800' : ''
      } overflow-hidden py-4 select-none transition-colors duration-300 ${className}`}
    >
      <div className="animate-marquee-track whitespace-nowrap flex items-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
        <div className="flex items-center space-x-8 px-4">
          {items.map((item, idx) => (
            <React.Fragment key={`ticker-1-${idx}`}>
              <span>{item}</span>
              <span className="text-amber-500 text-lg transition-transform hover:rotate-90 inline-block" aria-hidden="true">
                ✹
              </span>
            </React.Fragment>
          ))}
        </div>
        <div aria-hidden="true" className="flex items-center space-x-8 px-4">
          {items.map((item, idx) => (
            <React.Fragment key={`ticker-2-${idx}`}>
              <span>{item}</span>
              <span className="text-amber-500 text-lg transition-transform hover:rotate-90 inline-block">
                ✹
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
