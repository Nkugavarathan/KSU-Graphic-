import { Container, Row, Col } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import "./Footer.css"
function Footer() {
  return (
    <footer className="text-dark py-3 ">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} sm={12} className="mb-3 mb-md-0">
            <h5>KSU Graphics</h5>
          </Col>

          <Col md={4} sm={12} className="mb-3 mb-md-0">
            {/* <a
              href="/"
              className="text-dark me-3 text-decoration-none d-inline-block"
            >
              Home
            </a>
            <a
              href="/"
              className="text-dark me-3 text-decoration-none d-inline-block"
            >
              Terms
            </a>
            <a
              href="/"
              className="text-dark me-3 text-decoration-none d-inline-block"
            >
              Privacy
            </a>
            <a
              href="/"
              className="text-dark text-decoration-none d-inline-block"
            >
              Contact
            </a> */}
            <a href="/" className="footer-link footer-home">
              Home
            </a>
            <a href="/" className="footer-link footer-terms">
              Terms
            </a>
            <a href="/" className="footer-link footer-privacy">
              Privacy
            </a>
            <a href="/" className="footer-link footer-contact">
              Contact
            </a>
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
