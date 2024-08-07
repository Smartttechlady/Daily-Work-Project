import { React, useState, useEffect } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Banner from './../Component/Banner'
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {


  {/* // Start Category Section  */ }

  const categories = [
    { name: 'Housekeeping', icon: 'bi bi-bucket' },
    { name: 'Education', icon: 'bi bi-mortarboard' },
    { name: 'Engineering & Repairs', icon: 'bi bi-tools' },
    { name: 'Transport', icon: 'bi bi-truck' },
    { name: 'Health & Fitness', icon: 'bi bi-heart-pulse' },
    { name: 'Beauty', icon: 'bi bi-flower3' },
    { name: 'Real Estate', icon: 'bi bi-building' },
    { name: 'Construction', icon: 'bi bi-cone-striped' },
    { name: 'Event & Entertainment', icon: 'bi bi-music-note-beamed' },
    { name: 'Agriculture', icon: 'bi bi-tree' },
    { name: 'Catering', icon: 'bi bi-cup' },
    { name: 'Marketing', icon: 'bi bi-graph-up' },
  ];

  {/* // End Category Section  */ }



  // Start Popular Section

  const services = [
    { name: 'Carpentry', image: 'carpentry1.svg', bgColor: '#e26b00' },
    { name: 'Plumbering', image: 'plumbering.svg', bgColor: '#007bff' },
    { name: 'Electrical', image: 'electrical.svg', bgColor: '#ffcd00' },
    { name: 'Hair Dressing', image: 'hairdressing.svg', bgColor: '#ff4d4d' },
    { name: 'Makeup', image: 'makeup.svg', bgColor: '#6c757d' },
    { name: 'Teaching', image: 'teaching.svg', bgColor: '#198754' },
    { name: 'Photography', image: 'photography.svg', bgColor: '#276677' },
    { name: 'Electrical', image: 'electrical.svg', bgColor: '#ffcd00' },
    { name: 'Hair Dressing', image: 'hairdressing.svg', bgColor: '#ff4d4d' },
    { name: 'Makeup', image: 'makeup.svg', bgColor: '#6c757d' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoScroll); 
  }, []);


  //End Popular Section





  //  Start testimonial section 




  const testimonials = [
    {
      image: './..//images/T1.svg', 
      text: '"Partnering with Daily Work has significantly boosted my business. As an electrician, I now receive regular job requests from local customers who trust the platform to find reliable professionals. Its a fantastic way to connect with the community and grow my client base."',
    },

    {
      image: './..//images/T2.svg', 
      text: '"Using Daily Work was a game-changer for me. I needed someone to do some carpentry work, and within minutes, I connected with a skilled vendor who did an amazing job. The process was seamless, and I felt confident knowing I was hiring a trusted local professional."',
    },

    {
      image: './..//images/T3.svg',  
      text: '"Joining Daily Work has been one of the best decisions for my cleaning business. The platform makes it easy for customers to find and book my services, and I have seen a noticeable increase in bookings. It is a great way to showcase my skills and connect with clients who value quality work."',
    },

    {
      image: './..//images/T4.svg',  
      text: '"My team and I had been struggling to find a reliable plumber for our office, but thanks to Daily Work, we found an expert right in the neighborhood. The service was prompt, professional, and exceeded our expectations. Highly recommend this platform to anyone in need of quality local services!"',
    },



  ];


  const [presentIndex, setPresentIndex] = useState(0);

  const nextTestimonial = () => {
    if (presentIndex < testimonials.length - 1) {
      setPresentIndex(presentIndex + 1);
    } else {
      setPresentIndex(0);
    }
  };

  const previousTestimonial = () => {
    if (presentIndex > 0) {
      setPresentIndex(presentIndex - 1);
    } else {
      setPresentIndex(testimonials.length - 1);
    }
  };

  //  End testimonial section 















  return (
    <div className=''>

      {/* Start banner */}
      <div className=' container banner' >

      <Navbar/>

      <Banner/>

      </div>

      {/* End banner */}




      {/* // Start Section 1 */}

      <Container className="feature-section  " >



        <Row className=" sec-1 align-items-center ">

          <Col md={6}>
            <h2 className='mb-5'>Discover the best Vendor around you.</h2>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <i className="bi bi-person-plus-fill feature-icon"></i>
                <div>
                  <h5>Register For Free</h5>
                  <p>Sign up for free and connect with skilled local vendors and service providers.</p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <i className="bi bi-search feature-icon"></i>
                <div>
                  <h5>Browse and Connect With Vendor</h5>
                  <p>Explore and choose the vendor within your area that perfectly fits your service requirements.</p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <i className="bi bi-card-checklist feature-icon"></i>
                <div>
                  <h5>Book For A Service</h5>
                  <p>Book for a service effortlessly and get the help you need with just a few clicks.</p>
                </div>
              </li>
            </ul>
      
            <div className="d-flex">
            <button className="btn me-2  sec1-btn1">Join Daily Work</button>
            <button className="btn sec1-btn2 ">Learn How to Book</button>
          </div>
          </Col>

          <Col md={6} className="text-center">
            <img src={("./..//images/client.png")} alt="Service" className="img-fluid feature-img" />
          </Col>

        </Row>
      </Container>

      {/* // End Section 1 */}





      {/* // Start Category Section  */}

      <div className=" container-fluid category-section">

        <div className='container' >
          <h2 className="text-left mb-5 mt-5">Browse services by category</h2>
          <div>


            <Row>
              {categories.map((category, idx) => (
                <Col key={idx} xs={6} sm={4} md={2} className="text-center mb-4 category">
                  <Link className="category-item">
                    <i className={`${category.icon} category-icon`}></i>
                    <hr className="category-line" />
                    <p>{category.name}</p>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>

      </div>

      {/* // End Category Section  */}






      {/* // Start Popular Section  */}


      <div className="popular-services-section ">
        <h2 className="text-left mb-5 container">Popular services</h2>
        <div className="carousel-container">
          <Button variant="dark" className="carousel-control-prev btn-control" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </Button>
          <div className="carousel-wrapper">
            <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
              {services.map((service, idx) => (
                <div key={idx} className="service-card" style={{ backgroundColor: service.bgColor }}>
                  <img src={`./..//images/${service.image}`} alt={service.name} />
                  <div className="service-caption">
                    <h3 className='pop-h3' >{service.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button variant="dark" className="carousel-control-next btn-control" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </Button>
        </div>
      </div>


      {/* // End Popular Section  */}




      {/* Start efficient services         */}

      <section className="container doorstep">
        <h2 className="text-left ">Easy and efficient services at your doorstep</h2>
        <div className="row 4steps">
          <div className="col-md-6 col-lg-3 text-center icon">
            <img src={("./..//images/icon 1.svg")} alt="Icon 1" className="mb-3" />
            <h5>More than 100 services available</h5>
            <p>We cater to a wide range of needs, ensuring you can find the perfect solution for any task. We have a qualified professional ready to assist you.</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center icon">
            <img src={("./..//images/icon 2.svg")} alt="Icon 2" className="mb-3" />
            <h5>Transparent pricing from the start</h5>
            <p>Payment is only released to the vendor once you confirm that the work has been completed to your satisfaction.</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center icon">
            <img src={("./..//images/icon 3.svg")} alt="Icon 3" className="mb-3" />
            <h5>Quality services from competent vendors</h5>
            <p>Experience top-notch services delivered by highly skilled and competent vendors.</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center icon">
            <img src={("./..//images/icon 4.svg")} alt="Icon 4" className="mb-3" />
            <h5>24/7 award-winning support</h5>
            <p>Our experienced team are always available to assist you with any issues, ensuring prompt and efficient service at any time of the day.</p>
          </div>
        </div>
      </section>


      {/* End efficient services         */}




      {/* Start vendor section */}

      <section className="container vendor">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0 vendor1">
            <img
              src={("./..//images/vendor1.png")}
              alt="Vendor"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-8 vendor-bg  rounded">
            <div className="p-4  text-white rounded ">
              <h6 className="text-uppercase">For vendor</h6>
              <button className='btn-line' ></button>
              <h2 className="mb-4">Find your service</h2>
              <p>Connect with clients in your community who are eager for your services, and use their feedback to elevate your business.</p>
              <hr className="my-4" />
              <div className="row">
                <div className="col-12 col-md-4">
                  <p>Make your service visible to those seeking for it.</p>
                </div>
                <div className="col-12 col-md-4">
                  <p>Get job alerts based on your business offering and location.</p>
                </div>
                <div className="col-12 col-md-4">
                  <p>Complete jobs, receive payment directly through the app.</p>
                </div>
              </div>
              <button className="btn btn-warning mt-3">Join Daily Work</button>
            </div>
          </div>
        </div>
      </section>


      {/* End vendor section */}







      {/* Start map section */}

      <section className="container py-5 map-section">
        <h2 className="text-left mb-4">Connect with vendors in your area</h2>
        <div className="row justify-content-center">
          <div className="col-12">
            <img
              src={("./..//images/map.svg")}
              alt="Map"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* End map section */}






      {/* 
    Start testimonial section */}

      <section className="container py-5 testimonial-section">
        <h2 className="text-left mb-4">What they're saying about Daily Work</h2>
        <div className="testimonial-wrapper">
          <button className="scroll-button left" onClick={previousTestimonial}>‹</button>
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-item ${index === presentIndex ? 'active' : ''}`}>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={testimonial.image}
                      alt="Testimonial"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="testimonial-text">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-button right" onClick={nextTestimonial}>›</button>
        </div>
      </section>

      {/* End testimonial section */}




      {/* Start News section */}

      <section className="container my-5 news-section">
      <div className="row justify-content-center ">
        <div className="col-lg-8 col-md-10 ">
          <div className="card news-card p-4">
            <h4 className="card-title">What’s New In Lagos</h4>
            <button className='btn-line2' ></button>
            <p className="card-text">
              “Lagos State Launches Palative Initiative to Support Service Providers Amidst Economic Challenges.”
            </p>
            <button className="btn btn-outline-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>

     {/* End News section */}







    </div>

  )
}

export default Home