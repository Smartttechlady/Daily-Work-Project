import React, { useState } from 'react';
import { Container, Row, Col, Button, Dropdown, Form } from 'react-bootstrap';
import './Style.css'


function Chatpage () {

  const [selectedChat, setSelectedChat] = useState(null);

  const handleAttachClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };






  return (

    <div>
               <Container fluid>
      <Row>
        <Col md={3} className="sidebar">
          <div className="profile-section text-center">
            <img src="path_to_profile_photo" alt="Profile" className="img-fluid rounded-circle" />
            <h4>Henry Jabbawockiez</h4>
          </div>
          <nav className="nav flex-column">
            <Button variant="link" className="nav-link active">Home</Button>
            <Button variant="link" className="nav-link">Chat</Button>
            <Button variant="link" className="nav-link">Contact</Button>
            <Button variant="link" className="nav-link">Notifications</Button>
            <Button variant="link" className="nav-link">Calendar</Button>
            <Button variant="link" className="nav-link">Settings</Button>
            <Button variant="link" className="nav-link">Log Out</Button>
          </nav>
        </Col>
        <Col md={9} className="main-content">
          <Row>
            <Col md={4} className="chat-list-section">
              <div className="chat-list-header">
                <h5>Chats</h5>
                <Button variant="primary">Create New Chat</Button>
              </div>
              <Form.Control type="text" placeholder="Search" className="mt-3 mb-3" />
              <div className="chat-list">
                
                <div className="chat-item" onClick={() => handleChatSelect('Nika Jerrardo')}>
                  <div className="d-flex align-items-center">
                    <img src="path_to_nika_profile_photo" alt="Nika" className="img-fluid rounded-circle" />
                    <div className="ms-3">
                      <h6>Nika Jerrardo</h6>
                      <p className="mb-0">Last online 5 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="chat-section">
              <div className="chat-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src="path_to_selected_chat_profile_photo" alt="Profile" className="img-fluid rounded-circle" />
                  <div className="ms-3">
                    <h6>{selectedChat}</h6>
                    <p className="mb-0">Last online 5 hours ago</p>
                  </div>
                </div>
                <Dropdown>
                  <Dropdown.Toggle variant="link" id="dropdown-basic">
                    <i className="fas fa-ellipsis-h"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="chat-body">
                {/* Chat messages */}
              </div>
              <div className="chat-footer d-flex align-items-center">
                <input id="fileInput" type="file" className="d-none" />
                <Button variant="link" onClick={handleAttachClick}>
                  <i className="fas fa-paperclip"></i>
                </Button>
                <Form.Control type="text" placeholder="Type a message here" />
                <Dropdown drop="up" className="ms-2">
                  <Dropdown.Toggle variant="link">
                    <i className="fas fa-plus-circle"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Upload Image</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Upload Video</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Upload File</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary" className="ms-2">
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default Chatpage