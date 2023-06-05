import React from 'react';
import { ThemeProvider } from 'next-themes';
import { createTheme, NextUIProvider } from '@nextui-org/react';

// Components
import Header from '@/components/Header';
import Footer from './Footer';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <div className='container mx-auto'>
          <link rel='icon' href='/favicon.ico' />
          <Header />
          {children}
          <Footer />
        </div>
      </NextUIProvider>
    </ThemeProvider>
  );
}
