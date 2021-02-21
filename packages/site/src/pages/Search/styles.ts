import { Col } from 'react-grid-system';
import { AiOutlineSearch } from 'react-icons/ai';

import styled from 'styled-components';

export const HeaderContainer = styled(Col)`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const StyledSearch = styled(AiOutlineSearch)`
  color: ${({ theme }) => theme.colors.red};
  font-size: 1rem;

  //tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5rem;
  }

  //desktop
  @media (min-width: 1025px) {
    font-size: 2rem;
  }
`;

export const RatingContainer = styled(Col)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
