import type { NextPage } from 'next';
import { Layout } from 'Layout';
import {
  Intro,
  Banner,
  LiveClass,
  ReadingList,
  LiveAccess,
  Diary,
  ImageSlider,
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
        <ImageSlider />
      </>
    </Layout>
  );
};

export default Home;
