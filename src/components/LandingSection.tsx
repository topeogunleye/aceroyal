import React from 'react';

const LandingSection: React.FC = () => (
  <section className="landing-section">
    <h1>
      Your Go-To Spot for Quick and <span>Tasty Eats!</span>
    </h1>
    <p>
      A leader in casual dining, <span>ACE ROYAL FOODS</span> offers a diverse
      menu—from pizzas and quesadillas to sushi and teppanyaki
    </p>
    <a
      href="https://wa.me/+2348094747139"
      target="_blank"
      className="order-button"
    >
      ORDER
      <img
        src="./images/whatsapp-32px.png"
        alt="WhatsApp Icon"
        className="whatsapp-icon"
      />
    </a>
    <div className="navigation">
      <div className="numbers">01 - 04</div>
      <div className="arrows">
        <span className="material-symbols-outlined">
          <img
            src="images/arrow_circle_left_48dp_FILL0_wght400_GRAD0_opsz48.svg"
            className="arrow"
            alt="Navigate Left"
          />
        </span>
        <span className="material-symbols-outlined">
          <img
            src="images/arrow_circle_right_48dp_FILL0_wght400_GRAD0_opsz48.svg"
            className="arrow"
            alt="Navigate Right"
          />
        </span>
      </div>
    </div>
  </section>
);

export default LandingSection;
