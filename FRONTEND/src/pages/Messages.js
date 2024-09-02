import React, { useState } from 'react';
import { Dropdown, FormControl, InputGroup, Button, ListGroup, Badge, Row, Col, Container } from "react-bootstrap";
import { FaMicrophone, FaPlay, FaFile, FaDownload, FaImage } from "react-icons/fa";
import { FaSearch, FaEnvelope, FaBell, FaHeart, FaChevronLeft, FaFileUpload, FaChevronRight, FaStar, FaEllipsisV, FaPlus, FaPaperPlane } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import './Clientdashboard.css';

import './Message.css';



function Messages() {
  const [activeNavItem, setActiveNavItem] = useState("Messages");

  const navigate = useNavigate();

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    switch (item) {
      case "Dashboard":
        navigate("/clientdashboard");
        break;
      case "Messages":
        navigate("/messages");
        break;
      case "Transaction":
        navigate("/transaction");
        break;
      case "Favourites":
        navigate("/favourites");
        break;
      case "Settings":
        navigate("/settings");
        break;
      case "Logout":
        navigate("/logout");
        break;
      default:
        navigate("/");
        break;
    }
  };


  const isOnline = true;
  const [activeVendors, setActiveVendors] = useState([0, 2, 4]);



  const handleTopVendorClick = () => {
    navigate("/vendor-profile");
  };



  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown); 
  };





  const handlePlayVoiceNote = () => {
  
    console.log("Playing voice note...");
  };

  const handleDownloadFile = () => {
 
    console.log("Downloading file...");
  };

  const handleDownloadPhoto = () => {
   
    console.log("Downloading photo...");
  };


  const [showDropup, setShowDropup] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleAddClick = () => {
    setShowDropup(!showDropup);
  };

  const handleMessageSend = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: currentMessage, type: 'text' }]);
      setCurrentMessage(''); 
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages([...messages, { id: Date.now(), text: file.name, type: 'file' }]);
    }
  };

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image) {
      setMessages([...messages, { id: Date.now(), text: image.name, type: 'image', file: URL.createObjectURL(image) }]);
    }
  };

  const handleVideoUpload = (e) => {
    const video = e.target.files[0];
    if (video) {
      setMessages([...messages, { id: Date.now(), text: video.name, type: 'video', file: URL.createObjectURL(video) }]);
    }
  };

  const handleVoiceNote = () => {
   
    setMessages([...messages, { id: Date.now(), text: 'Voice Note (0:15)', type: 'voice' }]);
  };








  return (
    <div>

      <Container fluid>
        <Row>
          {/* Left Sidebar */}
          <Col xs={12} md={2} className="sidebar  left-bg bg-light p-3 mt-3">
            <div className="text-left mb-4 ms-2">
              <img
                src={("./..//images/client profile img.png")}
                alt="Profile"
                className="rounded-circle mb-2"
              />
              <div className="sidetop-text">
                <h4>Henry Dennis</h4>
                <p className="text-muted">henry.dennis@gmail.com</p>
                <p className="text-muted">+234 7056431876</p>
                <p className="text-muted">
                  <small> <IoLocation className="location" />Maryland</small>
                </p>
              </div>
            </div>


            <nav>
              <ListGroup variant="flush" className="nav-list mt-5">
                {["Dashboard", "Messages", "Transaction", "Favourites", "Settings", "Logout"].map(
                  (item, index) => (
                    <ListGroup.Item
                      action
                      key={index}
                      active={activeNavItem === item}
                      onClick={() => handleNavItemClick(item)}
                      className={activeNavItem === item ? "active-nav-item" : ""}
                    >
                      {item}
                    </ListGroup.Item>
                  )
                )}
              </ListGroup>
            </nav>
            <div className="text-left mt-5 contact-text">
              <p className="sidedown-text">Having trouble?</p>
              <span>
                <img className='dashboard-logo text-left' src={("./..//images/Daily work logo 1a.svg")} alt="" />
                <Link to={"/contact-us"} >
                <Button  variant="" size="sm" className="contact-btn" >
                  Contact Us
                </Button>
                </Link>
              </span>

            </div>
          </Col>

          {/* Main Content */}
          <Col xs={12} md={8} className="main-content p-3">
            {/* Header */}
            <div className="main-area py-4">
              <Row>
                <Col xs={12} lg={6}>
                  <h4 className='mb-5'>Messages</h4>
                  {/* Search Input */}
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Search messages..." />
                    <InputGroup.Text><FaSearch className='chat-search' /></InputGroup.Text>
                  </InputGroup>

                  {/* Recent Chats */}
                  <div className="recent-chat">
                    <div className="chat-rectangle d-flex align-items-center mb-3 p-3 border">
                      <img src={("./..//images/Amada.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <strong>Amanda</strong>
                          <span>1 minutes ago</span>

                        </div>

                        <p className="mb-0">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>

                    <div className="chat-rectangle d-flex align-items-center mb-3 p-3 border">
                      <img src={("./..//images/profile img.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <strong>Fisayo</strong>
                          <span>3 days ago</span>
                        </div>
                        <p className="mb-0">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>

                    <div className="chat-rectangle d-flex align-items-center mb-3 p-3 border">
                      <img src={("./..//images/Telma.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <strong>Telma</strong>
                          <span>5 days ago</span>
                        </div>
                        {/* Voice Note Section */}
                        <p className="mb-0 d-flex align-items-center">
                          <FaMicrophone className="me-2" /> Voice Note (0:15)
                          <FaPlay className="ms-2" style={{ cursor: "pointer" }} onClick={handlePlayVoiceNote} />
                        </p>

                        {/* File Section */}
                        <p className="mb-0 d-flex align-items-center">
                          <FaFile className="me-2" /> File
                          <FaDownload className="ms-2" style={{ cursor: "pointer" }} onClick={handleDownloadFile} />
                        </p>

                        {/* Photo Section */}
                        <p className="mb-0 d-flex align-items-center">
                          <FaImage className="me-2" /> Photo
                          <FaDownload className="ms-2" style={{ cursor: "pointer" }} onClick={handleDownloadPhoto} />
                        </p>
                      </div>
                    </div>



                    <div className="chat-rectangle d-flex align-items-center mb-3 p-3 border">
                      <img src={("./..//images/alex.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <strong>Alex</strong>
                          <span>9 days ago</span>
                        </div>
                        <p className="mb-0">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>


                    <div className="chat-rectangle d-flex align-items-center mb-3 p-3 border">
                      <img src={("./..//images/david.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <strong>David</strong>
                          <span>13 days ago</span>
                        </div>
                        <p className="mb-0">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>


                    <div className="chat-rectangle d-flex align-items-center mb-3 p-3 border">
                      <img src={("./..//images/yemi.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <strong>Yemi</strong>
                          <span>17 days ago</span>
                        </div>
                        <p className="mb-0">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Active Chat */}
                <Col xs={12} lg={6}>
                  <div className="active-chat" >
                    <div className="d-flex align-items-center mb-3" style={{ position: 'relative' }}>
                      <img src={("./..//images/Amada.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">

                          <div className='chat- amanda'>
                            <strong>Amanda</strong>
                            <small className='me-2'> 1 minutes ago</small>
                          </div>

                          <span > <BsFillTelephoneFill className='me-3' />
                            <FaVideo /></span>

                        </div>
                      </div>
                 
                    </div>

                    <div className="chat-messages">
                      <div className="message mb-3 d-flex align-items-start">
                        <img src={("./..//images/client profile img.png")} alt="Vendor" className="rounded-circle me-2 chat-profileimg" />
                        <div className="message-content p-3 border rounded">
                          Lorem ipsum dolor sit amet...
                        </div>
                      </div>


                      <div className="message mb-3 text-end d-flex align-items-end justify-content-end">
                        <div className="message-content p-3 border rounded bg-light">
                          Lorem ipsum dolor sit amet...
                        </div>
                        <img src={("./..//images/Amada.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      </div>


                      <div className="message mb-3 d-flex align-items-start">
                        <img src={("./..//images/client profile img.png")} alt="Vendor" className="rounded-circle me-2 chat-profileimg" />
                        <div className="message-content p-3 border rounded">
                          Lorem ipsum dolor sit amet...
                        </div>
                      </div>


                      <div className="message mb-3 text-end d-flex align-items-end justify-content-end">
                        <div className="message-content p-3 border rounded bg-light">
                          Lorem ipsum dolor sit amet...
                        </div>
                        <img src={("./..//images/Amada.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      </div>

                      <div className="message mb-3 d-flex align-items-start">
                        <img src={("./..//images/client profile img.png")} alt="Vendor" className="rounded-circle me-2 chat-profileimg" />
                        <div className="message-content p-3 border rounded">
                          Lorem ipsum dolor sit amet...
                        </div>
                      </div>


                      <div className="message mb-3 text-end d-flex align-items-end justify-content-end">
                        <div className="message-content p-3 border rounded bg-light">
                          Lorem ipsum dolor sit amet...
                        </div>
                        <img src={("./..//images/Amada.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      </div>




                    </div>

                    <div style={{ position: 'relative' }}>
                      <InputGroup className="writemessage-section">
                        <InputGroup.Text>
                          <FaPlus style={{ cursor: 'pointer', color: "#fff" }} onClick={handleAddClick} />
                        </InputGroup.Text>

                        <FormControl
                          placeholder="Write message here..."
                          value={currentMessage}
                          onChange={(e) => setCurrentMessage(e.target.value)}
                        />

                        <InputGroup.Text onClick={handleMessageSend}>
                          <FaPaperPlane style={{ cursor: 'pointer', color: "#fff" }} />
                        </InputGroup.Text>
                      </InputGroup>

                      {showDropup && (
                        <div className="dropup-menu" style={{ position: 'absolute', bottom: '100%', left: 0, background: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                          <Button variant="light" onClick={handleVoiceNote} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <FaMicrophone style={{ marginRight: '5px' }} /> Voice Note
                          </Button>
                          <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <FaFileUpload style={{ marginRight: '5px' }} /> File
                            <input type="file" style={{ display: 'none' }} onChange={handleFileUpload} />
                          </label>
                          <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <FaImage style={{ marginRight: '5px' }} /> Image
                            <input type="file" style={{ display: 'none' }} accept="image/*" onChange={handleImageUpload} />
                          </label>
                          <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <FaVideo style={{ marginRight: '5px' }} /> Video
                            <input type="file" style={{ display: 'none' }} accept="video/*" onChange={handleVideoUpload} />
                          </label>
                        </div>
                      )}

                      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
                        {messages.map(message => (
                          <li key={message.id} style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                            {/* Placeholder for Sender's Profile Picture */}
                            <img src="sender-profile-picture-url.jpg" alt="Sender" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                            <div>
                              {message.type === 'text' && <span>{message.text}</span>}
                              {message.type === 'file' && <span><FaFileUpload /> {message.text}</span>}
                              {message.type === 'image' && (
                                <div>
                                  <span><FaImage /> {message.text}</span>
                                  <br />
                                  <img src={message.file} alt={message.text} style={{ maxWidth: '200px', marginTop: '10px', borderRadius: '8px' }} />
                                </div>
                              )}
                              {message.type === 'video' && (
                                <div>
                                  <span><FaVideo /> {message.text}</span>
                                  <br />
                                  <video controls src={message.file} style={{ maxWidth: '200px', marginTop: '10px', borderRadius: '8px' }} />
                                </div>
                              )}
                              {message.type === 'voice' && <span><FaMicrophone /> {message.text}</span>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>



          {/* Right Sidebar */}
          <Col xs={12} md={2} className="sidebar  right-bg bg-light p-3 mt-3">
            <div className="latest-update mb-4">
              <h5>Latest Update</h5>
              <p className="text-muted">
                Sponsored Ad: Lorem ipsum dolor sit amet consectetur. Lobortis
                turpis arcu et lectus sem ius.
              </p>
            </div>
            <div className="top-vendors">
              <h5>Top Vendors</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 6 }).map((_, index) => (
                  <ListGroup.Item
                    action
                    key={index}
                    onClick={handleTopVendorClick}
                    className="d-flex align-items-center"
                  >
                    <div className="position-relative">
                      <img
                        src={("./..//images/Telma.png")}
                        alt="Vendor"
                        className="rounded-circle mr-3 vendorprofile-icon"
                      />
                      {activeVendors.includes(index) && (
                        <span
                          style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            width: "10px",
                            height: "10px",
                            backgroundColor: "green",
                            borderRadius: "50%",
                            border: "2px solid white",
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-grow-1 mt-4 ms-2">
                      <h6 className="mb-0 ">Telma Davis</h6>
                      <p className="text-muted mb-0">Plumbering Service</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <Badge pill variant="">
                        4.0
                      </Badge>
                      <FaStar className="ml-2" style={{ color: "gold" }} />
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>


    </div>

  );
}

export default Messages;