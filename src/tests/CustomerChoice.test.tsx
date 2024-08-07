import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomerChoice from '../components/CustomerChoice';

describe('CustomerChoice Component', () => {
  test('renders feature cards with correct content', () => {
    render(<CustomerChoice />);

    const featureTitles = [
      'Warm & Enjoy',
      'Savour & Replay',
      'Delivery Services',
      'Organic Food',
    ];
    featureTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test('renders feature cards with correct icons', () => {
    render(<CustomerChoice />);

    const icons = [
      {
        alt: 'Warm & Enjoy',
        src: 'https://img.icons8.com/ios-filled/50/000000/butter.png',
      },
      {
        alt: 'Savour & Replay',
        src: 'https://img.icons8.com/ios-filled/50/000000/star.png',
      },
      {
        alt: 'Delivery Services',
        src: 'https://img.icons8.com/ios-filled/50/000000/delivery.png',
      },
      {
        alt: 'Organic Food',
        src: 'https://img.icons8.com/ios-filled/50/000000/salad.png',
      },
    ];

    icons.forEach((icon) => {
      const img = screen.getByAltText(icon.alt);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', icon.src);
    });
  });

  test('renders main text content', () => {
    render(<CustomerChoice />);

    expect(screen.getByText(/The Choice of/i)).toBeInTheDocument();
    expect(screen.getByText(/Customers/i)).toBeInTheDocument();
    expect(screen.getByText(/At vero eos et accusamus/i)).toBeInTheDocument();
    expect(screen.getByText(/View More/i)).toBeInTheDocument();
  });
});
