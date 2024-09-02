import React, { useState } from 'react';
import { Button, Form, Dropdown, Image, Card, Modal, Emoji } from "react-bootstrap";
import { FaImage, FaMicrophone, FaFile, FaVideo, FaTimes, FaSmile } from "react-icons/fa";

const Createpost = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [pricing, setPricing] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedVoiceNote, setUploadedVoiceNote] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [description, setDescription] = useState("");

  const categories = [" HouseKeeping", "InstallationOrRepairs", "HealthAndFitness", "Education", "Transport", "Beauty", "RealEstate", "Catering", "EventAndEntertainment", "Agriculture", "Marketing", "Technology"];
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
  const locations = ["Ikeja", "Yaba", "Lekki", "Surulere", "Victoria Island"];

  const handleFileUpload = (setFile) => (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleVoiceNoteUpload = () => {
    // Logic for recording and saving voice note
    alert("Voice note recorded successfully!");
  };

  const handlePost = () => {
    // Logic to handle posting
    alert("Post successful!");
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <Image src={("./..//images/Daily work logo 3.svg")} alt="Daily Work Logo" />
        <h2>Create Post</h2>
      </div>

      <Form>
        <Form.Group>
          <Form.Label>Category:</Form.Label>
          <Dropdown onSelect={setSelectedCategory}>
            <Dropdown.Toggle variant="secondary" id="category-dropdown">
              {selectedCategory || "Select a category"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((category, index) => (
                <Dropdown.Item key={index} eventKey={category}>
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group>
          <Form.Label>Service:</Form.Label>
          <Dropdown onSelect={setSelectedService}>
            <Dropdown.Toggle variant="secondary" id="service-dropdown" disabled={!selectedCategory}>
              {selectedService || "Select a service"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {services[selectedCategory]?.map((service, index) => (
                <Dropdown.Item key={index} eventKey={service}>
                  {service}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group>
          <Form.Label>Pricing:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Specify minimum your rate."
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Landmark:</Form.Label>
          <Dropdown onSelect={setSelectedLocation}>
            <Dropdown.Toggle variant="secondary" id="location-dropdown">
              {selectedLocation || "Select location"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {locations.map((location, index) => (
                <Dropdown.Item key={index} eventKey={location}>
                  {location}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <div className="d-flex justify-content-between mb-3">
          {/* Image Upload Card */}
          <Card style={{ width: '23%' }}>
            <Card.Body className="text-center">
              {uploadedImage ? (
                <>
                  <Image src={uploadedImage} thumbnail />
                  <FaTimes
                    className="close-icon"
                    onClick={() => setUploadedImage(null)}
                    style={{ cursor: "pointer", position: "absolute", top: 10, right: 10 }}
                  />
                </>
              ) : (
                <>
                  <FaImage size={40} />
                  <Form.File
                    label="Upload Image"
                    custom
                    onChange={handleFileUpload(setUploadedImage)}
                    style={{ display: "none" }}
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="mt-2" style={{ cursor: "pointer" }}>
                    Upload Image
                  </label>
                </>
              )}
            </Card.Body>
          </Card>

          {/* Voice Note Card */}
          <Card style={{ width: '23%' }}>
            <Card.Body className="text-center">
              {uploadedVoiceNote ? (
                <>
                  <FaMicrophone size={40} onClick={() => alert("Playing voice note...")} />
                  <FaTimes
                    className="close-icon"
                    onClick={() => setUploadedVoiceNote(null)}
                    style={{ cursor: "pointer", position: "absolute", top: 10, right: 10 }}
                  />
                </>
              ) : (
                <>
                  <FaMicrophone size={40} />
                  <label
                    onClick={handleVoiceNoteUpload}
                    className="mt-2"
                    style={{ cursor: "pointer" }}
                  >
                    Add Voice Note
                  </label>
                </>
              )}
            </Card.Body>
          </Card>

          {/* File Upload Card */}
          <Card style={{ width: '23%' }}>
            <Card.Body className="text-center">
              {uploadedFile ? (
                <>
                  <FaFile size={40} />
                  <FaTimes
                    className="close-icon"
                    onClick={() => setUploadedFile(null)}
                    style={{ cursor: "pointer", position: "absolute", top: 10, right: 10 }}
                  />
                </>
              ) : (
                <>
                  <FaFile size={40} />
                  <Form.File
                    label="Upload File"
                    custom
                    onChange={handleFileUpload(setUploadedFile)}
                    style={{ display: "none" }}
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="mt-2" style={{ cursor: "pointer" }}>
                    Upload File
                  </label>
                </>
              )}
            </Card.Body>
          </Card>

          {/* Video Upload Card */}
          <Card style={{ width: '23%' }}>
            <Card.Body className="text-center">
              {uploadedVideo ? (
                <>
                  <video width="100%" controls>
                    <source src={uploadedVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <FaTimes
                    className="close-icon"
                    onClick={() => setUploadedVideo(null)}
                    style={{ cursor: "pointer", position: "absolute", top: 10, right: 10 }}
                  />
                </>
              ) : (
                <>
                  <FaVideo size={40} />
                  <Form.File
                    label="Upload Video"
                    custom
                    onChange={handleFileUpload(setUploadedVideo)}
                    style={{ display: "none" }}
                    id="video-upload"
                  />
                  <label htmlFor="video-upload" className="mt-2" style={{ cursor: "pointer" }}>
                    Upload Video
                  </label>
                </>
              )}
            </Card.Body>
          </Card>
        </div>

        <Form.Group>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Write detailed description for this post ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FaSmile className="emoji-icon" style={{ cursor: "pointer", position: "absolute", right: 30, bottom: 15 }} onClick={() => alert("Display emojis")} />
        </Form.Group>

        <div className="text-center mt-4">
          <Button variant="secondary" className="mr-3" onClick={() => window.history.back()}>
            Cancel
          </Button>
          <Button variant="success" onClick={handlePost}>
            Post
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Createpost;
