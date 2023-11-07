import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  author,
  categories,
  content,
  cover,
  createdAt,
  excerpt,
  title,
}: PostProps) => {
  return (
    <Styled.Container>
      <ArticleHeader
        author={author}
        categories={categories}
        cover={cover}
        createdAt={createdAt}
        excerpt={excerpt}
        title={title}
      />
      <HtmlContent html={content} />
    </Styled.Container>
  );
};
