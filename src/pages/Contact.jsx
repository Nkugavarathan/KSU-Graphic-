import React from "react"
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa"

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
                  No. 113/2, Hospital Road,
                  <br />
                  Kalubowila, Dehiwala.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-3 p-3 shadow-sm">
            <div className="d-flex align-items-start">
              <FaEnvelope size={24} className="me-3 text-primary" />
              <div>
                <h6 className="mb-1">Email</h6>
                <p className="mb-0">
                  info@prints.lk
                  <br />
                  digicolabs@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-3 p-3 shadow-sm">
            <div className="d-flex align-items-start">
              <FaGlobe size={24} className="me-3 text-primary" />
              <div>
                <h6 className="mb-1">Website</h6>
                <p className="mb-0">www.prints.lk</p>
              </div>
            </div>
          </div>

          <div className="card mb-3 p-3 shadow-sm">
            <div className="d-flex align-items-start">
              <FaPhone size={24} className="me-3 text-primary" />
              <div>
                <h6 className="mb-1">Phone</h6>
                <p className="mb-0">
                  +94-77-0583458
                  <br />
                  +94-77-9128164
                </p>
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
    </div>
  )
}

export default Contact
