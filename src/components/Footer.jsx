import { Container, Row, Col } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-dark text-white py-2 mb-0">
      <Container>
        <Row>
          <Col md={6}>
            <h5>KSU Graphics</h5>
          </Col>
          <Col md={6} className="d-flex justify-content-end align-items-center">
            <div className="me-3">
              <a href="/" className="text-white me-3">
                Home
              </a>
              <a href="/" className="text-white me-3">
                Terms
              </a>
              <a href="/" className="text-white me-3">
                Privacy
              </a>
              <a href="/" className="text-white">
                Contact
              </a>
            </div>
            <div>
              <FaFacebook className="me-2" />
              <FaInstagram className="me-2" />
              <FaYoutube />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
