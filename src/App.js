import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import BirthdayCake from "./Pages/BirthdayCake";
import OccasionalCakes from "./Pages/OccasionalCakes";
import BestSellers from "./Pages/BestSellers";
import Paymentpage from "./Pages/Paymetpage";

const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/birthdaycakes" element={<BirthdayCake/>}/>
          <Route path="/occasionalcakes" element={<OccasionalCakes/>}/>
          <Route path="/bestsellers" element={<BestSellers/>}/>
          <Route path="/paymentpage/:cake/:price" element={<Paymentpage/>}/>
        </Routes>
      
    </>
  );
};

export default App;
