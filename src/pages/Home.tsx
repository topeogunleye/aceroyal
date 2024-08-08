import React from 'react';
import LandingSection from '../components/LandingSection';
import Carousel from '../components/Carousel';
import CulinaryFavorites from '../components/CulinaryFavorites';
import BestSellingItems from '../components/BestSellingItems';
import CustomerChoice from '../components/CustomerChoice';
import Menu from '../components/Menu';
import ReservationForm from '../components/ReservationForm';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => (
  <div>
    <LandingSection />
    <Carousel />
    <CulinaryFavorites />
    <BestSellingItems />
    <CustomerChoice />
    <Menu />
    <ReservationForm />
    <Testimonials />
  </div>
);

export default Home;
