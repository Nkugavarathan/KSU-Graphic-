// server/controllers/adminController.js
const Admin = require("../models/Admin")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" })
}

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body

  try {
    const admin = await Admin.findOne({ username })
    if (!admin)
      return res.status(401).json({ message: "Invalid username or password" })

    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch)
      return res.status(401).json({ message: "Invalid username or password" })

    const token = createToken(admin._id)
    res.json({ token })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Optional: register route (only for setup once)
exports.registerAdmin = async (req, res) => {
  const { username, password } = req.body
  try {
    const hashed = await bcrypt.hash(password, 10)
    const admin = await Admin.create({ username, password: hashed })
    res.status(201).json(admin)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
