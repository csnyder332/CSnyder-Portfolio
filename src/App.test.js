import { render, screen } from '@testing-library/react';
import App from './App';

test('Title of portfolio', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chris SNyder portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
