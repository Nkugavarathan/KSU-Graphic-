const express = require("express")
const router = express.Router()

router.post("/login", (req, res) => {
  const { username, password } = req.body

  if (username === "admin" && password === "123456") {
    return res.json({ success: true })
  }

  res.json({ success: false })
})

module.exports = router
