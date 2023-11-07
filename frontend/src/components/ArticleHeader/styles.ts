import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    h1 {
      margin: ${theme.spacings.medium} 0;
    }

    p {
      font-size: 2.2rem;
    }

    padding-bottom: ${({ theme }) => theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.darkGray};
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    width: 100%;
    object-fit: cover;
  `}
`;
