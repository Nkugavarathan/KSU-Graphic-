
const express = require("express")
const router = express.Router()
const Work = require("../models/Work")

router.get("/", async (req, res) => {
  const works = await Work.find()
  res.json(works)
})

router.post("/", async (req, res) => {
  const newWork = new Work(req.body)
  await newWork.save()
  res.json(newWork)
})

router.put("/:id", async (req, res) => {
  const updated = await Work.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updated)
})

module.exports = router
