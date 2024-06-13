import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Block Builder title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Block Builder/i);
  expect(titleElement).toBeInTheDocument();
});
