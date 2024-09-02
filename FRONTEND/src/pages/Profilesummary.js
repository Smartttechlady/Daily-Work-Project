import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Style.css'




function Profilesummary() {

  const navigate = useNavigate();

  const data = {
    services: ['Education', 'Lesson Teacher'],
    profile: {
      photo: 'path_to_profile_photo', 
      bio: 'With over 7 years of experience, I specialize in all science subjects at secondary level, offering personalized tutoring that helps students excel in their studies. Known for my unique teaching methods and commitment to student success, I foster a supportive and engaging learning environment that encourages academic achievement.',
      fullName: 'Fisayo Valerie Omotosho',
      phoneNumber: '+2348078654331',
      address: '5, Westlife street',
      province: 'Omole Phase 1',
      nin: '25608432679',
      nextOfKin: {
        name: 'Omobola Martins',
        phoneNumber: '+2348078467543',
        email: 'omomartins@gmail.com',
        relationship: 'Sister',
        address: '2, solidrock street, Ojodu Berger'
      }
    },
    portfolio: [
      'path_to_certificate_photo', 
      'path_to_teaching_photo' 
    ],
    pricing: {
      minimumRate: 10000
    }
  };

  const handleEdit = (step) => {
    navigate(`/${step}`);
  };


  return (
    <div>

      <Container className="">
      <div className='portfolio-header '>
        <img className='img-fluid signup-img' src={("./..//images/vendors.svg")} alt="" />
        <button className="btn btn-link text-dark back-btn" onClick={() => window.history.back()}>Back</button>
      </div>

        <Row className="justify-content-center mt-5">
          <Col md={0}>
            <h2 className="text-left">Profile Summary</h2>
            {/* <hr /> */}
            <div className="summary-section mt-4">
              <h4 className='mt-5'>Add Services <Button variant="link" onClick={() => handleEdit('services')}>Edit</Button></h4>
              {data.services.map((service, index) => (
                <Form.Control key={index} type="text" value={service} readOnly className="mb-2" />
              ))}
            </div>
            <div className="summary-section mt-4">
              <h4 className='mt-5' >Data Capturing <Button variant="link" onClick={() => handleEdit('profile')}>Edit</Button></h4>
              <img src={data.profile.photo} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ maxWidth: '150px' }} />
              <p>{data.profile.bio}</p>
              <Form.Control type="text" value={data.profile.fullName} readOnly className="mb-2" />
              <Form.Control type="text" value={data.profile.phoneNumber} readOnly className="mb-2" />
              <Form.Control type="text" value={data.profile.address} readOnly className="mb-2" />
              <Form.Control type="text" value={data.profile.province} readOnly className="mb-2" />
              <Form.Control type="text" value={data.profile.nin} readOnly className="mb-2" />
              <h5 className='mt-5' >Next of Kin</h5>
              <Form.Control type="text" value={data.profile.nextOfKin.name} readOnly className="mb-2" />
              <Form.Control type="text" value={data.profile.nextOfKin.phoneNumber} readOnly className="mb-2" />
              <Form.Control type="text" value={data.profile.nextOfKin.email} readOnly className="mb-2" />
              <Form.Control type="text" value={data.profile.nextOfKin.relationship} readOnly className="mb-2" />
              <Form.Control type="text" value={data.profile.nextOfKin.address} readOnly className="mb-2" />
            </div>
            <div className="summary-section mt-4">
              <h4>Portfolio <Button variant="link" onClick={() => handleEdit('portfolio')}>Edit</Button></h4>
              {data.portfolio.map((item, index) => (
                <img key={index} src={item} alt={`Portfolio ${index + 1}`} className="img-fluid mb-3" style={{ maxWidth: '300px' }} />
              ))}
            </div>
            <div className="summary-section mt-4">
              <h4>Pricing <Button variant="link" onClick={() => handleEdit('pricing')}>Edit</Button></h4>
              <Form.Control type="text" value={`₦${data.pricing.minimumRate.toLocaleString()}`} readOnly className="mb-2" />
            </div>
            <div className="text-left mt-4">
              <Button className='mt-5 mb-4' variant="success" onClick={() => alert('Profile Published!')}>Publish</Button>
            </div>
          </Col>
        </Row>
      </Container>



    </div>
  )
}

export default Profilesummary

