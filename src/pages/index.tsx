import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout';
import CitationForm from '../Form/CitationForm';

function Home<NextPageWithLayout>() {
    return <CitationForm />;
}

Home.getLayout = function getLayout(home: ReactElement) {
    return <Layout>{home}</Layout>;
};

export default Home;
