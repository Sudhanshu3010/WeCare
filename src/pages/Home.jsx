import React from "react";
import BannerSection from "../components/BannerSection";
import Texto from "../components/Texto";
import Faq from "../components/Faq";
import CommunitySection from "../components/CommunitySection";
import { createBrowserRouter } from "react-router-dom";


const Home = () => {
  return (
    <>
      <BannerSection />
      <Texto />
      <CommunitySection />
      <Faq></Faq>
      
    </>
  );
};

export default Home;
