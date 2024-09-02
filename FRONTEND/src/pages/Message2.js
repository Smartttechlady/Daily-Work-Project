import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Dropdown, Form, Badge, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch, FaEnvelope, FaBell, FaHeart, FaChevronLeft, FaFileUpload, FaChevronRight, FaStar, FaEllipsisV, FaPlus, FaPaperPlane,  FaMicrophone, FaPlay, FaFile, FaDownload, FaImage } from "react-icons/fa";
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { PiChatDotsFill } from "react-icons/pi";
import { ChatDots } from 'react-bootstrap-icons';
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import './Vendordashboard.css';
import './Message.css';




function Message2() {
  const [activeNav, setActiveNav] = useState('messages');

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
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

  const handleEmojiClick = () => {
    setShowDropup(!showDropup);
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
                <a className="nav-link text-white" href="#settings" onClick={() => handleNavClick('settings')}>
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
                        
                          <Link className='cp-info' to={"/clientprofile"}><strong>Amanda</strong></Link>
                          <span>1 minutes ago</span>

                        </div>

                        <p className="mb-0">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>

                    <div className="chat-rectangle d-flex align-items-center mb-3 p-3 border">
                      <img src={("./..//images/yemi.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                        <Link className='cp-info' to={"/clientprofile"}><strong>Yemi</strong></Link>
                          <span>3 days ago</span>
                        </div>
                        <p className="mb-0">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>

                    <div className="chat-rectangle d-flex align-items-center mb-3 p-3 border">
                      <img src={("./..//images/Telma.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg" />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                        <Link className='cp-info' to={"/clientprofile"}><strong>Telma</strong></Link>
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
                        <Link className='cp-info' to={"/clientprofile"}><strong>Flex</strong></Link>
                          <span>9 days ago</span>
                        </div>
                        <p className="mb-0">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>


                    {/* <div className="chat-rectangle d-flex align-items-center mb-3 p-3 border">
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
                    </div> */}

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
                          <Link className='cp-info' to={"/clientprofile"}><strong>Amanda</strong></Link>
                            <small className='me-2'> 1 minutes ago</small>
                          </div>

                          <span > <BsFillTelephoneFill className='me-3' />
                            <FaVideo /></span>

                        </div>
                      </div>
                 
                    </div>

                    <div className="chat-messages">
                      <div className="message mb-3 d-flex align-items-start">
                        <img src={("./..//images/fisayo.png")}alt="Vendor" className="rounded-circle me-2 chat-profileimg" />
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
                        <img src={("./..//images/fisayo.png")} alt="Vendor" className="rounded-circle me-2 chat-profileimg" />
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
                        <img src={("./..//images/fisayo.png")} alt="Vendor" className="rounded-circle me-2 chat-profileimg" />
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

export default Message2
