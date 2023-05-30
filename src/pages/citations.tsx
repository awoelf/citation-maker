import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout'; 

const Citations: NextPageWithLayout = () => {
  return <p>hello world</p>;
};
 
Citations.getLayout = function getLayout(citations: ReactElement) {
  return (
    <Layout>
      {citations}
    </Layout>
  );
};
 
export default Citations;