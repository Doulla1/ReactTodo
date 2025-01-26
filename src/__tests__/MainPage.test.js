import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from '../components/MainPage';

test('renders MainPage with initial list', () => {
  render(<MainPage />);
  const initialList = screen.getByText(/Today/i);
  expect(initialList).toBeInTheDocument();

  const addButton = screen.getByText(/Add list/i);
  expect(addButton).toBeInTheDocument();
});

test('adds a new list when "Add list" is clicked', () => {
  render(<MainPage />);
  const addButton = screen.getByText(/Add list/i);
  fireEvent.click(addButton);

  const newList = screen.getByText(/List 2/i);
  expect(newList).toBeInTheDocument();
});

test('removes a list when "Remove" is clicked', () => {
  render(<MainPage />);
  const removeButton = screen.getAllByText(/Remove/i)[0];
  fireEvent.click(removeButton);

  const removedList = screen.queryByText(/Today/i);
  expect(removedList).not.toBeInTheDocument();
});
