import { Meta, StoryFn } from '@storybook/react';
import { MenuLink, MenuLinkProps } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: '/',
  },
  argTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
  },
} as Meta;

export const Template: StoryFn<MenuLinkProps> = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  );
};
