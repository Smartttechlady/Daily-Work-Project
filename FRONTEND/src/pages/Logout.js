import React from 'react';
import { Button } from 'react-bootstrap';
import './Style.css';



function Logout({ userEmail }) {


    const handleLogout = () => {
        alert('Logging out...');
        window.location.href = 'https://www.yoursite.com/logout'; 
    };

    const handleStay = () => {
        alert('Returning to dashboard...');
        window.location.href = '/clientdashboard'; 
    };




  return (
    <div>
         <div className="logout-container">
            <div className="banner">
                <img src={("./..//images/signup image.svg")} alt="Banner" className="banner-image" />
            </div>
            <div className="logout-content">
                <img src={("./..//images/Daily work logo 3.svg")} alt="Daily Work" className="logo" />
                <h2>Logout</h2>
                <p>Hi {userEmail},</p>
                <p>Are you sure you want to log out from Daily Work?</p>
                <div className="button-group">
                    <Button variant="success" onClick={handleLogout} className="btn-lg">Yes</Button>
                    <Button variant="outline-success" onClick={handleStay} className="btn-lg">No</Button>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Logout