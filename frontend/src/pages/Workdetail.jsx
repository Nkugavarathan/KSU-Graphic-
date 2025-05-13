// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"
// import axios from "axios"
// import { Container, Row, Col } from "react-bootstrap"

// export default function WorkDetail() {
//   const { id } = useParams() // Get the 'id' from the URL params
//   const [work, setWork] = useState(null) // Initialize work as null
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchWork = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost/my-admin-backend/getworkdetails.php?id=${id}` // New endpoint
//         )
//         setWork(res.data)
//         setLoading(false)
//       } catch (err) {
//         console.error("Error fetching work details", err)
//         setError("Failed to load work details")
//         setLoading(false)
//       }
//     }

//     fetchWork()
//   }, [id]) // Dependency on 'id' to refetch data when URL changes

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>{error}</p>
//   if (!work) return <p>Work not found</p>

//   return (
//     <Container className="p-4">
//       <Row>
//         <Col md={6}>
//           <h2>{work.title}</h2>
//           <p>{work.description}</p>
//         </Col>
//         <Col md={6}>
//           <img
//             src={`http://localhost/my-admin-backend/uploads/${work.image}`} // Assuming the image is in the 'uploads' folder
//             alt={work.title}
//             style={{ width: 500, height: 500 }}
//           />
//         </Col>
//       </Row>
//     </Container>
//   )
// }

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap"

export default function WorkDetail() {
  const { id } = useParams() // Get the 'id' from the URL params
  const [work, setWork] = useState(null) // Initialize work as null
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false) // Modal visibility state
  const [newImages, setNewImages] = useState([]) // State to hold new images

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

  const handleImageChange = (e) => {
    setNewImages(e.target.files) // Set the new images to the state
  }

  const handleImageUpload = async () => {
    if (newImages.length === 0) {
      alert("Please select images to upload!")
      return
    }

    const formData = new FormData()
    formData.append("id", id)

    // Append each selected image to the FormData
    for (let i = 0; i < newImages.length; i++) {
      formData.append("images[]", newImages[i])
    }

    try {
      const res = await axios.post(
        "http://localhost/my-admin-backend/uploadworkimage.php", // Your backend endpoint to upload images
        formData
      )
      console.log("Upload response:", res.data) // Log the response

      if (res.data.status === "success") {
        alert("Images uploaded successfully!")
        setShowModal(false) // Close the modal
        // Re-fetch the work details to update the images
        const updatedWork = { ...work }
        updatedWork.images = [...updatedWork.images, ...Array.from(newImages)]
        setWork(updatedWork)
      } else {
        alert("Failed to upload images")
      }
    } catch (err) {
      console.error("Error uploading images", err)
      alert("Error uploading images")
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!work) return <p>Work not found</p>

  return (
    <Container className="p-4">
      <Row>
        <Col md={6}>
          <h2>{work.title}</h2>
          <p>{work.description}</p>
          {/* Add Image Button (only visible for admin) */}
          {localStorage.getItem("isAdmin") === "true" && (
            <Button onClick={() => setShowModal(true)} variant="primary">
              Add Images
            </Button>
          )}
        </Col>
        <Col md={6}>
          <img
            src={`http://localhost/my-admin-backend/uploads/${work.image}`} // Assuming the image is in the 'uploads' folder
            alt={work.title}
            style={{ width: 500, height: 500 }}
          />
        </Col>
      </Row>

      <Row>
        {/* Render multiple images */}
        {work.images &&
          work.images.length > 0 &&
          work.images.map((image, index) => (
            <Col key={index} md={4}>
              <img
                src={`http://localhost/my-admin-backend/uploads/${image}`}
                alt={`Work Image ${index + 1}`}
                style={{ width: 300, height: 300 }}
                className="img-fluid"
              />
            </Col>
          ))}
      </Row>

      {/* Modal for image upload */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Images for {work.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Images</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                multiple // Allow selecting multiple files
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleImageUpload}>
            Upload Images
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
