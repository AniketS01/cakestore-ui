import React from "react";
import { TrashFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import img1 from "../img/cakeshow1.jpg";
import "./cakesection.css";
const CakesSection = ({ img, name, description, price }) => {
  return (
    <section>
      <h1 className="text-center mt-4 Heading " style={{fontWeight:600}}>Get Your Favourite Cakes </h1>
      <div className="p-1 row mt-4 ">
        <div className="col-lg-4 col-md-6 col-sm-6 ">
          <div className="card shadow  mb-5 bg-body rounded">
            <img className="img-fluid card-img-top card-image" src={img1} />
            <div className="card-body p-1 m-3 text-center">
              <button className="btn btn-danger ">
              <NavLink style={{color:"white"}} to="/BestSellers">BestSellers</NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 ">
          <div className="card shadow  mb-5 bg-body rounded">
            <img className="img-fluid card-img-top card-image" src={img1} />
            <div className="card-body p-1 m-3 text-center">
              <button className="btn btn-danger ">
                <NavLink style={{color:"white"}} to="/occasionalcakes">Occasional Cakes</NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 ">
          <div className="card shadow  mb-5 bg-body rounded">
            <img className="img-fluid card-img-top card-image" src={img1} />
            <div className="card-body p-1 m-3 text-center">
              <button className="btn btn-danger">
              <NavLink style={{color:"white"}} to="/Birthdaycakes">Birthday Cakes</NavLink>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CakesSection;
