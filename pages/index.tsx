import { Layout } from 'Layout';
import { Intro, Banner, LiveClass } from 'components/index';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Intro />
        <Banner />
        <LiveClass></LiveClass>
      </>
    </Layout>
  );
};

export default Home;
