import React from 'react'
import './Style.css'



function Notfound() {
  return (

    <div className=' container'>

    <div className=" vh-100 d-flex flex-column justify-content-center align-items-center text-left">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>Page Not Found</h2>
          <p>We are sorry, the page you requested could not be found. Please go back to the homepage.</p>
          <a href="/" className="btn btn-success">Go Back Home</a>
        </div>
        <div className="col-md-6">
          <img src= {("./..//images/404.svg")} alt="404 Not Found" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Notfound