import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
 
const Dashboard: NextPageWithLayout = () => {
  return <p>hello world</p>;
};
 
Dashboard.getLayout = function getLayout(dashboard: ReactElement) {
  return (
    <Layout>
      {dashboard}
    </Layout>
  );
};
 
export default Dashboard;