import React from 'react';
import { screen } from '@testing-library/react';

import ScrollToTop from './ScrollToTop';
import { renderWithRouter } from '../../utils/test-utils';

describe('Scroll to top tests', () => {
  it('Scroll to top children is rendered', () => {
    renderWithRouter(
      <ScrollToTop>
        <div data-testid="scrollToTop" />
      </ScrollToTop>
    );
    expect(screen.getByTestId('scrollToTop')).toBeInTheDocument();
  });
});
