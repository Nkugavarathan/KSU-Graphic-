import React from "react"
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa"
import { Row } from "react-bootstrap"

function Contact() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Side - Quick Connect */}
        <div className="col-md-6 mb-4">
          <h4 className="mb-4">Quick Connect</h4>

          <div className="card mb-3 p-3 shadow-sm">
            <div className="d-flex align-items-start">
              <FaMapMarkerAlt size={24} className="me-3 text-primary" />
              <div>
                <h6 className="mb-1">Address</h6>
                <p className="mb-0">
                  No 1234 Colombo
                  <br />
                  SriLanka
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-3 p-3 shadow-sm">
            <div className="d-flex align-items-start">
              <FaEnvelope size={24} className="me-3 text-primary" />
              <div>
                <h6 className="mb-1">Email</h6>
                <p className="mb-0">info@ksug</p>
              </div>
            </div>
          </div>

          <div className="card mb-3 p-3 shadow-sm">
            <div className="d-flex align-items-start">
              <FaGlobe size={24} className="me-3 text-primary" />
              <div>
                <h6 className="mb-1">Website</h6>
                <p className="mb-0">google</p>
              </div>
            </div>
          </div>

          <div className="card mb-3 p-3 shadow-sm">
            <div className="d-flex align-items-start">
              <FaPhone size={24} className="me-3 text-primary" />
              <div>
                <h6 className="mb-1">Phone</h6>
                <p className="mb-0">088833434</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6">
          <h4 className="mb-4">Get in Touch</h4>
          <form
            action="mailto:yourmail@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="mb-3">
              <label className="form-label">Your Name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email *</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Message *</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="row my-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3151814591624!2d79.90100967373216!3d6.852772319251987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a8936886579%3A0xa8c769f4b86d85b5!2sUniversity%20of%20Sri%20Jayewardenepura!5e0!3m2!1sen!2slk!4v1746777750685!5m2!1sen!2slk"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="University of Sri Jayewardenepura"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
