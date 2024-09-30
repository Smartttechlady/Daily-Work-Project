import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown, Image, Modal, Emoji } from "react-bootstrap";
import { FaImage, FaVideo, FaSmile, FaMicrophone, FaTimes, FaPlay, FaFile } from "react-icons/fa";
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './Createpost.css';

const emojiList = ["😀", "😃", "😂", "🤣", "😍", "😘", "😎", "😢", "🥳"];


function Createpost() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [pricing, setPricing] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedVoiceNote, setUploadedVoiceNote] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const audioChunks = useRef([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [description, setDescription] = useState("");
  const [showEmojis, setShowEmojis] = useState(false); // Control emoji list visibility
  const [text, setText] = useState(""); // Manage text in the textarea
  const [cursorPosition, setCursorPosition] = useState(0); // Track cursor position

  const navigate = useNavigate()

  // Function to insert emoji at the cursor position
  const insertEmoji = (emoji) => {
    const start = text.slice(0, cursorPosition);
    const end = text.slice(cursorPosition);
    setText(start + emoji + end);
    setShowEmojis(false); // Hide emoji list after selection
  };

  // Handle text input and update cursor position
  const handleInputChange = (e) => {
    setText(e.target.value);
    setCursorPosition(e.target.selectionStart); // Get the cursor position
  };

  // Handle cursor position update when user clicks inside the textarea
  const handleCursorUpdate = (e) => {
    setCursorPosition(e.target.selectionStart);
  };
  

  const categories = ["HouseKeeping", "InstallationOrRepairs", "HealthAndFitness", "Education", "Transport", "Beauty", "RealEstate", "Catering", "EventAndEntertainment", "Agriculture", "Marketing", "Technology"];
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




  const handleStartRecording = () => {
    setIsRecording(true);

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };

      recorder.start();
    }).catch((error) => {
      console.error("Error accessing microphone:", error);
      setIsRecording(false);
    });
  };

  const handleStopRecording = () => {
    if (!mediaRecorder) {
      console.error("No mediaRecorder instance to stop.");
      return;
    }

    setIsRecording(false);


    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
      setUploadedVoiceNote(audioBlob);


      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = () => {
        localStorage.setItem('savedVoiceNote', reader.result);
      };

      audioChunks.current = [];
    };
  };


  const playSavedVoiceNote = () => {
    const savedAudio = localStorage.getItem('savedVoiceNote');
    if (savedAudio) {
      const audio = new Audio(savedAudio);
      audio.play();
    } else {
      alert("No saved voice note found.");
    }
  };




 function handlePost(e) {
  e.preventDefaut()

  let id = localStorage.getItem('id')

  let data = new FortmData(e.currentTarget)

  axios.post(`http://localhost:8000/createpost/$[id]`, data)
    .then((res) => {
      alert("Post created successfully")
      navigate('/allpost')
    })

    .catch((err) => {
      for (let key in err.response.data){
        alert(`${key} ${err.response.data[key]}`)
      }
    })
 }







  return (
    <div>
      <div className="container my-5 create-post-container">
        <div className="text-center mb-4">
          <Image src={("./..//images/Daily work logo 3.svg")} alt="Daily Work Logo" />
          <h2>Create Post</h2>
        </div>

        <Form onSubmit={handlePost} id='form'>

          {/* Category Dropdown */}

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
              type="number"
              name='minPrice'
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

          <div className="d-flex justify-content-between mb-3 mt-5">
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
                    <input type="file"
                      // label="Upload Image"
                      name='images'

                      multiple 
                      // custom
                      // onChange={handleFileUpload(setUploadedImage)}
                      // style={{ display: "none" }}
                      // id="image-upload"
                    />
                    <label htmlFor="image-upload" className="mt-2" style={{ cursor: "pointer" }}>
                      Upload Image
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
                    <p><p>{`${uploadedFile.name} (${(uploadedFile.size / 1024).toFixed(2)} KB)`}</p></p>
                    <FaTimes
                      className="close-icon"
                      onClick={() => setUploadedFile(null)}
                      style={{ cursor: "pointer", position: "absolute", top: 10, right: 10 }}
                    />
                  </>
                ) : (
                  <>
                    <FaFile size={40} />
                    <input
                      type="file"
                      label="Upload File"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setUploadedFile(file); 
                      }}
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
            {/* Voice Note Card */}
            <Card style={{ width: '23%' }}>
              <Card.Body className="text-center">
                {uploadedVoiceNote ? (
                  <>
                    <FaMicrophone size={40} color="green" />
                    <FaPlay
                      size={40}
                      style={{ cursor: "pointer", marginTop: 10 }}
                      onClick={playSavedVoiceNote}
                    />
                    <FaTimes
                      className="close-icon"
                      onClick={() => {
                        setUploadedVoiceNote(null);
                        localStorage.removeItem('savedVoiceNote');  
                      }}
                      style={{ cursor: "pointer", position: "absolute", top: 10, right: 10 }}
                    />
                  </>
                ) : (
                  <>
                    <FaMicrophone
                      size={40}
                      color={isRecording ? "red" : "black"}
                      style={{ cursor: "pointer" }}
                      onMouseDown={handleStartRecording}
                      onMouseUp={handleStopRecording}
                    />
                    <label
                      className="mt-2"
                      style={{ cursor: "pointer" }}
                    >
                      Hold to Record
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
                    <input type="file"

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
                rows="4"
                cols="40"
              placeholder="Write detailed description for this post ..."
              name='description'
              value={text}
              onChange={handleInputChange}
              onClick={handleCursorUpdate}
              style={{ width: "100%", padding: "10px" }}
            />
            <FaSmile className="emoji-icon" style={{ cursor: "pointer", position: "absolute"}} onClick={() => setShowEmojis(!showEmojis)} />
             
      {showEmojis && (
        <div
          className="emoji-list"
          style={{
            position: "absolute",
            top: "50px",
            right: "10px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {emojiList.map((emoji, index) => (
            <span
              key={index}
              style={{ cursor: "pointer", fontSize: "20px", margin: "5px" }}
              onClick={() => insertEmoji(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
          </Form.Group>

          <div className="text-center mt-4 post-btn">
            <Button variant="secondary" className="mr-3" onClick={() => window.history.back()}>
              Cancel
            </Button>
            <Button variant="success" type='submit'>
              Publish
            </Button>
          </div>
        </Form>
      </div>
    </div>


  )
}

export default Createpost
