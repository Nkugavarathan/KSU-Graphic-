import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Works from "./components/Works"
import Login from "./components/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import WorkDetail from "./pages/Workdetail"

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="mt-5 pt-4 main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:id" element={<WorkDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
