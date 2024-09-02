
import React, { useState } from 'react'
import { Button, Container, Form, ProgressBar } from 'react-bootstrap'
import './Style.css'

function Profilesettings() {



  // Start step 1

  const [step, setStep] = useState(1);

  const serviceData = {
    "HouseKeeping": ["House Cleaning", "Office Cleaning", "Laundry", "Gutter Cleaning", "Market Shopping"],
    "Installation/Repairs": ["Plumbering", "Carpentry", "Generator Repair", "Solar/Inverter Services", "Gas Cooker Repair", "Television Services", " Refrigeriator Services",
      "Fan/AC Services", "Weldering", "Car Mechanic", "Wiring", "Lighting Installation", "Home Appliances Repair", "Satellite TV Installation", "Bricklayer", "House Painter",
      "Floor Installation", "wallpaper installation", "Window-Blind Installation", "Roof Installation & Repair", "Door installation & Repair", "Screeding Services",
      "Tiles Installation & Repair", "Gypsum Board Ceiling Installation", " Cabinet Installation", "Smart Home Installation", "Glass Work Service", "Pool Installation"],
    "Event & Entertainment": ["Wiring", "Lighting Installation", "Electrical Repairs"],
    "Health & Fitness": ["Fitness Trainer", "Nutritionist", "Gym Services", "Carers", "Nurse"],
    "Education": ["Lesson Teacher", "Business Coach", "Skill Tutor", "Mentorship"],
    "Transport": ["Personal Driver", "Truck Services", "Delivering Services", " Bus Travel Services", "Travel Services"],
    "Beauty": ["Makeup Service", "Tailoring", "Babbing", "Skin Care/ Spa Services", "Micro Blading", "Hair Making", "Pedicure & Manicure", "Tatoo Service", "Modelling",],
    "Real Estate": ["House Agent", "House Developer", "House Manager", "Architect", "House Packing Mover"],
    "Catering": ["Small Shop Services", "Cake Making", "Drink Services", "Party Catering Services", "Abattoir Services",],
    "Event & Entertainment": ["Social Media Services", "Brand Influencer", "Ushering Event Services", "DJ Services", "Comendian Services", "Event Planning", "Party Souvenir Services", "Photography", "Cinematography", "Bouncers"],
    "Agriculture": ["Tree Trimming Services", "Lawn-Care Services", "Fertilizer Services", "Garden Services"],
  };

  const [services, setServices] = useState([]);


  const [formData, setFormData] = useState({
    serviceCategory: '',
    service: '',
  });


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({
      ...formData,
      serviceCategory: selectedCategory,
      service: ''
    });
    setServices(serviceData[selectedCategory] || []);
  };

  const handleServiceChange = (e) => {
    setFormData({
      ...formData,
      service: e.target.value
    });
  };

  // End step 1


  // Start step 2
  const provinces = [
    "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa",
    "Badagry", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye",
    "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland",
    "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"
  ];



  const [formData2, setFormData2] = useState({

    profilePhoto: null,
    bio: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    province: '',
    nin: '',
    BankName: '',
    AccountNumber: '',
    nextOfKin: {
      name: '',
      phone: '',
      email: '',
      relationship: '',
      address: ''
    }
  });



  const handlePhotoUpload = (e) => {
    setFormData2({
      ...formData2,
      profilePhoto: e.target.files[0]
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value
    });
  };

  const handleNextOfKinChange = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      nextOfKin: {
        ...formData2.nextOfKin,
        [name]: value
      }
    });
  };


  // End step 2
  // const nextStep = () => {
  //   setStep(step + 1);
  // };

  // const prevStep = () => {
  //   setStep(step - 1);
  // };



  // Start step 3

  // const [step3, setStep3] = useState(3); // Change the initial step to 3 for demo purposes
  const [portfolioEntries, setPortfolioEntries] = useState([{ description: '', image: null }]);
  const [banner, setBanner] = useState(null);

  const handlePortfolioChange = (index, event) => {
    const values = [...portfolioEntries];
    if (event.target.name === 'description') {
      values[index].description = event.target.value;
    } else {
      values[index].image = event.target.files[0];
    }
    setPortfolioEntries(values);
  };

  const handleAddPortfolio = () => {
    setPortfolioEntries([...portfolioEntries, { description: '', image: null }]);
  };

  const handleBannerUpload = (event) => {
    setBanner(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Portfolio Entries:', portfolioEntries);
    console.log('Banner:', banner);
  };


  // End step 3


  // Start step 4

  const [minimumRate, setMinimumRate] = useState('');
  const [serviceFee, setServiceFee] = useState(0);
  const [youGet, setYouGet] = useState(0);
  // const navigate = useNavigate();

  const handleMinimumRateChange = (e) => {
    const rate = parseFloat(e.target.value) || 0;
    setMinimumRate(rate);
    const fee = rate * 0.2;
    setServiceFee(fee);
    setYouGet(rate - fee);
  };

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    // Save form data to localStorage or state management
    // navigate('/summary');
  };

  // End step 4









  return (

    <Container className="">

      <div className='portfolio-header'>
        <img className='img-fluid signup-img' src={("./..//images/vendors.svg")} alt="" />
        <button className="btn btn-link text-dark back-btn" onClick={() => window.history.back()}>Back</button>
      </div>

      <ProgressBar now={(step / 4) * 100} label={`Step ${step}`} className="mb-4 " />
      {step === 1 && (
        <div>
          <h2 className="mb-4 mt-5">Complete your Registration</h2>
          <h4>Add Services</h4>
          <p>What services do you provide? You can add multiple services</p>
          <Form>
            <Form.Group controlId="serviceCategory" className="mb-3 mt-5">
              <Form.Label>Service Category</Form.Label>
              <Form.Control as="select" value={formData.serviceCategory} onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                {Object.keys(serviceData).map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="service" className="mb-3">
              <Form.Label>Choose Service</Form.Label>
              <Form.Control as="select" value={formData.service} onChange={handleServiceChange} disabled={!formData.serviceCategory}>
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button className='mb-5 mt-3 step1-btn' variant="primary" onClick={nextStep}>Next</Button>
          </Form>
        </div>
      )}




      {step === 2 && (
        <div>
          <div>
            <h2 className="mb-4 mt-5">Complete your Registration</h2>
            <h4>Data Capture</h4>
            <p>Enter your Profile</p>
            <Form>
              <Form.Group controlId="profilePhoto" className="mb-3 mt-5">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control type="file" onChange={handlePhotoUpload} required />
              </Form.Group>
              <Form.Group controlId="bio" className="mb-3">
                <Form.Label>Write a bio to tell the world about yourself</Form.Label>
                <Form.Control as="textarea" rows={3} name="bio" value={formData2.bio} onChange={handleInputChange} required />
                <Form.Text className="text-muted">
                  At least 100 characters
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="fullName" className="mb-3">
                <Form.Label>Enter your Full Name</Form.Label>
                <Form.Control type="text" name="fullName" value={formData2.fullName} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="phoneNumber" className="mb-3">
                <Form.Label>Enter a valid Phone Number</Form.Label>
                <Form.Control type="text" name="phoneNumber" value={formData2.phoneNumber} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="address" className="mb-3">
                <Form.Label>Add your Residential Address</Form.Label>
                <Form.Control type="text" name="address" value={formData2.address} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="province" className="mb-3">
                <Form.Label>Select your Province</Form.Label>
                <Form.Control as="select" name="province" value={formData2.province} onChange={handleInputChange} required >
                  <option value="">Province</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="nin" className="mb-3">
                <Form.Label>Enter your NIN</Form.Label>
                <Form.Control type="text" name="nin" value={formData2.nin} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="nin" className="mb-3">
                <Form.Label>Enter your Bank Name</Form.Label>
                <Form.Control type="text" name="nin" value={formData2.nin} onChange={handleInputChange} required />
                <Form.Group controlId="nin" className="mb-3">
                  <Form.Label>Enter your Bank Account</Form.Label>
                  <Form.Control type="text" name="nin" value={formData2.nin} onChange={handleInputChange} required />
                </Form.Group>
              </Form.Group>
              <h5 className='mt-5'>Next of Kin</h5>
              <Form.Group controlId="nokName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData2.nextOfKin.name} onChange={handleNextOfKinChange} required />
              </Form.Group>
              <Form.Group controlId="nokPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" value={formData2.nextOfKin.phone} onChange={handleNextOfKinChange} required />
              </Form.Group>
              <Form.Group controlId="nokEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" value={formData2.nextOfKin.email} onChange={handleNextOfKinChange} required />
              </Form.Group>
              <Form.Group controlId="nokRelationship" className="mb-3">
                <Form.Label>Relationship to you</Form.Label>
                <Form.Control type="text" name="relationship" value={formData2.nextOfKin.relationship} onChange={handleNextOfKinChange} required />
              </Form.Group>
              <Form.Group controlId="nokAddress" className="mb-3">
                <Form.Label>Residential Address</Form.Label>
                <Form.Control type="text" name="address" value={formData2.nextOfKin.address} onChange={handleNextOfKinChange} required />
              </Form.Group>
              {/* <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
            <Button variant="primary" onClick={nextStep}>Next</Button> */}
            </Form>
          </div>
          <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
          <Button variant="primary" onClick={nextStep} className='step1-btn mb-5 mt-5' >Next</Button>
        </div>
      )}




      {step === 3 && (
        <div>

          <h2 className="text-center">Complete your Registration</h2>
          {/* <ProgressBar now={(3 / 4) * 100} className="mb-4" />
          <Row className="mb-4">
            <Col>
              <Button variant="secondary" disabled>1</Button>
            </Col>
            <Col>
              <Button variant="secondary" disabled>2</Button>
            </Col>
            <Col>
              <Button variant="primary">3</Button>
            </Col>
            <Col>
              <Button variant="secondary" disabled>4</Button>
            </Col>
          </Row> */}

          <h3 className="text-center">Portfolio</h3>
          <p className="text-center">Showcase max of 3 of your Work. Customers need assurance of your service proficiency.</p>

          <Form onSubmit={handleSubmit}>
            {/* {portfolioEntries?.map((entry, index) => (
              <div key={index} className="mb-4">
                <Form.Group controlId={`description${index}`}>
                  <Form.Label>Short Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={entry.description}
                    onChange={(event) => handlePortfolioChange(index, event)}
                    placeholder="Briefly write about the portfolio... Max 20 words"
                  />
                </Form.Group>
                <Form.Group controlId={`image${index}`} className="mb-4">
                  <Form.File
                    label="Add Work Picture"
                    name="image"
                    onChange={(event) => handlePortfolioChange(index, event)}
                    custom
                  />
                </Form.Group>
              </div>
            ))}

            {portfolioEntries?.length < 3 && (
              <Button variant="link" onClick={handleAddPortfolio}>Add More Portfolio</Button>
            )} */}

            <Form.Group controlId="banner" className="mb-4">
              <Form.Label>Banner Cover</Form.Label>
              <Form.Control
                type='file'
                label="Upload your thumbnail (1280x720pixels)"
                name="banner"
                onChange={handleBannerUpload}
                custom
              />
              <Form.Text className="text-muted">Note: This is what clients will see first.</Form.Text>
            </Form.Group>

            <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
            <Button variant="primary" onClick={nextStep} className='step1-btn mb-5 mt-5' >Next</Button>
          </Form>
        </div>
      )}





      {step === 4 && (
        <div>

          <h2 className="text-center">Complete your Registration</h2>
          <div className="progress mb-4">
            <div className="progress-bar" style={{ width: '100%' }}>4</div>
          </div>
          <h4 className="text-center">Pricing</h4>
          <p className="text-center">Set your Minimum Rate.</p>
          <Form onSubmit={handleButtonSubmit}>
            <Form.Group controlId="minimumRate">
              <Form.Label>Minimum Rate</Form.Label>
              <Form.Control
                type="number"
                value={minimumRate}
                onChange={handleMinimumRateChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="serviceFee" className="mt-3">
              <Form.Label>Service Fee</Form.Label>
              <Form.Control
                type="text"
                value={`₦${serviceFee.toFixed(2)}`}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="youGet" className="mt-3">
              <Form.Label>You'll get</Form.Label>
              <Form.Control
                type="text"
                value={`₦${youGet.toFixed(2)}`}
                readOnly
              />
            </Form.Group>
            {/* <Button variant="primary" type="submit" className="mt-4">
          Submit
        </Button> */}
          </Form>
          <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      )}
    </Container>
  )
}

export default Profilesettings