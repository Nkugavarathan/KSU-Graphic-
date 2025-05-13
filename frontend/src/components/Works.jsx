// import { Card, Col, Row, Button } from "react-bootstrap"
// import { useNavigate } from "react-router-dom"
// import { useState } from "react"
// import "./Works.css"
// import AddWork from "./AddWork"

// const initialWorks = [
//   {
//     id: "bookcover",
//     title: "Book Cover",
//     description: "Stylish book design",
//     img: "https://img.freepik.com/free-psd/book-cover-mockup_125540-354.jpg",
//   },
//   {
//     id: "flyer",
//     title: "Flyer Design",
//     description: "Creative flyer layout",
//     img: "https://img.freepik.com/free-psd/flyer-mockup_125540-354.jpg",
//   },
//   {
//     id: "brochure",
//     title: "Brochure Design",
//     description: "Elegant brochure folds",
//     img: "https://img.freepik.com/free-psd/brochure-mockup_125540-354.jpg",
//   },
//   {
//     id: "businesscard",
//     title: "Business Card",
//     description: "Clean card layout",
//     img: "https://img.freepik.com/free-psd/business-card-mockup_125540-354.jpg",
//   },
//   {
//     id: "poster",
//     title: "Poster Printing",
//     description: "Bold poster style",
//     img: "https://img.freepik.com/free-psd/poster-mockup_125540-354.jpg",
//   },
//   {
//     id: "banner",
//     title: "Banner Design",
//     description: "Large promo banner",
//     img: "https://img.freepik.com/free-psd/banner-mockup_125540-354.jpg",
//   },
//   {
//     id: "invitation",
//     title: "Invitation Cards",
//     description: "Chic event invite",
//     img: "https://img.freepik.com/free-psd/invitation-card-mockup_125540-354.jpg",
//   },
//   {
//     id: "calendar",
//     title: "Custom Calendar",
//     description: "Branded calendar look",
//     img: "https://img.freepik.com/free-psd/calendar-mockup_125540-354.jpg",
//   },
//   {
//     id: "sticker",
//     title: "Stickers & Labels",
//     description: "Fun sticky labels",
//     img: "https://img.freepik.com/free-psd/sticker-mockup_125540-354.jpg",
//   },
//   {
//     id: "magazine",
//     title: "Magazine Layout",
//     description: "Trendy magazine style",
//     img: "https://img.freepik.com/free-psd/magazine-mockup_125540-354.jpg",
//   },
// ]

// export default function Works() {
//   const navigate = useNavigate()
//   const [worksList, setWorksList] = useState(initialWorks)
//   const [showAddModal, setShowAddModal] = useState(false)

//   const handleAddWork = (newWork) => {
//     setWorksList([newWork, ...worksList])
//   }

//   return (
//     <>
//       <AddWork
//         show={showAddModal}
//         handleClose={() => setShowAddModal(false)}
//         onAdd={handleAddWork}
//       />
//       <Row className="p-4">
//         <div className="d-flex justify-content-between align-items-center w-100 mb-3">
//           <h2>Our Works</h2>
//           <Button onClick={() => setShowAddModal(true)}>Add New</Button>
//         </div>
//         {worksList.map((work) => (
//           <Col md={4} className="mb-4" key={work.id}>
//             <Card
//               className="work-card h-100"
//               onClick={() => navigate(`/works/${work.id}`)}
//               style={{ cursor: "pointer" }}
//             >
//               <div className="work-img-container">
//                 <Card.Img variant="top" src={work.img} />
//                 <div className="hover-overlay">
//                   <h5 className="hover-title">{work.title}</h5>
//                   <p className="hover-description">{work.description}</p>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </>
//   )
// }

import { useEffect, useState } from "react"
import axios from "axios"
import { Row, Col, Card, Button } from "react-bootstrap"
import AddWork from "./AddWork"
import { Link } from "react-router-dom" // Import Link
import "./Works.css"

export default function Works() {
  const [worksList, setWorksList] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [editWork, setEditWork] = useState(null)

  const isAdmin = localStorage.getItem("isAdmin") === "true"

  useEffect(() => {
    fetchWorks()
  }, [])

  const fetchWorks = () => {
    axios.get("http://localhost/my-admin-backend/getworks.php").then((res) => {
      setWorksList(res.data.reverse())
    })
  }

  const handleAddWork = (newWork) => {
    setWorksList([newWork, ...worksList])
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this work?")) return

    try {
      const formData = new URLSearchParams()
      formData.append("id", id)

      const res = await axios.post(
        "http://localhost/my-admin-backend/deletework.php",
        formData
      )

      if (res.data.status === "success") {
        setWorksList(worksList.filter((work) => work.id !== id))
      } else {
        alert("Failed to delete work from server.")
      }
    } catch (err) {
      alert("Failed to delete work.")
      console.error(err)
    }
  }

  const handleEdit = (work) => {
    setEditWork(work)
    setShowAddModal(true)
  }

  return (
    <>
      <AddWork
        show={showAddModal}
        handleClose={() => {
          setShowAddModal(false)
          setEditWork(null)
        }}
        onAdd={handleAddWork}
        editingWork={editWork}
        onUpdate={(updatedWork) => {
          const updatedList = worksList.map((w) =>
            w.id === updatedWork.id ? updatedWork : w
          )
          setWorksList(updatedList)
          setEditWork(null)
        }}
      />

      <Row className="p-4">
        <div className="d-flex justify-content-between align-items-center w-100 mb-3">
          <h2>Our Works</h2>
          {isAdmin && (
            <Button onClick={() => setShowAddModal(true)}>Add New</Button>
          )}
        </div>

        {worksList.map((work) => (
          <Col md={4} className="mb-4" key={work.id}>
            <Card className="work-card h-100">
              <div className="work-img-container">
                <Card.Img
                  variant="top"
                  src={`http://localhost/my-admin-backend/uploads/${work.image}`}
                />
                <div className="hover-overlay">
                  <Link to={`/workdetails/${work.id}`} className="hover-title">
                    <h5>{work.title}</h5>
                  </Link>
                  <p className="hover-description">{work.description}</p>

                  {isAdmin && (
                    <div className="mt-2">
                      <Button
                        size="sm"
                        variant="warning"
                        className="me-2"
                        onClick={() => handleEdit(work)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(work.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
