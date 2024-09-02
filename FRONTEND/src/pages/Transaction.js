import React, { useState } from 'react';
import { Dropdown, DropdownButton, FormControl, InputGroup, Button, ListGroup, Badge, Row, Col, Container, Form, Table } from "react-bootstrap";
import { FaMicrophone, FaPlay, FaFile, FaDownload, FaImage } from "react-icons/fa";
import { FaSearch, FaEnvelope, FaBell, FaHeart, FaChevronLeft, FaFileUpload, FaChevronRight, FaStar, FaEllipsisV, FaPlus, FaPaperPlane } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import './Clientdashboard.css';
import './Transaction.css';

function Transaction() {

  const [activeNavItem, setActiveNavItem] = useState("Transaction");

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
        navigate("favourites");
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


  const isOnline = true;
  const [activeVendors, setActiveVendors] = useState([0, 2, 4]);



  const handleTopVendorClick = () => {
    navigate("/vendor-profile");
  };




  const [category, setCategory] = useState('Categories');
  const [startDate, setStartDate] = useState('4 Aug 2023');
  const [endDate, setEndDate] = useState('4 Aug 2024');
  const [entries, setEntries] = useState(10);
  
  const [transactions, setTransactions] = useState([
    {
      date: '12 Feb 2024',
      name: 'Amada Thompson',
      serviceType: 'Plumbering',
      jobStatus: 'In Progress',
      amount: '16,000:00',
      paymentStatus: 'Successful',
    },

    {
      date: '12 May 2024',
      name: 'Amada Thompson',
      serviceType: 'Electrical',
      jobStatus1: 'Failed',
      amount: '14,000:00',
      paymentStatus: 'Unsuccessful',
    },

    {
      date: '02 June 2024',
      name: 'Amada Thompson',
      serviceType: 'Markup',
      jobStatus1: 'Failed',
      amount: '10,000:00',
      paymentStatus: 'Successful',
    },


    {
      date: '02 June 2024',
      name: 'Amada Thompson',
      serviceType: 'Markup',
      jobStatus1: 'Failed',
      amount: '10,000:00',
      paymentStatus: 'Successful',
    },

    {
      date: '02 June 2024',
      name: 'Amada Thompson',
      serviceType: 'Markup',
      jobStatus1: 'Failed',
      amount: '10,000:00',
      paymentStatus: 'Successful',
    },
    

  ]);

  const handleCategoryChange = (selectedCategory) => setCategory(selectedCategory);
  const handleStartDateChange = (event) => setStartDate(event.target.value);
  const handleEndDateChange = (event) => setEndDate(event.target.value);
  const handleEntriesChange = (numEntries) => setEntries(numEntries);


  const [jobStatus, setJobStatus] = useState('In Progress'); // Default status

    const handleSelect = (status) => {
        setJobStatus(status);
      };


      







  return (
    <div>
       <Container fluid>
        <Row>
          {/* Left Sidebar */}
          <Col xs={12} md={3} lg={2} className="sidebar  left-bg bg-light p-3 mt-3">
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
          <Col xs={12} md={6} lg={8} className="p-3">
          <h2 className="text-right mt-5">Transaction</h2>
           <InputGroup className="mb-3 text-left ">
            <FormControl  placeholder="Search..." />                                                        
            <InputGroup.Text>
              <Button className='tran-search' variant="outline-secondary" >
                <FaSearch />
              </Button>
            </InputGroup.Text>
          </InputGroup>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Dropdown onSelect={handleCategoryChange}>
              <Dropdown.Toggle variant="success">
                {category}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Plumbing">Plumbing</Dropdown.Item>
                <Dropdown.Item eventKey="Electrician">Electrician</Dropdown.Item>
                <Dropdown.Item eventKey="Teaching">Teaching</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Form inline className='calendar'>
              <Form.Group controlId="formFromDate">
                <Form.Label className="mr-2">From</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </Form.Group>
              <Form.Group controlId="formToDate" className="ml-3">
                <Form.Label className="mr-2">To</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </Form.Group>
            </Form>
          </div>

          <Table bordered hover responsive>
            <thead >
              <tr className='tab-heading'>
                <th>Date</th>
                <th>Name</th>
                <th>Service Type</th>
                <th>Job Status</th>
                <th>Amount(N)</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>
                    <img
                      src={("./..//images/Amada.png")} alt="Profile" className="rounded-circle me-3 chat-profileimg"
                      alt="Vendor"
                      className="rounded-circle mr-2"
                      style={{ width: '30px', height: '30px' }}
                    />
                    {transaction.name}
                  </td>
                  <td>{transaction.serviceType}</td>
                  <td>
                  <DropdownButton
                    title={jobStatus}
                    variant="link"
                    className={`job-status ${jobStatus.toLowerCase().replace(' ', '-')}`}
                    onSelect={handleSelect}
                >
                    <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                    <Dropdown.Item eventKey="In Progress">In Progress</Dropdown.Item>
                    <Dropdown.Item eventKey="Failed">Failed</Dropdown.Item>
                </DropdownButton>
                  </td>
                  <td>{transaction.amount}</td>
                  <td className={transaction.paymentStatus === 'Successful' ? 'text-success' : 'text-danger'}>
                    {transaction.paymentStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table> 

          <div className="d-flex justify-content-between">
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
        </Col>



          {/* Right Sidebar */}
          <Col xs={12} md={3} lg={2} className="sidebar  right-bg bg-light p-3 mt-3">
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

export default Transaction