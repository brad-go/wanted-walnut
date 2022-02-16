import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { COLORS } from 'utils/constants';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  :root {
    background-color: #ffffff;
  }
  body {
    width: 100%;
    height: 100%;
    color: ${COLORS.TEXT};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    all: unset;
  }
`;
