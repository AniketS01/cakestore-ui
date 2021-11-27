import React, { useEffect, useState ,useRef} from "react";
import { TrashFill, BagPlusFill } from "react-bootstrap-icons";
import img from ".././components/img/cakeshow2.jpg";
import { db } from "../firebase";
import { payment } from "../payment/Payment";
import "./cards.css";
const BirthdayCake = () => {
  const [BirthdayCake, setBirthdayCake] = useState([]);
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()

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
          if (data.category === "Birthday Cake") {
            Dcake.push(data);
          }
        });
        setBirthdayCake(Dcake);
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
          Birthday Cakes
        </h1>
      </div>

      <div className='row container '>
        {BirthdayCake.map((cake) => (
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
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Buy
                  </button>
                  {/* popup */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Enter Information for payment invoice
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                          <div className="mb-3">
                              <label
                                for="exampleInputPassword1"
                                className="form-label"
                              >
                               Enter your name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                ref={nameRef}
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                for="exampleInputEmail1"
                                className="form-label"
                              >
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                ref={emailRef}
                              />
                              <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                              </div>
                            </div>
                            <div className="mb-3">
                              <label
                                for="exampleInputPassword1"
                                className="form-label"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                ref={phoneRef}
                              />
                            </div>
                            
                           
                          </form>
                        </div>
                        <div className="modal-footer">
                          
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => payment(cake.price, cake.name)}
                          >
                            Make Payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BirthdayCake;
