import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { media } from '../theme';

const ImageBlock = ({ image }) => {

  return (
    <StyledImageBlock>
      <Img
        fluid={image.asset.fluid}
        alt="Stephanie Vance"
        imgStyle={{
          filter: 'grayscale(100%)',
        }}
      />
    </StyledImageBlock>
  );
};

const StyledImageBlock = styled.div`
  position: relative;
  display: none;
  ${media.break`
    flex: 0 0 45%;
    max-width: 45%;
    display: block;
  `}
  .gatsby-image-wrapper {
    opacity: 0.5;
    height: 100%;
  }
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.blue};
    mix-blend-mode: multiply;
  }
`;

export default ImageBlock;
