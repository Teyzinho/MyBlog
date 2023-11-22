import * as Styled from './styles';

import { useState } from 'react';

import { Menu as MenuIcon, Close } from '@styled-icons/material-outlined';
import { MenuLink } from '../MenuLink';
import { Heading } from '../Heading';

export type MenuLinks = {
  id: string;
  link: string;
  newTab: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuLinks[];
  blogName: string;
};

export const Menu = ({ links, blogName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Container isOpen={isOpen}>
      <Styled.MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Close width={25} height={25} />
        ) : (
          <MenuIcon width={25} height={25} />
        )}
      </Styled.MenuIcon>
      <Styled.Wrapper>
        <Heading size="medium" color_dark={false}>
          {blogName}
        </Heading>
        {links.map((link) => (
          <MenuLink key={link.id} link={link.link} isNewTab={link.newTab}>
            {link.text}
          </MenuLink>
        ))}
      </Styled.Wrapper>
    </Styled.Container>
  );
};
