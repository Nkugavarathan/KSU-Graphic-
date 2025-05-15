// server/middleware/authMiddleware.js
const jwt = require("jsonwebtoken")

const protect = (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, token missing" })
  }

  const token = auth.split(" ")[1]
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.admin = decoded
    next()
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" })
  }
}

module.exports = protect
