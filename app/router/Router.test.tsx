import * as React from 'react';
import { render, screen, waitFor } from '../../tests/test-utils';

import Router from './index';

describe('router', () => {
  it('should render home content', async () => {
    render(<Router />);

    const message = await waitFor(() =>
      screen.getByText('There are no books to show.'),
    );

    expect(message).toBeTruthy();
  });
});
