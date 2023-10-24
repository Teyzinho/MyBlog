import { Meta, StoryFn } from '@storybook/react';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p>Teste de footer</p>`,
  },
  argTypes: {},
} as Meta;

export const Template: StoryFn<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
