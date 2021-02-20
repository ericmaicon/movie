import styled from 'styled-components';

export const Text = styled.p`
  font-size: 0.2rem;
  ${({ theme }) => theme.typography.text};

  //tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.5rem;
  }

  //desktop
  @media (min-width: 1025px) {
    font-size: 1rem;
  }
`;
