import React from "react";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import Statistics from "../components/Statistics";
import Header from "../components/Header";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Header />
      <Statistics />
      <AboutUs />
      <Gallery />
      <Team />
      <Footer />
    </>
  );
};

export default About;
