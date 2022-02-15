import { Layout } from 'Layout';
import { Intro, Banner, LiveClass, ReadingList, Diary } from 'components/index';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Intro />
        <Banner />
        <LiveClass></LiveClass>
        <ReadingList></ReadingList>
        <Diary />
      </>
    </Layout>
  );
};

export default Home;
