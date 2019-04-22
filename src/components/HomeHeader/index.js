import React, { /* useEffect,*/ useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { cl } from '../../lib/client';
// import getViewport from '../../utils/getViewport';

import TitleBlock from './TitleBlock';
import ImageBlock from './ImageBlock';
import VideoBlock from './VideoBlock';
import ContactBlock from './ContactBlock';


const HomeHeader = ({ image, text, contact, video }) => {

  // const [viewport, updateViewport] = useState({ width: 0, height: 0 });
  const [videoOpen, toggleVideo] = useState(false);

  // useEffect(() => {
  //   const viewport = getViewport();
  //   updateViewport(viewport);
  // }, viewport.width);

  return (
    <>
      <StyledHomeHeader>
        <TitleBlock text={text} />
        <ImageBlock image={image} />
        <VideoBlock thumbnail={cl.video_thumbnail_url(video)} toggleVideo={toggleVideo} videoOpen={videoOpen} />
        <ContactBlock {...contact} />
      </StyledHomeHeader>
      {videoOpen && (
        <VideoModal
          onClick={e => {
            if (e.target.localName === 'div' || e.target.nodeName === 'DIV') {
              toggleVideo(!videoOpen);
            }
          }}
          dangerouslySetInnerHTML={{ __html: cl.videoTag(video, { controls: true }).toHtml() }}
        />
      )}
    </>
  );
};

const VideoModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => rgba(theme.dark, 0.8)};
  top: 0;
  left: 0;
  z-index: 2;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 90%;
    height: auto;
  }
  &::after {
    content: 'X';
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    padding: 1rem 2rem;
    font-family: sans-serif;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const StyledHomeHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
`;

export default HomeHeader;
