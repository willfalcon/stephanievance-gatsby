import React from 'react';
import styled from 'styled-components';

import Content from './Content';
import { media } from './theme';

const HomeMain = ({ body, list }) => {
  return (
    <StyledHomeMain>
      <StyledBody>
        <Content content={body} />
      </StyledBody>
      <StyledAside>
        <StyledList>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </StyledList>
      </StyledAside>
    </StyledHomeMain>
  );
}

const StyledHomeMain = styled.main`
  ${media.break`
    display: flex;
  `}
`;

const StyledBody = styled.div`
  padding: 1rem;
  ${media.break`
    flex: 0 0 55%;
    max-width: 55%;
  `}
`;

const StyledAside = styled.aside`
  ${media.break`
    flex: 0 0 45%;
    max-width: 45%;
  `}
  background: ${({ theme }) => theme.blue};
  padding: 3rem 1.5rem;
`;

const StyledList = styled.ul`
  background: white;
  list-style: none;
  margin: 0;
  padding: 3rem;
  li {
    color: ${({ theme }) => theme.teal};
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

export default HomeMain; 