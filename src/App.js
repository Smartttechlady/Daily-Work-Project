import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"

import "bootstrap/dist/css/bootstrap.css"



const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Signup = React.lazy(() => import("./pages/Signup"))
const Notfound = React.lazy(() => import("./pages/Notfound"))
const Clientapply = React.lazy(() => import("./pages/Clientapply"))
const About = React.lazy(() => import("./pages/About"))
const Profilesettings = React.lazy(() => import("./pages/Profilesettings"))
const Profilesummary = React.lazy(() => import("./pages/Profilesummary"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Vendorresult = React.lazy(() => import("./pages/Vendorresult"))
const HousekeepingPage = React.lazy(() => import("./pages/HousekeepingPage"))
const Chatpage = React.lazy(() => import("./pages/Chatpage"))




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
          <Route path="/clientapply" element={<Clientapply />} />
          <Route path="/profilesettings" element={<Profilesettings />} />
          <Route path="/profilesummary" element={<Profilesummary />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendorresult" element={<Vendorresult />} />
          <Route path="/HousekeepingPage" element={<HousekeepingPage />} />
          <Route path="/chatpage" element={<Chatpage />} />
          
        </Routes>


      </BrowserRouter>

      <Footer />

    </React.Suspense>

  )
}

export default App