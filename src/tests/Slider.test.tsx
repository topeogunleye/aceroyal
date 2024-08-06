import { render } from '@testing-library/react';
import Slider from '../components/Slider';

describe('Slider', () => {
  test('renders slider with image', () => {
    const { getByAltText } = render(
      <Slider imageSrc="shawarma.png" isActive={true} />
    );
    const image = getByAltText('shawarma');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'shawarma.png');
  });
  
  test('adds active class when isActive is true', () => {
    const { container } = render(
      <Slider imageSrc="shawarma.png" isActive={true} />
    );
    const slideBox = container.firstChild;
    expect(slideBox).toHaveClass('active');
  });

  test('does not add active class when isActive is false', () => {
    const { container } = render(
      <Slider imageSrc="shawarma.png" isActive={false} />
    );
    const slideBox = container.firstChild;
    expect(slideBox).not.toHaveClass('active');
  });
});
