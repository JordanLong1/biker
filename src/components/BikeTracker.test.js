/* eslint-disable react/jsx-filename-extension */
import { render, screen, expect, test } from '@testing-library/react';
import React from 'react';
import BikeTracker from './BikeTracker';

test('it renders the component correctly', () => {
  render(<BikeTracker />);

  const input = screen.getByLabelText('Bike Search');

  expect(input).toHaveLength(1);
});
