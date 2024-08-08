import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationForm from '../components/ReservationForm';

describe('ReservationForm Component', () => {
  test('renders form elements correctly', () => {
    render(<ReservationForm />);

    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Reservation Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Reservation Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Person/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Notes/i)).toBeInTheDocument();
    expect(screen.getByText(/Request Reservation/i)).toBeInTheDocument();
  });

  test('form submission', () => {
    render(<ReservationForm />);

    fireEvent.change(screen.getByLabelText(/Your Name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/Reservation Date/i), {
      target: { value: '2023-10-01' },
    });
    fireEvent.change(screen.getByLabelText(/Reservation Time/i), {
      target: { value: '18:30' },
    });
    fireEvent.change(screen.getByLabelText(/Person/i), {
      target: { value: 'Person-2' },
    });
    fireEvent.change(screen.getByLabelText(/Notes/i), {
      target: { value: 'No special requests' },
    });

    fireEvent.click(screen.getByText(/Request Reservation/i));

    // Add your assertions here based on form submission logic
  });
});
