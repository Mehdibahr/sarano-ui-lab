import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileNav } from './MobileNav';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 pb-20 lg:pb-0">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};