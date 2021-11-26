import React from "react";
import { Cart, Person, Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  d-flex ">
      <div className="container-fluid d-flex justify-content-center align-items-center ">
        
        <NavLink className="navbar-brand" to="/" style={{color:'white'}}>
          CakeShop
        </NavLink>
        
    
  
      </div>
    </nav>
  );
};

export default Navbar;
