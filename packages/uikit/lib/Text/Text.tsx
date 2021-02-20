import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface TextProps extends BaseHTMLAttributes<HTMLParagraphElement> {
  /**
   * Text content.
   */
  children: ReactNode;
}

const Text = ({ children, ...rest }: TextProps) => {
  return <Styled.Text {...rest}>{children}</Styled.Text>;
};

export default Text;
