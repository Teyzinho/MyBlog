// import { screen } from '@testing-library/react';
import { Post } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<Post />', () => {
  it('should render', () => {
    renderTheme(<Post {...mock} />);
  });
});
