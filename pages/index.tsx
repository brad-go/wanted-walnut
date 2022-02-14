import { Layout } from 'Layout';
import { Intro, Banner } from 'components/index';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Intro />
        <Banner />
      </>
    </Layout>
  );
};

export default Home;
