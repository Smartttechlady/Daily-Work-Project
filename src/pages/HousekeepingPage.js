import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HousekeepingPage() {
    const [selectedService, setSelectedService] = useState(null);
  const [vendors, setVendors] = useState([]);

  const services = ["House Cleaning", "Laundry", "Ironing"];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    // Simulate fetching vendors for the selected service
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
        <img  src={("./..//images/Catbanner.png")} alt="Profile" className="fluid" />
        <div className='catbanner-text'>
        <h1>Housekeeping</h1>
        <button className="btn btn-link text-dark back-btn" onClick={() => window.history.back()}>Back</button>
        </div>
        
        
    
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
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

export default HousekeepingPage