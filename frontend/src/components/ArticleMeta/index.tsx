import { Author } from '@/src/shared-types/author';
import * as Styled from './styles';
import { Categories } from '@/src/shared-types/category';
import { formatDate } from '../../utils/format-date';

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  categories: Categories;
};

export const ArticleMeta = ({
  createdAt,
  author,
  categories,
}: ArticleMetaProps) => {
  return (
    <Styled.Container>
      <p>
        <span>Por </span>
        <a href={`author/${author.data.attributes.slug}`}>
          {author.data.attributes.displayName}
        </a>
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        <span className="separator"> | </span>

        <span className="categories">
          {categories.data.map((category) => {
            return (
              <span key={`${category.id}-article-meta`}>
                <a href={`/category/${category.attributes.slug}`}>
                  {category.attributes.displayName}
                </a>
              </span>
            );
          })}
        </span>
      </p>
    </Styled.Container>
  );
};
