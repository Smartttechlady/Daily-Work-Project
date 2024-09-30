import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Dropdown, Form, Badge, InputGroup, FormControl, Image } from 'react-bootstrap';
import { FaSearch, FaEnvelope, FaBell, FaHeart, FaChevronLeft, FaFileUpload, FaChevronRight, FaStar, FaEllipsisV, FaPlus, FaPaperPlane, FaMicrophone, FaPlay, FaFile, FaDownload, FaImage, FaEdit } from "react-icons/fa";
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { PiChatDotsFill } from "react-icons/pi";
import { ChatDots } from 'react-bootstrap-icons';
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import './Settings';
import './Vendordashboard.css';






function Settings2() {
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


    const [isEditingServices, setIsEditingServices] = useState(false);
    const [isEditingData, setIsEditingData] = useState(false);
    const [isEditingPortfolio, setIsEditingPortfolio] = useState(false);
    const [isEditingPricing, setIsEditingPricing] = useState(false);

    const [services, setServices] = useState(["Education", "Lesson Teacher"]);
    const [selectedCategory, setSelectedCategory] = useState("Education");
    const [selectedService, setSelectedService] = useState("Lesson Teacher");

    const [profileInfo, setProfileInfo] = useState({
        name: "Fisayo Valerie Omotosho",
        phone1: "+234 8078654331",
        address1: "5, Westlife street",
        address2: "Omole Phase 1",
        id: "25608432679",
        contactName: "Omobola Martins",
        phone2: "+234 8078467543",
        email: "omomartins@gmail.com",
        relationship: "Sister",
        contactAddress: "2, Solidrock street, Ojodu Berger",
        profilePhoto: "/path/to/photo.jpg",
    });

    const [portfolio, setPortfolio] = useState({
        text1: "This recognition is a testament to my commitment...",
        image1: "/path/to/certificate.jpg",
        text2: "I am dedicated to helping my students excel...",
        image2: "/path/to/teaching.jpg",
        image3: "/path/to/anotherimage.jpg",
    });

    const [pricing, setPricing] = useState("N10,000:00");

    const handleServiceChange = (index, value) => {
        const newServices = [...services];
        newServices[index] = value;
        setServices(newServices);
    };

    const handleProfileChange = (key, value) => {
        setProfileInfo({ ...profileInfo, [key]: value });
    };

    const handlePortfolioChange = (key, value) => {
        setPortfolio({ ...portfolio, [key]: value });
    };

    const handlePricingChange = (value) => {
        setPricing(value);
    };

    const handlePublish = () => {
        // Handle publish logic
        alert("Information published!");
    };






    const fileInputRef = useRef(null);

   
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          
            const newPhotoUrl = URL.createObjectURL(file);
            handleProfileChange("profilePhoto", newPhotoUrl);

            
            uploadFileToServer(file);
        }
    };

    const handleImageClick = () => {
        if (isEditingData && fileInputRef.current) {
            fileInputRef.current.click();
        }
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
                                <a className="nav-link text-white" href="/Settings2" onClick={() => handleNavClick('settings')}>
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
                                        <Button variant="" size="sm" className="contact-btn" >
                                            Contact Us
                                        </Button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Main Area */}
                    <Col xs={12} md={8} className="main-content p-3 overflow-auto">
                        <div className="text-center py-4">
                            <div className="d-flex align-items-center">
                                {/* <FaChevronLeft className="mr-auto" /> */}
                                <h2 className="mx-auto">Profile Settings</h2>
                            </div>
                            <Image src={("./..//images/Daily work logo 3.svg")} className="settings-logo" />
                        </div>

                        {/* Add Services Section */}
                        <section className="my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Add Services</h3>
                                <Button variant="link" onClick={() => setIsEditingServices(!isEditingServices)}>
                                    Edit <FaEdit />
                                </Button>
                            </div>
                            {services.map((service, index) => (
                                <div key={index}>
                                    {isEditingServices ? (
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                {service}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {/* Example Categories */}
                                                <Dropdown.Item onClick={() => handleServiceChange(index, "New Service 1")}>
                                                    New Service 1
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleServiceChange(index, "New Service 2")}>
                                                    New Service 2
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    ) : (
                                        <Form.Control type="text" value={service} readOnly />
                                    )}
                                </div>
                            ))}
                        </section>

                        {/* Data Capturing Section */}
                        <section className="my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Data Capturing</h3>
                                <Button variant="link" onClick={() => setIsEditingData(!isEditingData)}>
                                    Edit <FaEdit />
                                </Button>
                            </div>
                            <div className="text-center my-3">
                            <Image
                                src={profileInfo.profilePhoto}
                                roundedCircle
                                onClick={handleImageClick}
                                style={{ cursor: isEditingData ? "pointer" : "default" }}
                                className='settings-photo-profile'
                            />

                            {/* Hidden file input element */}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: "none" }}  // Hide the file input element
                            />
                            </div>
                            {Object.keys(profileInfo).map(
                                (key, index) =>
                                    key !== "profilePhoto" && (
                                        <Form.Control
                                            key={index}
                                            type="text"
                                            value={profileInfo[key]}
                                            onChange={(e) => handleProfileChange(key, e.target.value)}
                                            readOnly={!isEditingData}
                                            className="my-2"
                                        />
                                    )
                            )}
                        </section>

                        {/* Portfolio Section */}
                        <section className="my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Portfolio</h3>
                                <Button variant="link" onClick={() => setIsEditingPortfolio(!isEditingPortfolio)}>
                                    Edit <FaEdit />
                                </Button>
                            </div>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={portfolio.text1}
                                onChange={(e) => handlePortfolioChange("text1", e.target.value)}
                                readOnly={!isEditingPortfolio}
                                className="my-2"
                            />
                          <Image
                                src={profileInfo.profilePhoto}
                                roundedCircle
                                onClick={handleImageClick}
                                style={{ cursor: isEditingData ? "pointer" : "default" }}
                            />

                            {/* Hidden file input element */}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: "none" }}  // Hide the file input element
                            />
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={portfolio.text2}
                                onChange={(e) => handlePortfolioChange("text2", e.target.value)}
                                readOnly={!isEditingPortfolio}
                                className="my-2"
                            />
                            <Image
                                src={profileInfo.profilePhoto}
                                roundedCircle
                                onClick={handleImageClick}
                                style={{ cursor: isEditingData ? "pointer" : "default" }}
                            />

                            {/* Hidden file input element */}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: "none" }}  // Hide the file input element
                            />

                            <Image
                                src={profileInfo.profilePhoto}
                                roundedCircle
                                onClick={handleImageClick}
                                style={{ cursor: isEditingData ? "pointer" : "default" }}
                            />

                            {/* Hidden file input element */}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: "none" }}  // Hide the file input element
                            />

                        </section>

                        {/* Pricing Section */}
                        <section className="my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Pricing</h3>
                                <Button variant="link" onClick={() => setIsEditingPricing(!isEditingPricing)}>
                                    Edit <FaEdit />
                                </Button>
                            </div>
                            <Form.Control
                                type="text"
                                value={pricing}
                                onChange={(e) => handlePricingChange(e.target.value)}
                                readOnly={!isEditingPricing}
                            />
                        </section>

                        {/* Publish Button */}
                        <div className="text-center my-4">
                            <Button variant="success" onClick={handlePublish}>
                                Publish
                            </Button>
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

export default Settings2
