import { render, screen } from '@testing-library/react';
import LandingSection from '../components/LandingSection';

test('renders landing section with correct text and links', () => {
  render(<LandingSection />);
  expect(
    screen.getByText(/Your Go-To Spot for Quick and/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/A leader in casual dining/i)).toBeInTheDocument();
  const orderButton = screen.getByRole('link', { name: /ORDER/i });
  expect(orderButton).toHaveAttribute('href', 'https://wa.me/+2348094747139');
  expect(orderButton).toHaveAttribute('target', '_blank');
});
