import { useState } from "react"
import axios from "axios"
import { Modal, Button, Form } from "react-bootstrap"

export default function AddWork({ show, handleClose, onAdd }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [imageURL, setImageURL] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setImageURL(URL.createObjectURL(file)) // Preview the file
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !description) {
      alert("Please provide a title and description.")
      return
    }

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("image", image)

    try {
      setIsUploading(true)
      const response = await axios.post(
        "http://localhost/my-admin-backend/addwork.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      if (response.data.status === "success") {
        onAdd({
          title,
          description,
          img: response.data.imageURL,
        })
        setTitle("")
        setDescription("")
        setImage(null)
        setImageURL("")
        handleClose()
      } else {
        alert("Something went wrong. Try again.")
      }
    } catch (error) {
      console.error("Error uploading work:", error)
      alert("Failed to upload. Try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Work</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter work title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter work description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {imageURL && (
              <img
                src={imageURL}
                alt="Preview"
                style={{ width: "100px", marginTop: "10px" }}
              />
            )}
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Add Work"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
