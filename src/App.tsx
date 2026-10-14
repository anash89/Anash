import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { MarqueeTicker } from './components/MarqueeTicker.tsx';
import { DarkShowcase } from './components/DarkShowcase.tsx';
import { VibrantPinkSection } from './components/VibrantPinkSection.tsx';
import { SecurityManifest } from './components/SecurityManifest.tsx';
import { Footer } from './components/Footer.tsx';
import { OpenAccountModal } from './components/OpenAccountModal.tsx';
import { TransferModal } from './components/TransferModal.tsx';
import { SavingsGoalModal } from './components/SavingsGoalModal.tsx';
import { ToastContainer } from './components/Toast.tsx';
import { ToastNotification } from './types/index.ts';

export default function App() {
  // Dark mode state with persistence & system preference detection
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('plerouse_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Financial application state
  const [balance, setBalance] = useState<number>(2409.00);
  const [savingsGoal] = useState<number>(60); // 60K
  const [savingsProgress, setSavingsProgress] = useState<number>(42600);
  const currency = '$';

  // Modals
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isSavingsModalOpen, setIsSavingsModalOpen] = useState(false);

  // Toast notifications
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);

  const addNotification = (title: string, message: string, type: 'success' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setNotifications((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 4000);
  };

  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Synchronize document dark class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('plerouse_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('plerouse_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleAccountCreated = (name: string, deposit: number) => {
    setBalance((prev) => prev + deposit);
    addNotification('Account Created!', `Welcome, ${name}. A welcome deposit of $${deposit}.00 was added.`, 'success');
  };

  const handleSendTransfer = (recipient: string, amount: number) => {
    setBalance((prev) => Math.max(0, prev - amount));
    addNotification('Transfer Sent', `$${amount.toFixed(2)} sent instantly to ${recipient}.`, 'success');
  };

  const handleDepositToGoal = (amount: number) => {
    setBalance((prev) => Math.max(0, prev - amount));
    setSavingsProgress((prev) => prev + amount);
    addNotification('Goal Boosted', `$${amount.toFixed(2)} allocated toward your 60K savings target.`, 'success');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf7] dark:bg-[#070e0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans">
      {/* Header */}
      <Header
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenAccount={() => setIsAccountModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <Hero
          onOpenAccount={() => setIsAccountModalOpen(true)}
          onOpenTransfer={() => setIsTransferModalOpen(true)}
          onShowNotification={addNotification}
        />

        {/* Ribbon Ticker 1 */}
        <MarqueeTicker borderTop={true} borderBottom={true} />

        {/* Section 2: Dark Interactive Showcase */}
        <DarkShowcase
          onOpenTransfer={() => setIsTransferModalOpen(true)}
          onOpenSavings={() => setIsSavingsModalOpen(true)}
          onOpenAccount={() => setIsAccountModalOpen(true)}
          onShowNotification={addNotification}
        />

        {/* Section 3: Vibrant Pink Community & Live Balance */}
        <VibrantPinkSection
          balance={balance}
          savingsGoal={savingsGoal}
          savingsProgress={savingsProgress}
          currency={currency}
          onOpenTransfer={() => setIsTransferModalOpen(true)}
          onOpenSavings={() => setIsSavingsModalOpen(true)}
          onOpenAccount={() => setIsAccountModalOpen(true)}
          onShowNotification={addNotification}
        />

        {/* Section 4: Security Manifest & 4-Card Grid */}
        <SecurityManifest onShowNotification={addNotification} />

        {/* Ribbon Ticker 2 */}
        <MarqueeTicker borderTop={false} borderBottom={true} />
      </main>

      {/* Footer */}
      <Footer
        onOpenAccount={() => setIsAccountModalOpen(true)}
        onOpenTransfer={() => setIsTransferModalOpen(true)}
        onShowNotification={addNotification}
      />

      {/* Interactive Modals */}
      <OpenAccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        onAccountCreated={handleAccountCreated}
      />

      <TransferModal
        isOpen={isTransferModalOpen}
        onClose={() => setIsTransferModalOpen(false)}
        currentBalance={balance}
        onSendTransfer={handleSendTransfer}
      />

      <SavingsGoalModal
        isOpen={isSavingsModalOpen}
        onClose={() => setIsSavingsModalOpen(false)}
        savingsGoal={savingsGoal}
        savingsProgress={savingsProgress}
        availableBalance={balance}
        onDepositToGoal={handleDepositToGoal}
      />

      {/* Floating Notifications */}
      <ToastContainer
        notifications={notifications}
        onDismiss={dismissNotification}
      />
    </div>
  );
}
