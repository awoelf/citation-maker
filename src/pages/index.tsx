import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout';

const Home: NextPageWithLayout = () => {
  return (
    <div className=''>
      <p>Site content here</p>
    </div>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>;
};

export default Home;
