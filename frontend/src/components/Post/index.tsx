import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
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
      <PostContainer size="max">
        <ArticleHeader
          author={author}
          categories={categories}
          cover={cover}
          createdAt={createdAt}
          excerpt={excerpt}
          title={title}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Container>
  );
};
