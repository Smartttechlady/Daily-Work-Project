import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
  return (
    <div>

      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >
        <div className="container">
          <Link className="navbar-brand" href="#"><img className='logo' src={("./..//images/Daily work logo 3.svg")} alt="" /></Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to={"/about"}  className="nav-link active" href="" aria-current="page"
                >Why Daily Work
                  <span className="visually-hidden">(current)</span> </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false" >Find a Vendor</a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownId">

                  <a className="dropdown-item" href="/housekeeping">Housekeeping</a>
                  <a className="dropdown-item" href="/installation-repairs">Installation & Repairs</a>
                  <a className="dropdown-item" href="/health-fitness">Health & Fitness</a>
                  <a className="dropdown-item" href="/education">Education</a>
                  <a className="dropdown-item" href="/transport">Transport</a>
                  <a className="dropdown-item" href="/beauty">Beauty</a>
                  <a className="dropdown-item" href="/real-estate">Real Estate</a>
                  <a className="dropdown-item" href="/catering">Catering</a>
                  <a className="dropdown-item" href="/event-entertainment"> Event & Entertainment</a>
                  <a className="dropdown-item" href="/agriculture"> Agriculture</a>
                  <a className="dropdown-item" href="/marketing">Marketing</a>
                  <a className="dropdown-item" href="/technology">Technology</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">Find a Service</a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/housekeeping">Housekeeping</a>
                  <a className="dropdown-item" href="/installation-repairs">Installation & Repairs</a>
                  <a className="dropdown-item" href="/health-fitness">Health & Fitness</a>
                  <a className="dropdown-item" href="/education">Education</a>
                  <a className="dropdown-item" href="/transport">Transport</a>
                  <a className="dropdown-item" href="/beauty">Beauty</a>
                  <a className="dropdown-item" href="/real-estate">Real Estate</a>
                  <a className="dropdown-item" href="/catering">Catering</a>
                  <a className="dropdown-item" href="/event-entertainment"> Event & Entertainment</a>
                  <a className="dropdown-item" href="/agriculture"> Agriculture</a>
                  <a className="dropdown-item" href="/marketing">Marketing</a>
                  <a className="dropdown-item" href="/technology">Technology</a>
                </div>
              </li>



              <li className="nav-item btn-signin">
                <Link to={"/login"} className="nav-link" href="#">Sign in</Link>
              </li>
            </ul>

        
              <Link to={"/signup"}  className="btn my-2 my-sm-0 fw-bold btn-join" type="submit"> Join </Link>
           

            <button
              className="btn my-2 my-sm-0 fw-bold btn-post "
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </nav>



    </div>


  )
}

export default Navbar







