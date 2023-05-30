// delete later
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout'; 

const Dashboard: NextPageWithLayout = () => {
  return <p>hello world</p>;
};
 
Dashboard.getLayout = function getLayout(dashboard2: ReactElement) {
  return (
    <Layout>
      {dashboard2}
    </Layout>
  );
};
 
export default Dashboard;