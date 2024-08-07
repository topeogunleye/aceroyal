import React from 'react';
import LandingSection from '../components/LandingSection';
import Carousel from '../components/Carousel';
import CulinaryFavorites from '../components/CulinaryFavorites';
import BestSellingItems from '../components/BestSellingItems';
import CustomerChoice from '../components/CustomerChoice';

const Home: React.FC = () => (
  <div>
    <LandingSection />
    <Carousel />
    <CulinaryFavorites />
    <BestSellingItems />
    <CustomerChoice />
  </div>
);

export default Home;
