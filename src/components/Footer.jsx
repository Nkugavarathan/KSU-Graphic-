import { Container, Row, Col } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer text-dark py-3 bg-light">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} sm={12} className="mb-3 mb-md-0">
            <h5>KSU Graphics</h5>
          </Col>

          <Col
            md={4}
            sm={12}
            className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3"
          >
            <a href="/" className="footer-link footer-home">
              Home
            </a>
            <a href="/" className="footer-link footer-terms">
              Terms
            </a>
            <a href="/" className="footer-link footer-privacy">
              Privacy
            </a>
            <Link to="/contact" className="footer-link footer-contact">
              Contact
            </Link>
          </Col>

          <Col md={4} sm={12}>
            <FaFacebook className="me-2 footer-icon " />
            <FaInstagram className="me-2 footer-icon" />
            <FaYoutube className="footer-icon" />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
