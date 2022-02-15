import type { NextPage } from 'next';
import { Layout } from 'Layout';
import {
  Intro,
  Banner,
  LiveClass,
  ReadingList,
  LiveAccess,
  Diary,
  Challenge,
} from 'components/index';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Intro />
        <Banner />
        <LiveClass />
        <ReadingList />
        <LiveAccess />
        <Diary />
        <Challenge />
      </>
    </Layout>
  );
};

export default Home;
