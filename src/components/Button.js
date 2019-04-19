import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => {
  return <StyledButton className="button">{children}</StyledButton>;
};

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.weights.medium};
  letter-spacing: 1px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.blue};
  padding: 0.5rem 1.5rem;
`;

export default Button;
