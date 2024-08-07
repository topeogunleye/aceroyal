import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CulinaryFavorites from '../components/CulinaryFavorites';

describe('CulinaryFavorites Component', () => {
  test('renders images with correct alt text', () => {
    render(<CulinaryFavorites />);

    const burgerImage = screen.getByAltText('Burger');
    const chickenSkewersImage = screen.getByAltText('Chicken Skewers');

    expect(burgerImage).toBeInTheDocument();
    expect(burgerImage).toHaveAttribute(
      'src',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg'
    );

    expect(chickenSkewersImage).toBeInTheDocument();
    expect(chickenSkewersImage).toHaveAttribute(
      'src',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg'
    );
  });

  test('renders main text content', () => {
    render(<CulinaryFavorites />);

    expect(screen.getByText(/Captivating Culinary/i)).toBeInTheDocument();
    expect(screen.getByText(/Favorites./i)).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  test('renders buttons and links with correct text', () => {
    render(<CulinaryFavorites />);

    expect(screen.getByText('Order Now')).toBeInTheDocument();
    expect(screen.getByText('About TastyFlow')).toBeInTheDocument();
  });

  test('buttons and links have correct classes', () => {
    render(<CulinaryFavorites />);

    const orderButton = screen.getByText('Order Now');
    const aboutLink = screen.getByText('About TastyFlow');

    expect(orderButton).toHaveClass('order-btn');
    expect(aboutLink).toHaveClass('about-link');
  });
});
