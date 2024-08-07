import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaEye, FaEyeSlash, } from 'react-icons/fa6'
import { FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";

import './Style.css'


function Signup() {
 

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>

      <div className='container signup-top'>
        <img className='img-fluid signup-img' src={("./..//images/signup image.svg")} alt="" />
        <button className="btn btn-link text-dark back-btn1" onClick={() => window.history.back()}>Back</button>
      </div>

      <div className="container text-center mt-1 signup-form">

        <img src={("./..//images/Daily work logo 3.svg")} alt="Daily Work" className="img-fluid my-3 signuplogo" /> 
        <h2>Register here to create an account </h2>
        <div className="row justify-content-center mt-3">
          <div className="col-12 col-md-5">
            <button className="btn btn-outline-dark btn-block mb-3">
              <FaApple className="apple-icon" /> Continue with Apple
            </button>
          </div>
          <div className="col-12 col-md-5">
            <button className="btn btn-outline-primary btn-block mb-3">
              <FcGoogle className="google-icon" /> Continue with Google
            </button>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-12">
            <div className="or-divider"><span>Or</span></div>
          </div>
        </div>
        <div className="row justify-content-center mt-3 gap-4 signup-input ">
          <div className="col-12 col-md-5">
            <input type="text" className="form-control mb-3" placeholder="First Name" />
          </div>
          <div className="col-12 col-md-5">
            <input type="text" className="form-control mb-3" placeholder="Last Name" />
          </div>
          <div className="col-12 col-md-10">
            <input type="email" className="form-control mb-3" placeholder="Email Address" />
          </div>
          <div className="col-12 col-md-10">
            <div className="input-group mb-3">
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEye/> : <FaEyeSlash/>}
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-10">
            <input type="text" className="form-control mb-3" placeholder="State Of Residence" />
          </div>
          <div className="col-12 col-md-10">
            <input type="text" className="form-control mb-3" placeholder="Phone Number" />
          </div>
          <div className="col-12 col-md-10">
            <input type="text" className="form-control mb-3" placeholder="How did you hear about us?" />
          </div>
        </div>
        <div className="row justify-content-center mt-4 ">
          <div className="col-12 col-md-10 signupbtns ">
            <button className="btn btn-success btn-block signup-btn">Create Account</button>

          </div>
          <div className="col-12 mt-3">
            <p>Already have an account? <a href="/login" className="text-success ">Login Here</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup