import React from 'react';
import { ThemeProvider } from 'next-themes';
import { themeColors } from '@/utils/themeColors';

// Components
import { createTheme, NextUIProvider } from '@nextui-org/react';
import Header from './Header';
import Footer from './Footer';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      ...themeColors
      
    }
  }
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      ...themeColors,
      primary: '#3B4472',
      link: '#000000',
      background: '#222438',
      shadowColor: '#000000'
    }
  }
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
