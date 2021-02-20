import styled, { css } from 'styled-components';

export interface StyledButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary';
}

const variantModifier = {
  primary: () => css`
    border: 1px solid ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.black};
    }

    &:active {
      border: 1px solid ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.black};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.black};
    }

    &:disabled {
      border: 1px solid ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.black};
    }
  `,
  secondary: css`
    border: none;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }

    &:active {
      color: ${({ theme }) => theme.colors.black};
    }

    &:focus {
      color: ${({ theme }) => theme.colors.black};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.black};
    }
  `,
};

export const Button = styled.button<StyledButtonProps>`
  background: transparent;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.2rem;
  padding: 5px 15px;
  ${({ theme }) => theme.typography.text};
  ${({ variant = 'primary' }) => variantModifier[variant]};

  //tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.5rem;
  }

  //desktop
  @media (min-width: 1025px) {
    font-size: 1rem;
  }
`;
