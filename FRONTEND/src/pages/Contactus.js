import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Contactus.css';




function Contactus() {

    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };



  return (


    <div>
         <Container fluid className="contact-us-container">
      <Row>
        {/* Left Column */}
        <Col md={6} className="left-column">
          <Button variant="link" className="back-button" onClick={handleBackClick}>
            <FaArrowLeft /> Back
          </Button>
          <h2 className="mt-4">Contact Us</h2>
          <img
            src={("./..//images/contact.png")}
            alt="Contact Us Illustration"
            className="img-fluid contact-image"
          />
        </Col>

        {/* Right Column */}
        <Col md={6} className="right-column">
          <img src={("./..//images/Daily work logo 3.svg")} alt="Logo" className="img-fluid mb-3" />
          <p className='mt-5 mb-5'>We’re here to help you, send us your query via the form below or send us an email at <a href="mailto:helpdesk@dailywork.com">helpdesk@dailywork.com</a> for any issue you are facing.</p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Enter your Name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Control type="email" placeholder="Enter your Email Address" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Control as="textarea" rows={3} placeholder="Type your message here.." />
            </Form.Group>

            <Button variant="success" type="submit" className="mt-5 submit-btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
        
    </div>


  )
}

export default Contactus