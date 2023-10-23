'use client';

import { ThemeProvider as Provider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global-style';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider theme={theme}>
      {children}
      <GlobalStyles />
    </Provider>
  );
};

export default ThemeProvider;
