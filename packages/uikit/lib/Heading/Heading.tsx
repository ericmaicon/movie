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
    case 2:
      return (
        <Styled.Heading2 size={size} {...rest}>
          {children}
        </Styled.Heading2>
      );
    case 3:
      return (
        <Styled.Heading3 size={size} {...rest}>
          {children}
        </Styled.Heading3>
      );
    case 4:
      return (
        <Styled.Heading4 size={size} {...rest}>
          {children}
        </Styled.Heading4>
      );
    case 5:
      return (
        <Styled.Heading5 size={size} {...rest}>
          {children}
        </Styled.Heading5>
      );
  }
};

export default Heading;
