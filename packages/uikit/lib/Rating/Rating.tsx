/* eslint-disable react/no-array-index-key */
import React from 'react';

import * as Styled from './styles';

export interface RatingProps {
  value: number;

  onChange?: (value: number) => void;
}

const Rating = ({ value, onChange, ...rest }: RatingProps) => {
  function handleClickStar(index: number) {
    /* istanbul ignore else */
    if (onChange) {
      onChange((index + 1) * 2);
    }
  }

  return (
    <Styled.RatingContainer {...rest}>
      {Array(5)
        .fill(1)
        .map((_item, index) => {
          if (value <= index * 2) {
            return (
              <Styled.Star
                data-testid="star"
                key={index}
                title="star"
                onClick={() => handleClickStar(index)}
              />
            );
          }

          return (
            <Styled.FilledStar
              data-testid="filled-star"
              key={index}
              title="voted-star"
              onClick={() => handleClickStar(index)}
            />
          );
        })}
    </Styled.RatingContainer>
  );
};

export default Rating;
