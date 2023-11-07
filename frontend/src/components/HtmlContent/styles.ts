import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: 2rem;

    p {
      margin: ${theme.spacings.xlarge} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 200ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: ${({ theme }) => theme.spacings.large} 0;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.primary};
    }

    code {
      font-family: monospace;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.small};
      background: ${theme.colors.mediumGray};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre {
      background: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.medium} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }

    pre code {
      color: inherit;
      background: inherit;
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.darkGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.xlarge} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium};
    }

    ul,
    ol {
      margin: ${theme.spacings.xlarge};
    }

    hr {
      border: none;
      border-bottom: 1px solid ${theme.colors.mediumGray};
    }

    .table {
      max-width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 1px solid ${theme.colors.mediumGray};
    }

    @media ${theme.media.lteMedium} {
      font-size: 1.8rem;

      .image-style-side {
        float: none;
        max-width: 100%;
        margin: ${theme.spacings.xlarge} 0;
      }
    }
  `}
`;
