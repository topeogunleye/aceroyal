import React from 'react';
import Header from './Header';

const LandingSection: React.FC = () => (
  <section className="landing-section">
    <Header />
    <section>
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
          <span
            className="material-symbols-outlined"
            id="prev"
            data-testid="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="currentColor"
            >
              <path d="m480-334 42-42-74-74h182v-60H448l74-74-42-42-146 146 146 146Zm0 254q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
            </svg>
          </span>
          <span
            className="material-symbols-outlined"
            id="next"
            data-testid="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="currentColor"
            >
              <path d="m480-334 146-146-146-146-42 42 74 74H330v60h182l-74 74 42 42Zm0 254q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  </section>
);

export default LandingSection;
