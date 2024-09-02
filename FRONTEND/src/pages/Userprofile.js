import React from "react";
import { Image, Form, Container } from "react-bootstrap";
import './Style.css'


const Userprofile = () => {
  // Mock user data
  const userData = {
    userID: "ID0835297",
    name: "Fisayo Valerie Omotosho",
    address: ["5, Westlife street", "Omole Phase 1"],
    profilePicture: "./..//images/fisayo.png"
  };

  return (
    <Container className="my-5 d-flex flex-column align-items-center">
         <button className="btn btn-link text-dark back-userprofile" onClick={() => window.history.back()}>Back</button>
      {/* Logo */}
      <Image
        src={("./..//images/Daily work logo 3.svg")}
        alt="Daily Work Logo"
        className="mb-4"
        style={{ maxWidth: "100px" }}
      />

      {/* Profile Picture */}
      <div className="mb-4">
        <Image
          src={userData.profilePicture}
          alt="Profile"
          roundedCircle
          style={{
            width: "150px",
            height: "150px",
            border: "5px solid #FFC107", // Yellow border color
            padding: "5px"
          }}
        />
      </div>

      {/* User ID */}
      <Form.Group className="w-75">
        <Form.Label>User ID:</Form.Label>
        <Form.Control type="text" value={userData.userID} readOnly />
      </Form.Group>

      {/* Name */}
      <Form.Group className="w-75">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" value={userData.name} readOnly />
      </Form.Group>

      {/* Address */}
      {userData.address.map((line, index) => (
        <Form.Group className="w-75" key={index}>
          <Form.Label>{index === 0 ? "Address:" : null}</Form.Label>
          <Form.Control type="text" value={line} readOnly />
        </Form.Group>
      ))}
    </Container>
  );
};

export default Userprofile;
