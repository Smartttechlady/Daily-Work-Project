import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
  return (

    <div>

      <nav
        class="navbar navbar-expand-sm navbar-light bg-light"
      >
        <div class="container">
          <Link class="navbar-brand" href="#"><img className='logo' src= {("./..//images/Daily work logo 3.svg")}  alt="" /></Link>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" href="#" aria-current="page"
                  >Why Daily Work
                  <span class="visually-hidden">(current)</span></Link
                >
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Find a Vendor</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownId"
                >
                  <a class="dropdown-item" href="#"
                    >Action 1</a
                  >
                  <a class="dropdown-item" href="#"
                    >Action 2</a
                  >
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Find a Service</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownId"
                >
                  <a class="dropdown-item" href="#"
                    >Action 1</a
                  >
                  <a class="dropdown-item" href="#"
                    >Action 2</a
                  >
                </div>
              </li>
            


            <li className="nav-item btn-signin">
                            <a className="nav-link" href="#">Sign in</a>
                        </li>
                    </ul>

                    <button
                        className="btn my-2 my-sm-0 fw-bold btn-join "
                        type="submit"
                    >
                        Join
                    </button>
          </div>
        </div>
      </nav>
      
 

    </div>
  )
}

export default Navbar







