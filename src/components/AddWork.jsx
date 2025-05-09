import { Modal, Form, Button } from "react-bootstrap"
import { useState } from "react"
export default function AddWork({ show, handleClose, onAdd }) {
  const [form, setForm] = useState({ title: "", description: "", img: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onAdd({ ...form, id: Date.now().toString() }) // Generate a unique id
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Work</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="description" className="mt-2">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="img" className="mt-2">
            <Form.Label>Image URL</Form.Label>
            <Form.Control name="img" onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
