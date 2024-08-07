import React from 'react';
import './CustomerChoice.css';

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="feature-card">
      <img src={iconSrc} alt={title} className="icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CustomerChoice: React.FC = () => {
  return (
    <div className="customer-choice">
      <div className="customer-choice-content">
        <div className="features-grid">
          <FeatureCard
            iconSrc="https://img.icons8.com/ios-filled/50/000000/butter.png"
            title="Warm & Enjoy"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
          />
          <FeatureCard
            iconSrc="https://img.icons8.com/ios-filled/50/000000/star.png"
            title="Savour & Replay"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
          />
          <FeatureCard
            iconSrc="https://img.icons8.com/ios-filled/50/000000/delivery.png"
            title="Delivery Services"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
          />
          <FeatureCard
            iconSrc="https://img.icons8.com/ios-filled/50/000000/salad.png"
            title="Organic Food"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
          />
        </div>
        <div className="customer-choice-text">
          <h2>
            The Choice of <span>Customers</span>
          </h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et...
          </p>
          <button className="view-more-button">View More</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerChoice;
