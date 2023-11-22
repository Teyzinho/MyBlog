import styled, { css } from 'styled-components';

type Props = {
  isOpen: boolean;
};

const ContainerClosed = css`
  transform: translateX(-230px);
`;

export const Container = styled.div<Props>`
  ${({ theme, isOpen }) => css`
    width: 250px;
    height: 100%;
    transition: all 0.2s ease-in-out;
    position: fixed;
    left: 0;
    top: 0;
    ${!isOpen && ContainerClosed}
    background: ${theme.colors.primary};

    display: flex;
    align-items: center;
    padding: ${theme.spacings.small};
  `}
`;

export const MenuIcon = styled.button<Props>`
  ${({ theme, isOpen }) => css`
    transition: all 0.2s ease-in-out;
    background: ${theme.colors.primary};
    border: none;
    position: absolute;
    right: ${isOpen ? '20px' : '-15px'};
    top: 15px;
    color: ${isOpen ? theme.colors.secondary : theme.colors.white};
    cursor: pointer;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 100%;
  `}
`;
