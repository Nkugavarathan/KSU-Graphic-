import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa"
import { Card } from "react-bootstrap"
function Contact() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h4 className="mb-4">Quick Connect</h4>

          <Card className="mb-3 p-3 shadow-sm">
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
          </Card>

          <Card className="mb-3 p-3 shadow-sm">
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
          </Card>

          <Card className="mb-3 p-3 shadow-sm">
            <div className="d-flex align-items-start">
              <FaGlobe size={24} className="me-3 text-primary" />
              <div>
                <h6 className="mb-1">Website</h6>
                <p className="mb-0">www.prints.lk</p>
              </div>
            </div>
          </Card>

          <Card className="mb-3 p-3 shadow-sm">
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
          </Card>
        </Col>
        <Col md={6}>
          <h4>Get in Touch</h4>
          <Form
            action="mailto:yourmail@gmail.com"
            method="post"
            encType="text/plain"
          >
            <Form.Group className="mb-3">
              <Form.Label>Your Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject *</Form.Label>
              <Form.Control type="text" placeholder="Subject" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Message *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message"
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
