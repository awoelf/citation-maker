import React from 'react';
import { ThemeProvider } from 'next-themes';

// Components
import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className='container mx-auto'>
        <link rel='icon' href='/favicon.ico' />
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
}
