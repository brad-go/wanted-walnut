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
  Feature,
  Ticket,
  Footer,
} from 'components/index';

const Home: NextPage = () => {
  return (
    <Layout>
      <Intro />
      <Banner />
      <LiveClass />
      <ReadingList />
      <LiveAccess />
      <Diary />
      <ImageSlider />
      <Feature />
      <Ticket />
      <Footer />
    </Layout>
  );
};

export default Home;
