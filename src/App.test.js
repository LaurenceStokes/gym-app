import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders please wait whilst fetching the api data', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/... Please wait while the exercise list is populated!/i);
  expect(linkElement).toBeInTheDocument();
});
