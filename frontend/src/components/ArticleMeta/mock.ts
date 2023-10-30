import { ArticleMetaProps } from '.';

export default {
  createdAt: '2023-10-21T14:13:59.239Z',
  author: {
    data: {
      id: '1',
      attributes: {
        displayName: 'Thiago Silva',
        slug: 'thiago-silva',
      },
    },
  },
  categories: {
    data: [
      {
        id: '3',
        attributes: {
          displayName: 'C#',
          slug: 'c-1',
        },
      },
      {
        id: '2',
        attributes: {
          displayName: 'JavaScript',
          slug: 'java-script',
        },
      },
    ],
  },
} as ArticleMetaProps;
