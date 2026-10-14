import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenAccount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Personal', href: '#personal' },
    { label: 'Features', href: '#features' },
    { label: 'Cards', href: '#cards' },
    { label: 'Wealth', href: '#wealth' },
    { label: 'Security', href: '#security' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fcfbf7]/90 dark:bg-[#070e0a]/90 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#"
          className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white transition-all duration-300 hover:opacity-85 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentLime rounded-lg px-1"
          aria-label="Plerouse Home"
        >
          Plerouse
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-700 dark:text-neutral-300"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors duration-200 hover:text-neutral-950 dark:hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-neutral-900 dark:after:bg-brand-accentLime hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentLime rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Dark Mode Toggle + Primary CTA) */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentLime"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-brand-accentLime" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            type="button"
            onClick={onOpenAccount}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-brand-accentLime dark:hover:bg-lime-300 dark:text-neutral-950 text-sm font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accentLime"
          >
            Open Account
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentLime"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#fcfbf7] dark:bg-[#070e0a] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-brand-burgundy dark:hover:text-brand-accentLime py-2 transition-colors flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/50"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccount();
              }}
              className="w-full py-3 rounded-full bg-neutral-900 text-white dark:bg-brand-accentLime dark:text-neutral-950 font-semibold text-center shadow hover:opacity-90 transition-opacity"
            >
              Open Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
