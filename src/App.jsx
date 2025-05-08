import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Works from "./components/Works"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import WorkDetail from "./pages/Workdetail"

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<WorkDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
