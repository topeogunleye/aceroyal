import React from 'react';
import './BestSellingItems.css';

const bestSellingItems = [
  {
    name: 'Tasty Mint Julep Cocktail',
    image: './images/mint-julep-cocktail.png',
    price: '$10.00 USD',
    rating: 5,
  },
  {
    name: 'Spinach Artichoke Spectacle',
    image: './images/spinach-artichoke-pizza.png',
    price: '$13.00 USD',
    rating: 5,
  },
  {
    name: 'TNC Combo Meals',
    image: './images/tnc-combo-meals.png',
    price: '$15.00 USD',
    rating: 5,
  },
  {
    name: 'Lemon Ice Tea',
    image: './images/lemon-ice-tea.png',
    price: '$12.00 USD',
    rating: 5,
  },
];

const BestSellingItems: React.FC = () => (
  <section className="best-selling-items">
    <h2>
      Best Selling <span>Items</span>
    </h2>
    <p>
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain was born and I will give you a complete account
      of the system,
    </p>
    <div className="items-carousel">
      {bestSellingItems.map((item, index) => (
        <div className="item-card" key={index}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <div className="rating">
            {'★'.repeat(item.rating)}
            {'☆'.repeat(5 - item.rating)}
          </div>
          <p>{item.price}</p>
        </div>
      ))}
      <button className="carousel-button left">&#8249;</button>
      <button className="carousel-button right">&#8250;</button>
    </div>
  </section>
);

export default BestSellingItems;
