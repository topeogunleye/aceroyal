import React from 'react';
import LandingSection from '../components/LandingSection';
import Carousel from '../components/Carousel';
import CulinaryFavorites from '../components/CulinaryFavorites';
import BestSellingItems from '../components/BestSellingItems';

const Home: React.FC = () => (
  <div>
    <LandingSection />
    <Carousel />
    <CulinaryFavorites />
    <BestSellingItems />
  </div>
);

export default Home;
