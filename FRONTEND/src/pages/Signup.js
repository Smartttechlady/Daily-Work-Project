import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaEye, FaEyeSlash, } from 'react-icons/fa6'
import { Form } from 'react-bootstrap'
import { FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";

import './Style.css'


function Signup() {

  const hire = window.location.href.split('=')[1]

  let navigate = useNavigate()

  function handleSignup(e) {
    e.preventDefault()
    let form = new FormData(e.currentTarget)  
    form.append("hiring", hire)

    axios.post("http://localhost:8000/signup/", form)
      .then((response) => {
        alert("account created successfully")

        navigate("/login") 

      })
      .catch((error) => {
        for (let key in error.response.data) {
          alert(`${ key } ${ error.response.data[key] }`);
        }
       
        
       ;
        
      })

  }


  const [passwordVisible, setPasswordVisible] = useState(false);
  const [terms, setterms] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const [formData2, setFormData2] = useState({

    profilePhoto: null,

  });



  const handlePhotoUpload = (e) => {
    setFormData2({
      ...formData2,
      profilePhoto: e.target.files[0]
    });
  };






  return (
    <div>

      <div className='container signup-top'>
        <img className='img-fluid signup-img' src={("./..//images/signup image.svg")} alt="" />
        <button className="btn btn-link text-dark back-btn1" onClick={() => window.history.back()}>Back</button>
      </div>

      <form onSubmit={handleSignup}>
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
              <input type="text" className="form-control mb-3" name='first_name' placeholder="First Name" />
            </div>
            <div className="col-12 col-md-5">
              <input type="text" className="form-control mb-3" name='last_name' placeholder="Last Name" />
            </div>
            <div className="col-12 col-md-10">
              <input type="email" className="form-control mb-3" name='email' placeholder="Email Address" />
            </div>
            <div className="col-12 col-md-10">
              <div className="input-group mb-3">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="form-control"
                  name='password'
                  placeholder="Password"
                />

                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>

                <div className="col-12 col-md-10">
                  <input type="text" className="form-control mb-3" name='nin' placeholder="Enter NIN" />
                </div>

                <Form.Group controlId="profilePhoto" className="mb-3 mt-5">
                  <Form.Label>Upload Photo</Form.Label>
                  <Form.Control type="file" name='photo' onChange={handlePhotoUpload} required />
                </Form.Group>


              </div>
            </div>

            <div className="col-12 col-md-10">
              <input type="text" className="form-control mb-3" name='address' placeholder="State Of Residence" />
            </div>

            <div className="col-12 col-md-10">
              <input type="text" className="form-control mb-3" name='phone_number' placeholder="Phone Number" />
            </div>

            <div className="col-12 col-md-10">
              <input type="text" className="form-control mb-3" name='about' placeholder="How did you hear about us?" />
            </div>
          </div>

          <div class="legal-terms">
            <input onChange={() => setterms(!terms)} type="checkbox" />
            <label > I accept the <a href="/terms-conditions">Terms and Condition</a></label>
          </div>


          <div className="row justify-content-center mt-4 ">
            <div className="col-12 col-md-10 signupbtns ">
             {
              terms &&
              <button className="btn btn-success btn-block signup-btn" type='submit'>Create Account</button>
             }

            </div>
            <div className="col-12 mt-3">
              <p>Already have an account? <a href="/login" className="text-success ">Login Here</a></p>
            </div>
          </div>
        </div>


      </form>


    </div>
  )
}

export default Signup