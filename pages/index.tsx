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
  PostScript,
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
      <PostScript />
      <Ticket />
      <Footer />
    </Layout>
  );
};

export default Home;
