import React from "react"
// import aboutImg from "../assets/about.jpg" // Make sure this path is correct

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="mb-3">About Us</h2>
          <p className="text-muted">
            We are a printing company providing high-quality digital and offset
            printing services. Our mission is to bring your ideas to life with
            precision and passion.
          </p>
        </div>
        <div className="col-md-6">
          {/* <img
            // src={aboutImg}
            alt="About us"
            className="img-fluid rounded shadow"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default About
