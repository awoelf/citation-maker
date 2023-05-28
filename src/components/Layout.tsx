import React, { useContext } from 'react';
import { ThemeContext } from '@/contexts/themeContext';

// Components
import Header from '@/components/Header';

export default function DashboardLayout({
  children,
   // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const theme = useContext(ThemeContext);
  const themeClass = 'theme-' + theme;
  return (
    <div className={themeClass}>
      <link rel='icon' href='/favicon.ico' />
      <Header />
      {children}
    </div>
  );
}

