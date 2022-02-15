import { Layout } from 'Layout';
import { Intro, Banner, LiveClass, ReadingList } from 'components/index';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Intro />
        <Banner />
        <LiveClass></LiveClass>
        <ReadingList></ReadingList>
      </>
    </Layout>
  );
};

export default Home;
