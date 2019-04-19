import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import formatPhone from '../../utils/formatPhone';
import { media } from '../theme';

const ContactBlock = ({ email, phone }) => {
  const { href, display } = formatPhone(phone);
  return (
    <StyledContactBlock>
      <div className="wrapper">
        <Button>Contact</Button>
        <a href={`tel:${href}`}>{display}</a>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </StyledContactBlock>
  );
};

const StyledContactBlock = styled.div`
  position: relative;
  background: ${({ theme }) => theme.light};
  padding: 3rem;
  width: 100%;
  ${media.break`
    flex: 0 0 45%;
    max-width: 45%;
  `}
  .wrapper {
    background: white;
    box-shadow: ${({ theme }) => theme.shadow};
    position: relative;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .button,
  a {
    display: block;
  }
  button {
    margin: 1rem 0;
  }
  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: 0.5rem 0;
  }
  &::before {
    height: 20%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.teal};
    content: '';
  }
`;

export default ContactBlock;
