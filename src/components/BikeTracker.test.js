/* eslint-disable react/jsx-filename-extension */
import { render, screen, expect, getByLabelText } from '@testing-library/react';
import React from 'react';
import BikeTracker from './BikeTracker';

test('it has a search button', () => {
  render(<BikeTracker />);

  screen.getByRole('button', { name: 'Insert Search Logo here' });
});

test('it has an input field', () => {
  render(<BikeTracker />);

  screen.getByRole('textbox', { name: 'Bike Search' });
});
