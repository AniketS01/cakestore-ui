import React from "react";
import "./contact.css";
import { Map, Phone,Mailbox } from "react-bootstrap-icons";
const Contact = () => {
  return (
    <div>
      <div className="mb-4 container">
        <h1 className="h1-responsive font-weight-bold text-center mt-4 mb-4" style={{fontWeight:600}}>
          Contact us
        </h1>
        
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label for="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label for="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label for="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <a
                className="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                  <i><Map/></i>
                <p style={{color:"black"}} >Nashik, India</p>
              </li>

              <li>
                <i><Phone/></i>
                <p style={{color:"black"}}>+91 7776862518</p>
              </li>

              <li>
                  <i><Mailbox/></i>
                
                <p style={{color:"black"}}>mayurgorane19@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
