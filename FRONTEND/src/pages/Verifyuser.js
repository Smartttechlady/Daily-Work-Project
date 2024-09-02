import React from 'react'





function Verifyuser() {




  return (
    <div>
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <div className="mb-4">
        <img 
          src={("./..//images/Daily work logo 3.svg")}
          alt="Logo" 
          style={{ height: '50px' }}
        />
      </div>
      <div className="mb-4">
        <img 
          src={("./..//images/verify-img.png")}
          alt="Verification Success" 
          className="img-fluid" 
          style={{ maxWidth: '300px' }} 
        />
      </div>
      <div className="mb-3">
        <h4 className="text-success">Yippee!!! Your account has been successfully verified</h4>
      </div>
      <div>
        <a href="/dashboard" className="btn btn-success btn-lg">Go to Dashboard</a>
      </div>
    </div>

    </div>
  )
}






export default Verifyuser
