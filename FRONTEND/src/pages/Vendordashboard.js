import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Dropdown, Form, Badge } from 'react-bootstrap';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { PiChatDotsFill } from "react-icons/pi";
import { ChatDots } from 'react-bootstrap-icons';
import { IoLocation } from "react-icons/io5";
import './Vendordashboard.css';




function Vendordashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };



  const [notifications, setNotifications] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setNotifications(prevNotifications => prevNotifications + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleIconClick = () => {
    alert(`You have ${notifications} new notifications!`);
  };




  const [messages, setMessages] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {



      setMessages(prevMessages => prevMessages + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleThisClick = () => {
    alert(`You have ${messages} new messages!`);

  };





  return (
    <div>
      <Container fluid>
        <Row className="row vh-100">
          {/* Left Sidebar */}
          <Col xs={12} md={2}className=" d-flex flex-column left-sidebar">
            <div className="text-center my-3">
              <img
                src={("./..//images/fisayo.png")}
                alt="Vendor Profile"
                className="rounded-circle vendor-profile-img"
              />
              <div className='profile-text'>
                <h5 className="mt-2">Fisayo Omotosho</h5>

                <div className='profile-text2'>
                  <p>fisayo.omotosho@gmail.com</p>
                  <p>Lesson Teacher</p>
                  <p> <IoLocation className="location" /> Maryland</p>
                </div>
              </div>

            </div>
            <ul className="nav  bg-white flex-column">
              <li className={`nav-item ${activeNav === 'dashboard' ? 'active' : ''}`}>
                <a className="nav-link text-white " href="/vendordashboard" onClick={() => handleNavClick('dashboard')}>
                  <i className="bi bi-speedometer2"></i> Dashboard
                </a>
              </li>
              <li className={`nav-item ${activeNav === 'messages' ? 'active' : ''}`}>
                <a className="nav-link text-white" href="/message2" onClick={() => handleNavClick('messages')}>
                  <i className="bi bi-envelope"></i> Messages
                </a>
              </li>
              <li className={`nav-item ${activeNav === 'invoice' ? 'active' : ''}`}>
                <a className="nav-link text-white" href="/invoice" onClick={() => handleNavClick('invoice')}>
                  <i className="bi bi-file-earmark-text"></i> Invoice
                </a>
              </li>
              <li className={`nav-item ${activeNav === 'profile' ? 'active' : ''}`}>
                <a className="nav-link text-white" href="#profile" onClick={() => handleNavClick('profile')}>
                  <i className="bi bi-person"></i> Profile
                </a>
              </li>
              <li className={`nav-item ${activeNav === 'settings' ? 'active' : ''}`}>
                <a className="nav-link text-white" href="/settings2" onClick={() => handleNavClick('settings')}>
                  <i className="bi bi-gear"></i> Settings
                </a>
              </li>
              <li className={`nav-item ${activeNav === 'logout' ? 'active' : ''}`}>
                <a className="nav-link text-white" href="/logout2" onClick={() => handleNavClick('logout')}>
                  <i className="bi bi-box-arrow-right"></i> Logout
                </a>
              </li>
            </ul>

            <div className="mt-auto mb-3 text-left bottom-text">
              <div className="d-flex flex-column align-items-left">
                <p className=''> Having trouble?</p>
                <span className='bottom-logo'>
                  <img className='dashboard-logo text-left' src={("./..//images/Daily work logo 1a.svg")} alt="" />
                  
                  <Link to={"/contact-us"} >
                <Button  variant="" size="sm" className="contact-btn" >
                  Contact Us
                </Button>
                </Link>
                </span>
              </div>
            </div>
          </Col>

          {/* Main Area */}
          <Col xs={12} md={8} className=" p-0 mt-5">
            <div className="row p-3">
              <div className="col-12d-flex justify-content-between align-items-center ">
                <h2 className="welcome-text">Welcome, Fisayo</h2>
                <div className="input-group my-3 mt-5 ">
                  <input type="text" className="form-control" placeholder="Search category" />
                  <button className="btn btn-success" type="button">
                    <i className="bi bi-search"></i>
                  </button>


                  <div className='d-flex gap-5 bell-notification'>
                    <Col className='bell-icon  ' md={1}>
                      <Button variant="link" onClick={handleIconClick} className="position-relative ">
                        <FaBell size={24} />
                        {notifications > 0 && (
                          <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                            {notifications}
                          </Badge>
                        )}
                      </Button>
                    </Col>

                    <Col md={1}>
                      <Button variant="link" onClick={handleThisClick} className="position-relative">
                        <ChatDots size={24} />
                        {messages > 0 && (
                          <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                            {messages}
                          </Badge>
                        )}
                      </Button>

                    </Col>

                  </div>




                </div>
              </div>
              {/* Cards */}
              <div className="col-12 d-flex justify-content-between mt-5">
                <div className="card p-0 text-center">
                  <div className="card-body-top bg-green">
                    <h3>N205,000</h3>
                  </div>
                  <div className="card-body-bottom bg-light-green">
                    <p>Total Earning</p>
                  </div>
                </div>
                <div className="card p-0 text-center">
                  <div className="card-body-top bg-yellow">
                    <h3>N45,000</h3>
                  </div>
                  <div className="card-body-bottom bg-light-yellow">
                    <p>Current Wallet</p>
                  </div>
                </div>
                <div className="card p-0 text-center">
                  <div className="card-body-top bg-red">
                    <h3>34</h3>
                  </div>
                  <div className="card-body-bottom bg-light-red">
                    <p>Total Services</p>
                  </div>
                </div>
                <div className="card p-0 text-center">
                  <div className="card-body-top bg-blue">
                    <h3>02</h3>
                  </div>
                  <div className="card-body-bottom bg-light-blue">
                    <p>Services in Progress</p>
                  </div>
                </div>
              </div>
              {/* Latest Clients */}
              <div className="col-12 mt-4  ">
                <h5 className='mb-3'>Latest Clients</h5>
                <div className="transaction-headings d-none d-md-flex justify-content-between mt-4 ">
                  <span className="transaction-heading">Date</span>
                  <span className="transaction-heading">Name</span>
                  <span className="transaction-heading">Service Type</span>
                  <span className="transaction-heading">Service Status</span>
                  <span className="transaction-heading">Amount</span>
                  <span className="transaction-heading">Payment Status</span>
                  <span className="transaction-heading">Message</span>
                </div>
                <div className="scrollable-list">
                  <div className="transaction-item">
                    <span className="transaction-date">12 Feb 2024</span>
                    <span className="transaction-name">
                      <img src={("./..//images/Williams Johnson.png")} alt="Client" className="rounded-circle" /> Williams Johnson
                    </span>
                    <span className="transaction-service">Math Lesson</span>
                    <span className="transaction-status text-success">Done</span>
                    <span className="transaction-amount">16,000:00</span>
                    <span className="transaction-payment text-success">Successful</span>
                    <span className="transaction-message"><button className="btn btn-outline-success btn-sm">Chat</button></span>
                  </div>

                  <div className="transaction-item">
                    <span className="transaction-date">12 Feb 2024</span>
                    <span className="transaction-name">
                      <img src={("./..//images/Williams Johnson.png")} alt="Client" className="rounded-circle" /> Williams Johnson
                    </span>
                    <span className="transaction-service">Math Lesson</span>
                    <span className="transaction-status text-success">Done</span>
                    <span className="transaction-amount">16,000:00</span>
                    <span className="transaction-payment text-success">Successful</span>
                    <span className="transaction-message"><button className="btn btn-outline-success btn-sm">Chat</button></span>
                  </div>

                  <div className="transaction-item">
                    <span className="transaction-date">12 Feb 2024</span>
                    <span className="transaction-name">
                      <img src={("./..//images/Williams Johnson.png")} alt="Client" className="rounded-circle" /> Williams Johnson
                    </span>
                    <span className="transaction-service">Math Lesson</span>
                    <span className="transaction-status text-warning">In-progress</span>
                    <span className="transaction-amount">16,000:00</span>
                    <span className="transaction-payment text-success">Successful</span>
                    <span className="transaction-message"><button className="btn btn-outline-success btn-sm">Chat</button></span>
                  </div>

                  <div className="transaction-item">
                    <span className="transaction-date">12 Feb 2024</span>
                    <span className="transaction-name">
                      <img src={("./..//images/Williams Johnson.png")} alt="Client" className="rounded-circle" /> Williams Johnson
                    </span>
                    <span className="transaction-service">Math Lesson</span>
                    <span className="transaction-status text-success"> -- </span>
                    <span className="transaction-amount">20,000:00</span>
                    <span className="transaction-payment text-danger">Unsuccessful</span>
                    <span className="transaction-message"><button className="btn btn-outline-success btn-sm">Chat</button></span>
                  </div>
                  
                </div>
                {/* <a href="#see-all" className="see-all-link">See all</a> */}
              </div>
            </div>
          </Col>

          {/* Right Sidebar */}
          <Col xs={12} md={2}className="  right-sidebar">
            <div className="p-3">
              <h5>Latest Update</h5>
              <div className="update-item mb-3">
                <img src={("./..//images/iphone  ad..png")} alt="Ad" className="img-fluid" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sed augue diam in dis.</p>
              </div>

              <div className="update-item mb-3">
                <img src={("./..//images/AD2.jpg")} alt="Ad" className="img-fluid" />
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sed augue diam in dis.</p>
              </div>

              <h5 className='mt-5'>Services in Demand</h5>
              <div className="scrollable-list">
                <div className="demand-item">
                  <img src={("./..//images/sarah smith.png")} alt="Client" className="rounded-circle" />
                  <p><strong>Sarah Smith</strong> <br />In search for the service of a Plumber at Ogba</p>
                </div>

                <div className="demand-item">
                  <img src={("./..//images/sarah smith.png")} alt="Client" className="rounded-circle" />
                  <p><strong>Sarah Smith</strong> <br />In search for the service of a Plumber at Ogba</p>
                </div>

                <div className="demand-item">
                  <img src={("./..//images/sarah smith.png")} alt="Client" className="rounded-circle" />
                  <p><strong>Sarah Smith</strong> <br />In search for the service of a Plumber at Ogba</p>
                </div>

                <div className="demand-item">
                  <img src={("./..//images/sarah smith.png")} alt="Client" className="rounded-circle" />
                  <p><strong>Sarah Smith</strong> <br />In search for the service of a Plumber at Ogba</p>
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>



  )
}

export default Vendordashboard
