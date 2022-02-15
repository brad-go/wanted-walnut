import { Layout } from 'Layout';
import { Intro, Banner, LiveClass, ReadingList, Diary } from 'components/index';
import type { NextPage } from 'next';
import LiveAccess from 'components/LiveAccess/LiveAccess';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Intro />
        <Banner />
        <LiveClass></LiveClass>
        <ReadingList></ReadingList>
        <LiveAccess></LiveAccess>
        <Diary />
      </>
    </Layout>
  );
};

export default Home;
