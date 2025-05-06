import { Card, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Works.css" // for hover effect

const works = [
  { id: "bookcover", title: "Book Cover", img: "/images/bookcover.jpg" },
  { id: "flyer", title: "Flyer Design", img: "/images/flyer.jpg" },
  // add more...
]

export default function Works() {
  const navigate = useNavigate()

  return (
    <Row className="p-4">
      {works.map((work) => (
        <Col md={4} key={work.id}>
          <Card
            className="work-card"
            onClick={() => navigate(`/works/${work.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="work-img-container">
              <Card.Img variant="top" src={work.img} />
              <div className="hover-text">{work.title}</div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
