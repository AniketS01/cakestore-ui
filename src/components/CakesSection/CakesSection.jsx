import React from "react";
import { TrashFill } from "react-bootstrap-icons";
import img1 from "../img/cakeshow1.jpg";
import "./cakesection.css";
const CakesSection = ({ img, name, description, price }) => {
  return (
    <section>
      <h1 className="text-center mt-4 Heading ">Get Your Favourite Cakes </h1>
      <div className="p-1 row mt-4 ">
        <div className="col-lg-4 col-md-6 col-sm-6 ">
          <div className="card shadow  mb-5 bg-body rounded">
            <img className="img-fluid card-img-top card-image" src={img1} />
            <div className="card-body p-1 m-3">
              <h1 className="card-heading text-center">Birthday Cakes</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 ">
          <div className="card shadow  mb-5 bg-body rounded">
            <img className="img-fluid card-img-top card-image" src={img1} />
            <div className="card-body p-1 m-3">
              <h1 className="card-heading text-center">Festival Cakes</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 ">
          <div className="card shadow  mb-5 bg-body rounded">
            <img className="img-fluid card-img-top card-image" src={img1} />
            <div className="card-body p-1 m-3">
              <h1 className="card-heading text-center">BestSellers</h1>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CakesSection;
