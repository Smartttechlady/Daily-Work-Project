import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaEye, FaEyeSlash, } from 'react-icons/fa6'
import { FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";


import './Style.css'


function Login() {

  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    let form = new FormData(e.currentTarget)



    axios.post("http://localhost:8000/login/", form)
      .then((response) => {
        alert("login successful")

        navigate("/")

      })

      .catch((error) => {
        for (let key in error.response.data) {
          alert(`${key} ${error.response.data[key]}`);
        }

        // console.log(error)
      })

  }


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

      <form onSubmit={handleLogin}>
        <div className="container text-center mt-1 signup-form">

          <img src={("./..//images/Daily work logo 3.svg")} alt="Daily Work" className="img-fluid my-3 signuplogo" />
          <h2>Welcome Back, Please Login. </h2>
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
              </div>
            </div>
            <p><Link to={""} >Forgot Password?</Link></p>


          </div>
          <div className="row justify-content-center mt-4 ">
            <div className="col-12 col-md-10 signupbtns ">
              <button type='sumbit' className="btn btn-success btn-block signup-btn">Login</button>

            </div>
            <div className="col-12 mt-3">
              <p>Don't have an account? <a href="/signup" className="text-success ">Signup Here</a></p>
            </div>
          </div>
        </div>

      </form>


    </div>
  )
}

export default Login