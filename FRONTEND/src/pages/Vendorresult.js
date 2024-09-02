
import React, { useState } from 'react';
import { Container, Row, Col, Button, Dropdown, Form, Card } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import {  Link } from 'react-router-dom';
import './Style.css'




function Vendorresult() {

  const servicesData = {
    HouseKeeping: ["House Cleaning", "Office Cleaning", "Laundry", "Gutter Cleaning", "Market Shopping", "Nanny", "Security Services", "Janitor"],
    InstallationOrRepairs: ["Plumbering", "Carpentry", "Generator Repair", "Solar/Inverter Services", "Gas Cooker Repair", "Television Services", " Refrigeriator Services",
      "Fan/AC Services", "Weldering", "Car Mechanic", "Wiring", "Lighting Installation", "Home Appliances Repair", "Satellite TV Installation",
      "Floor Installation", "wallpaper installation", "Window-Blind Installation", "Roof Installation & Repair", "Door installation & Repair", "Screeding Services",
      "Tiles Installation & Repair", "Gypsum Board Ceiling Installation", " Cabinet Installation", "Smart Home Installation", "Glass Work Service", "Pool Installation", "Phone Repair", "Computer Repair" ],
    HealthAndFitness: ["Fitness Trainer", "Nutritionist", "Gym Service", "Carer", "Nurse"],
    Education: ["Lesson Teacher", "Business Coach", "Skill Tutor", "Mentorship"],
    Transport: ["Personal Driver", "Truck Services", "Delivering Services", " Bus Travel Services", "Travel Services"],
    Beauty: ["Makeup Service", "Tailoring", "Babbing", "Skin Care/ Spa Services", "Micro Blading", "Hair Making", "Pedicure & Manicure", "Tatoo Service", "Modelling"],
    RealEstate: ["House Agent", "House Developer", "House Manager", "Architect", "House Packing Mover", "Bricklayer ", "House Painting"],
    Catering: ["Small Shop Services", "Cake Making", "Drink Services", "Party Catering Services", "Abattoir Services"],
    EventAndEntertainment: ["Social Media Services", "Brand Influencer", "Ushering Event Services", "DJ Services", "Comendian Services", "Event Planning", "Party Souvenir Services", "Photography", "Cinematography", "Bouncers"],
    Agriculture: ["Tree Trimming Services", "Lawn-Care Services", "Fertilizer Services", "Garden Services" , "Farming Services"],
    Marketing: ["Sales Personnel ", "Brand Manager", "Social Media Manager", "Marketing Material Designer" , "Influencer", "SEO Services", "Customer Services"],
    Technology: ["Software Engineer ", "Hardward Engineer", " Cloud Manager", "Graphic Designer" , "Product Designer", "SEO Specialists"],
  };

    const [category, setCategory] = useState('');
    const [service, setService] = useState('');
    const [location, setLocation] = useState('');
    const [pricing, setPricing] = useState('');
    const [rating, setRating] = useState('');
  
    const handleCategorySelect = (selectedCategory) => {
      setCategory(selectedCategory);
      setService(''); // Reset service when category changes
    };
  
    const handleSearch = () => {
      // Implement search functionality based on selected filters
      console.log(`Searching for services with filters - Category: ${category}, Service: ${service}, Location: ${location}, Pricing: ${pricing}, Rating: ${rating}`);
    };


    const vendor = {
        name: "Fisayo Omotosho",
        description: "I specialize in all science subjects at secondary level helping students excel in their studies.",
        rating: 4.8,
        reviews: 102,
        price: "From N10,000",
        images: [
          './..//images/T1.png',
          './..//images/student result.png',
           './..//images/teacher award.png',
        ],
        profileImage: './..//images/profile img.png',
        isActive: true

      };

      
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevious = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + vendor.images.length) % vendor.images.length);
    };
  
    const handleNext = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % vendor.images.length);
    };

      

      const vendor1 = {

        name: "Amada Thompson",
        description: "I inspire students to discover their musical talents and achieve their full potential.",
        rating: 4.5,
        reviews: 53,
        price: "From N8,000",
        images: [
          './..//images/music teacher.png',
          './..//images/music teacher1.png',
          './..//images/music teacher2.png',

        ],
        profileImage: './..//images/Amada.png',
        isActive: true
      };

    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);

    const handlePrevious1 = () => {
      setCurrentImageIndex1((prevIndex) => (prevIndex - 1 + vendor1.images.length) % vendor1.images.length);
    };
  
    const handleNext1 = () => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % vendor1.images.length);
    };



    
    const vendor2 = {

      name: "Telma Davis",
      description: "I bring years of experience and a deep love for movement to every class. Whether you're a beginner or an advanced dancer aiming to refine your skills.",
      rating: 4.0,
      reviews: 44,
      price: "From N10,000",
      images: [
        './..//images/dance teacher.png',
        './..//images/dance teacher1.png',
        './..//images/dance teacher2.png',

      ],
      profileImage: './..//images/Telma.png',
      isActive: true
    };

  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  const handlePrevious2 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex - 1 + vendor2.images.length) % vendor2.images.length);
  };

  const handleNext2 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % vendor2.images.length);
  };





  return (
    <div className='container mt-3'>
      <Link class="navbar-brand" href="#"><img className='logo' src= {("./..//images/Daily work logo 3.svg")}  alt="" /></Link>
      <button className="btn btn-link text-dark venback-btn" onClick={() => window.history.back()}>Back</button>
         <Container  className="search-page mt-5">
      <Row className="search-bar">
        <Col md={9}>
          <Form.Control type="text" placeholder="Search category" />
        </Col>
        <Col md={3}>
          <Button className='vendor-icon' variant="success" onClick={handleSearch}><FaSearch /></Button>
        </Col>
      </Row>
      <Row className="filters mt-3">
        <Col>
          <Dropdown onSelect={handleCategorySelect}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {category || 'Category'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="HouseKeeping">HouseKeeping</Dropdown.Item>
              <Dropdown.Item eventKey=" InstallationOrRepairs"> InstallationOrRepairs</Dropdown.Item>
              <Dropdown.Item eventKey="HealthAndFitness">HealthAndFitness</Dropdown.Item>
              <Dropdown.Item eventKey="Education">Education</Dropdown.Item>
              <Dropdown.Item eventKey="Transport">Transport</Dropdown.Item>
              <Dropdown.Item eventKey="Beauty">Beauty</Dropdown.Item>
              <Dropdown.Item eventKey="RealEstate">RealEstate</Dropdown.Item>
              <Dropdown.Item eventKey="Catering">Catering</Dropdown.Item>
              <Dropdown.Item eventKey="EventAndEntertainment">EventAndEntertainment</Dropdown.Item>
              <Dropdown.Item eventKey="Agriculture">Agriculture</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown onSelect={setService}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {service || 'Service'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {category && servicesData[category].map(service => (
                <Dropdown.Item eventKey={service} key={service}>{service}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown onSelect={setLocation}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {location || 'Location'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Ikeja">Ikeja</Dropdown.Item>
              <Dropdown.Item eventKey="Yaba">Yaba</Dropdown.Item>
              <Dropdown.Item eventKey="Lekki">Lekki</Dropdown.Item>
              <Dropdown.Item eventKey="Surulere">Surulere</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown onSelect={setPricing}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {pricing || 'Pricing'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="1000-5000">N1000 to N5000</Dropdown.Item>
              <Dropdown.Item eventKey="5000-10000">N5000 to N10000</Dropdown.Item>
              <Dropdown.Item eventKey="10000-20000">N10000 to N20000</Dropdown.Item>
              <Dropdown.Item eventKey="20000-50000">N20000 to N50000</Dropdown.Item>
              <Dropdown.Item eventKey="50000-100000">N50000 to N100000</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown onSelect={setRating}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {rating || 'Rating'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">1</Dropdown.Item>
              <Dropdown.Item eventKey="2">2</Dropdown.Item>
              <Dropdown.Item eventKey="3">3</Dropdown.Item>
              <Dropdown.Item eventKey="4">4</Dropdown.Item>
              <Dropdown.Item eventKey="5">5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Button className='venfilter' variant="success" onClick={handleSearch}>Filter</Button>
        </Col>
      </Row>
      <Row className="mt-5 ">
        <Col className='vensdorresult-section'>
          <h5>Result for Lesson Teacher</h5>
          <p>10+ results <span> <Link className='seeall-vendor'>See all</Link></span></p>
        
         

          <Row className=''>
           
            <Col md={4}>
            <Card className="vendor-card">
            <div className="banner-container">
              <Button className="banner-nav left" onClick={handlePrevious}>‹</Button>
              <img src={vendor.images[currentImageIndex]} alt="Banner" className="banner-image" />
              <Button className="banner-nav right" onClick={handleNext}>›</Button>
            </div>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div className="position-relative">
                  <img src={vendor.profileImage} alt="Profile" className="profile-image rounded-circle" />
                  {vendor.isActive && <span className="active-dot"></span>}
                </div>
                <div className="ms-3">
                  <Card.Title className="mb-0">{vendor.name}</Card.Title>
                </div>
              </div>
              <Card.Text>{vendor.description}</Card.Text>
              <div className="d-flex align-items-center">
                <span className="me-2">&#9733; {vendor.rating}</span>
                <span>({vendor.reviews})</span>
              </div>
              <Card.Text className="mt-2">{vendor.price}</Card.Text>
            </Card.Body>
          </Card>
            </Col>


            <Col md={4}>
            <Card className="vendor-card">
            <div className="banner-container">
              <Button className="banner-nav left" onClick={handlePrevious1}>‹</Button>
              <img src={vendor1.images[currentImageIndex1]} alt="Banner" className="banner-image" />
              <Button className="banner-nav right" onClick={handleNext1}>›</Button>
            </div>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div className="position-relative">
                  <img src={vendor1.profileImage} alt="Profile" className="profile-image rounded-circle" />
                  {vendor1.isActive && <span className="active-dot"></span>}
                </div>
                <div className="ms-3">
                  <Card.Title className="mb-0">{vendor1.name}</Card.Title>
                </div>
              </div>
              <Card.Text>{vendor1.description}</Card.Text>
              <div className="d-flex align-items-center">
                <span className="me-2">&#9733; {vendor1.rating}</span>
                <span>({vendor1.reviews})</span>
              </div>
              <Card.Text className="mt-2">{vendor1.price}</Card.Text>
            </Card.Body>
          </Card>
            </Col>


            <Col md={4}>
            <Card className="vendor-card">
            <div className="banner-container">
              <Button className="banner-nav left" onClick={handlePrevious2}>‹</Button>
              <img src={vendor2.images[currentImageIndex2]} alt="Banner" className="banner-image" />
              <Button className="banner-nav right" onClick={handleNext2}>›</Button>
            </div>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div className="position-relative">
                  <img src={vendor2.profileImage} alt="Profile" className="profile-image rounded-circle" />
                  {vendor2.isActive && <span className="active-dot"></span>}
                </div>
                <div className="ms-3">
                  <Card.Title className="mb-0">{vendor2.name}</Card.Title>
                </div>
              </div>
              <Card.Text>{vendor2.description}</Card.Text>
              <div className="d-flex align-items-center">
                <span className="me-2">&#9733; {vendor2.rating}</span>
                <span>({vendor2.reviews})</span>
              </div>
              <Card.Text className="mt-2">{vendor2.price}</Card.Text>
            </Card.Body>
          </Card>
            </Col>  



          </Row>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default Vendorresult