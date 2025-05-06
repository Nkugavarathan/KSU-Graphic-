import React from "react"
// import aboutImg from "../assets/about.jpg" // use your image path
import { Container, Row, Col } from "react-bootstrap"

function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            We are a printing company providing high-quality digital and offset
            printing services. Our mission is to bring your ideas to life with
            precision and passion.
          </p>
        </Col>
        <Col md={6}>
          <img src={aboutImg} alt="About us" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  )
}

export default About
