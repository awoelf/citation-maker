import { ReactElement, useContext } from 'react';
import { ThemeContext } from '@/contexts/themeContext';

import Link from 'next/link';
import type { NextPageWithLayout } from './_app';

import Layout from '../components/Layout';

const Home: NextPageWithLayout = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <div className={`theme-light`}>
        <p>hello world</p>
        <Link href={'dashboard'}>Go to dashboard</Link>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>;
};

export default Home;
