import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  d-flex ">
      <div className="container-fluid d-flex justify-content-center align-items-center ">
        
        <NavLink className="navbar-brand" to="/" style={{color:'white'}}>
          VIRASHMANI &nbsp; CAKES
        </NavLink>
        
    
  
      </div>
    </nav>
  );
};

export default Navbar;
