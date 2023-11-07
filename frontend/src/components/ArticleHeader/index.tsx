import { Author } from '@/src/shared-types/author';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';
import { Categories } from '@/src/shared-types/category';
import { Cover } from '@/src/shared-types/cover';

export type ArticleHeaderProps = {
  title: string;
  excerpt: string;
  createdAt: string;
  author: Author;
  categories: Categories;
  cover: Cover;
};

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
}: ArticleHeaderProps) => {
  return (
    <Styled.Container>
      <Heading as="h1" size="huge">
        {title}
      </Heading>
      <p>{excerpt}</p>
      <Styled.Image
        src={cover.data.attributes.url}
        alt={cover.data.attributes.name}
      />
      <ArticleMeta
        author={author}
        categories={categories}
        createdAt={createdAt}
      />
    </Styled.Container>
  );
};
