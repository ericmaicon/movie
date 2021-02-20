import styled from 'styled-components';

/**
 * HL: Highlight image
 * RE: Regular image
 */
export const VideoGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;

  img:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;
