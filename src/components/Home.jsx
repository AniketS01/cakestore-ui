import React from "react";
import Annoucement from "./offers/Annoucement";
import Highlights from "./HighlightsSection/Highlights";
import Services from "./Services/Services";
import CakesSection from "./CakesSection/CakesSection";
import Contact from "./Contact/Contact";
import Footer from "./footer/Footer";


const Home = () => {
  return (
    <>
      <Annoucement />
      <Highlights />
      <Services />
      <CakesSection />
      <Contact />
      <Footer/>
    </>
  );
};

export default Home;
