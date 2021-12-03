import React from "react";
import { useRef } from "react";
import "./payment.css";
import { payment } from "../payment/Payment";
import { useParams } from "react-router";

const PaymetPage = () => {
  const NameRef = useRef();
  const EmailRef = useRef();
  const PhoneRef = useRef();

  const {cake, price} = useParams()

  return (
    <section className="paymentsection">
      <div className="container shadow bg-body rounded p-5">
        <h1 className="text-center mt-4">Enter your Information for Invoice</h1>
        {console.log(cake)}
        <div class="mb-5 row mt-4">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10 ">
            <input type="text" class="form-control" ref={NameRef} />
          </div>
        </div>

        <div class="mb-5 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" ref={EmailRef} />
          </div>
        </div>

        <div class="mb-5 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Phone Number
          </label>
          <div class="col-sm-10">
            <input type="phonenumber" class="form-control" ref={PhoneRef} />
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center">
          <button
            className="btn btn-danger m-4"
            onClick={() => {
              payment(
                price,
                cake,
                NameRef.current.value,
                EmailRef.current.value,
                PhoneRef.current.value,
                false
              );
            }}
          >
            Pay During Pickup
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              payment(
                price,
                cake,
                NameRef.current.value,
                EmailRef.current.value,
                PhoneRef.current.value,
                true
              );
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymetPage;
