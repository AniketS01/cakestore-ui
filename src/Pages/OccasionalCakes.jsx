import React from 'react'
import { TrashFill,BagPlusFill } from "react-bootstrap-icons";
import img from '.././components/img/cakeshow3.jpg'
const OccasionalCakes = () => {
    return (
        <>
        <div>
            <h1 className="text-center mt-3 m-4" style={{backgroundColor:"#C3404E",color:"white",fontFamily:"'Hurricane', cursive"
}}>Occasional Cakes</h1>
        </div>
                  
              
            <div className="row container ">
              <div className="col-lg-3 col-md-6 col-sm-6 ">
                <div className="card shadow  mb-5 bg-body rounded">
                  <img className="img-fluid card-img-top card-image" src={img} />
        
                  <div className="card-body p-1">
                    <h1 className="card-heading">Black Forest</h1>
                    <p className="card-text">Nice cake for birthday's</p>
                    <div
                      className="card-text d-flex justify-content-between align-items-center"
                      style={{ fontWeight: 600 }}
                    >
                      Rs 200/-
                      <button className="btn btn-sm btn-outline-danger">Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
    )
}

export default OccasionalCakes
