import './Menu.css'; // Ensure you have the CSS file in the same directory

const menuItems = [
  {
    name: 'Pasta with Tomatoes and Basil',
    price: '10.00 USD',
    image:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 5,
  },
  {
    name: 'Testy Beef Burger',
    price: '13.00 USD',
    image:
      'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 5,
  },
  {
    name: 'Philly Steak Sandwich',
    price: '15.00 USD',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 5,
  },
  {
    name: 'Lemon Ice Tea',
    price: '12.00 USD',
    image:
      'https://images.pexels.com/photos/1207926/pexels-photo-1207926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 5,
  },
  {
    name: 'Pizza Margherita',
    price: '17.00 USD',
    image:
      'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 5,
  },
  {
    name: 'Chicken Wings',
    price: '16.00 USD',
    image:
      'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 5,
  },
  {
    name: 'Caesar Salad',
    price: '8.70 USD',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 5,
  },
  {
    name: 'Strawberry Smoothie',
    price: '9.00 USD',
    image:
      'https://images.pexels.com/photos/3434527/pexels-photo-3434527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 5,
  },
];

const Menu = () => {
  return (
    <div className="menu">
      <h2>Handpicked Culinary Masterpieces</h2>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque...
      </p>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <div className="rating">{'★'.repeat(item.rating)}</div>
            <button>Order Now</button>
          </div>
        ))}
      </div>
      <button className="view-more">View More</button>
    </div>
  );
};

export default Menu;
