import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fonts.body};
    font-weight: ${theme.weights.regular};
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${theme.dark};
  }
  img {
    max-width: 100%;
    height: auto;
  }
  h2 {
    font-family: ${theme.fonts.heading};
    font-size: 2rem;
    font-weight: ${theme.weights.regular};
  }
`;

export default GlobalStyle;
