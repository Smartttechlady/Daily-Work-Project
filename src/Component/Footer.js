import React from 'react'
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaSquareInstagram } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-section '>
      <footer className="bg-dark text-light pt-5 ">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>Housekeeping</li>
              <li>Education</li>
              <li>Engineering & Support</li>
              <li>Transport</li>
              <li>Health & Fitness</li>
              <li>Fashion & Beauty</li>
              <li>Real Estate</li>
              <li>Construction</li>
              <li>Agriculture</li>
              <li>Catering</li>
              <li>Marketing</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Complaints</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Blog</li>
              <li>Press and Media</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h5>Join Us As</h5>
            <button className="btn footer-btn1 my-2">Service Provider</button>
            <button className="btn footer-btn2 ">Customer</button>
          </div>
        </div>
        <div className="row justify-content-center my-5 newsletter-container ">
          <div className="col-md-6">
            <div className="newsletter p-4 text-center bg-light rounded">
          
              
              <h5>

                <span><button className='footerbtn-line' ></button></span>
                    Newsletter
                 <span><button className='footerbtn-line' ></button></span>

              </h5>
            
              <p>Subscribe to receive our latest News and Update</p>
              <input type="email" className="form-control my-2" placeholder="Email Address" />
              <button className="btn btn-warning w-100">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="row justify-content-between align-items-center below-footer">
          <hr />
          <div className="col-md-6">
          
              <p> 
                <span><a class="navbar-brand" href="#"><img className='footer-logo ' src= {("./..//images/Daily work logo 1a.svg")}  alt="" /></a></span>&copy; 
                Copyright Daily Work 2024. All rights reserved
                </p>
          </div>
          <div className="col-md-6 text-md-end">
            <span className="me-2">Follow us:</span>
            <a href="#" className="me-2"><FaFacebookSquare /></a>
            <a href="#" className="me-2"><FaSquareXTwitter /></a>
            <a href="#" className="me-2"><FaSquareInstagram /></a>
            <a href="#"><ImLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer