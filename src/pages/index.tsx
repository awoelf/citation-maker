import { ReactElement } from 'react';

import Link from 'next/link';
import type { NextPageWithLayout } from './_app';

import Layout from '../components/Layout';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <p>hello world</p>
      <Link href={'dashboard'}>Go to dashboard</Link>
    </>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>;
};

export default Home;
