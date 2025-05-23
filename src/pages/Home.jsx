import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Deals from '../components/Deals';
import WeeklyRecommendations from '../components/WeeklyRecommendations';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import NearbySection from '../components/NearbySection';
import BrowseSection from '../components/BrowseSection';
import ProjectTitle from '../components/ProjectTitle';
import FooterBar from '../components/FooterBar';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto">
        <FeatureSection />
        <NearbySection />
        <Deals />
        <WeeklyRecommendations />
        <Testimonials />
        <BrowseSection />
        <ProjectTitle />
      </div>
      <Footer />
      <FooterBar />
    </>
  )
}

export default Home