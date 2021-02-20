import styled from 'styled-components';

export type StyledHeadingProps = {
  /**
   * How large should the heading be?
   */
  size: 1 | 2 | 3 | 4 | 5;
};

export const Heading1 = styled.h1<StyledHeadingProps>`
  margin: 0px;
  font-size: 2.3rem;
  ${({ theme }) => theme.typography.heading};

  //tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }

  //desktop
  @media (min-width: 1025px) {
    font-size: 4rem;
  }
`;
