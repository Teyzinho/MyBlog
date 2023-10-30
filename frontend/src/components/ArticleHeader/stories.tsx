import { Meta, StoryFn } from '@storybook/react';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
} as Meta;

export const Template: StoryFn<ArticleHeaderProps> = (args) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <ArticleHeader {...args} />
    </div>
  );
};
