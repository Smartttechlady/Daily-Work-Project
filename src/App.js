import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"


const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Signup = React.lazy(() => import("./pages/Signup"))
const Notfound = React.lazy(() => import("./pages/Notfound"))




function App() {
  return (
   
<React.Suspense fallback = {<div> <img style= {{position:"absolute", top:"50%", left:"50%"}} src= {("./..//images/Daily work logo.svg")} alt="" /></div>}>

<BrowserRouter>
 <Navbar/> 
 

<Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="*" element={<Notfound />} />
</Routes>


</BrowserRouter>

<Footer/> 

</React.Suspense>

  )
}

export default App