import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import '../../node_modules/normalize.css/normalize.css';

import GlobalStyle from './GlobalStyle';
import SEO from '../components/seo';
import theme from './theme';

const Wrapper = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title={data.site.siteMetadata.title} />
        <StyledPageWrapper>{children}</StyledPageWrapper>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledPageWrapper = styled.div``;

export default Wrapper;
