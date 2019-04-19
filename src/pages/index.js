import React from 'react';
import { graphql } from 'gatsby';

import Wrapper from '../components/Wrapper';
import HomePage from '../components/HomePage';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <HomePage {...data} />
    </Wrapper>
  );
}

export const sitePropsQuery = graphql`
  query sitePropsQuery {
    siteSettings: sanitySiteSettings {
      id
      siteTitle
      social {
        twitter
        instagram
        facebook
        linkedin
      }
      contact {
        phone
        email
      }
      formOptions {
        successMessage
        errorMessage
      }
    }
    pageSettings: sanityHome {
      id
      title
      headerImage {
        _type
        asset {
          _type
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
      }
      headingText
      list
      homeVideo
      seoSettings {
        _key
        _type
        title
        metaDescription
        canonicalUrl
      }
      body {
        _key
        _type
        style
        list
        children {
          _key
          _type
          text
        }
      }
    }
  }
`;

export default IndexPage;
