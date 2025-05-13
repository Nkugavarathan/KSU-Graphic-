import { useState, useEffect } from "react"
import axios from "axios"
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap"

import AddWork from "./AddWork"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [variant, setVariant] = useState("danger")
  const [isAdmin, setIsAdmin] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  // Check if the admin is already logged in from localStorage
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin")
    if (isAdmin === "true") {
      setIsAdmin(true)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost/my-admin-backend/login.php",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      const data = response.data
      if (data.status === "success") {
        localStorage.setItem("isAdmin", "true")
        setVariant("success")
        setMessage("Admin Login Successful!")
        setIsAdmin(true) // Set isAdmin to true after successful login
      } else {
        setVariant("danger")
        setMessage(data.message || "Something went wrong. Try again.")
        setIsAdmin(false)
      }
    } catch (error) {
      console.error("Error logging in:", error)
      setVariant("danger")
      setMessage("Something went wrong. Try again.")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("isAdmin")
    setIsAdmin(false)
    setMessage("You have logged out.")
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card className="p-4 shadow">
            <Card.Body>
              <Card.Title className="mb-4 text-center">Admin Login</Card.Title>
              {message && <Alert variant={variant}>{message}</Alert>}
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Show "Add Work" button only if admin is logged in */}
      {isAdmin && (
        <Row className="mt-4 mx-5">
          <Col className="text-center">
            <Button variant="success" size="lg" onClick={handleOpenModal}>
              Add Work
            </Button>
            <AddWork
              show={showModal}
              handleClose={handleCloseModal}
              onAdd={(newWork) => console.log("Added:", newWork)}
            />

            <Button
              variant="secondary"
              size="lg"
              className="ml-2 mx-5"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Login
