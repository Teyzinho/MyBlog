import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
    max-width: ${theme.sizes.max};
    margin: 0 auto;
  `}
`;

export const Div = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    max-width: 48rem;
    row-gap: ${theme.spacings.xsmall};
  `}
`;
