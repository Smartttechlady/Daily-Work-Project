import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Dropdown, Form, Badge, InputGroup, Table } from 'react-bootstrap';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { PiChatDotsFill } from "react-icons/pi";
import { ChatDots } from 'react-bootstrap-icons';
import { IoLocation } from "react-icons/io5";
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import './Invoice.css'; 
import './Vendordashboard.css';




function Invoice() {

    const [activeNav, setActiveNav] = useState('invoice');

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


    const [rows, setRows] = useState([
        { description: 'Description 1', rate: 17300, qty: 1, subtotal: 17300 },
        { description: 'Description 2', rate: 56900, qty: 1, subtotal: 56900 },
        { description: 'Description 3', rate: 56900, qty: 1, subtotal: 56900 }
      ]);
    
      const [vendorID] = useState(`VEND${Math.floor(Math.random() * 1000000)}`);
      const [clientID, setClientID] = useState('');
      const [invoiceNo] = useState(Math.floor(100000 + Math.random() * 900000));
      const [date] = useState(new Date().toLocaleDateString());
    
      const navigate = useNavigate();
    
      const handleAddRow = () => {
        setRows([...rows, { description: '', rate: 0, qty: 0, subtotal: 0 }]);
      };
    
      const handleRemoveRow = (index) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
      };
    
      const handleInputChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
    
        if (field === 'rate' || field === 'qty') {
          newRows[index].subtotal = newRows[index].rate * newRows[index].qty;
        }
    
        setRows(newRows);
      };
    
      const grandTotal = rows.reduce((acc, row) => acc + row.subtotal, 0);
    
      const handleSendInvoice = () => {
       
        alert(`Invoice sent to client ${clientID}`);
        navigate('/client-inbox'); 
      };




  
  


  return (

    <div>

<div className="container-fluid">
        <div className="row vh-100">
          {/* Left Sidebar */}
          <div className="col-md-2  d-flex flex-column left-sidebar">
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
                <a className="nav-link text-white" href="#invoice" onClick={() => handleNavClick('invoice')}>
                  <i className="bi bi-file-earmark-text"></i> Invoice
                </a>
              </li>
              <li className={`nav-item ${activeNav === 'profile' ? 'active' : ''}`}>
                <a className="nav-link text-white" href="#profile" onClick={() => handleNavClick('profile')}>
                  <i className="bi bi-person"></i> Profile
                </a>
              </li>
              <li className={`nav-item ${activeNav === 'settings' ? 'active' : ''}`}>
                <a className="nav-link text-white" href="/Settings2" onClick={() => handleNavClick('settings')}>
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
          </div>

          {/* Main Area */}


          <Col xs={12} md={8} className="mt-4">

      <Row>
        <Col>
          <img src={("./..//images/Daily work logo 3.svg")} alt="Logo" className="img-fluid mb-3" />
        </Col>
      </Row>

      <Row>
        <Col md={6} >
          <h5>Invoice No. <span className="border p-2">{invoiceNo}</span></h5>
          <p>Date: {date}</p>
        </Col>

        <Col md={6}  >
        <Button variant="success" className='sendinvoice-btn' onClick={handleSendInvoice}>Send Invoice</Button>
        </Col>
       
      </Row>

      <hr />

      <Row>
        <Col md={6}>
          <h6>From: <span className="border p-2">{vendorID}</span></h6>
          <p><strong>Vendor Name</strong></p>
          <p>Vendor address based on address in profile.</p>
        </Col>
        <Col md={6}>
          <h6>To: <Form.Control type="text" placeholder='Enter Client ID' value={clientID} onChange={(e) => setClientID(e.target.value)} /></h6>
          <p><strong>Client Name</strong></p>
          <p>Client address based on address in profile.</p>
        </Col>
      </Row>

      <hr />

      <Table bordered>
        <thead>
          <tr>
            <th>Description</th>
            <th>Rate</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <Form.Control
                  type="text"
                  value={row.description}
                  onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                />
              </td>
              <td>
                <InputGroup>
                  <Form.Control
                    type="number"
                    value={row.rate}
                    onChange={(e) => handleInputChange(index, 'rate', parseFloat(e.target.value))}
                  />
                </InputGroup>
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={row.qty}
                  onChange={(e) => handleInputChange(index, 'qty', parseInt(e.target.value))}
                />
              </td>
              <td>{row.subtotal}</td>
              <td>
                <FaPlusCircle onClick={handleAddRow} style={{ cursor: 'pointer' }} />
                {rows.length > 1 && (
                  <FaMinusCircle onClick={() => handleRemoveRow(index)} style={{ cursor: 'pointer' }} className="ml-2" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row className='grandtotal'>
        <Col md={{ span: 4, offset: 8 }}>
          <h6>Grand Total: N{grandTotal}</h6>
        </Col>
      </Row>

      <Row className="mt-4 grandtotal-btn">
        <Col md={{ span: 4, offset: 8 }}>
          <Button variant="success" onClick={handleSendInvoice}>Pay N {grandTotal}</Button>
        </Col>
      </Row>
    </Col>
          

          {/* Right Sidebar */}
          <div className="col-lg-2 col-md-3 col-12  right-sidebar">
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
          </div>
        </div>
      </div>


        
    </div>




  )
}

export default Invoice