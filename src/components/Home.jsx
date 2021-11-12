import React from "react";
import Navbar from "./Navbar/Navbar";
import Annoucement from "./offers/Annoucement";
import Highlights from "./HighlightsSection/Highlights";
import Services from "./Services/Services";
import CakesSection from "./CakesSection/CakesSection";
import CovidSafe from "./CovidSafe";
import Contact from "./Contact/Contact";


const Home = () => {
  return (
    <>
      <Annoucement />
      <Highlights />
      <Services />
      <CakesSection />
      <CovidSafe />
      <Contact />
    </>
  );
};

export default Home;
