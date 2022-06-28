import React from 'react';
import { screen, render } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner tests', () => {
  it('Rendering if isSpinning=true', () => {
    const { getByTestId } = render(<Spinner isSpinning={true} />);
    expect(getByTestId('spinner')).toBeInTheDocument();
  });

  it('Not rendering if isSpinning=false', () => {
    render(<Spinner isSpinning={false} />);
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});
