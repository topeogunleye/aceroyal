import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import BestSellingItems from '../components/BestSellingItems';

describe('BestSellingItems Component', () => {
  test('renders section title and description', () => {
    render(<BestSellingItems />);

    expect(screen.getByText('Best Selling')).toBeInTheDocument();
    expect(screen.getByText('Items')).toBeInTheDocument();
    expect(screen.getByText(/But I must explain to you/i)).toBeInTheDocument();
  });

  test('renders all items with correct title, image, price, and rating', () => {
    render(<BestSellingItems />);

    const items = [
      {
        title: 'Tasty Mint Julep Cocktail',
        imageUrl:
          'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg',
        price: '$10.00 USD',
        rating: 5,
      },
      {
        title: 'Spinach Artichoke Spectacle',
        imageUrl:
          'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
        price: '$13.00 USD',
        rating: 5,
      },
      {
        title: 'TNC Combo Meals',
        imageUrl:
          'https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg',
        price: '$15.00 USD',
        rating: 5,
      },
      {
        title: 'Lemon Ice Tea',
        imageUrl:
          'https://images.pexels.com/photos/4197989/pexels-photo-4197989.jpeg',
        price: '$12.00 USD',
        rating: 5,
      },
    ];

    const itemCards = screen.getAllByRole('article'); // Assuming 'article' is used for item-card
    items.forEach((item, index) => {
      const itemCard = itemCards[index];
      const { getByText, getByAltText } = within(itemCard);

      expect(getByText(item.title)).toBeInTheDocument();
      expect(getByAltText(item.title)).toHaveAttribute('src', item.imageUrl);
      expect(getByText(item.price)).toBeInTheDocument();
      expect(getByText('★'.repeat(item.rating))).toBeInTheDocument();
    });
  });
});
