import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"

export default function WorkDetail() {
  const { id } = useParams() // Get the 'id' from the URL params
  const [work, setWork] = useState(null) // Initialize work as null
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const res = await axios.get(
          `http://localhost/my-admin-backend/getworkdetails.php?id=${id}` // New endpoint
        )
        setWork(res.data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching work details", err)
        setError("Failed to load work details")
        setLoading(false)
      }
    }

    fetchWork()
  }, [id]) // Dependency on 'id' to refetch data when URL changes

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!work) return <p>Work not found</p>

  return (
    <Container className="p-4">
      <Row>
        <Col md={6}>
          <h2>{work.title}</h2>
          <p>{work.description}</p>
        </Col>
        <Col md={6}>
          <img
            src={`http://localhost/my-admin-backend/uploads/${work.image}`} // Assuming the image is in the 'uploads' folder
            alt={work.title}
            style={{ width: 500, height: 500 }}
          />
        </Col>
      </Row>
    </Container>
  )
}
