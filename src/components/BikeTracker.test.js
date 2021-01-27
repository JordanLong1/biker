/* eslint-disable react/jsx-filename-extension */
import { render, screen, expect, getByLabelText } from '@testing-library/react';
import React from 'react';
import BikeTracker from './BikeTracker';

test('it renders the component correctly', () => {
  render(<BikeTracker />);

  screen.getByRole('button', { name: 'Insert Search Logo here' });
});
