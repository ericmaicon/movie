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

const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <Styled.Button variant={variant} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
