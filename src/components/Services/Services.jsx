import React from 'react'
import img1 from '../img/piece-of-cake.png'
import img2 from '../img/fast-delivery.png'
import img3 from '../img/contact.png'
import './services.css'


const Services = () => {
    return (
        <section className="services mt-2">
            <div>
                <div className="d-flex justify-content-around align-items-center">
                    <span className="d-flex flex-column justify-content-around align-items-center">
                        <img src={img1} alt=""  className="icons"/>
                        <p style={{color:"white"}}>Cakes</p>
                    </span>
                    <span className="d-flex flex-column justify-content-around align-items-center">
                        <img src={img2} alt=""  className="icons"/>
                        <p style={{color:"white"}}>Takeaway</p>
                    </span>
                    <span className="d-flex flex-column justify-content-around align-items-center">
                        <img src={img3} alt=""  className="icons"/>
                        <p style={{color:"white"}}>Contact Anytime</p>
                    </span>

                    
                </div>
            </div>
                
        </section>
    )
}

export default Services
