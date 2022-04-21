import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my profile link', () => {
  render(<App />);
  const linkElement = screen.getByText(/my profile/i);
  expect(linkElement).toBeInTheDocument();
});
