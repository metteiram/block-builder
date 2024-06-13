import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import BlockBuilder from './BlockBuilder';

// Set up a mock adapter for axios
const mock = new MockAdapter(axios);

describe('BlockBuilder', () => {
  let originalLog;

  beforeAll(() => {
    // Save the original console.log method
    originalLog = console.log;
    // Mock console.log
    console.log = jest.fn();
  });

  afterAll(() => {
    // Restore the original console.log method
    console.log = originalLog;
  });

  afterEach(() => {
    mock.reset();
  });

  test('renders the Block Builder component', () => {
    render(<BlockBuilder />);
    expect(screen.getByText(/Block Builder/i)).toBeInTheDocument();
    expect(screen.getByText(/Blocks start out empty/i)).toBeInTheDocument();
  });

  test('adds blocks when start is clicked', async () => {
    mock.onGet('/api/blocks').reply(200);

    render(<BlockBuilder />);
    fireEvent.click(screen.getByRole('button', { name: /Start/i }));

    await waitFor(() => expect(screen.getByText('1')).toBeInTheDocument(), { timeout: 2000 });
  });

  test('stops adding blocks when stop is clicked', async () => {
    mock.onGet('/api/blocks').reply(200);

    render(<BlockBuilder />);
    fireEvent.click(screen.getByRole('button', { name: /Start/i }));

    await waitFor(() => expect(screen.getByText('1')).toBeInTheDocument(), { timeout: 2000 });

    fireEvent.click(screen.getByRole('button', { name: /Stop/i }));
    const blockCount = screen.getAllByText(/\d+/).length;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(screen.getAllByText(/\d+/).length).toBe(blockCount);
  });

  test('resets blocks when reset is clicked', async () => {
    mock.onPost('/api/reset').reply(200, 'Reset successful');
    mock.onGet('/api/blocks').reply(200);

    render(<BlockBuilder />);
    fireEvent.click(screen.getByRole('button', { name: /Start/i }));

    await waitFor(() => expect(screen.getByText('1')).toBeInTheDocument(), { timeout: 2000 });

    fireEvent.click(screen.getByRole('button', { name: /Reset/i }));
    await waitFor(() => expect(screen.queryByText('1')).not.toBeInTheDocument());
  });
});
