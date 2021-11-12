import React from "react";
import { Cart, Person, Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  d-flex ">
      <div className="container-fluid">
        
        <NavLink className="navbar-brand" to="/" style={{color:'white'}}>
          CakeShop
        </NavLink>
        
        
        <form className="d-flex ">
          <input
            className="form-control serach-area me-1"
            type="Search"
            placeholder="Search"
            aria-label="Search"
          />
          <span
            className="d-flex justify-content-center
            align-items-center "
            style={{ cursor: "pointer" }}
          >
            <Search style={{fontSize:20,fontWeight:600}} />
          </span> 
        </form>
      
        <div className="d-flex" id="">
          <ul className=" d-flex ">
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                to="/"
                style={{ fontWeight: 400 ,cursor:"pointer"}}
              >
                <div className="">
                  <span
                    className="user-dropdown"
                    
                  >
                    <Person style={{fontSize:20,fontWeight:600}}/>
                  </span>
                  
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ fontWeight: 400 }}
              >
                <div class="">
                  <span
                    className="user-dropdown"
                    
                  >
                    <Cart style={{fontSize:20, fontWeight:600}}/>
                  </span>
                  
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
