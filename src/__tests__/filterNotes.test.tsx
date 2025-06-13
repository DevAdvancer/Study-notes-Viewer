import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App filtering', () => {
  test('filters notes by progress', () => {
    render(<App />);

    // open filter dropdown and choose Completed
    const filterButton = screen.getByLabelText(/filter notes/i);
    fireEvent.click(filterButton);
    fireEvent.click(screen.getByText(/Completed/i));

    expect(screen.queryByText('Machine Learning')).toBeNull();
    expect(screen.getByText('Introduction to Python')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
  });

  test('filters by progress and search term', () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/search notes/i), {
      target: { value: 'Machine' }
    });

    const filterButton = screen.getByLabelText(/filter notes/i);
    fireEvent.click(filterButton);
    fireEvent.click(screen.getByText(/In Progress/i));

    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
  });
});
