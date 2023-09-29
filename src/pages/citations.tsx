import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout';
import CitationPage from '../Citations/CitationPage';

function Citations<NextPageWithLayout>() {
    return <CitationPage />;
}

Citations.getLayout = function getLayout(citations: ReactElement) {
    return <Layout>{citations}</Layout>;
};

export default Citations;
