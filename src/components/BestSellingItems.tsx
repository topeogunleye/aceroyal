import React from 'react';
import './BestSellingItems.css';

const bestSellingItems = [
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

const BestSellingItems = () => {
  return (
    <section className="best-selling-items">
      <h2>
        Best Selling <span>Items</span>
      </h2>
      <p>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system.
      </p>
      <div className="items-carousel">
        {bestSellingItems.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="rating">{'★'.repeat(item.rating)}</div>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingItems;
