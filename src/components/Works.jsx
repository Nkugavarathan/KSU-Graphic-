import { Card, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Works.css" // for hover effect

const works = [
  {
    id: "bookcover",
    title: "Book Cover",
    description: "Stylish book design",
    img: "https://img.freepik.com/free-psd/book-cover-mockup_125540-354.jpg",
  },
  {
    id: "flyer",
    title: "Flyer Design",
    description: "Creative flyer layout",
    img: "https://img.freepik.com/free-psd/flyer-mockup_125540-354.jpg",
  },
  {
    id: "brochure",
    title: "Brochure Design",
    description: "Elegant brochure folds",
    img: "https://img.freepik.com/free-psd/brochure-mockup_125540-354.jpg",
  },
  {
    id: "businesscard",
    title: "Business Card",
    description: "Clean card layout",
    img: "https://img.freepik.com/free-psd/business-card-mockup_125540-354.jpg",
  },
  {
    id: "poster",
    title: "Poster Printing",
    description: "Bold poster style",
    img: "https://img.freepik.com/free-psd/poster-mockup_125540-354.jpg",
  },
  {
    id: "banner",
    title: "Banner Design",
    description: "Large promo banner",
    img: "https://img.freepik.com/free-psd/banner-mockup_125540-354.jpg",
  },
  {
    id: "invitation",
    title: "Invitation Cards",
    description: "Chic event invite",
    img: "https://img.freepik.com/free-psd/invitation-card-mockup_125540-354.jpg",
  },
  {
    id: "calendar",
    title: "Custom Calendar",
    description: "Branded calendar look",
    img: "https://img.freepik.com/free-psd/calendar-mockup_125540-354.jpg",
  },
  {
    id: "sticker",
    title: "Stickers & Labels",
    description: "Fun sticky labels",
    img: "https://img.freepik.com/free-psd/sticker-mockup_125540-354.jpg",
  },
  {
    id: "magazine",
    title: "Magazine Layout",
    description: "Trendy magazine style",
    img: "https://img.freepik.com/free-psd/magazine-mockup_125540-354.jpg",
  },
]

export default function Works() {
  const navigate = useNavigate()

  return (
    <Row className="p-4">
      <h2>Our Works</h2>
      {works.map((work) => (
        <Col md={4} className="mb-4" key={work.id}>
          <Card
            className="work-card h-100"
            onClick={() => navigate(`/works/${work.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="work-img-container">
              <Card.Img variant="top" src={work.img} />
              <div className="hover-overlay">
                <h5 className="hover-title">{work.title}</h5>
                <p className="hover-description">{work.description}</p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
