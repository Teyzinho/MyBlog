import { Meta, StoryFn } from '@storybook/react';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta;

export const Template: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};
