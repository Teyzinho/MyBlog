import { screen } from '@testing-library/react';
import { ArticleHeader } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<ArticleHeader />', () => {
  it('should render with default props', () => {
    renderTheme(<ArticleHeader {...mock} />);

    expect(
      screen.getByRole('img', { name: mock.cover.data.attributes.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(mock.excerpt)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument;
  });
});
