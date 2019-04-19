import React from 'react';
import styled from 'styled-components';

import { media } from '../theme';
import logo from '../../images/stephanie-vance-logo_white.svg';

const TitleBlock = ({ text }) => {
  return (
    <StyledTitleBlock>
      <img
        className="logo"
        src={logo}
        alt="Stephanie Vance Counseling"
      />
      <h2 className="heading">{text}</h2>
    </StyledTitleBlock>
  );
};

const StyledTitleBlock = styled.div`
  background: ${({ theme }) => theme.blue};
  padding: 4rem 2rem;
  max-width: 100%;
  ${media.break`
    flex: 0 0 55%;
    max-width: 55%;
  `}
  .logo {
    width: 375px;
    margin: 0 auto 3rem;
    display: block;
  }
  .heading {
    color: white;
    text-align: center;
    width: 375px;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export default TitleBlock;
