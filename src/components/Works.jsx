import { Card, Container, Row, Col } from "react-bootstrap"

function Works() {
  const works = [
    { title: "Card 1", img: "/img1.jpg" },
    { title: "Card 2", img: "/img2.jpg" },
    { title: "Card 3", img: "/img3.jpg" },
    { title: "Card 4", img: "/img4.jpg" },
  ]

  return (
    <Container className="my-5">
      <h2>Our Works</h2>
      <Row>
        {works.map((work, index) => (
          <Col key={index} sm={6} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={work.img} />
              <Card.Body>
                <Card.Title>{work.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Works
