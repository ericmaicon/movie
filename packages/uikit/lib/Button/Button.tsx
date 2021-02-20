import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface ButtonProps
  extends BaseHTMLAttributes<HTMLButtonElement>,
    Styled.StyledButtonProps {
  /**
   * Button content.
   */
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <Styled.Button {...rest}>{children}</Styled.Button>;
};

export default Button;
