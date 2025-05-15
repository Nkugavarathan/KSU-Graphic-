// import { useState, useEffect } from "react"
// import axios from "axios"
// import { Modal, Button, Form } from "react-bootstrap"

// export default function AddWork({
//   show,
//   handleClose,
//   onAdd,
//   editingWork,
//   onUpdate,
// }) {
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [image, setImage] = useState(null)
//   const [imageURL, setImageURL] = useState("")
//   const [isUploading, setIsUploading] = useState(false)

//   useEffect(() => {
//     if (editingWork) {
//       setTitle(editingWork.title)
//       setDescription(editingWork.description)
//       setImage(null)
//       setImageURL(
//         `https://ksugraphicmyadmin.infinityfreeapp.com/uploads/${editingWork.image}`
//       )
//     } else {
//       setTitle("")
//       setDescription("")
//       setImage(null)
//       setImageURL("")
//     }
//   }, [editingWork])

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setImage(file)
//       setImageURL(URL.createObjectURL(file))
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!title || !description) {
//       alert("Please provide a title and description.")
//       return
//     }

//     const formData = new FormData()
//     formData.append("title", title)
//     formData.append("description", description)
//     if (image) formData.append("image", image)

//     try {
//       setIsUploading(true)

//       let url = "https://ksugraphicmyadmin.infinityfreeapp.com/addwork.php"
//       if (editingWork) {
//         url = "https://ksugraphicmyadmin.infinityfreeapp.com/editwork.php"
//         formData.append("id", editingWork.id)
//         formData.append("oldImage", editingWork.image) // optional: to remove old image
//       }

//       const response = await axios.post(url, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       })

//       if (response.data.status === "success") {
//         const updatedWork = {
//           id: editingWork ? editingWork.id : response.data.id,
//           title,
//           description,
//           image: response.data.image || editingWork?.image,
//         }

//         editingWork ? onUpdate(updatedWork) : onAdd(updatedWork)

//         // Reset form
//         setTitle("")
//         setDescription("")
//         setImage(null)
//         setImageURL("")
//         handleClose()
//       } else {
//         alert(response.data.message || "Something went wrong.")
//       }
//     } catch (error) {
//       console.error("Error submitting work:", error)
//       alert("Failed to upload. Try again.")
//     } finally {
//       setIsUploading(false)
//     }
//   }

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{editingWork ? "Edit Work" : "Add New Work"}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter work title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter work description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Image</Form.Label>
//             <Form.Control
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//             />
//             {imageURL && (
//               <img
//                 src={imageURL}
//                 alt="Preview"
//                 style={{ width: "100px", marginTop: "10px" }}
//               />
//             )}
//           </Form.Group>

//           <Button variant="primary" type="submit" disabled={isUploading}>
//             {isUploading
//               ? editingWork
//                 ? "Updating..."
//                 : "Uploading..."
//               : editingWork
//               ? "Update Work"
//               : "Add Work"}
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   )
// }

import { useState } from "react"
import axios from "axios"

function AddWork() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("image", image)

    try {
      const res = await axios.post("http://localhost:5000/api/works", formData)
      alert("Work added!")
    } catch (err) {
      alert("Upload error")
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Add Work</button>
    </form>
  )
}

export default AddWork
