import styled from 'styled-components';

export type StyledHeadingProps = {
  /**
   * How large should the heading be?
   */
  size: 1 | 2 | 3 | 4 | 5;
};

export const Heading1 = styled.h1<StyledHeadingProps>`
  margin: 0px;
  font-size: 2.5rem;
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

export const Heading2 = styled.h2<StyledHeadingProps>`
  margin: 0px;
  font-size: 2rem;
  ${({ theme }) => theme.typography.heading};

  //tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }

  //desktop
  @media (min-width: 1025px) {
    font-size: 3rem;
  }
`;

export const Heading3 = styled.h3<StyledHeadingProps>`
  margin: 0px;
  font-size: 1.5rem;
  ${({ theme }) => theme.typography.heading};

  //tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
  }

  //desktop
  @media (min-width: 1025px) {
    font-size: 2.5rem;
  }
`;

export const Heading4 = styled.h4<StyledHeadingProps>`
  margin: 0px;
  font-size: 1rem;
  ${({ theme }) => theme.typography.heading};

  //tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5rem;
  }

  //desktop
  @media (min-width: 1025px) {
    font-size: 2rem;
  }
`;

export const Heading5 = styled.h4<StyledHeadingProps>`
  margin: 0px;
  font-size: 0.5rem;
  ${({ theme }) => theme.typography.heading};

  //tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }

  //desktop
  @media (min-width: 1025px) {
    font-size: 1.5rem;
  }
`;
