import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import WorkFlow from 'sections/workflow';

const Steps = () => {
  return (
    <ThemeProvider theme={theme}>
      <WorkFlow />
    </ThemeProvider>
  );
};

export default Steps;
