import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from 'Layout';
import { GlobalStyle } from 'styles/globalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#FFB100',
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>땅콩스쿨</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
