import { render } from '@testing-library/react';
import Carousel from '../components/Carousel';

describe('Carousel', () => {
  test('renders carousel with slides and navigation', () => {
    const { getAllByRole, getByTestId } = render(<Carousel />);

    // Check that all slides are rendered
    const slides = getAllByRole('img');
    expect(slides).toHaveLength(7);

    // Check that navigation buttons are rendered
    const prevButton = getByTestId('prev');
    const nextButton = getByTestId('next');
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
