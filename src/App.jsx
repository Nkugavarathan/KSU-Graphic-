import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Works from "./components/Works"
import Footer from "./components/Footer"

// import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import WorkDetail from "./pages/Workdetail"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

// export default function App() {
//   return <h1 style={{ color: "red" }}>Hello World</h1>
// }
