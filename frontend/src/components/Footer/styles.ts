import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 1px solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
