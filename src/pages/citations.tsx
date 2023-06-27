import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

// Components
import Layout from '../components/Shared/Layout';
import CitationList from '@/components/Citations/CitationList';

const Citations: NextPageWithLayout = () => {
  return <CitationList />;
};
 
Citations.getLayout = function getLayout(citations: ReactElement) {
  return (
    <Layout>
      {citations}
    </Layout>
  );
};
 
export default Citations;