import React from 'react';
import './ReservationForm.css';

const ReservationForm: React.FC = () => {
  return (
    <div className="reservation-container">
      <div className="form-container">
        <h2>Smooth Reservations for Memorable Dining Experiences</h2>
        <form>
          <div className="form-group">
            <label htmlFor="full_name">Your Name*</label>
            <input
              type="text"
              placeholder="Your full name"
              required
              id="full_name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email*</label>
            <input type="email" placeholder="Your email" required id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone-num">Phone number*</label>
            <input
              type="tel"
              placeholder="Your phone number"
              required
              id="phone-num"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Reservation Date*</label>
            <input type="date" required id="date" />
          </div>
          <div className="form-group">
            <label htmlFor="time">Reservation Time*</label>
            <input type="time" required id="time" />
          </div>
          <div className="form-group">
            <label htmlFor="Num-Persons">Person*</label>
            <select required id="Num-Persons">
              <option>Person-1</option>
              <option>Person-2</option>
              <option>Person-3</option>
              <option>Person-4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes*</label>
            <textarea
              placeholder="Any special requests or notes"
              required
              id="notes"
            />
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
