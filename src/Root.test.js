import React from 'react';
import { render } from '@testing-library/react';
import Root from './Root';

test('renders exercises list title', () => {
  const { getByText } = render(<Root />);
  const linkElement = getByText(/Exercises List/i);
  expect(linkElement).toBeInTheDocument();
});
