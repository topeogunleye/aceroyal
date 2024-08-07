import React from 'react';
import './ReservationForm.css';

const ReservationForm: React.FC = () => {
  return (
    <div className="reservation-container">
      <div className="form-container">
        <h2>Smooth Reservations for Memorable Dining Experiences</h2>
        <form>
          <div className="form-group">
            <label>Your Name*</label>
            <input type="text" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label>Your email*</label>
            <input type="email" placeholder="Your email" required />
          </div>
          <div className="form-group">
            <label>Phone number*</label>
            <input type="tel" placeholder="Your phone number" required />
          </div>
          <div className="form-group">
            <label>Reservation Date*</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Reservation Time*</label>
            <input type="time" required />
          </div>
          <div className="form-group">
            <label>Person*</label>
            <select required>
              <option>Person-1</option>
              <option>Person-2</option>
              <option>Person-3</option>
              <option>Person-4</option>
            </select>
          </div>
          <div className="form-group">
            <label>Notes*</label>
            <textarea placeholder="Any special requests or notes" required />
          </div>
          <button type="submit">Request Reservation</button>
        </form>
      </div>
      <div className="text-container">
        <h2>
          Elevate Your Dining Experience with a Reserved Table at{' '}
          <span>Fast Food</span>
        </h2>
        <p>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire,
        </p>
        <a href="#" className="read-more">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default ReservationForm;
