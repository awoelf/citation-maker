import React from 'react';
import { ThemeProvider } from 'next-themes';

// Components
import Header from '@/components/Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className='container mx-auto'>
        <link rel='icon' href='/favicon.ico' />
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
