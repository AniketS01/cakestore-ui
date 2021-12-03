import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../firebase";
import { payment } from "../payment/Payment";
import "./cards.css";

const BestSellers = () => {
  
  const [DesignerCakes, setDesignerCakes] = useState([]);
  
  useEffect(() => {
    db.collection("Cakes")
      .get()
      .then((snapshot) => {
        const Dcake = [];
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            img_id: doc.data().clourinary_id,
            name: doc.data().name,
            image: doc.data().image,
            category: doc.data().Category,
            description: doc.data().description,
            price: doc.data().price,
          };
          if (data.category === "Designer cake") {
            Dcake.push(data);
          }
        });
        setDesignerCakes(Dcake);
      });
    console.log(DesignerCakes);
  }, []);

  const downloadPDF = async () => {
    const { data } = await axios.get("https://virashmani.herokuapp.com/pdf");
    var a = document.createElement("a"); //Create <a>
    a.href = "data:application/pdf;base64," + data; //Image Base64 Goes here
    a.download = "invoice.pdf"; //File name Here
    a.click();
  };

  return (
    <>
      <div>
        <h3
          className='text-center mt-3 m-4'
          style={{
            fontWeight:600,
            borderBottom:"1px solid",
            fontFamily: "'urbanist', sans-serif",
          }}
        >
          B E S T &nbsp; S E L L E R S
        </h3>
      </div>

      <div className='row container '>
        {DesignerCakes.map((cake) => (
          <div className='col-lg-3 col-md-6 col-sm-6 '>
            <div className='card shadow  mb-5 bg-body rounded'>
              <img
                className='img-fluid card-img-top cardsize card-image '
                src={cake.image}
              />

              <div className='card-body p-1'>
                <h1 className='card-heading'>{cake.name}</h1>
                <p className='card-text'>{cake.description}</p>
                <div
                  className='card-text d-flex justify-content-between align-items-center '
                  style={{ fontWeight: 600 }}
                >
                  Rs {cake.price}/-
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    <NavLink to ={`/paymentpage/${cake.name}/${cake.price}`} style={{color:"white"}}>Buy</NavLink>
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestSellers;
