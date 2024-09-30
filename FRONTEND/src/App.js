import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"







const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Signup = React.lazy(() => import("./pages/Signup"))
const Notfound = React.lazy(() => import("./pages/Notfound"))
const Userjoin = React.lazy(() => import("./pages/Userjoin"))
const About = React.lazy(() => import("./pages/About"))
const Profilesettings = React.lazy(() => import("./pages/Profilesettings"))
const Profilesummary = React.lazy(() => import("./pages/Profilesummary"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Vendorresult = React.lazy(() => import("./pages/Vendorresult"))
const Housekeeping = React.lazy(() => import("./pages/Housekeeping"))
const Education = React.lazy(() => import("./pages/Education"))
const Chatpage = React.lazy(() => import("./pages/Chatpage"))
const Messages = React.lazy(() => import("./pages/Messages"))
const Transport = React.lazy(() => import("./pages/Transport"))
const Healthfitness = React.lazy(() => import("./pages/Healthfitness"))
const Beauty = React.lazy(() => import("./pages/Beauty"))
const Realestate = React.lazy(() => import("./pages/Realestate")) 
const Agriculture = React.lazy(() => import("./pages/Agriculture")) 
const Marketing = React.lazy(() => import("./pages/Marketing")) 
const Installationrepairs = React.lazy(() => import("./pages/Installationrepairs")) 
const Technology = React.lazy(() => import("./pages/Technology")) 
const Evententertainment = React.lazy(() => import("./pages/Evententertainment")) 
const Catering = React.lazy(() => import("./pages/Catering")) 
const Construction = React.lazy(() => import("./pages/Construction")) 
const Clientdashboard = React.lazy(() => import("./pages/Clientdashboard")) 
const Paymentpage = React.lazy(() => import("./pages/Payment")) 
const Transaction = React.lazy(() => import("./pages/Transaction")) 
const Favourites = React.lazy(() => import("./pages/Favourites")) 
const Forgotpassword = React.lazy(() => import("./pages/Forgotpassword")) 
const Resetpassword = React.lazy(() => import("./pages/Resetpassword")) 
const Logout = React.lazy(() => import("./pages/Logout")) 
const Settings = React.lazy(() => import("./pages/Settings")) 
const Vendordetails = React.lazy(() => import("./pages/Vendordetails")) 
const Verifyuser = React.lazy(() => import("./pages/Verifyuser")) 
const Vendordashboard = React.lazy(() => import("./pages/Vendordashboard"))  
const Message2 = React.lazy(() => import("./pages/Message2"))   
const Logout2 = React.lazy(() => import("./pages/Logout2"))   
const Clientinvoice = React.lazy(() => import("./pages/Clientinvoice"))   
const Invoice = React.lazy(() => import("./pages/Invoice"))   
const Clientinbox = React.lazy(() => import("./pages/Clientinbox"))   
const Contactus = React.lazy(() => import("./pages/Contactus"))   
const Terms_conditions = React.lazy(() => import("./pages/Terms_conditions"))    
const Clientprofile = React.lazy(() => import("./pages/Clientprofile"))      
const Settings2 = React.lazy(() => import("./pages/Settings2"))      
const Createpost = React.lazy(() => import("./pages/Createpost"))      
const Userprofile = React.lazy(() => import("./pages/Userprofile"))      
const Allpost = React.lazy(() => import("./pages/Allpost"))      
    
  




function App() {
  return (

    <React.Suspense fallback={<div> <img style={{ position: "absolute", top: "50%", left: "50%" }} src={("./..//images/Daily work logo.svg")} alt="" /></div>}>

      <BrowserRouter>
        {/* <Navbar/>  */}


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/userjoin" element={<Userjoin />} />
          <Route path="/profilesettings" element={<Profilesettings />} />
          <Route path="/profilesummary" element={<Profilesummary />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendorresult" element={<Vendorresult />} />
          <Route path="/housekeeping" element={<Housekeeping />} />
          <Route path="/education" element={<Education />} />
          <Route path="/chatpage" element={<Chatpage />} />
          <Route path="Messages" element={<Messages />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/health-fitness" element={<Healthfitness />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/real-estate" element={<Realestate />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/installation-repairs" element={<Installationrepairs />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/event-entertainment" element={<Evententertainment />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/clientdashboard" element={<Clientdashboard />} />
          <Route path="/pamyentpage" element={<Paymentpage />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/vendordetails" element={<Vendordetails/>} />
          <Route path="/verifyuser" element={<Verifyuser/>} />
          <Route path="/vendordashboard" element={<Vendordashboard/>} />
          <Route path="/message2" element={<Message2/>} />
          <Route path="/logout2" element={<Logout2/>} />
          <Route path="/clientinvoice" element={<Clientinvoice/>} />
          <Route path="/invoice" element={<Invoice/>} />
          <Route path="/client-inbox" element={<Clientinbox/>} />
          <Route path="/contact-us" element={<Contactus/>} />
          <Route path="/terms-conditions" element={<Terms_conditions/>} />
          <Route path="/clientprofile" element={<Clientprofile/>} />
          <Route path="/settings2" element={<Settings2/>} />
          <Route path="/createpost" element={<Createpost/>} />
          <Route path="/userprofile" element={<Userprofile/>} />
          <Route path="/allpost" element={<Allpost/>} />
  
          
        </Routes>

        <Footer/>
      </BrowserRouter>

      
    </React.Suspense>

  )
}

export default App