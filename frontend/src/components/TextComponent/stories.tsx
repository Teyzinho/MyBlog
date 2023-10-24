import { Meta, StoryFn } from '@storybook/react';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Molestias quisquam a architecto mollitia ullam! Labore a
      repellendus cumque ullam facere, qui, fugiat saepe dicta,
      voluptate dignissimos deleniti ea nostrum reiciendis`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: StoryFn<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
