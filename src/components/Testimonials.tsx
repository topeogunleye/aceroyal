import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Armas Rosie',
    image: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg',
    text: 'Appreciation to those who sweeten our journey – our cherished patrons. Your unwavering support is the sugar in our recipe, infusing each moment with a delightful sweetness.',
    isHighlighted: true,
  },
  {
    name: 'Stuart Mark',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    text: 'Pen arrange link background community line figma horizontal link. Follower layer content hand undo. Figma edit flows.',
    isHighlighted: false,
  },
  {
    name: 'Stuart Mark',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble...',
    isHighlighted: false,
  },
  {
    name: 'Megan Johnson',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    text: 'Pen arrange link background figma horizontal link. Follower layer content hand undo. Figma edit flows.',
    isHighlighted: false,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonial-header">
        <div>
          <h2>
            Our Cherished <span>Patrons</span>.
          </h2>
          <p>
            Appreciation to those who sweeten our journey – our cherished
            patrons. Your unwavering support is the sugar in our recipe,
            infusing each moment with a delightful sweetness.
          </p>
        </div>
        <div className="testimonial-navigation">
          <button>←</button>
          <button>→</button>
        </div>
      </div>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial ${testimonial.isHighlighted ? 'highlight' : ''}`}
            key={index}
          >
            <img src={testimonial.image} alt={`${testimonial.name}`} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
