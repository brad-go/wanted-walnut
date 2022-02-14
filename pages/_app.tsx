import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles/globalStyle';
import styled from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
