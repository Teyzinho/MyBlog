// import { screen } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { ArticleMeta } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<ArticleMeta />', () => {
  it('should render with author and category links props', () => {
    renderTheme(<ArticleMeta {...mock} />);

    expect(
      screen.getByRole('link', {
        name: mock.author.data.attributes.displayName,
      }),
    ).toHaveAttribute('href', `author/${mock.author.data.attributes.slug}`);

    expect(
      screen.getByRole('link', {
        name: mock.categories.data[0].attributes.displayName,
      }),
    ).toHaveAttribute(
      'href',
      `/category/${mock.categories.data[0].attributes.slug}`,
    );

    expect(
      screen.getByRole('link', {
        name: mock.categories.data[1].attributes.displayName,
      }),
    ).toBeInTheDocument();
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...mock} />);

    expect(screen.getByText('21/10/2023, 11:13')).toHaveAttribute(
      'datetime',
      mock.createdAt,
    );
  });
});
