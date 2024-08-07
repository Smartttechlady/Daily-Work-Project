import React from 'react'
import "./Style.css"


function About() {


  return (
    <div className="about-us-container">

      <div>
      {/* <Navbar/>

       <Banner/> */}

      </div>

      

    <section className="container py-5">
      <div className="row align-items-center">
   
        <div className="col-md-6">
          <h2>About Daily Work</h2>
          <p className='about-text1'>
          Daily Work is a leading online platform for prompt, efficient solutions for all your home and office needs. Our space ensures that you have access to a network of reliable professionals who take pride in their work and are committed to meeting your needs with the highest standards of quality and care. Whether you require assistance with home repairs ( like a malfunctioning plug, a flickering light, plumbing issues etc), personal services, or any other task, our local experts are ready to provide outstanding service that exceeds your expectations.
          </p>
        </div>

        <div className="col-md-6">
          <img
            src={("./..//images/about us img.svg")}
            alt="About Us"
            className="about-img img-fluid"
          />
          <p className='about-text2'>
          Our process is straightforward, register and connect with our community as a client looking to get the best services around you or as a vendor ready to offer your professional skills and make money while you're at it!
          </p>
        </div>
      </div>
    </section>

    <section className="bg-light py-5 ">
      <div className="container bg-about2">
        <div className="row align-items-center">
          <div className="col-md-6 about-it">
            <h3 className='ms-3'>At Daily Work</h3>
            <button className='aboutbtn-line' ></button>
            <p className='ms-3 '>
              We Strictly Connect Competent Vendors To Fantastic Clients In Just Few Clicks
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={("./..//images/about us img2.svg")}
              alt="Daily Work"
              className="img-fluid about-img2 "
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default About