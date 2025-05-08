import { Card, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Works.css" // for hover effect

const works = [
  { id: "bookcover", title: "Book Cover", img: "/images/bookcover.jpg" },
  { id: "flyer", title: "Flyer Design", img: "/images/flyer.jpg" },
  { id: "brochure", title: "Brochure Design", img: "/images/brochure.jpg" },
  {
    id: "businesscard",
    title: "Business Card",
    img: "/images/businesscard.jpg",
  },
  { id: "poster", title: "Poster Printing", img: "/images/poster.jpg" },
  { id: "banner", title: "Banner Design", img: "/images/banner.jpg" },
  {
    id: "invitation",
    title: "Invitation Cards",
    img: "/images/invitation.jpg",
  },
  { id: "calendar", title: "Custom Calendar", img: "/images/calendar.jpg" },
  { id: "sticker", title: "Stickers & Labels", img: "/images/sticker.jpg" },
  { id: "magazine", title: "Magazine Layout", img: "/images/magazine.jpg" },
]

export default function Works() {
  const navigate = useNavigate()

  return (
    <Row className="p-4">
      {works.map((work) => (
        <Col md={4} className="mb-4" key={work.id}>
          <Card
            className="work-card h-100"
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
