import React from 'react';
import styled from 'styled-components';

import { media } from '../theme';
import screenshot from '../../images/video-screenshot.jpg';

const VideoBlock = () => {
  return (
    <StyledVideoBlock>
      <img src={screenshot} alt="Video Screenshot" />
    </StyledVideoBlock>
  );
};

const StyledVideoBlock = styled.div`
  position: relative;
  background: ${({ theme }) => theme.light};
  ${media.break`
    flex: 0 0 55%;
    max-width: 55%;
  `}
  img {
    width: 85%;
    display: block;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    ${media.break`
      margin-left: auto;
    `}
  }
  &::before {
    height: 20%;
    width: 100%;
    position: absolute;
    top: -1px;
    left: 0;
    background: ${({ theme }) => theme.blue};
    content: '';
  }
`;

export default VideoBlock;
