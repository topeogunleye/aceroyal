import { render, screen } from '@testing-library/react';
import CulinaryFavorites from '../components/CulinaryFavorites';

describe('CulinaryFavorites', () => {
  test('renders CulinaryFavorites section with content', () => {
    render(<CulinaryFavorites />);

    // Check that images are rendered
    expect(screen.getByAltText('Burger')).toBeInTheDocument();
    expect(screen.getByAltText('Chicken Skewers')).toBeInTheDocument();

    // Check that text content is rendered
    expect(
      screen.getByText(/Captivating Culinary Favorites/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();

    // Check that buttons are rendered
    expect(screen.getByText('Order Now')).toBeInTheDocument();
    expect(screen.getByText('About TastyFlow')).toBeInTheDocument();
  });
});
