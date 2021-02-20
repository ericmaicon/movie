import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface HeadingProps
  extends BaseHTMLAttributes<HTMLHeadingElement>,
    Partial<Styled.StyledHeadingProps> {
  /**
   * Heading content.
   */
  children: ReactNode;
}

const Heading = ({ children, size = 1, ...rest }: HeadingProps) => {
  switch (size) {
    case 1:
    default:
      return (
        <Styled.Heading1 size={size} {...rest}>
          {children}
        </Styled.Heading1>
      );
  }
};

export default Heading;
