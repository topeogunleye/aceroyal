import './CustomerChoice.css';
import warmEnjoyIcon from '../assets/icons/warm-enjoy.png';
import savourReplayIcon from '../assets/icons/savour-replay.png';
import deliveryServicesIcon from '../assets/icons/delivery-services.png';
import organicFoodIcon from '../assets/icons/organic-food.png';

const features = [
  {
    icon: warmEnjoyIcon,
    title: 'Warm & Enjoy',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    icon: savourReplayIcon,
    title: 'Savour & Replay',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    icon: deliveryServicesIcon,
    title: 'Delivery Services',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    icon: organicFoodIcon,
    title: 'Organic Food',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
];

const CustomerChoice = () => {
  return (
    <section className="customer-choice">
      <div className="customer-choice-content">
        <h2>
          The Choice of <span>Customers</span>
        </h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et...
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.icon} alt={feature.title} className="icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <button className="view-more-button">View More →</button>
      </div>
    </section>
  );
};

export default CustomerChoice;
