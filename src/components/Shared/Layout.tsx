import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

// Components
import { createTheme, NextUIProvider } from '@nextui-org/react';
import Header from './Header';
import Footer from './Footer';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#6EA894',
      background: '#E0F1DC',
      primaryLightActive: '#3C6D5C',
    },
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#3B4472',
      link: '#000000',
      background: '#222438',
      primaryLightActive: '#282F53',
    },
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      storageKey='theme'
      enableSystem={true}
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <div className='container mx-auto h-screen flex flex-col'>
          <link rel='icon' href='/favicon.ico' />
          <Header />
          {children}
          <div className='mt-auto pb-4'>
            <Footer />
          </div>
        </div>
      </NextUIProvider>
    </ThemeProvider>
  );
}
