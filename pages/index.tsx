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
import Feature from 'components/Feature/Feature';

const Home: NextPage = () => {
  return (
    <Layout>
      <Intro />
      <Banner />
      <LiveClass />
      <ReadingList />
      <LiveAccess />
      <Diary />
      <Challenge />
      <Feature />
    </Layout>
  );
};

export default Home;
