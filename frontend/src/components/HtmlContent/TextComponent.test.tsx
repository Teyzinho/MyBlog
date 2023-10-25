import { screen } from '@testing-library/react';
import { HtmlContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<HtmlContent />', () => {
  it('should render HtmlContent with Text', () => {
    renderTheme(<HtmlContent html="Texto" />);

    expect(screen.getByText('Texto')).toBeInTheDocument();
  });
});
