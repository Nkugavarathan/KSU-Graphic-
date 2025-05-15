// server/controllers/workController.js
const Work = require("../models/Work")

exports.createWork = async (req, res) => {
  const { title, description, image } = req.body
  try {
    const newWork = await Work.create({ title, description, image })
    res.status(201).json(newWork)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.getAllWorks = async (req, res) => {
  try {
    const works = await Work.find().sort({ createdAt: -1 })
    res.json(works)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
