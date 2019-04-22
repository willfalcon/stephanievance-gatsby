import React from 'react';
import styled from 'styled-components';

import { media } from '../theme';
import playIcon from '../../images/play.svg';

const VideoBlock = ({ thumbnail, videoOpen, toggleVideo }) => {
  
  return (
    <StyledVideoBlock>
      <img src={thumbnail} alt="Video Screenshot" />
      <button
        onClick={() => {
          toggleVideo(!videoOpen);
        }}
      >
        <img src={playIcon} alt="Play video" />
      </button>
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
    ${media.break`
      top: 0;
    `}
  }
  button {
    border: 0;
    padding: 0;
    margin: 0;
    opacity: 0.75;
    width: 75px;
    height: 75px;
    transform: translate(-50%, -50%) scale(0.9);
    transition: 0.15s;
    z-index: 2;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    &:hover {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    &:focus {
      outline: none;
    }
  }
`;

export default VideoBlock;
