import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '~/themes/theme.json';

const Providers = ({
  children,
}: Partial<{
  children: ReactNode;
}>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
