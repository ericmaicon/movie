import React, {
  InputHTMLAttributes,
  ReactNode,
  FocusEvent,
  useState,
} from 'react';

import * as Styled from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Element placed on the left side.
   */
  startIcon?: ReactNode;
  /**
   * Wether the value is valid or not.
   */
  valid?: boolean;
}

const Input = ({
  disabled = false,
  valid = true,
  startIcon: startIconProp,
  onFocus,
  onBlur,
  ...rest
}: InputProps) => {
  const [focus, setFocus] = useState(false);

  const startIcon = startIconProp && (
    <Styled.IconContainer>{startIconProp}</Styled.IconContainer>
  );

  function handleOnFocus(event: FocusEvent<HTMLInputElement>) {
    setFocus(true);

    /* istanbul ignore else */
    if (onFocus) {
      onFocus(event);
    }
  }

  function handleOnBlur(event: FocusEvent<HTMLInputElement>) {
    setFocus(false);

    /* istanbul ignore else */
    if (onBlur) {
      onBlur(event);
    }
  }

  return (
    <>
      <Styled.TextFieldContainer
        focus={focus}
        valid={valid}
        disabled={disabled}
      >
        {startIcon}
        <Styled.TextField
          disabled={disabled}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...rest}
        />
      </Styled.TextFieldContainer>
    </>
  );
};

export default Input;
