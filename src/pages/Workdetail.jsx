import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

const workDetails = {
  bookcover: {
    title: "Book Cover Design",
    description:
      "High-quality book cover design with modern and professional looks.",
    image: "/images/bookcover.jpg",
  },
  flyer: {
    title: "Flyer Design",
    description: "Creative flyers to boost your business promotions.",
    image: "/images/flyer.jpg",
  },
  // add more...
}

export default function WorkDetail() {
  const { id } = useParams()
  const work = workDetails[id]

  if (!work) return <p>Work not found</p>

  return (
    <Container className="p-4">
      <Row>
        <Col md={6}>
          <h2>{work.title}</h2>
          <p>{work.description}</p>
        </Col>
        <Col md={6}>
          <img src={work.image} alt={work.title} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  )
}
