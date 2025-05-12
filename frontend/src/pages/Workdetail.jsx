import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

const workDetails = {
  bookcover: {
    title: "Book Cover Design",
    description:
      "High-quality book cover design with modern and professional looks.",
    img: "https://img.freepik.com/free-psd/book-cover-mockup_125540-354.jpg",
  },
  flyer: {
    title: "Flyer Design",
    description: "Creative flyers to boost your business promotions.",
    img: "https://img.freepik.com/free-psd/flyer-mockup_125540-354.jpg",
  },
  brochure: {
    title: "Brochure Design",
    description: "Professional brochures to represent your business perfectly.",
    img: "https://img.freepik.com/free-psd/brochure-mockup_125540-354.jpg",
  },
  businesscard: {
    title: "Business Card Design",
    description: "Custom business cards with stylish layouts and branding.",
    img: "https://img.freepik.com/free-psd/business-card-mockup_125540-354.jpg",
  },
  poster: {
    title: "Poster Printing",
    description:
      "Eye-catching posters printed in high resolution for any event.",
    img: "https://img.freepik.com/free-psd/poster-mockup_125540-354.jpg",
  },
  banner: {
    title: "Banner Design & Printing",
    description:
      "Large format banners ideal for promotions, events, and branding.",
    img: "https://img.freepik.com/free-psd/banner-mockup_125540-354.jpg",
  },
  invitation: {
    title: "Invitation Cards",
    description:
      "Elegant invitation card designs for weddings, birthdays, and events.",
    img: "https://img.freepik.com/free-psd/invitation-card-mockup_125540-354.jpg",
  },
  calendar: {
    title: "Custom Calendar Printing",
    description: "Personalized wall and desk calendars for branding or gifts.",
    img: "https://img.freepik.com/free-psd/calendar-mockup_125540-354.jpg",
  },
  sticker: {
    title: "Sticker & Label Printing",
    description:
      "High-quality stickers and labels for packaging or branding needs.",
    img: "https://img.freepik.com/free-psd/sticker-mockup_125540-354.jpg",
  },
  magazine: {
    title: "Magazine Layout Design",
    description: "Modern magazine designs for content-rich publications.",
    img: "https://img.freepik.com/free-psd/magazine-mockup_125540-354.jpg",
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
          <img src={work.img} alt={work.title} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  )
}
