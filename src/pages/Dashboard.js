import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Dropdown, Form, Badge } from 'react-bootstrap';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { PiChatDotsFill } from "react-icons/pi";
import { ChatDots } from 'react-bootstrap-icons';
import './Style.css'



function Dashboard() {

  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [totalEarnings, setTotalEarnings] = useState(205000);
  const [currentWallet, setCurrentWallet] = useState(45000);
  const [totalServices, setTotalServices] = useState(34);
  const [servicesInProgress, setServicesInProgress] = useState(2);

  const handleLocationSelect = (province) => {
    setLocation(province);
  };

  const handleSearch = () => {
    console.log(`Searching for services in ${location}`);
  };

  const handleChat = (clientName) => {
    navigate(`/chat/${clientName}`);
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
        <Row>
          <Col md={3} className="sidebar dashboard-sidebar">
            <img src={("./..//images/Photo.png")} alt="Profile" className="img-fluid rounded-circle dashboard-photo " />
            <div className="profile-section text-left mt-4 dashboard-text">
              <h4>Fisayo Omotosho</h4>
              <p>fisayo.omotosho@gmail.com</p>
              <p> +234 8078654331 </p>
              <p>Lesson Teacher | Omole Phase 1</p>
             
            </div>

            <nav className="nav flex-column mt-5">
            <NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
            <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
            <NavLink to="/clients" className="nav-link" activeClassName="active">Clients</NavLink>
            <NavLink to="/settings" className="nav-link" activeClassName="active">Settings</NavLink>
            <NavLink to="/logout" className="nav-link" activeClassName="active">Logout</NavLink>
            </nav>
            <div className="contact-section text-left contact-text">
              <p>Having trouble?</p>

              <span>
                <img className='dashboard-logo text-left' src={("./..//images/Daily work logo 1a.svg")} alt="" />
                <Button variant="link">  Contact Us </Button>
              </span>
            </div>

          </Col>
          <Col md={9} className="main-content">
            <Row className="mt-3">
              <Col md={6}>
                <Form.Control type="text" placeholder="Search for service" />
              </Col>
              <Col md={3}>
                <Dropdown onSelect={handleLocationSelect}>
                  <Dropdown.Toggle className='location-btn' variant="success" id="dropdown-basic">
                    Choose location
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Ikeja">Ikeja</Dropdown.Item>
                    <Dropdown.Item eventKey="Yaba">Yaba</Dropdown.Item>
                    <Dropdown.Item eventKey="Lekki">Lekki</Dropdown.Item>
                    <Dropdown.Item eventKey="Surulere">Surulere</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={1}>
                <Button className='dashboard-icon' variant="success" onClick={handleSearch}><FaSearch /></Button>
              </Col>


              

              <Col className='bell-icon' md={1}>
                <Button variant="link" onClick={handleIconClick} className="position-relative">
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





            </Row>
            <Row className="mt-4">
              <Col>
                <h4>Welcome, Fisayo</h4>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={3} className="text-center">
                <div className="info-box bg-success text-white">
                  <h5>₦{totalEarnings.toLocaleString()}</h5>
                  <p>Total Earnings</p>
                </div>
              </Col>
              <Col md={3} className="text-center">
                <div className="info-box bg-warning text-white">
                  <h5>₦{currentWallet.toLocaleString()}</h5>
                  <p>Current Wallet</p>
                </div>
              </Col>
              <Col md={3} className="text-center">
                <div className="info-box bg-danger text-white">
                  <h5>{totalServices}</h5>
                  <p>Total Services</p>
                </div>
              </Col>
              <Col md={3} className="text-center">
                <div className="info-box bg-primary text-white">
                  <h5>{servicesInProgress}</h5>
                  <p>Services in Progress</p>
                </div>
              </Col>
            </Row>




            <Row className="mt-5">

              <Col>
              <div className='d-flex justify-content-between align-items-center'>
              <h5>Latest Clients</h5>
              <Link>See all</Link>

              </div>
              
                <div className="clients-section">
                  <div className="client-item d-flex justify-content-between align-items-center">
                    <div className='mt-3'>
                      <strong>  <img src={("./..//images/Williams.png")} alt="Profile" className="img-fluid rounded-circle client-img" /> Williams</strong> - Jamb Preparation
                      <p className="text-danger client-text ">Service in progress</p>
                    </div>
                    <Button variant="outline-success" onClick={() => handleChat('Williams')}>Chat</Button>
                  </div>
                  <div className="client-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong> <img src={("./..//images/Vanessa.png")} alt="Profile" className="img-fluid rounded-circle client-img" />  Vanessa</strong> - Weac Lesson
                      <p className="text-success client-text ">Completed</p>
                    </div>
                    <Button variant="outline-success" onClick={() => handleChat('Vanessa')}>Chat</Button>
                  </div>
                  <div className="client-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong> <img src={("./..//images/Davis.png")} alt="Profile" className="img-fluid rounded-circle client-img" /> Davis</strong> - Math Competition
                      <p className="text-danger client-text">Service in progress</p>
                    </div>
                    <Button variant="outline-success" onClick={() => handleChat('Davis')}>Chat</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Dashboard
