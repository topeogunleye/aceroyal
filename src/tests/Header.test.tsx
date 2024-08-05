import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header with logo', () => {
  render(<Header />);
  const logo = screen.getByAltText(/ACE ROYAL FOODS Logo/i);
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('src', './images/logo-removebg.png');
});
