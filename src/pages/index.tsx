import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

// Components
import Layout from '../components/Layout';
import CitationForm from '@/components/Form/CitationForm';

const Home: NextPageWithLayout = () => {
  return (
    <div className=''>
      <CitationForm />
    </div>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>;
};

export default Home;
