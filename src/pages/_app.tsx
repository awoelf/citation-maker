import '../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { ServerContextJSONValue, useEffect } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { useMediaQuery } from 'react-responsive';
import useLocalStorageState from 'use-local-storage-state';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const themePreference: ServerContextJSONValue = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined
  )
    ? 'dark'
    : 'light';

  const [theme, setTheme] = useLocalStorageState('theme', {
    defaultValue: themePreference,
  });

  return getLayout(
    <ThemeContext.Provider value={theme}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
