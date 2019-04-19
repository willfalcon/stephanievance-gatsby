import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const Content = ({ content }) => {
  return (
    <StyledContent className="content">
      <BlockContent blocks={content} />
    </StyledContent>
  );
};

const StyledContent = styled.div`
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  h2 {
    color: ${({ theme }) => theme.teal};
  }
`;

export default Content;
