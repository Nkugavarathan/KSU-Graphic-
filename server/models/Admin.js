import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, // Store hashed password ideally
})

export default mongoose.model("Admin", adminSchema)
