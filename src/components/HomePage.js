import React from 'react';
import styled from 'styled-components';

import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';

const HomePage = ({ siteSettings, pageSettings }) => {
  const { body, headerImage, headingText, list } = pageSettings;
  // eslint-disable-next-line
  const { contact, siteTitle } = siteSettings;
  return (
    <StyledHomePage>
      <HomeHeader image={headerImage} text={headingText} contact={contact} />
      <HomeMain body={body} list={list} />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div``;


export default HomePage;