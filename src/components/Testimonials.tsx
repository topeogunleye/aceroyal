import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Armas Rosie',
    text: 'Appreciation to those who sweeten our journey – our cherished patrons. Your unwavering support is the sugar in our recipe, infusing each moment with a delightful sweetness.',
    image: 'https://example.com/armas-rosie.jpg', // Placeholder image URL
    highlight: true,
  },
  {
    name: 'Stuart Mark',
    text: 'Pen arrange link background community line figma horizontal link. Follower layer content hand undo. Figma edit flows',
    image: 'https://example.com/stuart-mark.jpg', // Placeholder image URL
    highlight: false,
  },
  {
    name: 'Megan Johnson',
    text: 'Pen arrange link background community line figma horizontal link. Follower layer content hand undo. Figma edit flows',
    image: 'https://example.com/megan-johnson.jpg', // Placeholder image URL
    highlight: false,
  },
  {
    name: 'Megan Johnson',
    text: 'Pen arrange link background community line figma horizontal link. Follower layer content hand undo. Figma edit flows',
    image: 'https://example.com/megan-johnson.jpg', // Placeholder image URL
    highlight: false,
  },
  {
    name: 'Megan Johnson',
    text: 'Pen arrange link background community line figma horizontal link. Follower layer content hand undo. Figma edit flows',
    image: 'https://example.com/megan-johnson.jpg', // Placeholder image URL
    highlight: false,
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
            className={`testimonial ${testimonial.highlight ? 'highlight' : ''}`}
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
