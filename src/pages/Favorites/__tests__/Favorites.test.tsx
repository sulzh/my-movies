import 'whatwg-fetch';
import React from 'react';
import { screen } from '@testing-library/react';

// Components
import Favorites from '../Favorites';
// Utils
import { COMPONENT_TEST_ID } from '../constants';
import { renderWithContext } from '../../../utils/test-utils';

test('page should contain an component', () => {
  renderWithContext(<Favorites />);
  expect(screen.getByTestId(COMPONENT_TEST_ID));
});
