import { Container } from 'react-grid-system';

import styled from 'styled-components';

export const Banner = styled.div`
  background: url('/images/header.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 600px;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
`;

export const TextContainer = styled(Container)`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 150px;
  text-align: center;

  form {
    margin-top: 50px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
