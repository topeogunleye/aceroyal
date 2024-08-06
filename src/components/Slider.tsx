import React from 'react';

interface SliderProps {
  imageSrc: string;
  isActive: boolean;
}

const Slider: React.FC<SliderProps> = ({ imageSrc, isActive }) => (
  <div className={`slide-box ${isActive ? 'active' : ''}`}>
    <div className="slide-text">
      <img src={imageSrc} alt={imageSrc.split('/').pop()?.split('.')[0]} />
    </div>
  </div>
);

export default Slider;
