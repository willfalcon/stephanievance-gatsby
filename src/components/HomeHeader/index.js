import React from 'react';
import styled from 'styled-components';

import TitleBlock from './TitleBlock';
import ImageBlock from './ImageBlock';
import VideoBlock from './VideoBlock';
import ContactBlock from './ContactBlock';

const HomeHeader = ({ image, text, contact }) => {
  return (
    <StyledHomeHeader>
      <TitleBlock text={text} />
      <ImageBlock image={image} />
      <VideoBlock />
      <ContactBlock {...contact} />
    </StyledHomeHeader>
  );
};

const StyledHomeHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
`;

export default HomeHeader;
