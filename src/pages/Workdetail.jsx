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
  brochure: {
    title: "Brochure Design",
    description: "Professional brochures to represent your business perfectly.",
    image: "/images/brochure.jpg",
  },
  businesscard: {
    title: "Business Card Design",
    description: "Custom business cards with stylish layouts and branding.",
    image: "/images/businesscard.jpg",
  },
  poster: {
    title: "Poster Printing",
    description:
      "Eye-catching posters printed in high resolution for any event.",
    image: "/images/poster.jpg",
  },
  banner: {
    title: "Banner Design & Printing",
    description:
      "Large format banners ideal for promotions, events, and branding.",
    image: "/images/banner.jpg",
  },
  invitation: {
    title: "Invitation Cards",
    description:
      "Elegant invitation card designs for weddings, birthdays, and events.",
    image: "/images/invitation.jpg",
  },
  calendar: {
    title: "Custom Calendar Printing",
    description: "Personalized wall and desk calendars for branding or gifts.",
    image: "/images/calendar.jpg",
  },
  sticker: {
    title: "Sticker & Label Printing",
    description:
      "High-quality stickers and labels for packaging or branding needs.",
    image: "/images/sticker.jpg",
  },
  magazine: {
    title: "Magazine Layout Design",
    description: "Modern magazine designs for content-rich publications.",
    image: "/images/magazine.jpg",
  },
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
