import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TODO TEST title', () => {
    render(<App />);
    const linkElement = screen.getByText(/TODO TEST/i);
    expect(linkElement).toBeInTheDocument();
});
