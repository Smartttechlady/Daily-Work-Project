import React, { useEffect, useState } from 'react'
import './Banner.css'
import { Carousel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';    


function Banner() {

  const images = [
    "./..//images/m7.png",
    "./..//images/m8.png",
    "./..//images/m6.png",
    "./..//images/m5.png",
    "./..//images/m2.png",
    "./..//images/m1.png",
 
  ];

  const [currentimg, setcurrentimg] = useState("./..//images/m7.png");
  const [index, setIndex] = useState(0);



  useEffect(() =>{

    let changeimg =  setInterval(() =>{
     
      let i = (index + 1) % images.length

      setcurrentimg(images[i]);

      setIndex((prev) => (prev +1) % images.length);


     
    }, 3000)

    return () => {
       clearInterval(changeimg) 
    }  

  }, [currentimg,  index])


  return (
    <div className="banner" style={{backgroundImage: `url(${currentimg})`}}> 

    <div className="banner-content" >
      <h1>Get Quality <span>Services</span>,<br />Right in Your Neighborhood</h1>
      <Form className="search-form">
        <Form.Control className='form-control' type="text" placeholder="Find any service here..." />
        <Button className='search-btn' variant="success" type="submit">Search</Button>
      </Form>
    </div>
  </div>
  )
}

export default Banner