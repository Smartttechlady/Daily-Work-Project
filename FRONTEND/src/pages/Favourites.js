import React, { useState } from "react";
import { Dropdown, FormControl, InputGroup, Button, ListGroup, Badge, Row, Col, Container } from "react-bootstrap";
import { FaSearch, FaEnvelope, FaBell, FaHeart, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import './Clientdashboard.css'

function Favourites() {

  const [activeNavItem, setActiveNavItem] = useState("Favourites");
  

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






  const handleTopVendorClick = () => {
    navigate("/vendor-profile");
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



  const [isFavourites, setIsFavourites] = useState(false); 


  const handleAddToFavourites = () => {
    setIsFavourites(!isFavourites); 

    if (!isFavourites) {
      
      console.log("Vendor added to favourites");
     
      navigate("/favourites");
    } else {
     
      console.log("Vendor removed from favourites");
    }
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
            <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
              <div>
                <h4>Favourites</h4>
              </div>
          
            </div>

            {/* Search Bar */}
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaSearch onClick={() => alert("Search functionality to be implemented")} style={{ cursor: "pointer" }} />
              </InputGroup.Text>
              <FormControl
                placeholder="Search category"
                aria-label="Search category"
              />
              
            </InputGroup>


            {/* Vendor Cards */}
            <div className="vendor-cards mt-5">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5>My Favourite Vendors</h5>
                <Button variant="link">See all</Button>
              </div>
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
                        onClick={handleAddToFavourites}
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
                        style={{ cursor: "pointer", color: isFavourites ? "red" : "gray" }}
                        onClick={handleAddToFavourites}
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
                        onClick={handleAddToFavourites}
                      />
                    </p>
                  </div>
                </div>
              </div>
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





  )
}

export default Favourites


