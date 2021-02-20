import styled, { css } from 'styled-components';

export type TextFieldContainerProps = {
  /**
   * If `true`, the input will have `focus`.
   */
  focus: boolean;
  /**
   * If `true`, the input will be disabled.
   */
  disabled: boolean;
  /**
   * Is the input valid?
   */
  valid?: boolean;
};

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
  padding-left: 10px;
`;

export const TextField = styled.input`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.2rem;
  height: 100%;
  padding: 10px 20px;
  margin: 0px;
  width: 100%;
  outline: none;
  ${({ theme }) => theme.typography.text};

  //tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.5rem;
  }

  //desktop
  @media (min-width: 1025px) {
    font-size: 1rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
    font-style: italic;
  }
`;

const focusModifier = () => css`
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.2);
`;

const invalidContainerModifier = () => css`
  border: 2px solid ${({ theme }) => theme.colors.red};

  input {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const disabledModifier = () => css`
  background: ${({ theme }) => theme.colors.gray};
`;

export const TextFieldContainer = styled.div<TextFieldContainerProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  border-radius: 25px;
  display: flex;
  flex-direction: horizontal;
  height: 30px;

  ${({ focus }) => focus && focusModifier};
  ${({ valid }) => !valid && invalidContainerModifier};
  ${({ disabled }) => disabled && disabledModifier};
`;
