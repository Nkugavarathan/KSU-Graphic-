// server/server.js
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const adminRoutes = require("./routes/adminRoutes")
const workRoutes = require("./routes/workRoutes")

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/admin", adminRoutes)
app.use("/api/works", workRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on port ${process.env.PORT}`)
    })
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err))
