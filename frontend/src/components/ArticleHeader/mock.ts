import { ArticleHeaderProps } from '.';

export default {
  title: 'Primeiro post',
  cover: {
    data: {
      id: '3',
      attributes: {
        name: 'depressão-em-cães.jpg',
        alternativeText: null,
        url: 'https://res.cloudinary.com/dfnyq9hse/image/upload/v1697896397/depressao_em_caes_83051f3c90.jpg',
      },
    },
  },
  excerpt: 'Primeiro post do blog utilizado como teste',
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
} as ArticleHeaderProps;
