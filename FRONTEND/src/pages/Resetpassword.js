import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Style.css';

function Resetpassword() {

    const [newPassword, setNewPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowRePassword = () => {
        setShowRePassword(!showRePassword);
    };

    const isPasswordValid = () => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
        return regex.test(newPassword);
    };

    const handleResetPassword = () => {
        if (isPasswordValid() && newPassword === reEnterPassword) {
            alert('Password reset successfully!');
         
        } else {
            alert('Password does not meet the criteria or passwords do not match.');
        }
    };

    const handleBackToHome = () => {
      
        alert('Redirecting to the home page.');
  
    };





  return (
    <div>
         <div className="change-password-container">
            <div className="banner">
                <img src={("./..//images/signup image.svg")}  alt="Banner" className="banner-image" />
            </div>
            <div className="form-container">
                <img src={("./..//images/Daily work logo 3.svg")} alt="Daily Work" className="logo" />
                <h2 className="text-center">Change Your Password?</h2>
                <p className="text-center">Enter a new password below to change your password.</p>
                <Form className="password-reset-form">
                    <Form.Group controlId="formNewPassword">
                        <Form.Label>
                            <h6>New Password</h6>
                        </Form.Label>
                        <div className="password-wrapper">
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <span className="toggle-password" onClick={toggleShowPassword}>
                                {showPassword ? '🙈' : '👁️'}
                            </span>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formReEnterPassword">
                        <Form.Label>
                            <h6>Re-enter New Password</h6>
                        </Form.Label>
                        <div className="password-wrapper">
                            <Form.Control
                                type={showRePassword ? 'text' : 'password'}
                                placeholder="Re-enter new password"
                                value={reEnterPassword}
                                onChange={(e) => setReEnterPassword(e.target.value)}
                                required
                            />
                            <span className="toggle-password" onClick={toggleShowRePassword}>
                                {showRePassword ? '🙈' : '👁️'}
                            </span>
                        </div>
                    </Form.Group>
                    <div className="password-requirements">
                        <p>Your Password must contain:</p>
                        <ul>
                            <li>At least 10 characters</li>
                            <li>A capital letter</li>
                            <li>Small letters</li>
                            <li>And a symbol</li>
                        </ul>
                    </div>
                    <Button
                        variant="success"
                        onClick={handleResetPassword}
                        className="w-100"
                        disabled={!isPasswordValid()}
                    >
                        Reset Password
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

export default Resetpassword