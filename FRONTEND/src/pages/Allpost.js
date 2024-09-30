import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown, Form, Card, Image, Carousel, InputGroup, FormControl } from "react-bootstrap";
import { FaArrowLeft, FaSearch, FaHeart, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import './Allpost.css'
import './Clientdashboard.css'


function Allpost() {
  const [serviceCategory, setServiceCategory] = useState("Category");
  const [service, setService] = useState("Service");
  const [location, setLocation] = useState("Location");
  const [pricing, setPricing] = useState("Pricing");
  const [rating, setRating] = useState("Rating");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorite, setFavorite] = useState([false, false, false]);
  const [entries, setEntries] = useState(10);
 


  const handleEntriesChange = (numEntries) => setEntries(numEntries);


  const serviceCategories = [" HouseKeeping", "InstallationOrRepairs", "HealthAndFitness", "Education", "Transport", "Beauty", "RealEstate", "Catering", "EventAndEntertainment", "Agriculture", "Marketing", "Technology"];
  const services = {
    HouseKeeping: ["House Cleaning", "Office Cleaning", "Laundry", "Gutter Cleaning", "Market Shopping", "Nanny", "Security Services", "Janitor"],
    InstallationOrRepairs: ["Plumbering", "Carpentry", "Generator Repair", "Solar/Inverter Services", "Gas Cooker Repair", "Television Services", " Refrigeriator Services",
      "Fan/AC Services", "Weldering", "Car Mechanic", "Wiring", "Lighting Installation", "Home Appliances Repair", "Satellite TV Installation",
      "Floor Installation", "wallpaper installation", "Window-Blind Installation", "Roof Installation & Repair", "Door installation & Repair", "Screeding Services",
      "Tiles Installation & Repair", "Gypsum Board Ceiling Installation", " Cabinet Installation", "Smart Home Installation", "Glass Work Service", "Pool Installation", "Phone Repair", "Computer Repair"],
    HealthAndFitness: ["Fitness Trainer", "Nutritionist", "Gym Service", "Carer", "Nurse"],
    Education: ["Lesson Teacher", "Business Coach", "Skill Tutor", "Mentorship"],
    Transport: ["Personal Driver", "Truck Services", "Delivering Services", " Bus Travel Services", "Travel Services"],
    Beauty: ["Makeup Service", "Tailoring", "Babbing", "Skin Care/ Spa Services", "Micro Blading", "Hair Making", "Pedicure & Manicure", "Tatoo Service", "Modelling"],
    RealEstate: ["House Agent", "House Developer", "House Manager", "Architect", "House Packing Mover", "Bricklayer ", "House Painting"],
    Catering: ["Small Shop Services", "Cake Making", "Drink Services", "Party Catering Services", "Abattoir Services"],
    EventAndEntertainment: ["Social Media Services", "Brand Influencer", "Ushering Event Services", "DJ Services", "Comendian Services", "Event Planning", "Party Souvenir Services", "Photography", "Cinematography", "Bouncers"],
    Agriculture: ["Tree Trimming Services", "Lawn-Care Services", "Fertilizer Services", "Garden Services", "Farming Services"],
    Marketing: ["Sales Personnel ", "Brand Manager", "Social Media Manager", "Marketing Material Designer", "Influencer", "SEO Services", "Customer Services"],
    Technology: ["Software Engineer ", "Hardward Engineer", " Cloud Manager", "Graphic Designer", "Product Designer", "SEO Specialists"],
  };

  const locations = ["Ikeja", "Surulere", "Yaba", "Lekki"];
  const priceRanges = ["N1000 - N5000", "N5000 - N10000", "N10000 - N50000"];
  const ratings = [1, 2, 3, 4, 5];

  const handleFavorite = (index) => {
    const newFavorites = [...favorite];
    newFavorites[index] = !newFavorites[index];
    setFavorite(newFavorites);
  };



  const handleSearch = () => {
    alert(`Search for: ${searchQuery}`);
  };

  const handleFilter = () => {
    alert(`Filter applied with ${serviceCategory}, ${service}, ${location}, ${pricing}, ${rating}`);
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleServiceCategorySelect = (category) => {
    setServiceCategory(category);
    setService("Service");
  };

  const handleServiceSelect = (service) => {
    setService(service);
  };

  const handleLocationSelect = (loc) => {
    setLocation(loc);
  };

  const handlePricingSelect = (price) => {
    setPricing(price);
  };

  const handleRatingSelect = (rate) => {
    setRating(rate);
  };

  const [activeVendors, setActiveVendors] = useState([0, 2, 4]);


  const isOnline = true;


  // vendor 1
  const images = [
    './..//images/T1.png',
    './..//images/student result.png',
    './..//images/teacher award.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };




  // vendor 2
  const images2 = [
    './..//images/music teacher.png',
    './..//images/music teacher1.png',
    './..//images/music teacher2.png', 

  ];

  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  const handleNextImage2 = () => {
    setCurrentImageIndex2((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage2 = () => {
    setCurrentImageIndex2((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };




  // vendor 3
  const images3 = [
    './..//images/dance teacher.png',
    './..//images/dance teacher1.png',
    './..//images/dance teacher2.png',

  ];

  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);

  const handleNextImage3 = () => {
    setCurrentImageIndex3((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage3 = () => {
    setCurrentImageIndex3((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };



    // vendor 3
    const images4 = [
      './..//images/dance teacher.png',
      './..//images/dance teacher1.png',
      './..//images/dance teacher2.png',
  
    ];
  
    const [currentImageIndex4, setCurrentImageIndex4] = useState(0);
  
    const handleNextImage4 = () => {
      setCurrentImageIndex4((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePreviousImage4 = () => {
      setCurrentImageIndex3((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };






  return (
    
    <div className="container" >
    {/* Banner with back button */}
    <div className="banner">
      <Button variant="light" onClick={handleBack} className="back-button">
        <FaArrowLeft /> Back
      </Button>
    </div>

    <Container>
      {/* Search Section */}
      <Row className="my-4">
        <Col>
          <h2 style={{ marginTop:"3rem"}}>All Post</h2>
          <h5  style={{color: '#ACA8A8', fontWeight: '200', fontSize:"1rem", marginTop:"1rem"}}> Result for Lesson Teacher</h5>
        </Col>
        
      </Row>

                  {/* Search Bar */}
                  <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaSearch onClick ={handleSearch} />
              </InputGroup.Text>
              <FormControl
                placeholder="Search category"
                aria-label="Search category"
              />
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  {serviceCategory}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {serviceCategories.map((category, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleServiceCategorySelect(category)}
                    >
                      {category}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  {service}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {services[serviceCategory]?.map((service, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleServiceSelect(service)}
                    >
                      {service}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  {location}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {locations.map((loc, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleLocationSelect(loc)}
                    >
                      {loc}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  {pricing}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {priceRanges.map((price, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handlePricingSelect(price)}
                    >
                      {price}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  {rating}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {ratings.map((rate, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleRatingSelect(rate)}
                    >
                      {rate}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Button onClick= {handleFilter} variant="success">Filter</Button>
            </InputGroup>

      {/* Card Results */}
      <Row>
         {/* Vendor Cards */}
         <div className="vendor-cards mt-5">

              <div className="d-flex flex-wrap">
                {/* Vendor 1 */}
                <div className="card mx-1" style={{ width: "18rem" }}>
                  <div className="position-relative">
                    <img
                      src={images[currentImageIndex]}
                      className="card-img-top"
                      alt="Vendor"
                    />


                    <div className="position-absolute top-50 start-0 translate-middle-y">
                      
                      <Button variant="light" className="rounded-circle" onClick={handlePreviousImage}>
                        <FaChevronLeft />
                      </Button>
                    </div>
                    <div className="position-absolute top-50 end-0 translate-middle-y">
                      <Button variant="light" className="rounded-circle" onClick={handleNextImage}>
                        <FaChevronRight />
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="position-relative mr-2">
                        <img
                          src={("./..//images/profile img.png")}
                          alt="Profile"
                          className="rounded-circle"
                        />
                        {isOnline && (
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
                      <h5 className="card-title ms-2">Fisayo Omotosho</h5>
                    </div>
                    <p className="card-text">
                      I specialize in all science subjects at
                      secondary level helping students excel in their studies.
                    </p>
                    <p className="card-text d-flex align-items-center">
                      <strong>4.5 (53)</strong>
                      <FaStar className="ml-2" style={{ color: "gold" }} />
                    </p>
                    <p className="card-text d-flex justify-content-between align-items-center">
                      <span>From N10,000</span>

                                                                                                  
                      <FaHeart
                        className="ml-auto"
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={handleFavorite}
                      />
                    </p>
                  </div>
                </div>


                {/* Vendor 2 */}
                <div className="card mx-1" style={{ width: "18rem", position: "relative" }}>
                  <div className="position-relative">
                    <img
                      src={images2[currentImageIndex2]}
                      className="card-img-top"
                      alt="Vendor 2"
                    />
                    <div className="position-absolute top-50 start-0 translate-middle-y">
                      <Button variant="light" className="rounded-circle" onClick={handlePreviousImage2}>
                        <FaChevronLeft />
                      </Button>
                    </div>
                    <div className="position-absolute top-50 end-0 translate-middle-y">
                      <Button variant="light" className="rounded-circle" onClick={handleNextImage2}>
                        <FaChevronRight />
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="position-relative mr-2">
                        <img
                          src={("./..//images/Amada.png")}
                          alt="Profile"
                          className="rounded-circle"
                        />
                        {isOnline && (
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
                      <h5 className="card-title ms-2">Amada Thompson</h5>
                    </div>
                    <p className="card-text">
                      I inspire students to discover their musical talents and achieve their
                      full potential.
                    </p>
                    <p className="card-text d-flex align-items-center">
                      <strong>4.8 (67)</strong>
                      <FaStar className="ml-2" style={{ color: "gold" }} />
                    </p>
                    <p className="card-text d-flex justify-content-between align-items-center">
                      <span>From N8,000</span>
                      <FaHeart
                        className="ml-auto"
                        style={{ cursor: "pointer" }}
                        color={favorite[index] ? "red" : "gray"}
                        onClick={handleFavorite}
                      />
                    </p>
                  </div>
                </div>


                {/* Vendor 3 */}
                <div className="card mx-1" style={{ width: "18rem", position: "relative" }}>
                  <div className="position-relative">
                    <img
                      src={images3[currentImageIndex3]}
                      className="card-img-top"
                      alt="Vendor 3"
                    />
                    <div className="position-absolute top-50 start-0 translate-middle-y">
                      <Button variant="light" className="rounded-circle" onClick={handlePreviousImage3}>
                        <FaChevronLeft />
                      </Button>
                    </div>
                    <div className="position-absolute top-50 end-0 translate-middle-y">
                      <Button variant="light" className="rounded-circle" onClick={handleNextImage3} >
                        <FaChevronRight />
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="position-relative mr-2">
                        <img
                          src={("./..//images/Telma.png")}
                          alt="Profile"
                          className="rounded-circle"
                        />
                        {isOnline && (
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
                      <h5 className="card-title ms-2">Telma Davis</h5>
                    </div>
                    <p className="card-text">
                      I bring years of experience and a deep love for movement to every class.
                      Whether you're a beginner or an advanced dancer aiming to refine your skills.
                    </p>
                    <p className="card-text d-flex align-items-center">
                      <strong>4.2 (102)</strong>
                      <FaStar className="ml-2" style={{ color: "gold" }} />
                    </p>
                    <p className="card-text d-flex justify-content-between align-items-center">
                      <span>From N16,000</span>
                      <FaHeart
                        className="ml-auto"
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={handleFavorite}
                      />
                    </p>
                  </div>
                </div>


                
                {/* Vendor 4 */}
                {vendors.map((vendor, index) => (
                <div className="card mx-1" style={{ width: "18rem", position: "relative" }} key={index}>
                  <div className="position-relative">
                    <img
                      src={images4[currentImageIndex4]}
                      className="card-img-top"
                      alt={`Vendor ${index}`}
                    />
                    <div className="position-absolute top-50 start-0 translate-middle-y">
                      <Button variant="light" className="rounded-circle" onClick={handlePreviousImage3}>
                        <FaChevronLeft />
                      </Button>
                    </div>
                    <div className="position-absolute top-50 end-0 translate-middle-y">
                      <Button variant="light" className="rounded-circle" onClick={handleNextImage3} >
                        <FaChevronRight />
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="position-relative mr-2">
                        <img
                          src={("./..//images/Telma.png")}
                          alt="Profile"
                          className="rounded-circle"
                        />
                        {isOnline && (
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
                      <h5 className="card-title ms-2">Telma Davis</h5>
                    </div>
                    <p className="card-text">
                      I bring years of experience and a deep love for movement to every class.
                      Whether you're a beginner or an advanced dancer aiming to refine your skills.
                    </p>
                    <p className="card-text d-flex align-items-center">
                      <strong>4.2 (102)</strong>
                      <FaStar className="ml-2" style={{ color: "gold" }} />
                    </p>
                    <p className="card-text d-flex justify-content-between align-items-center">
                      <span>From N16,000</span>
                      <FaHeart
                        className="ml-auto"
                        style={{ cursor: "pointer", color: favorite[index] ? "red" : "gray" }}
                        onClick={() => handleFavorite(index)} 
                      />
                    </p>
                  </div>
                </div>
                ))}




              </div>
            </div>
         
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-5">
            <Dropdown onSelect={handleEntriesChange}>
              <Dropdown.Toggle variant="outline-success">
                Show {entries}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="5">5</Dropdown.Item>
                <Dropdown.Item eventKey="10">10</Dropdown.Item>
                <Dropdown.Item eventKey="15">15</Dropdown.Item>
                <Dropdown.Item eventKey="20">20</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p>
              Showing 1-{entries} of 500 entries
            </p>
          </div> 

    </Container>
  </div>
    

  
  );
};

export default Allpost