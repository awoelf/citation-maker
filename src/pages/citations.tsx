import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

// Components
import Layout from '../components/Shared/Layout';
import CitationPage from '@/components/Citations/CitationPage';

const Citations: NextPageWithLayout = () => {
  return <CitationPage />;
};
 
Citations.getLayout = function getLayout(citations: ReactElement) {
  return (
    <Layout>
      {citations}
    </Layout>
  );
};
 
export default Citations;