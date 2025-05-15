// server/routes/adminRoutes.js
const express = require("express")
const { loginAdmin, registerAdmin } = require("../controllers/adminController")

const router = express.Router()

// Setup-only: Remove registerAdmin after first use
router.post("/register", registerAdmin)
router.post("/login", loginAdmin)

module.exports = router
