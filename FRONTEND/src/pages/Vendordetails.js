import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Card, Image, ListGroup } from 'react-bootstrap';
import { FaStar, FaRegStar, FaHeart, FaShareAlt, FaRegEdit, FaSave, FaFlag, FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import './Vendordetails.css';


function Vendordetails() {


    const images = [
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

    const isOnline = true;

    const navigate = useNavigate();


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


    const handleIconClick = (path) => {
        navigate(path);
    };

   
    const [showMore, setShowMore] = useState(false);


    const handleSeeMore = () => {
        setShowMore(!showMore); 
    };

    const reviewText = "Lorem ipsum dolor sit amet consectetur. Neque eget duis tempor in neque tellus semper nisl vitae. Malesuada luctus mauris phasellus integer netus eu dolor egestas. Faucibus id pellentesque egestas morbi proin in suspendisse. Nec et enim vestibulum eu quisque.";

    const displayedText = showMore ? reviewText : `${reviewText.slice(0, 100)}...`;






    return (


        <div>
            <div className="vendor-details-container">
                <div className="header">
                    <img src={("./..//images/Daily work logo 3.svg")} alt="Daily Work" className="logo" />
                    <h1>Vendor's Details</h1>
                    <h2 className='fs-5 mb-5'>Find more details about this Vendor</h2>
                </div>

                <Row className="first-section">

                    <Col md={4} className="left-side">

                        <Card className="vendor-card">
                            <div className="icon-group">
                                <FaRegEdit onClick={() => handleIconClick('/write-review')} title="Write Review" />
                                <FaShareAlt onClick={() => handleIconClick('/share')} title="Share" />
                                <FaSave onClick={() => handleIconClick('/save')} title="Save" />
                                <FaFlag onClick={() => handleIconClick('/report')} title="Report" />
                            </div>



                            <Card.Body>


                                <div className="card mx-1" style={{ width: "18rem", position: "relative" }}>
                                    <div className="position-relative">
                                        <img
                                            src={images[currentImageIndex2]}
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
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="right-side">
                        <Card className="billing-card">
                            <Card.Body>
                                <img src={("./..//images/agreement.svg")}
                                alt=""
                                className='billng-img '

                                 />
                                <Card.Title className='mt-5'  >Billing Information</Card.Title>
                                <Card.Text>
                                    Your invoice will be issued according to the agreed service and negotiation.
                                </Card.Text>
                                <Button variant="" className="invoice-button mt-3">Check the Service Invoice</Button>
                                <Button variant="success" className="contact-button">Contact Me</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="second-section">
                    <h3>What people are saying about this Vendor <a href="/all-reviews" className="see-all  ">See all reviews</a></h3>
                    <ListGroup>
                    <ListGroup.Item className="review-item mt-3">
        <div className="d-flex align-items-center mb-2">
            <div className="position-relative mr-2">
                <Image
                    src={("./..//images/Williams.png")}
                    alt="Client"
                    roundedCircle
                    className="client-photo ms-5"
                />
                {isOnline && (
                    <span
                        className="active-dot"
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

            <div className='ms-3' >
            <h5 className="card-title ms-2">Williams Alex</h5>
            <div className="rating d-flex align-items-center">
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaRegStarHalfStroke className="star-icon-half" style={{ color: "gold" }} />
                <span className="ms-2">4.5</span>
            </div>

            </div>

        </div>
        <div className="review-content">
  
            <p>
                {displayedText} 
            </p>
            <a href="#" onClick={handleSeeMore} className="see-more">
                {showMore ? "See less" : "See more"} 
            </a>
        </div>
    </ListGroup.Item>



    <ListGroup.Item className="review-item mt-3">
        <div className="d-flex align-items-center mb-2">
            <div className="position-relative mr-2">
                <Image
                    src={("./..//images/Vanessa.png")}
                    alt="Client"
                    roundedCircle
                    className="client-photo ms-5"
                />
                {isOnline && (
                    <span
                        className="active-dot"
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

            <div className='ms-3' >
            <h5 className="card-title ms-2">vanessa James</h5>
            <div className="rating d-flex align-items-center">
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <span className="ms-2">5.0</span>
            </div>

            </div>

        </div>
        <div className="review-content">
  
            <p>
                {displayedText} 
            </p>
            <a href="#" onClick={handleSeeMore} className="see-more">
                {showMore ? "See less" : "See more"} 
            </a>
        </div>
    </ListGroup.Item>

    <ListGroup.Item className="review-item mt-3">
        <div className="d-flex align-items-center mb-2">
            <div className="position-relative mr-2">
                <Image
                    src={("./..//images/Davis.png")}
                    alt="Client"
                    roundedCircle
                    className="client-photo ms-5"
                />
                {isOnline && (
                    <span
                        className="active-dot"
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

            <div className='ms-3' >
            <h5 className="card-title ms-2">Davis Mark</h5>
            <div className="rating d-flex align-items-center">
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaStar className="star-icon" style={{ color: "gold" }} />
                <FaRegStar className="star-icon" style={{ color: "gold" }} />
                <span className="ms-2">4.0</span>
            </div>

            </div>

        </div>
        <div className="review-content">
  
            <p>
                {displayedText} 
            </p>
            <a href="#" onClick={handleSeeMore} className="see-more">
                {showMore ? "See less" : "See more"} 
            </a>
        </div>
    </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>

        </div>
    )
}



export default Vendordetails