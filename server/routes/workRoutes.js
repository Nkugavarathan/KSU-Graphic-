// server/routes/workRoutes.js
const express = require("express")
const { createWork, getAllWorks } = require("../controllers/workController")
const protect = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/", getAllWorks)
router.post("/add", protect, createWork)

module.exports = router
