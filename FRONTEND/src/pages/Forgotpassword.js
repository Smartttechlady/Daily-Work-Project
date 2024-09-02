import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Style.css';


function Forgotpassword() {

    const handleContinue = () => {
        // Simulate sending a password reset email
        alert('A link to reset your password has been sent to your email.');
        // In a real application, this would send the email and then redirect to an appropriate page.
    };

    const handleBackToHome = () => {
        // Simulate redirecting to the home page
        alert('Redirecting to the home page.');
        // In a real application, this would redirect to the home page.
    };


    return (
        <div>
            <div className="forgot-password-container">
                <div className="banner">
                    <img src={("./..//images/signup image.svg")}  alt="Banner" className="banner-image" />
                </div>
                <div className="form-container forgotpassword">
                    <img src={("./..//images/Daily work logo 3.svg")} alt="Daily Work" className="logo" />
                    <h2 className="text-center">Forgot Your Password?</h2>
                    <p className="text-center">Enter your email address and we will send you instructions to reset your password.</p>
                    <Form className="password-reset-form">
                        <Form.Group controlId="formEmail">
                            <Form.Label>
                                <h6 className='' >Email Address</h6>
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Button variant="success" onClick={handleContinue} className="w-100">
                            Continue
                        </Button>
                    </Form>
                    <p className="text-center mt-3">
                        <a href="/" onClick={handleBackToHome}>Back to Home</a>
                    </p>
                </div>
            </div>
        </div>



    )
}

export default Forgotpassword