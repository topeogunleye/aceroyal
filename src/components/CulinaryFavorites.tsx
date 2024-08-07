import './CulinaryFavorites.css'

const CulinaryFavorites: React.FC = () => (
  <div className="content-container">
    <div className="image-container">
      <div className="image-large">
        <img
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
          alt="Burger"
        />
      </div>
      <div className="image-small">
        <img
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
          alt="Chicken Skewers"
        />
      </div>
    </div>
    <div className="text-container">
      <h1>
        Captivating Culinary <span>Favorites.</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="buttons">
        <button className="order-btn">Order Now</button>
        <a href="#" className="about-link">
          About TastyFlow
        </a>
      </div>
    </div>
  </div>
);

export default CulinaryFavorites;
