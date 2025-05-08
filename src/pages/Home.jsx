import React from "react"

import Navbar from "./../components/Navbar"
import Footer from "../components/Footer"
import Hero from "./../components/Hero"
import Services from "./Services"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}
