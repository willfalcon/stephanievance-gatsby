import { css } from 'styled-components';

const theme = {
  dark: '#151515',
  blue: '#041E41',
  teal: '#048389',
  light: '#C7D2E7',
  shadow: 'rgba(0,0,0,.5) 0px 2px 4px',
  fonts: {
    body: 'gibbs, sans-serif',
    serif: 'noto-serif-semicondensed, serif',
    heading: 'adonis-web, serif',
  },
  weights: {
    regular: '400',
    medium: '500',
  },
  break: '768px',
  sizes: {
    break: 768,
    large: 1024,
  },
};

const media = Object.keys(theme.sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { media };
export default theme;
