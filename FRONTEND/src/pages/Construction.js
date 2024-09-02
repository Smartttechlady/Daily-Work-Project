import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Style.css'

function Construction() {
    const [selectedService, setSelectedService] = useState(null);
    const [vendors, setVendors] = useState([]);
  
    const services = ["Lesson Teacher", "Business Coach", "Skill Tutor", "Mentorship"];
  
    const handleServiceClick = (service) => {
      setSelectedService(service);
      
      setVendors([
        { name: "Vendor 1", service },
        { name: "Vendor 2", service },
        { name: "Vendor 3", service },
      ]);
    };






  return (
    <div>
        <Container >
      <Row className="text-center ">
        <Col>
        
        <img  src={("./..//images/Catbanner.png")} alt="" className="" />

        <div className='catbanner-text container'>
        <h2>Construction</h2>
        <button className="btn btn-link text-dark back-btn" onClick={() => window.history.back()}>Back</button>
        </div>
        
        
    
        </Col>
      </Row>
      <Row className="justify-content-center catservice-btn">
        {services.map((service, index) => (
          <Col xs={12} md={4} className="mb-3" key={index}>
            <Button
              variant="outline-dark"
              className="service-button"
              onClick={() => handleServiceClick(service)}
            >
              {service}
            </Button>
          </Col>
        ))}
      </Row>
      
      {selectedService && (
        <Row className="text-center mt-5">
          <Col>
            <h2>Vendors for {selectedService}</h2>
            <ul>
              {vendors.map((vendor, index) => (
                <li key={index}>{vendor.name}</li>
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </Container>
        

    </div>
  )
}

export default Construction