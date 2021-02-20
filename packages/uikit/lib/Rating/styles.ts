import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import styled from 'styled-components';

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FilledStar = styled(AiFillStar)`
  cursor: pointer;
  margin: 0px 1px;
`;

export const Star = styled(AiOutlineStar)`
  cursor: pointer;
  margin: 0px 1px;
`;
