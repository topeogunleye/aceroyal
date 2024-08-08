import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from '../components/Menu';

describe('Menu component', () => {
  test('renders without crashing', () => {
    render(<Menu />);
  });

  test('renders the title and description', () => {
    render(<Menu />);
    expect(
      screen.getByText('Handpicked Culinary Masterpieces')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...'
      )
    ).toBeInTheDocument();
  });

  test('renders all menu items', () => {
    render(<Menu />);
    const menuItems = screen.getAllByRole('img');
    expect(menuItems).toHaveLength(8);
  });

  test('renders the correct menu item names and prices', () => {
    render(<Menu />);
    expect(
      screen.getByText('Pasta with Tomatoes and Basil')
    ).toBeInTheDocument();
    expect(screen.getByText('10.00 USD')).toBeInTheDocument();

    expect(screen.getByText('Testy Beef Burger')).toBeInTheDocument();
    expect(screen.getByText('13.00 USD')).toBeInTheDocument();

    expect(screen.getByText('Philly Steak Sandwich')).toBeInTheDocument();
    expect(screen.getByText('15.00 USD')).toBeInTheDocument();

    expect(screen.getByText('Lemon Ice Tea')).toBeInTheDocument();
    expect(screen.getByText('12.00 USD')).toBeInTheDocument();

    expect(screen.getByText('Pizza Margherita')).toBeInTheDocument();
    expect(screen.getByText('17.00 USD')).toBeInTheDocument();

    expect(screen.getByText('Chicken Wings')).toBeInTheDocument();
    expect(screen.getByText('16.00 USD')).toBeInTheDocument();

    expect(screen.getByText('Caesar Salad')).toBeInTheDocument();
    expect(screen.getByText('8.70 USD')).toBeInTheDocument();

    expect(screen.getByText('Strawberry Smoothie')).toBeInTheDocument();
    expect(screen.getByText('9.00 USD')).toBeInTheDocument();
  });

  test('renders the order now buttons for each menu item', () => {
    render(<Menu />);
    const buttons = screen.getAllByText('Order Now');
    expect(buttons).toHaveLength(8);
  });

  test('renders the view more button', () => {
    render(<Menu />);
    expect(screen.getByText('View More')).toBeInTheDocument();
  });
});
