import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedCategory from "../components/FeaturedCategory";
import TrendingSection from "../components/TrendingSection";
import ExploreSection from "../components/ExploreSection";
import SpecialOffers from "../components/SpecialOffers";
import TheEdit from "../components/TheEdit";
import Footer from "../components/Footer";
import CategorySection from "../components/CategorySection";

const Home = () => {
  return (
    <div>
          <Header />   
          <Navbar />
          <HeroSection />
          <FeaturedCategory />
          <CategorySection />
    </div>
  );
};

export default Home;
