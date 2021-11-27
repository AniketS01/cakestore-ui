import React, { useState, useEffect } from "react";
import { TrashFill, BagPlusFill } from "react-bootstrap-icons";
import img from ".././components/img/cakeshow3.jpg";
import { db } from "../firebase";
import { payment } from "../payment/Payment";
import "./cards.css";
const OccasionalCakes = () => {
  const [festivalCake, setFestivalCake] = useState([]);

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
          if (data.category === "Festival cake") {
            Dcake.push(data);
          }
        });
        setFestivalCake(Dcake);
      });
  }, []);

  return (
    <>
      <div>
        <h1
          className='text-center mt-3 m-4'
          style={{
            backgroundColor: "#C3404E",
            color: "white",
            fontFamily: "'Hurricane', cursive",
          }}
        >
          Occasional Cakes
        </h1>
      </div>

      <div className='row container '>
        {festivalCake.map((cake) => (
          <div className='col-lg-3 col-md-6 col-sm-6 '>
            <div className='card shadow  mb-5 bg-body rounded'>
              <img
                className='img-fluid card-img-top cardsize card-image'
                src={cake.image}
              />

              <div className='card-body p-1'>
                <h1 className='card-heading'>{cake.name}</h1>
                <p className='card-text'>{cake.description}</p>
                <div
                  className='card-text d-flex justify-content-between align-items-center'
                  style={{ fontWeight: 600 }}
                >
                  Rs {cake.price}/-
                  <button
                    className='btn btn-sm btn-outline-danger'
                    onClick={() => payment(cake.price, cake.name)}
                  >
                    Buy
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

export default OccasionalCakes;
