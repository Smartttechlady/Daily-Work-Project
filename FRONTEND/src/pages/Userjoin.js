import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ClientIcon from './../images/ClientIcon.svg'
import VendorIcon from './../images/VendorIcon.svg'
import './Style.css'

function Userjoin() {

  const [isClient, setIsClient] = useState(true);

  return (
    <div className="container text-center ">

      <div className='cstop'>
        <img className='img-fluid signup-img' src={("./..//images/signup image.svg")} alt="" />
        <button className="btn btn-link text-dark back-btn" onClick={() => window.history.back()}>Back</button>
      </div>


      <div className='logo-text'>
        <img src={("./..//images/Daily work logo 3.svg")} alt="Daily Work" className=" logo-img img-fluid my-3" />
        <h2>Join as a Client or Service Provider</h2>
      </div>



      <div className="row justify-content-center mt-3 apply-heading" >
        <div className="col-12 col-md-5">

          <div
            // className={`option-box ${isClient ? 'active' : ''}`}
            // onClick={() => setIsClient(true)}
            className='option-box'
          >
            <Link to={"/signup?hiring=true"}>
              <div className="icon-container">
                <img className='clienticon' src={("./..//images/client icon.svg")} alt="" />
                {/* <i className="fas fa-user-tie fa-2x"></i> */}
              </div>
              <p>I’m a client, hiring for a service provider</p>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div
            // className={`option-box ${!isClient ? 'active' : ''}`}
            // onClick={() => setIsClient(false)}
            className='option-box'
          >
            <Link to={"/signup?hiring=false"}>
              <div className="icon-container">
                <img className='vendoricon' src={("./..//images/vendor icon.svg")} alt="" />
                {/* <i className="fas fa-tools fa-2x"></i> */}
              </div>
              <p>I’m a vendor, looking to render a service</p>

            </Link>

          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-10">
          <button className="btn btn-success btn-block">
            {isClient ? 'Apply as a Client' : 'Apply as a Vendor'}
          </button>
        </div>
        <div className="col-12 mt-3">
          <p>Already have an account? <a href="/login" className="text-success">Login Here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Userjoin